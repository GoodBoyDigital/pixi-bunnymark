var re=Object.create;var y=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ne=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var ge=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),pe=(e,r)=>{for(var t in r)y(e,t,{get:r[t],enumerable:!0})},ie=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of ae(r))!oe.call(e,a)&&a!==t&&y(e,a,{get:()=>r[a],enumerable:!(n=te(r,a))||n.enumerable});return e};var ve=(e,r,t)=>(t=e!=null?re(ne(e)):{},ie(r||!e||!e.__esModule?y(t,"default",{value:e,enumerable:!0}):t,e));var w=/iPhone/i,H=/iPod/i,R=/iPad/i,O=/\biOS-universal(?:.+)Mac\b/i,k=/\bAndroid(?:.+)Mobile\b/i,$=/Android/i,g=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,v=/Silk/i,s=/Windows Phone/i,j=/\bWindows(?:.+)ARM\b/i,C=/BlackBerry/i,F=/BB10/i,z=/Opera Mini/i,E=/\b(CriOS|Chrome)(?:.+)Mobile/i,D=/Mobile(?:.+)Firefox\b/i,L=function(e){return typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream>"u"};function fe(e){return function(r){return r.test(e)}}function U(e){var r={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?r={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?r.userAgent=e:e&&e.userAgent&&(r={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});var t=r.userAgent,n=t.split("[FBAN");typeof n[1]<"u"&&(t=n[0]),n=t.split("Twitter"),typeof n[1]<"u"&&(t=n[0]);var a=fe(t),o={apple:{phone:a(w)&&!a(s),ipod:a(H),tablet:!a(w)&&(a(R)||L(r))&&!a(s),universal:a(O),device:(a(w)||a(H)||a(R)||a(O)||L(r))&&!a(s)},amazon:{phone:a(g),tablet:!a(g)&&a(v),device:a(g)||a(v)},android:{phone:!a(s)&&a(g)||!a(s)&&a(k),tablet:!a(s)&&!a(g)&&!a(k)&&(a(v)||a($)),device:!a(s)&&(a(g)||a(v)||a(k)||a($))||a(/\bokhttp\b/i)},windows:{phone:a(s),tablet:a(j),device:a(s)||a(j)},other:{blackberry:a(C),blackberry10:a(F),opera:a(z),firefox:a(D),chrome:a(E),device:a(C)||a(F)||a(z)||a(D)||a(E)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var ue={grad:.9,turn:360,rad:360/(2*Math.PI)},b=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},u=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=Math.pow(10,r)),Math.round(t*e)/t+0},d=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=1),e>t?t:e>r?e:r},Y=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},W=function(e){return{r:d(e.r,0,255),g:d(e.g,0,255),b:d(e.b,0,255),a:d(e.a)}},x=function(e){return{r:u(e.r),g:u(e.g),b:u(e.b),a:u(e.a,3)}},de=/^#([0-9a-f]{3,8})$/i,m=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},Z=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=Math.max(r,t,n),i=o-Math.min(r,t,n),f=i?o===r?(t-n)/i:o===t?2+(n-r)/i:4+(r-t)/i:0;return{h:60*(f<0?f+6:f),s:o?i/o*100:0,v:o/255*100,a}},_=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var o=Math.floor(r),i=n*(1-t),f=n*(1-(r-o)*t),l=n*(1-(1-r+o)*t),c=o%6;return{r:255*[n,f,i,i,l,n][c],g:255*[l,n,n,f,i,i][c],b:255*[i,i,l,n,n,f][c],a}},V=function(e){return{h:Y(e.h),s:d(e.s,0,100),l:d(e.l,0,100),a:d(e.a)}},G=function(e){return{h:u(e.h),s:u(e.s),l:u(e.l),a:u(e.a,3)}},J=function(e){return _((t=(r=e).s,{h:r.h,s:(t*=((n=r.l)<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:r.a}));var r,t,n},p=function(e){return{h:(r=Z(e)).h,s:(a=(200-(t=r.s))*(n=r.v)/100)>0&&a<200?t*n/100/(a<=100?a:200-a)*100:0,l:a/2,a:r.a};var r,t,n,a},le=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,se=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,be=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,he=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,P={string:[[function(e){var r=de.exec(e);return r?(e=r[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?u(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?u(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var r=be.exec(e)||he.exec(e);return r?r[2]!==r[4]||r[4]!==r[6]?null:W({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):null},"rgb"],[function(e){var r=le.exec(e)||se.exec(e);if(!r)return null;var t,n,a=V({h:(t=r[1],n=r[2],n===void 0&&(n="deg"),Number(t)*(ue[n]||1)),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)});return J(a)},"hsl"]],object:[[function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=a===void 0?1:a;return b(r)&&b(t)&&b(n)?W({r:Number(r),g:Number(t),b:Number(n),a:Number(o)}):null},"rgb"],[function(e){var r=e.h,t=e.s,n=e.l,a=e.a,o=a===void 0?1:a;if(!b(r)||!b(t)||!b(n))return null;var i=V({h:Number(r),s:Number(t),l:Number(n),a:Number(o)});return J(i)},"hsl"],[function(e){var r=e.h,t=e.s,n=e.v,a=e.a,o=a===void 0?1:a;if(!b(r)||!b(t)||!b(n))return null;var i=function(f){return{h:Y(f.h),s:d(f.s,0,100),v:d(f.v,0,100),a:d(f.a)}}({h:Number(r),s:Number(t),v:Number(n),a:Number(o)});return _(i)},"hsv"]]},K=function(e,r){for(var t=0;t<r.length;t++){var n=r[t][0](e);if(n)return[n,r[t][1]]}return[null,void 0]},ce=function(e){return typeof e=="string"?K(e.trim(),P.string):typeof e=="object"&&e!==null?K(e,P.object):[null,void 0]};var M=function(e,r){var t=p(e);return{h:t.h,s:d(t.s+100*r,0,100),l:t.l,a:t.a}},N=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Q=function(e,r){var t=p(e);return{h:t.h,s:t.s,l:d(t.l+100*r,0,100),a:t.a}},A=function(){function e(r){this.parsed=ce(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return u(N(this.rgba),2)},e.prototype.isDark=function(){return N(this.rgba)<.5},e.prototype.isLight=function(){return N(this.rgba)>=.5},e.prototype.toHex=function(){return r=x(this.rgba),t=r.r,n=r.g,a=r.b,i=(o=r.a)<1?m(u(255*o)):"","#"+m(t)+m(n)+m(a)+i;var r,t,n,a,o,i},e.prototype.toRgb=function(){return x(this.rgba)},e.prototype.toRgbString=function(){return r=x(this.rgba),t=r.r,n=r.g,a=r.b,(o=r.a)<1?"rgba("+t+", "+n+", "+a+", "+o+")":"rgb("+t+", "+n+", "+a+")";var r,t,n,a,o},e.prototype.toHsl=function(){return G(p(this.rgba))},e.prototype.toHslString=function(){return r=G(p(this.rgba)),t=r.h,n=r.s,a=r.l,(o=r.a)<1?"hsla("+t+", "+n+"%, "+a+"%, "+o+")":"hsl("+t+", "+n+"%, "+a+"%)";var r,t,n,a,o},e.prototype.toHsv=function(){return r=Z(this.rgba),{h:u(r.h),s:u(r.s),v:u(r.v),a:u(r.a,3)};var r},e.prototype.invert=function(){return h({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},e.prototype.saturate=function(r){return r===void 0&&(r=.1),h(M(this.rgba,r))},e.prototype.desaturate=function(r){return r===void 0&&(r=.1),h(M(this.rgba,-r))},e.prototype.grayscale=function(){return h(M(this.rgba,-1))},e.prototype.lighten=function(r){return r===void 0&&(r=.1),h(Q(this.rgba,r))},e.prototype.darken=function(r){return r===void 0&&(r=.1),h(Q(this.rgba,-r))},e.prototype.rotate=function(r){return r===void 0&&(r=15),this.hue(this.hue()+r)},e.prototype.alpha=function(r){return typeof r=="number"?h({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):u(this.rgba.a,3);var t},e.prototype.hue=function(r){var t=p(this.rgba);return typeof r=="number"?h({h:r,s:t.s,l:t.l,a:t.a}):u(t.h)},e.prototype.isEqual=function(r){return this.toHex()===h(r).toHex()},e}(),h=function(e){return e instanceof A?e:new A(e)},X=[],Me=function(e){e.forEach(function(r){X.indexOf(r)<0&&(r(A,P),X.push(r))})};function Pe(e,r){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var a in t)n[t[a]]=a;var o={};e.prototype.toName=function(i){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var f,l,c=n[this.toHex()];if(c)return c;if(i?.closest){var ee=this.toRgb(),I=1/0,T="black";if(!o.length)for(var S in t)o[S]=new e(t[S]).toRgb();for(var q in t){var B=(f=ee,l=o[q],Math.pow(f.r-l.r,2)+Math.pow(f.g-l.g,2)+Math.pow(f.b-l.b,2));B<I&&(I=B,T=q)}return T}},r.string.push([function(i){var f=i.toLowerCase(),l=f==="transparent"?"#0000":t[f];return l?new e(l).toRgb():null},"name"])}export{ge as a,pe as b,ve as c,U as d,h as e,Me as f,Pe as g};
