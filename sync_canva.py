#!/usr/bin/env python3
import http.server
import os
import re
import socketserver
import subprocess
import threading
import urllib.request
from concurrent.futures import ThreadPoolExecutor

CANVA_URL = "https://xn--mi-cumpleaos-ediwin-matas-wlc8g.my.canva.site/prototipo"
BASE_ASSET_URL = CANVA_URL.rstrip("/") + "/"
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))


def fetch_html(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8")


def transform_html(html: str) -> str:
    html = html.replace('<base href="/prototipo/">', '<base href="./">')
    html = html.replace("<title>Especiales</title>", "<title>El Paladar</title>")
    html = html.replace('content="Especiales"', 'content="El Paladar"')
    html = re.sub(r'\s+crossorigin="anonymous"', "", html)
    html = re.sub(r'\s+integrity="[^"]+"', "", html)
    # Switch from PRESENTATION ("A?":"C") to SCROLLING ("A?":"A","e":false,"f":false)
    html = html.replace(
        '"Z":{"A?":"C","M":"es-MX"',
        '"Z":{"A?":"A","e":false,"f":false,"M":"es-MX"',
    )
    return html


def download_asset(rel_path: str) -> None:
    dest = os.path.join(ROOT_DIR, rel_path)
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    subprocess.run(
        ["curl", "-sL", "--retry", "3", "-m", "20", BASE_ASSET_URL + rel_path, "-o", dest],
        check=False,
    )


def main() -> None:
    print(f"Fetching {CANVA_URL}...")
    html = fetch_html(CANVA_URL)
    if "window['bootstrap']" not in html:
        raise RuntimeError("Invalid Canva HTML response (bootstrap missing).")

    cleaned = transform_html(html)
    index_path = os.path.join(ROOT_DIR, "index.html")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(cleaned)

    assets = sorted(set(re.findall(r"_assets/[a-zA-Z0-9_./-]+", cleaned)))
    print(f"Checking {len(assets)} direct assets...")
    with ThreadPoolExecutor(max_workers=8) as ex:
        list(ex.map(download_asset, assets))

    # Discover any lazy-loaded JS chunks via headless Chrome if available
    requested_404s = set()

    class TrackingHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=ROOT_DIR, **kwargs)

        def send_error(self, code, message=None, explain=None):
            if code == 404 and self.path.startswith("/_assets/"):
                requested_404s.add(self.path.lstrip("/").split("?")[0])
            super().send_error(code, message, explain)

        def log_message(self, format, *args):
            pass

    try:
        with socketserver.TCPServer(("127.0.0.1", 0), TrackingHandler) as httpd:
            port = httpd.server_address[1]
            thread = threading.Thread(target=httpd.serve_forever, daemon=True)
            thread.start()

            for _ in range(4):
                requested_404s.clear()
                subprocess.run(
                    [
                        "google-chrome",
                        "--headless",
                        "--no-sandbox",
                        "--disable-gpu",
                        "--virtual-time-budget=4000",
                        "--dump-dom",
                        f"http://127.0.0.1:{port}",
                    ],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                    timeout=15,
                )
                if not requested_404s:
                    break
                print(f"Downloading {len(requested_404s)} dynamic chunks...")
                with ThreadPoolExecutor(max_workers=8) as ex:
                    list(ex.map(download_asset, sorted(requested_404s)))
            httpd.shutdown()
    except Exception as e:
        print(f"Headless chunk check skipped/finished: {e}")

    print("Sync complete!")


if __name__ == "__main__":
    main()
