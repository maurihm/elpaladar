(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[59427],{

/***/ 479824:
function(_,__,__webpack_require__){__webpack_require__.n_x=__webpack_require__.n;const __web_req__=__webpack_require__;__web_req__(368105);globalThis._5f74ec40302898c5a55451c9fbd04240=globalThis._5f74ec40302898c5a55451c9fbd04240||{};(function(__c){var RZd;RZd=function(a,b){if(a===""||b.length===0)return[];var c=[],d=0;for(let e of b)b=a.slice(d,d+e),c.push(b),d+=e;return c};
__c.ZY=class{Dg({store:a,text:b,nb:c,textAlign:d,constraint:e,yO:f}){var g=__c.aya({fontFamily:a.uu,fontSize:a.fontSize,fontWeight:a.fontWeight,fontStyle:a.fontStyle},b);d={fontSize:a.fontSize,fontFamily:a.Zi,fontWeight:a.fontWeight,textAlign:d,textBaseline:"alphabetic"};a=this.Lb.N.oN(a.tb.config.ref)?.web()??!1;if(c==null||b!==""&&c.length===0||a){switch(e.type){case "size":c=e.maxWidth;break;case "aspectRatio":c=this.Qa.measureText({text:b,...d});if(c.width/c.height<=e.fNb)return{lines:[b],Dg:[c],
lineHeight:c.fontBoundingBoxAscent+c.fontBoundingBoxDescent};c=Math.sqrt(c.width*c.height*e.nZb);break;default:throw new __c.F(e);}c=this.Lb.text.qS(g,c)}g=c.length;if(g===0)return{lines:[],Dg:[],lineHeight:0};b=g>1?RZd(b,c):[b];f=f?__c.$xa(b):b.map(l=>l.trimEnd());c=this.Qa.jC({Mr:f,...d});a=c[0].fontBoundingBoxAscent+c[0].fontBoundingBoxDescent;if(e.type!=="size"||e.maxHeight==null||g===1||a*g<=e.maxHeight)return{lines:f,Dg:c,lineHeight:a};g=Math.max(0,Math.floor(e.maxHeight/a)-1);var {text:h,...k}=
this.Qa.Ah({text:`${b[g]}${f[g+1]}`,...d,maxWidth:e.maxWidth});return{lines:[...f.slice(0,g),h],Dg:[...c.slice(0,g),k],lineHeight:a}}constructor(a,b){this.Qa=a;this.Lb=b}};
}).call(globalThis,globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/f48dc4c3941d421f.js.map