(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[91267],{

/***/ 296287:
function(_,__,__webpack_require__){__webpack_require__.n_x=__webpack_require__.n;const __web_req__=__webpack_require__;__web_req__(368105);globalThis._5f74ec40302898c5a55451c9fbd04240=globalThis._5f74ec40302898c5a55451c9fbd04240||{};(function(__c){var w3d=__webpack_require__(373126).EW;__c.x_=class{static D(a){__c.L(a,{$z:w3d,lba:w3d,step:w3d})}get kind(){return"band"}clone({Ac:a=this.Ac,qd:b=this.qd,El:c=this.El,nf:d=this.nf}){return new __c.x_({Ac:a,qd:b,El:c,nf:d})}get(a){var b=this.Ac().indexOf(a);__c.u(b!==-1,`value ${a} must exist in domain`);var [c,d]=this.qd();return c+b*this.step*Math.sign(d-c)}get $z(){var [a,b]=this.qd(),c=Math.abs(b-a),d=this.Ac();if(d.length<=1)return c;var e=this.El(),f=(1-e)*d.length;return f/(f+e*(d.length-1))*c/d.length}get lba(){var a=this.Ac();
if(a.length<=1)return 0;var [b,c]=this.qd(),d=this.El(),e=d*(a.length-1);return e/((1-d)*a.length+e)*Math.abs(c-b)/(a.length-1)}get step(){return this.$z+this.lba}o8(a,b,c){__c.u(a.index!==b.index);var d=this.El(),e=b.index-a.index,f=b.index-a.index,g=(1-d)*e;d*=f;e=g/(g+d)*(b.center-a.center)/e;f=e+d/(g+d)*(b.center-a.center)/f;return[a.center-e/2-f*a.index,b.center+e/2+f*(c-b.index-1)]}n8(a,b,c){var d=this.El(),e=.5+a.index,f=(1-d)*e;e=f/(f+d*a.index)*(a.center-b)/e;return[b,a.center+e/2+(e+e/(1-
d)*d)*(c-a.index-1)]}m8(a,b,c){var d=this.El(),e=.5+c-a.index-1,f=(1-d)*e;c=f/(f+d*(c-a.index-1))*(b-a.center)/e;return[a.center-c/2-(c+c/(1-d)*d)*a.index,b]}constructor({Ac:a,qd:b,El:c,nf:d}){__c.x_.D(this);this.Ac=a;this.qd=b;this.El=c;this.nf=d}};
}).call(globalThis,globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/3bbccac58dbcbeef.js.map