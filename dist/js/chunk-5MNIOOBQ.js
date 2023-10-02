import{A as Wn,B as $,D as ae,G as le,H as Hn,I as A,J as On,K as Vn,L as $n,M as zt,N as Nn,O as Vr,P as Ze,Q as Wt,R as qe,S as jn,a as $o,b as No,c as Se,e as g,f as An,g as Y,h as K,i as E,j as I,k as J,l as Q,m as Dt,n as G,o as ie,p as he,q as Gn,r as It,s as oe,t as Ln,u as En,v as Dn,w as In,x as zn,y as se}from"./chunk-P6I444PJ.js";var gi=$o((Dl,Qr)=>{"use strict";Qr.exports=Yt;Qr.exports.default=Yt;function Yt(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,o=fi(r,0,i,t,!0),s=[];if(!o||o.next===o.prev)return s;var a,l,c,u,d,m,h;if(n&&(o=as(r,e,o,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(var f=t;f<i;f+=t)d=r[f],m=r[f+1],d<a&&(a=d),m<l&&(l=m),d>c&&(c=d),m>u&&(u=m);h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return st(o,s,t,a,l,h,0),s}function fi(r,e,t,n,i){var o,s;if(i===Jr(r,e,t,n)>0)for(o=e;o<t;o+=n)s=hi(o,r[o],r[o+1],s);else for(o=t-n;o>=e;o-=n)s=hi(o,r[o],r[o+1],s);return s&&Xt(s,s.next)&&(lt(s),s=s.next),s}function Be(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Xt(t,t.next)||W(t.prev,t,t.next)===0)){if(lt(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function st(r,e,t,n,i,o,s){if(!!r){!s&&o&&hs(r,n,i,o);for(var a=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,o?is(r,n,i,o):ns(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),lt(r),r=c.next,a=c.next;continue}if(r=c,r===a){s?s===1?(r=os(Be(r),e,t),st(r,e,t,n,i,o,2)):s===2&&ss(r,e,t,n,i,o):st(Be(r),e,t,n,i,o,1);break}}}}function ns(r){var e=r.prev,t=r,n=r.next;if(W(e,t,n)>=0)return!1;for(var i=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=i<o?i<s?i:s:o<s?o:s,d=a<l?a<c?a:c:l<c?l:c,m=i>o?i>s?i:s:o>s?o:s,h=a>l?a>c?a:c:l>c?l:c,f=n.next;f!==e;){if(f.x>=u&&f.x<=m&&f.y>=d&&f.y<=h&&Le(i,a,o,l,s,c,f.x,f.y)&&W(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function is(r,e,t,n){var i=r.prev,o=r,s=r.next;if(W(i,o,s)>=0)return!1;for(var a=i.x,l=o.x,c=s.x,u=i.y,d=o.y,m=s.y,h=a<l?a<c?a:c:l<c?l:c,f=u<d?u<m?u:m:d<m?d:m,b=a>l?a>c?a:c:l>c?l:c,p=u>d?u>m?u:m:d>m?d:m,y=Zr(h,f,e,t,n),_=Zr(b,p,e,t,n),v=r.prevZ,x=r.nextZ;v&&v.z>=y&&x&&x.z<=_;){if(v.x>=h&&v.x<=b&&v.y>=f&&v.y<=p&&v!==i&&v!==s&&Le(a,u,l,d,c,m,v.x,v.y)&&W(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=h&&x.x<=b&&x.y>=f&&x.y<=p&&x!==i&&x!==s&&Le(a,u,l,d,c,m,x.x,x.y)&&W(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=y;){if(v.x>=h&&v.x<=b&&v.y>=f&&v.y<=p&&v!==i&&v!==s&&Le(a,u,l,d,c,m,v.x,v.y)&&W(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=h&&x.x<=b&&x.y>=f&&x.y<=p&&x!==i&&x!==s&&Le(a,u,l,d,c,m,x.x,x.y)&&W(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function os(r,e,t){var n=r;do{var i=n.prev,o=n.next.next;!Xt(i,o)&&pi(i,n,n.next,o)&&at(i,o)&&at(o,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),lt(n),lt(n.next),n=r=o),n=n.next}while(n!==r);return Be(n)}function ss(r,e,t,n,i,o){var s=r;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&ms(s,a)){var l=mi(s,a);s=Be(s,s.next),l=Be(l,l.next),st(s,e,t,n,i,o,0),st(l,e,t,n,i,o,0);return}a=a.next}s=s.next}while(s!==r)}function as(r,e,t,n){var i=[],o,s,a,l,c;for(o=0,s=e.length;o<s;o++)a=e[o]*n,l=o<s-1?e[o+1]*n:r.length,c=fi(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ps(c));for(i.sort(ls),o=0;o<i.length;o++)t=cs(i[o],t);return t}function ls(r,e){return r.x-e.x}function cs(r,e){var t=us(r,e);if(!t)return e;var n=mi(t,r);return Be(n,n.next),Be(t,t.next)}function us(r,e){var t=e,n=r.x,i=r.y,o=-1/0,s;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>o&&(o=a,s=t.x<t.next.x?t:t.next,a===n))return s}t=t.next}while(t!==e);if(!s)return null;var l=s,c=s.x,u=s.y,d=1/0,m;t=s;do n>=t.x&&t.x>=c&&n!==t.x&&Le(i<u?n:o,i,c,u,i<u?o:n,i,t.x,t.y)&&(m=Math.abs(i-t.y)/(n-t.x),at(t,r)&&(m<d||m===d&&(t.x>s.x||t.x===s.x&&ds(s,t)))&&(s=t,d=m)),t=t.next;while(t!==l);return s}function ds(r,e){return W(r.prev,r,e.prev)<0&&W(e.next,r,r.next)<0}function hs(r,e,t,n){var i=r;do i.z===0&&(i.z=Zr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,fs(i)}function fs(r){var e,t,n,i,o,s,a,l,c=1;do{for(t=r,r=null,o=null,s=0;t;){for(s++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:r=i,i.prevZ=o,o=i;t=n}o.nextZ=null,c*=2}while(s>1);return r}function Zr(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function ps(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Le(r,e,t,n,i,o,s,a){return(i-s)*(e-a)>=(r-s)*(o-a)&&(r-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(i-s)*(n-a)}function ms(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!gs(r,e)&&(at(r,e)&&at(e,r)&&xs(r,e)&&(W(r.prev,r,e.prev)||W(r,e.prev,e))||Xt(r,e)&&W(r.prev,r,r.next)>0&&W(e.prev,e,e.next)>0)}function W(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Xt(r,e){return r.x===e.x&&r.y===e.y}function pi(r,e,t,n){var i=Kt(W(r,e,t)),o=Kt(W(r,e,n)),s=Kt(W(t,n,r)),a=Kt(W(t,n,e));return!!(i!==o&&s!==a||i===0&&jt(r,t,e)||o===0&&jt(r,n,e)||s===0&&jt(t,r,n)||a===0&&jt(t,e,n))}function jt(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Kt(r){return r>0?1:r<0?-1:0}function gs(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&pi(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function at(r,e){return W(r.prev,r,r.next)<0?W(r,e,r.next)>=0&&W(r,r.prev,e)>=0:W(r,e,r.prev)<0||W(r,r.next,e)<0}function xs(r,e){var t=r,n=!1,i=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function mi(r,e){var t=new qr(r.i,r.x,r.y),n=new qr(e.i,e.x,e.y),i=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function hi(r,e,t,n){var i=new qr(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lt(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qr(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Yt.deviation=function(r,e,t,n){var i=e&&e.length,o=i?e[0]*t:r.length,s=Math.abs(Jr(r,0,o,t));if(i)for(var a=0,l=e.length;a<l;a++){var c=e[a]*t,u=a<l-1?e[a+1]*t:r.length;s-=Math.abs(Jr(r,c,u,t))}var d=0;for(a=0;a<n.length;a+=3){var m=n[a]*t,h=n[a+1]*t,f=n[a+2]*t;d+=Math.abs((r[m]-r[f])*(r[h+1]-r[m+1])-(r[m]-r[h])*(r[f+1]-r[m+1]))}return s===0&&d===0?0:Math.abs((d-s)/s)};function Jr(r,e,t,n){for(var i=0,o=e,s=t-n;o<t;o+=n)i+=(r[s]-r[o])*(r[o+1]+r[s+1]),s=o;return i}Yt.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var o=0;o<r[i].length;o++)for(var s=0;s<e;s++)t.vertices.push(r[i][o][s]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t}});var Re=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r))(Re||{});var Ht=class{constructor(e){this.items=[],this._name=e}emit(e,t,n,i,o,s,a,l){let{name:c,items:u}=this;for(let d=0,m=u.length;d<m;d++)u[d][c](e,t,n,i,o,s,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){let t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}};var jo=["init","destroy","contextChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Kn=class{constructor(e){this.runners=Object.create(null),this.renderPipes=Object.create(null),this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name;let t=[...jo,...e.runners??[]];this._addRunners(...t),this._addSystems(e.systems),this._addPipes(e.renderPipes,e.renderPipeAdaptors)}async init(e={}){for(let t in this._systemsHash)e={...this._systemsHash[t].constructor.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let t=0;t<this.runners.init.items.length;t++)await this.runners.init.items[t].init(e)}render(e,t){let n=e;if(n instanceof se&&(n={container:n},t&&(Q(J,"passing a second argument is deprecated, please use render options instead"),n.target=t.renderTexture)),n.target||(n.target=this.view.texture),n.target===this.view.texture&&(this._lastObjectRendered=n.container),n.clearColor){let i=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=i?n.clearColor:K.shared.setValue(n.clearColor).toArray()}this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,t,n){this.view.resize(e,t,n)}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e}get width(){return this.view.texture.frameWidth}get height(){return this.view.texture.frameHeight}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new Ht(t)})}_addSystems(e){let t;for(t in e){let n=e[t];this._addSystem(n.value,n.name)}}_addSystem(e,t){let n=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=n,this._systemsHash[t]=n;for(let i in this.runners)this.runners[i].add(n);return this}_addPipes(e,t){let n=t.reduce((i,o)=>(i[o.name]=o.value,i),{});e.forEach(i=>{let o=i.value,s=i.name,a=n[s];this.renderPipes[s]=new o(this,a?new a:null)})}destroy(e=!1){let t=this;this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(n=>{n.destroy()}),t.runners=null,this._systemsHash=null,t.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}};var Je=class{constructor(e){this._renderer=e}push(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({type:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({type:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this._renderer.filter.push(e):e.action==="popFilter"&&this._renderer.filter.pop()}destroy(){this._renderer=null}};Je.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"filter"};var q=class{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(let n in e){let i=e[n];this.setResource(i,t++)}this.updateKey()}update(){this.updateKey()}updateKey(){if(!this._dirty)return;this._dirty=!1;let e=[],t=0;for(let n in this.resources)e[t++]=this.resources[n].resourceId;this.key=e.join("|")}setResource(e,t){let n=this.resources[t];e!==n&&(n&&e.off?.("change",this.onResourceChange,this),e.on?.("change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}touch(e){let t=this.resources;for(let n in t)t[n].touched=e}destroy(){let e=this.resources;for(let t in e)e[t].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(){this._dirty=!0,this.update()}};var X=class extends Y{constructor({data:e,size:t,usage:n,label:i}){super(),this.resourceType="buffer",this.resourceId=I("bufferResource"),this.touched=0,this.uid=I("buffer"),this._updateID=1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,t=t??e?.byteLength;let o=!!e;this.descriptor={size:t,usage:n,mappedAtCreation:o,label:i}}get data(){return this._data}set data(e){if(this._data!==e){let t=this._data;this._data=e,t.length!==e.length?(this.descriptor.size=e.byteLength,this.resourceId=I("bufferResource"),this.emit("change",this)):this.emit("update",this)}}update(e){this._updateSize=e||this.descriptor.size,this._updateID++,this.emit("update",this)}destroy(){this.emit("destroy",this),this._data=null,this.descriptor=null,this.removeAllListeners()}};var z=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(z||{});function $r(r,e){if(!(r instanceof X)){let t=e?z.INDEX:z.VERTEX;r instanceof Array&&(e?(r=new Uint32Array(r),t=z.INDEX|z.COPY_DST):(r=new Float32Array(r),t=z.VERTEX|z.COPY_DST)),r=new X({data:r,label:"index-mesh-buffer",usage:t})}return r}var fe=class extends Y{constructor({attributes:e,indexBuffer:t,topology:n}){super(),this.uid=I("geometry"),this._layoutKey=0,this.attributes=e,this.buffers=[];for(let i in e){let o=e[i];o.buffer=$r(o.buffer,!1),this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this))}t&&(this.indexBuffer=$r(t,!0),this.buffers.push(this.indexBuffer)),this.topology=n||"triangle-list"}onBufferUpdate(){this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(let e in this.attributes){let t=this.attributes[e];return this.getBuffer(e).data.length/(t.stride/4||t.size)}return 0}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null}};function Yn(r,e){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Xn=class{constructor(r,e){this.touched=0,this.uid=I("uniform"),this.resourceType="uniformGroup",this.resourceId=this.uid,this.isUniformGroup=!0,this.dirtyId=0,e={...Xn.DEFAULT,...e},this.uniformStructures=r;let t={};for(let n in r){let i=r[n];i.name=n,i.size=i.size??1,i.value??(i.value=Yn(i.type,i.size)),t[n]=i.value}this.uniforms=t,this.dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this.signature=Object.keys(t).map(n=>`${n}-${r[n].type}`).join("-")}update(){this.dirtyId++}},N=Xn;N.DEFAULT={ubo:!1,isStatic:!1};function ce(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}var Ko=0,Nr=class{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,n){let i=new le({...this.textureOptions,width:e,height:t,resolution:1,antialias:n});return new A({source:i,label:`texturePool_${Ko++}`})}getOptimalTexture(e,t,n=1,i){let o=Math.ceil(e*n-1e-6),s=Math.ceil(t*n-1e-6);o=ce(o),s=ce(s);let a=(o<<17)+(s<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(o,s,i)),l.source._resolution=n,l.source.width=o/n,l.source.height=s/n,l.source.pixelWidth=o,l.source.pixelHeight=s,l.frameX=0,l.frameY=0,l.frameWidth=e,l.frameHeight=t,l.layout.update(),this._poolKeyHash[l.id]=a,l}getSameSizeTexture(e,t=!1){let n=e.source;return this.getOptimalTexture(e.width,e.height,n._resolution,t)}returnTexture(e){let t=this._poolKeyHash[e.id];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(let t in this._texturePool){let n=this._texturePool[t];if(n)for(let i=0;i<n.length;i++)n[i].destroy(!0)}this._texturePool={}}},j=new Nr;function Zn(r,e){e.clear();let t=e.matrix;for(let n=0;n<r.length;n++){let i=r[n];i.layerVisibleRenderable<3||(e.matrix=i.worldTransform,i.view.addBounds(e))}return e.matrix=t,e}var Yo=new fe({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),shaderLocation:0,format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])}),Qe=class{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new N({inputSize:{value:new Float32Array(4),type:"vec4<f32>"},inputPixel:{value:new Float32Array(4),type:"vec4<f32>"},inputClamp:{value:new Float32Array(4),type:"vec4<f32>"},outputFrame:{value:new Float32Array(4),type:"vec4<f32>"},globalFrame:{value:new Float32Array(4),type:"vec4<f32>"},outputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new q({}),this.renderer=e}push(e){let t=this.renderer,n=e.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());let i=this._filterStack[this._filterStackIndex];this._filterStackIndex++;let o=i.bounds;if(e.renderables?Zn(e.renderables,o):It(e.container,!0,o),n.length===0){i.skip=!0;return}let s=t.renderTarget.rootRenderTarget.colorTexture.source._resolution,a=0,l=t.renderTarget.rootRenderTarget.colorTexture.source.antialias,c=!1,u=!1;for(let d=0;d<n.length;d++){let m=n[d];if(s=Math.min(s,m.resolution),a+=m.padding,m.antialias!=="inherit"&&(m.antialias==="on"?l=!0:l=!1),!!!(m.compatibleRenderers&t.type)){u=!1;break}if(m.blendRequired&&!(t.backBuffer?.useBackBuffer??!0)){oe("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),u=!1;break}u=m.enabled||u,c=c||m.blendRequired}if(!u){i.skip=!0;return}if(o.scale(s).fit(t.renderTarget.rootRenderTarget.viewport).scale(1/s).pad(a).ceil(),!o.isPositive){i.skip=!0;return}i.skip=!1,i.bounds=o,i.blendRequired=c,i.container=e.container,i.filterEffect=e.filterEffect,i.previousRenderSurface=t.renderTarget.renderTarget,i.inputTexture=j.getOptimalTexture(o.width,o.height,s,l),t.renderTarget.bind(i.inputTexture,!0),t.globalUniforms.push({offset:o})}pop(){let e=this.renderer;this._filterStackIndex--;let t=this._filterStack[this._filterStackIndex];if(t.skip)return;this._activeFilterData=t;let n=t.inputTexture,i=t.bounds,o=A.EMPTY;if(e.renderTarget.finishRenderPass?.(),t.blendRequired){e.encoder.finishRenderPass();let a=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null;o=this.getBackTexture(t.previousRenderSurface,i,a)}t.backTexture=o;let s=t.filterEffect.filters;if(this._globalFilterBindGroup.setResource(n.source.style,2),this._globalFilterBindGroup.setResource(o.source,3),e.globalUniforms.pop(),s.length===1)s[0].apply(this,n,t.previousRenderSurface,!1),j.returnTexture(n);else{let a=t.inputTexture,l=j.getOptimalTexture(i.width,i.height,a.source._resolution,!1),c=0;for(c=0;c<s.length-1;++c){s[c].apply(this,a,l,!0);let d=a;a=l,l=d}s[c].apply(this,a,t.previousRenderSurface,!1),j.returnTexture(a),j.returnTexture(l)}t.blendRequired&&j.returnTexture(o)}getBackTexture(e,t,n){let i=e.colorTexture.source._resolution,o=j.getOptimalTexture(t.width,t.height,i,!1),s=t.minX,a=t.minY;n&&(s-=n.minX,a-=n.minY),s=Math.floor(s*i),a=Math.floor(a*i);let l=Math.ceil(t.width*i),c=Math.ceil(t.height*i);return this.renderer.renderTarget.copyToTexture(e,o,{x:s,y:a},{width:l,height:c}),o}applyFilter(e,t,n,i){let o=this.renderer,s=this._filterStack[this._filterStackIndex],a=s.bounds,l=Se.shared,u=s.previousRenderSurface===this.renderer.renderTarget.getRenderTarget(n),d=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;this._filterStackIndex>0&&(d=this._filterStack[this._filterStackIndex-1].inputTexture.source._resolution);let m=this._filterGlobalUniforms,h=m.uniforms,f=h.outputFrame,b=h.inputSize,p=h.inputPixel,y=h.inputClamp,_=h.globalFrame,v=h.outputTexture;u?(this._filterStackIndex>0&&(l.x=this._filterStack[this._filterStackIndex-1].bounds.minX,l.y=this._filterStack[this._filterStackIndex-1].bounds.minY),f[0]=a.minX-l.x,f[1]=a.minY-l.y):(f[0]=0,f[1]=0),f[2]=t.frameWidth,f[3]=t.frameHeight,b[0]=t.source.width,b[1]=t.source.height,b[2]=1/b[0],b[3]=1/b[1],p[0]=t.source.pixelWidth,p[1]=t.source.pixelHeight,p[2]=1/p[0],p[3]=1/p[1],y[0]=.5*p[2],y[1]=.5*p[3],y[2]=t.frameWidth*b[2]-.5*p[2],y[3]=t.frameHeight*b[3]-.5*p[3];let x=this.renderer.renderTarget.rootRenderTarget.colorTexture;_[0]=l.x*d,_[1]=l.y*d,_[2]=x.source.width*d,_[3]=x.source.height*d;let U=this.renderer.renderTarget.getRenderTarget(n);if(v[0]=U.colorTexture.frameWidth,v[1]=U.colorTexture.frameHeight,v[2]=U.isRoot?-1:1,m.update(),o.renderPipes.uniformBatch){let L=o.renderPipes.uniformBatch.getUniformBufferResource(this._filterGlobalUniforms);this._globalFilterBindGroup.setResource(L,0)}else this._globalFilterBindGroup.setResource(m,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),o.renderTarget.bind(n,!!i),e.groups[0]=this._globalFilterBindGroup,o.encoder.draw({geometry:Yo,shader:e,state:e._state,topology:"triangle-list"})}_getFilterData(){return{skip:!1,inputTexture:null,bounds:new he,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){let n=this._activeFilterData,i=e.set(n.inputTexture._source.width,0,0,n.inputTexture._source.height,n.bounds.minX,n.bounds.minY),o=t.worldTransform.copyTo(E.shared);return o.invert(),i.prepend(o),i.scale(1/t.texture.frameWidth,1/t.texture.frameHeight),i.translate(t.anchor.x,t.anchor.y),i}};Qe.extension={type:[g.WebGLSystem,g.WebGPUSystem],name:"filter"};function Ot(r,e){let t=r.instructionSet,n=t.instructions;for(let i=0;i<t.instructionSize;i++){let o=n[i];e[o.type].execute(o)}}var et=class{constructor(e){this._renderer=e}addLayerGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){!e.isRenderable||(this._renderer.globalUniforms.push({projectionData:this._renderer.renderTarget.renderTarget,worldTransformMatrix:e.worldTransform,worldColor:e.worldColor}),Ot(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}};et.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"layer"};var Vt=class extends Y{constructor({original:e,view:t}){super(),this.uid=I("renderable"),this.view=t,this._original=e,this.layerTransform=new E,this.layerColor=4294967295,this.layerVisibleRenderable=3,this.view.owner=this}get layerBlendMode(){return this._original.layerBlendMode}onViewUpdate(){this.didViewUpdate=!0,this._original.layerGroup.onChildViewUpdate(this)}get isRenderable(){return this._original.isRenderable}};function qn(r,e){let t=r.root,n=r.instructionSet;n.reset(),e.batch.buildStart(n),e.blendMode.buildStart(),e.colorMask.buildStart(),t.sortableChildren&&t.sortChildren(),Jn(t,n,e,!0),e.batch.buildEnd(n),e.blendMode.buildEnd(n)}function Ue(r,e,t){r.layerVisibleRenderable<3||!r.includeInBuild||(r.sortableChildren&&r.sortChildren(),r.isSimple?Xo(r,e,t):Jn(r,e,t,!1))}function Xo(r,e,t){let n=r.view;if(n&&(t.blendMode.setBlendMode(r,r.layerBlendMode,e),r.didViewUpdate=!1,t[n.renderPipeId].addRenderable(r,e)),!r.isLayerRoot){let i=r.children,o=i.length;for(let s=0;s<o;s++)Ue(i[s],e,t)}}function Jn(r,e,t,n){if(n){let i=r.layerGroup;if(i.root.view){let o=i.proxyRenderable??Zo(i);o&&(t.blendMode.setBlendMode(o,o.layerBlendMode,e),t[o.view.renderPipeId].addRenderable(o,e))}}else for(let i=0;i<r.effects.length;i++){let o=r.effects[i];t[o.pipe].push(o,r,e)}if(!n&&r.isLayerRoot)t.layer.addLayerGroup(r.layerGroup,e);else{let i=r.view;i&&(t.blendMode.setBlendMode(r,r.layerBlendMode,e),r.didViewUpdate=!1,t[i.renderPipeId].addRenderable(r,e));let o=r.children;if(o.length)for(let s=0;s<o.length;s++)Ue(o[s],e,t)}if(!n)for(let i=r.effects.length-1;i>=0;i--){let o=r.effects[i];t[o.pipe].pop(o,r,e)}}function Zo(r){let e=r.root;r.proxyRenderable=new Vt({original:e,view:e.view})}function jr(r,e=[]){e.push(r);for(let t=0;t<r.layerGroupChildren.length;t++)jr(r.layerGroupChildren[t],e);return e}function Qn(r,e,t){let n=r>>16&255,i=r>>8&255,o=r&255,s=e>>16&255,a=e>>8&255,l=e&255,c=n+(s-n)*t,u=i+(a-i)*t,d=o+(l-o)*t;return(c<<16)+(u<<8)+d}var qo=16777215+(16777215<<32);function tt(r,e){let t=(r>>24&255)/255,n=(e>>24&255)/255,i=t*n*255,o=r&16777215,s=e&16777215,a=16777215;return o+(s<<32)!==qo&&(o===16777215?a=s:s===16777215?a=o:a=Qn(o,s,.5)),a+(i<<24)}var Jo=new se;function Kr(r,e=!1){Qo(r);let t=r.childrenToUpdate,n=r.updateTick;r.updateTick++;for(let i in t){let o=t[i],s=o.list,a=o.index;for(let l=0;l<a;l++)ti(s[l],n,0);o.index=0}if(e)for(let i=0;i<r.layerGroupChildren.length;i++)Kr(r.layerGroupChildren[i],e)}function Qo(r){r.layerGroupParent?(r.worldTransform.appendFrom(r.root.layerTransform,r.layerGroupParent.worldTransform),r.worldColor=tt(r.root.layerColor,r.layerGroupParent.worldColor)):(r.worldTransform.copyFrom(r.root.layerTransform),r.worldColor=r.root.localColor)}function ti(r,e,t){if(e===r.updateTick)return;r.updateTick=e,r.didChange=!1;let n=r.localTransform;Gn(n,r);let i=r.parent;if(i&&!i.isLayerRoot?(t=t|r._updateFlags,r.layerTransform.appendFrom(n,i.layerTransform),t&&ei(r,i,t)):(t=r._updateFlags,r.layerTransform.copyFrom(n),t&&ei(r,Jo,t)),!r.isLayerRoot){let o=r.children,s=o.length;for(let l=0;l<s;l++)ti(o[l],e,t);let a=r.layerGroup;r.view&&!a.structureDidChange&&a.updateRenderable(r)}}function ei(r,e,t){t&Dn&&(r.layerColor=tt(r.localColor,e.layerColor)),t&In&&(r.layerBlendMode=r.localBlendMode==="inherit"?e.layerBlendMode:r.localBlendMode),t&zn&&(r.layerVisibleRenderable=r.localVisibleRenderable&e.layerVisibleRenderable),r._updateFlags=0}function ri(r,e){let{list:t,index:n}=r.childrenRenderablesToUpdate,i=!1;for(let o=0;o<n;o++){let s=t[o],a=s.view;if(i=e[a.renderPipeId].validateRenderable(s),i)break}return r.structureDidChange=i,i&&(r.childrenRenderablesToUpdate.index=0),i}var rt=class{constructor(e){this._renderer=e}render({container:e,transform:t}){e.layer=!0;let n=this._renderer,i=jr(e.layerGroup,[]),o=n.renderPipes;for(let s=0;s<i.length;s++){let a=i[s];a.runOnRender(),a.instructionSet.renderPipes=o,a.structureDidChange||ri(a,o),Kr(a),a.structureDidChange?(a.structureDidChange=!1,qn(a,o)):es(a),n.renderPipes.batch.upload(a.instructionSet)}t&&e.layerGroup.worldTransform.copyFrom(t),n.globalUniforms.start({projectionData:n.renderTarget.rootRenderTarget,worldTransformMatrix:e.layerGroup.worldTransform}),Ot(e.layerGroup,o),o.uniformBatch&&(o.uniformBatch.renderEnd(),o.uniformBuffer.renderEnd())}destroy(){let e=this;e._renderer=null}};rt.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"layer"};function es(r){let{list:e,index:t}=r.childrenRenderablesToUpdate;for(let n=0;n<t;n++){let i=e[n];i.didViewUpdate&&r.updateRenderable(i)}r.childrenRenderablesToUpdate.index=0}var ni=new Float32Array(1),ii=new Uint32Array(1),Fe=class extends fe{constructor(){let t=new X({data:ni,label:"attribute-batch-buffer",usage:z.VERTEX|z.COPY_DST}),n=new X({data:ii,label:"index-batch-buffer",usage:z.INDEX|z.COPY_DST}),i=6*4;super({attributes:{aPosition:{buffer:t,shaderLocation:0,format:"float32x2",stride:i,offset:0},aUV:{buffer:t,shaderLocation:1,format:"float32x2",stride:i,offset:2*4},aColor:{buffer:t,shaderLocation:2,format:"unorm8x4",stride:i,offset:4*4},aTextureIdAndRound:{buffer:t,shaderLocation:3,format:"uint16x2",stride:i,offset:5*4}},indexBuffer:n})}reset(){this.indexBuffer.data=ii,this.buffers[0].data=ni}};var oi={};function si(r,e){let t=0;for(let n=0;n<e;n++)t=t*31+r[n].uid>>>0;return oi[t]||ts(r,t)}function ts(r,e){let t={},n=0;for(let o=0;o<16;o++){let s=o<r.length?r[o]:A.EMPTY.source;t[n++]=s.source,t[n++]=s.style}let i=new q(t);return oi[e]=i,i}var nt=class{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}};function Yr(r,e){let t=r.byteLength/8|0,n=new Float64Array(r,0,t),i=new Float64Array(e,0,t);for(let a=0;a<t;a++)i[a]=n[a];let o=new Uint8Array(r,t*8),s=new Uint8Array(e,t*8);for(let a=0;a<o.length;a++)s[a]=o[a]}var it=class{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}};var $t=class{constructor(){this.type="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}},ot=0,Ge=class{constructor(e=4,t=6){this.uid=I("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,this.attributeBuffer=new nt(e*this._vertexSize*4),this.indexBuffer=new Uint32Array(t)}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e.indexStart=this.indexSize,e.location=this.attributeSize,e.batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this._vertexSize}checkAndUpdateTexture(e,t){let n=e.batch.textures.ids[t._source.uid];return!n&&n!==0?!1:(e.textureId=n,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}break(e){let t=this._elements,n=this._textureBatchPool[this._textureBatchPoolIndex++]||new it;if(n.clear(),!t[this.elementStart])return;let i=t[this.elementStart].blendMode;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);let o=this.attributeBuffer.float32View,s=this.attributeBuffer.uint32View,a=this.indexBuffer,l=this._batchIndexSize,c=this._batchIndexStart,u="startBatch",d=this._batchPool[this._batchPoolIndex++]||new $t;for(let m=this.elementStart;m<this.elementSize;++m){let h=t[m];t[m]=null;let b=h.texture._source,p=i!==h.blendMode;if(b._batchTick===ot&&!p){h.textureId=b._textureBindLocation,l+=h.indexSize,h.packAttributes(o,s,h.location,h.textureId),h.packIndex(a,h.indexStart,h.location/this._vertexSize),h.batch=d;continue}b._batchTick=ot,(n.count>=16||p)&&(this._finishBatch(d,c,l-c,n,i,e,u),u="renderBatch",c=l,i=h.blendMode,n=this._textureBatchPool[this._textureBatchPoolIndex++]||new it,n.clear(),d=this._batchPool[this._batchPoolIndex++]||new $t,++ot),h.textureId=b._textureBindLocation=n.count,n.ids[b.uid]=n.count,n.textures[n.count++]=b,h.batch=d,l+=h.indexSize,h.packAttributes(o,s,h.location,h.textureId),h.packIndex(a,h.indexStart,h.location/this._vertexSize)}n.count>0&&(this._finishBatch(d,c,l-c,n,i,e,u),c=l,++ot),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=l}_finishBatch(e,t,n,i,o,s,a){e.gpuBindGroup=null,e.action=a,e.batcher=this,e.textures=i,e.blendMode=o,e.start=t,e.size=n,++ot,s.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){let t=Math.max(e,this.attributeBuffer.size*2),n=new nt(t);Yr(this.attributeBuffer.rawBinaryData,n.rawBinaryData),this.attributeBuffer=n}_resizeIndexBuffer(e){let t=this.indexBuffer,n=Math.max(e,t.length*2),i=new Uint32Array(n);Yr(t.buffer,i.buffer),this.indexBuffer=i}destroy(){for(let e=0;e<this.batches.length;e++)this.batches[e].destroy();this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};function ai(r,e,t,n,i,o,s,a=null){let l=0;t*=e,i*=o;let c=a.a,u=a.b,d=a.c,m=a.d,h=a.tx,f=a.ty;for(;l<s;){let b=r[t],p=r[t+1];n[i]=c*b+d*p+h,n[i+1]=u*b+m*p+f,i+=o,t+=e,l++}}function li(r,e,t,n){let i=0;for(e*=t;i<n;)r[e]=0,r[e+1]=0,e+=t,i++}function Xr(r,e,t,n,i){let o=e.a,s=e.b,a=e.c,l=e.d,c=e.tx,u=e.ty;t=t||0,n=n||2,i=i||r.length/n-t;let d=t*n;for(let m=0;m<i;m++){let h=r[d],f=r[d+1];r[d]=o*h+a*f+c,r[d+1]=s*h+l*f+u,d+=n}}var Te=class{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.layerBlendMode:"normal"}packIndex(e,t,n){let i=this.geometryData.indices;for(let o=0;o<this.indexSize;o++)e[t++]=i[o+this.indexOffset]+n-this.vertexOffset}packAttributes(e,t,n,i){let o=this.geometryData,s=this.renderable,a=o.vertices,l=o.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,d=this.color,m=d>>16|d&65280|(d&255)<<16;if(this.applyTransform){let h=tt(m+(this.alpha*255<<24),s.layerColor),f=s.layerTransform,b=i<<16|this.roundPixels&65535,p=f.a,y=f.b,_=f.c,v=f.d,x=f.tx,U=f.ty;for(let L=c;L<u;L+=2){let F=a[L],B=a[L+1];e[n]=p*F+_*B+x,e[n+1]=y*F+v*B+U,e[n+2]=l[L],e[n+3]=l[L+1],t[n+4]=h,t[n+5]=b,n+=6}}else{let h=m+(this.alpha*255<<24);for(let f=c;f<u;f+=2)e[n]=a[f],e[n+1]=a[f+1],e[n+2]=l[f],e[n+3]=l[f+1],t[n+4]=h,t[n+5]=i,n+=6}}get vertSize(){return this.vertexSize}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.vertexOffset=this.vertexOffset,e.vertexSize=this.vertexSize,e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}};var Nt={build(r,e){let t,n,i,o,s,a;if(r.type==="circle"){let x=r;t=x.x,n=x.y,s=a=x.radius,i=o=0}else if(r.type==="ellipse"){let x=r;t=x.x,n=x.y,s=x.halfWidth,a=x.halfHeight,i=o=0}else{let x=r,U=x.width/2,L=x.height/2;t=x.x+U,n=x.y+L,s=a=Math.max(0,Math.min(x.radius,Math.min(U,L))),i=U-s,o=L-a}if(!(s>=0&&a>=0&&i>=0&&o>=0))return e;let l=Math.ceil(2.3*Math.sqrt(s+a)),c=l*8+(i?4:0)+(o?4:0);if(c===0)return e;if(l===0)return e[0]=e[6]=t+i,e[1]=e[3]=n+o,e[2]=e[4]=t-i,e[5]=e[7]=n-o,e;let u=0,d=l*4+(i?2:0)+2,m=d,h=c,f=i+s,b=o,p=t+f,y=t-f,_=n+b;if(e[u++]=p,e[u++]=_,e[--d]=_,e[--d]=y,o){let x=n-b;e[m++]=y,e[m++]=x,e[--h]=x,e[--h]=p}for(let x=1;x<l;x++){let U=Math.PI/2*(x/l),L=i+Math.cos(U)*s,F=o+Math.sin(U)*a,B=t+L,w=t-L,S=n+F,te=n-F;e[u++]=B,e[u++]=S,e[--d]=S,e[--d]=w,e[m++]=w,e[m++]=te,e[--h]=te,e[--h]=B}f=i,b=o+a,p=t+f,y=t-f,_=n+b;let v=n-b;return e[u++]=p,e[u++]=_,e[--h]=v,e[--h]=p,i&&(e[u++]=y,e[u++]=_,e[--h]=v,e[--h]=y),e},triangulate(r,e,t,n,i,o){if(r.length===0)return;let s=0,a=0,l=r.length/4;s+=r[0],a+=r[1],s+=r[l|0],a+=r[(l|0)+1],s+=r[l*2|0],a+=r[(l*2|0)+1],s+=r[l*3|0],a+=r[(l*3|0)+1],s/=4,a/=4;let c=n;e[c*t]=s,e[c*t+1]=a,c++;let u=n;e[c*t]=r[0],e[c*t+1]=r[1],c++;for(let d=2;d<r.length;d+=2)e[c*t]=r[d],e[c*t+1]=r[d+1],i[o++]=c,i[o++]=u,i[o++]=c-1,c++;i[o++]=c-1,i[o++]=u,i[o++]=u+1}};function ci(r){let e=r.length;if(e<6)return 1;let t=0;for(let n=0,i=r[e-2],o=r[e-1];n<e;n+=2){let s=r[n],a=r[n+1];t+=(s-i)*(a+o),i=s,o=a}return t<0?-1:1}function ui(r,e,t,n,i,o,s,a){let l=r-t*i,c=e-n*i,u=r+t*o,d=e+n*o,m,h;s?(m=n,h=-t):(m=-n,h=t);let f=l+m,b=c+h,p=u+m,y=d+h;return a.push(f,b),a.push(p,y),2}function Ce(r,e,t,n,i,o,s,a){let l=t-r,c=n-e,u=Math.atan2(l,c),d=Math.atan2(i-r,o-e);a&&u<d?u+=Math.PI*2:!a&&u>d&&(d+=Math.PI*2);let m=u,h=d-u,f=Math.abs(h),b=Math.sqrt(l*l+c*c),p=(15*f*Math.sqrt(b)/Math.PI>>0)+1,y=h/p;if(m+=y,a){s.push(r,e),s.push(t,n);for(let _=1,v=m;_<p;_++,v+=y)s.push(r,e),s.push(r+Math.sin(v)*b,e+Math.cos(v)*b);s.push(r,e),s.push(i,o)}else{s.push(t,n),s.push(r,e);for(let _=1,v=m;_<p;_++,v+=y)s.push(r+Math.sin(v)*b,e+Math.cos(v)*b),s.push(r,e);s.push(i,o),s.push(r,e)}return p*2}function di(r,e,t,n,i,o,s,a,l){let c=1e-4;if(r.length===0)return;let u=e,d=u.alignment;if(e.alignment!==.5){let D=ci(r);t&&(D*=-1),d=(d-.5)*D+.5}let m=new Se(r[0],r[1]),h=new Se(r[r.length-2],r[r.length-1]),f=n,b=Math.abs(m.x-h.x)<c&&Math.abs(m.y-h.y)<c;if(f){r=r.slice(),b&&(r.pop(),r.pop(),h.set(r[r.length-2],r[r.length-1]));let D=(m.x+h.x)*.5,de=(h.y+m.y)*.5;r.unshift(D,de),r.push(D,de)}let p=i,y=r.length/2,_=r.length,v=p.length/2,x=u.width/2,U=x*x,L=u.miterLimit*u.miterLimit,F=r[0],B=r[1],w=r[2],S=r[3],te=0,ne=0,P=-(B-S),k=F-w,O=0,V=0,re=Math.sqrt(P*P+k*k);P/=re,k/=re,P*=x,k*=x;let Pn=d,C=(1-Pn)*2,R=Pn*2;f||(u.cap==="round"?_+=Ce(F-P*(C-R)*.5,B-k*(C-R)*.5,F-P*C,B-k*C,F+P*R,B+k*R,p,!0)+2:u.cap==="square"&&(_+=ui(F,B,P,k,C,R,!0,p))),p.push(F-P*C,B-k*C),p.push(F+P*R,B+k*R);for(let D=1;D<y-1;++D){F=r[(D-1)*2],B=r[(D-1)*2+1],w=r[D*2],S=r[D*2+1],te=r[(D+1)*2],ne=r[(D+1)*2+1],P=-(B-S),k=F-w,re=Math.sqrt(P*P+k*k),P/=re,k/=re,P*=x,k*=x,O=-(S-ne),V=w-te,re=Math.sqrt(O*O+V*V),O/=re,V/=re,O*=x,V*=x;let de=w-F,je=B-S,Ke=w-te,Ye=ne-S,kn=de*Ke+je*Ye,Gt=je*Ke-Ye*de,Xe=Gt<0;if(Math.abs(Gt)<.001*Math.abs(kn)){p.push(w-P*C,S-k*C),p.push(w+P*R,S+k*R),kn>=0&&(u.join==="round"?_+=Ce(w,S,w-P*C,S-k*C,w-O*C,S-V*C,p,!1)+4:_+=2,p.push(w-O*R,S-V*R),p.push(w+O*C,S+V*C));continue}let Rn=(-P+F)*(-k+S)-(-P+w)*(-k+B),Un=(-O+te)*(-V+S)-(-O+w)*(-V+ne),Lt=(de*Un-Ke*Rn)/Gt,Et=(Ye*Rn-je*Un)/Gt,Or=(Lt-w)*(Lt-w)+(Et-S)*(Et-S),ve=w+(Lt-w)*C,_e=S+(Et-S)*C,ye=w-(Lt-w)*R,we=S-(Et-S)*R,Oo=Math.min(de*de+je*je,Ke*Ke+Ye*Ye),Fn=Xe?C:R,Vo=Oo+Fn*Fn*U;Or<=Vo?u.join==="bevel"||Or/U>L?(Xe?(p.push(ve,_e),p.push(w+P*R,S+k*R),p.push(ve,_e),p.push(w+O*R,S+V*R)):(p.push(w-P*C,S-k*C),p.push(ye,we),p.push(w-O*C,S-V*C),p.push(ye,we)),_+=2):u.join==="round"?Xe?(p.push(ve,_e),p.push(w+P*R,S+k*R),_+=Ce(w,S,w+P*R,S+k*R,w+O*R,S+V*R,p,!0)+4,p.push(ve,_e),p.push(w+O*R,S+V*R)):(p.push(w-P*C,S-k*C),p.push(ye,we),_+=Ce(w,S,w-P*C,S-k*C,w-O*C,S-V*C,p,!1)+4,p.push(w-O*C,S-V*C),p.push(ye,we)):(p.push(ve,_e),p.push(ye,we)):(p.push(w-P*C,S-k*C),p.push(w+P*R,S+k*R),u.join==="round"?Xe?_+=Ce(w,S,w+P*R,S+k*R,w+O*R,S+V*R,p,!0)+2:_+=Ce(w,S,w-P*C,S-k*C,w-O*C,S-V*C,p,!1)+2:u.join==="miter"&&Or/U<=L&&(Xe?(p.push(ye,we),p.push(ye,we)):(p.push(ve,_e),p.push(ve,_e)),_+=2),p.push(w-O*C,S-V*C),p.push(w+O*R,S+V*R),_+=2)}F=r[(y-2)*2],B=r[(y-2)*2+1],w=r[(y-1)*2],S=r[(y-1)*2+1],P=-(B-S),k=F-w,re=Math.sqrt(P*P+k*k),P/=re,k/=re,P*=x,k*=x,p.push(w-P*C,S-k*C),p.push(w+P*R,S+k*R),f||(u.cap==="round"?_+=Ce(w-P*(C-R)*.5,S-k*(C-R)*.5,w-P*C,S-k*C,w+P*R,S+k*R,p,!1)+2:u.cap==="square"&&(_+=ui(w,S,P,k,C,R,!1,p)));let Ho=1e-4*1e-4;for(let D=v;D<_+v-2;++D)F=p[D*2],B=p[D*2+1],w=p[(D+1)*2],S=p[(D+1)*2+1],te=p[(D+2)*2],ne=p[(D+2)*2+1],!(Math.abs(F*(S-ne)+w*(ne-B)+te*(B-S))<Ho)&&a.push(D,D+1,D+2)}var xi=No(gi(),1);function Zt(r,e,t,n,i,o,s){let a=(0,xi.default)(r,e,2);if(!a)return;for(let c=0;c<a.length;c+=3)o[s++]=a[c]+i,o[s++]=a[c+1]+i,o[s++]=a[c+2]+i;let l=i*n;for(let c=0;c<r.length;c+=2)t[l]=r[c],t[l+1]=r[c+1],l+=n}var bs=[],bi={build(r,e){for(let t=0;t<r.points.length;t++)e[t]=r.points[t];return e},triangulate(r,e,t,n,i,o){Zt(r,bs,e,t,n,i,o)}};var vi={build(r,e){let t=r,n=t.x,i=t.y,o=t.width,s=t.height;return o>=0&&s>=0&&(e[0]=n,e[1]=i,e[2]=n+o,e[3]=i,e[4]=n+o,e[5]=i+s,e[6]=n,e[7]=i+s),e},triangulate(r,e,t,n,i,o){let s=0;n*=t,e[n+s]=r[0],e[n+s+1]=r[1],s+=t,e[n+s]=r[2],e[n+s+1]=r[3],s+=t,e[n+s]=r[6],e[n+s+1]=r[7],s+=t,e[n+s]=r[4],e[n+s+1]=r[5],s+=t;let a=n/t;i[o++]=a,i[o++]=a+1,i[o++]=a+2,i[o++]=a+1,i[o++]=a+3,i[o++]=a+2}};var _i={build(r,e){return e[0]=r.x,e[1]=r.y,e[2]=r.x2,e[3]=r.y2,e[4]=r.x3,e[5]=r.y3,e},triangulate(r,e,t,n,i,o){let s=0;n*=t,e[n+s]=r[0],e[n+s+1]=r[1],s+=t,e[n+s]=r[2],e[n+s+1]=r[3],s+=t,e[n+s]=r[4],e[n+s+1]=r[5];let a=n/t;i[o++]=a,i[o++]=a+1,i[o++]=a+2}};var en={rectangle:vi,polygon:bi,triangle:_i,circle:Nt,ellipse:Nt,roundedRectangle:Nt},vs=new ie;function wi(r){let i={vertices:[],uvs:[],indices:[]},o=[];for(let s=0;s<r.instructions.length;s++){let a=r.instructions[s];if(a.action==="texture")_s(a.data,o,i);else if(a.action==="fill"||a.action==="stroke"){let l=a.action==="stroke",c=a.data.path.shapePath,u=a.data.style,d=a.data.hole;l&&d&&yi(d.shapePath,u,null,!0,o,i),yi(c,u,d,l,o,i)}}return o}function _s(r,e,t){let{vertices:n,uvs:i,indices:o}=t,s=o.length,a=n.length/2,l=[],c=en.rectangle,u=vs,d=r.image;u.x=r.dx,u.y=r.dy,u.width=r.dw,u.height=r.dh;let m=r.transform;c.build(u,l),m&&Xr(l,m),c.triangulate(l,n,2,a,o,s);let h=d.layout.uvs;i.push(h.x0,h.y0,h.x1,h.y1,h.x3,h.y3,h.x2,h.y2);let f=G.get(Te);f.indexOffset=s,f.indexSize=o.length-s,f.vertexOffset=a,f.vertexSize=n.length/2-a,f.color=r.style,f.alpha=r.alpha,f.texture=d,f.geometryData=t,e.push(f)}function yi(r,e,t,n,i,o){let{vertices:s,uvs:a,indices:l}=o,c=r.shapePrimitives.length-1;r.shapePrimitives.forEach(({shape:u,transform:d},m)=>{let h=l.length,f=s.length/2,b=[],p=en[u.type];if(p.build(u,b),d&&Xr(b,d),n){let x=u.closePath??!0;di(b,e,!1,x,s,2,f,l,h)}else if(t&&c===m){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");let x=[],U=b.slice();ys(t.shapePath).forEach(F=>{x.push(U.length/2),U.push(...F)}),Zt(U,x,s,2,f,l,h)}else p.triangulate(b,s,2,f,l,h);let y=a.length/2,_=e.texture;if(_!==A.WHITE){let x=e.matrix;d&&x.append(d.clone().invert()),ai(s,2,f,a,y,2,s.length/2-f,x)}else li(a,y,2,s.length/2-f);let v=G.get(Te);v.indexOffset=h,v.indexSize=l.length-h,v.vertexOffset=f,v.vertexSize=s.length/2-f,v.color=e.color,v.alpha=e.alpha,v.texture=_,v.geometryData=o,i.push(v)})}function ys(r){if(!r)return[];let e=r.shapePrimitives,t=[];for(let n=0;n<e.length;n++){let i=e[n].shape,o=[];en[i.type].build(i,o),t.push(o)}return t}var tn=class{},rn=class{constructor(){this.geometry=new Fe,this.instructions=new En}init(){this.geometry.reset(),this.instructions.reset()}},ct=class{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),this._needsContextNeedsRebuild=[]}prerender(){this._returnActiveBatchers()}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e);let n=wi(e),i=0,o=e.batchMode,s=!0;if(e.customShader||o==="no-batch")s=!1;else if(o==="auto"){for(let a=0;a<n.length;a++)if(i+=n[a].vertexSize,i>400){s=!1;break}}t=this._gpuContextHash[e.uid]={isBatchable:s,batches:n},e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_returnActiveBatchers(){for(let e=0;e<this._activeBatchers.length;e++)G.return(this._activeBatchers[e]);this._activeBatchers.length=0}_initContextRenderData(e){let t=G.get(rn),n=this._gpuContextHash[e.uid].batches,i=0,o=0;n.forEach(c=>{c.applyTransform=!1,i+=c.geometryData.vertices.length,o+=c.geometryData.indices.length});let s=G.get(Ge);this._activeBatchers.push(s),s.ensureAttributeBuffer(i),s.ensureIndexBuffer(o),s.begin();for(let c=0;c<n.length;c++){let u=n[c];s.add(u)}s.finish(t.instructions);let a=t.geometry;a.indexBuffer.data=s.indexBuffer,a.buffers[0].data=s.attributeBuffer.float32View,a.indexBuffer.update(s.indexSize*4),a.buffers[0].update(s.attributeSize*4);let l=s.batches;for(let c=0;c<l.length;c++){let u=l[c];u.bindGroup=si(u.textures.textures,u.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){let t=new tn;return this._gpuContextHash[e.uid]=t,e.on("update",this.onGraphicsContextUpdate,this),e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextUpdate(e){this._needsContextNeedsRebuild.push(e)}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){let t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(G.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(n=>{G.return(n)})}destroy(){for(let e of this._needsContextNeedsRebuild)this._cleanGraphicsContextData(e),this._gpuContextHash[e.uid]=null;this._needsContextNeedsRebuild.length=0}};ct.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"graphicsContext"};var ws={normal:0,additive:1,multiply:2,screen:3,overlay:4,erase:5},nn=0,on=1,sn=2,an=3,ln=4,cn=5,ee=class{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<nn)}set blend(e){!!(this.data&1<<nn)!==e&&(this.data^=1<<nn)}get offsets(){return!!(this.data&1<<on)}set offsets(e){!!(this.data&1<<on)!==e&&(this.data^=1<<on)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<sn)}set culling(e){!!(this.data&1<<sn)!==e&&(this.data^=1<<sn)}get depthTest(){return!!(this.data&1<<an)}set depthTest(e){!!(this.data&1<<an)!==e&&(this.data^=1<<an)}get depthMask(){return!!(this.data&1<<cn)}set depthMask(e){!!(this.data&1<<cn)!==e&&(this.data^=1<<cn)}get clockwiseFrontFace(){return!!(this.data&1<<ln)}set clockwiseFrontFace(e){!!(this.data&1<<ln)!==e&&(this.data^=1<<ln)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=ws[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){let e=new ee;return e.depthTest=!1,e.blend=!0,e}};function qt(r,e,t){e[t++]=(r&255)/255,e[t++]=(r>>8&255)/255,e[t++]=(r>>16&255)/255,e[t++]=(r>>24&255)/255}var ut=class{constructor(e,t){this.state=ee.for2d(),this._renderableBatchesHash=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){let t=e.view.context,n=!!this._renderableBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(t);return!!(i.isBatchable||n!==i.isBatchable)}addRenderable(e,t){let n=this.renderer.graphicsContext.updateGpuContext(e.view.context);e.view._didUpdate&&(e.view._didUpdate=!1,this._rebuild(e)),n.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add({type:"graphics",renderable:e}))}updateRenderable(e){let t=this._renderableBatchesHash[e.uid];if(t)for(let n=0;n<t.length;n++){let i=t[n];i.batcher.updateElement(i)}}destroyRenderable(e){this._removeBatchForRenderable(e.uid)}execute({renderable:e}){if(!e.isRenderable)return;let t=this.renderer,n=e.view.context;if(!t.graphicsContext.getGpuContext(n).batches.length)return;let o=n.customShader||this._adaptor.shader;this.state.blendMode=e.layerBlendMode;let s=o.resources.localUniforms.uniforms;s.uTransformMatrix=e.layerTransform,s.uRound=t._roundPixels|e.view.roundPixels,qt(e.layerColor,s.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){let t=!!this._renderableBatchesHash[e.uid],n=this.renderer.graphicsContext.updateGpuContext(e.view.context);t&&this._removeBatchForRenderable(e.uid),n.isBatchable&&this._initBatchesForRenderable(e),e.view.batched=n.isBatchable}_addToBatcher(e,t){let n=this.renderer.renderPipes.batch,i=this._getBatchesForRenderable(e);for(let o=0;o<i.length;o++){let s=i[o];n.addToBatch(s,t)}}_getBatchesForRenderable(e){return this._renderableBatchesHash[e.uid]||this._initBatchesForRenderable(e)}_initBatchesForRenderable(e){let t=e.view.context,n=this.renderer.graphicsContext.getGpuContext(t),i=this.renderer._roundPixels|e.view.roundPixels,o=n.batches.map(s=>{let a=G.get(Te);return s.copyTo(a),a.renderable=e,a.roundPixels=i,a});return this._renderableBatchesHash[e.uid]=o,e.on("destroyed",()=>{this.destroyRenderable(e)}),o}_removeBatchForRenderable(e){this._renderableBatchesHash[e].forEach(t=>{G.return(t)}),this._renderableBatchesHash[e]=null}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null;for(let e in this._renderableBatchesHash)this._removeBatchForRenderable(e);this._renderableBatchesHash=null}};ut.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"graphics"};var Jt=class{constructor(){this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.layerBlendMode}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null}packIndex(e,t,n){let i=this.renderable.view.geometry.indices;for(let o=0;o<i.length;o++)e[t++]=i[o]+n}packAttributes(e,t,n,i){let o=this.renderable,a=this.renderable.view.geometry,l=o.layerTransform,c=i<<16|this.roundPixels&65535,u=l.a,d=l.b,m=l.c,h=l.d,f=l.tx,b=l.ty,p=a.positions,y=a.uvs,_=o.layerColor;for(let v=0;v<p.length;v+=2){let x=p[v],U=p[v+1];e[n]=u*x+m*U+f,e[n+1]=d*x+h*U+b,e[n+2]=y[v],e[n+3]=y[v+1],t[n+4]=_,t[n+5]=c,n+=6}}get vertexSize(){return this.renderable.view.geometry.positions.length/2}get indexSize(){return this.renderable.view.geometry.indices.length}};var dt=class{constructor(e,t){this.localUniforms=new N({uTransformMatrix:{value:new E,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new q({0:this.localUniforms}),this._renderableHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){let t=this._getRenderableData(e),n=t.batched,i=e.view.batched;if(t.batched=i,n!==i)return!0;if(i){let o=e.view._geometry;if(o.indices.length!==t.indexSize||o.positions.length!==t.vertexSize)return t.indexSize=o.indices.length,t.vertexSize=o.positions.length,!0;let s=this._getBatchableMesh(e),a=e.view.texture;if(s.texture._source!==a._source&&s.texture._source!==a._source)return s.batcher.checkAndUpdateTexture(s,a)}return!1}addRenderable(e,t){let n=this.renderer.renderPipes.batch,{batched:i}=this._getRenderableData(e);if(i){let o=this._getBatchableMesh(e);o.texture=e.view._texture,n.addToBatch(o)}else n.break(t),t.add({type:"mesh",renderable:e})}updateRenderable(e){if(e.view.batched){let t=this._gpuBatchableMeshHash[e.uid];t.texture=e.view._texture,t.batcher.updateElement(t)}}destroyRenderable(e){this._renderableHash[e.uid]=null;let t=this._gpuBatchableMeshHash[e.uid];G.return(t),this._gpuBatchableMeshHash[e.uid]=null}execute({renderable:e}){if(!e.isRenderable)return;let t=e.view;t.state.blendMode=e.layerBlendMode;let n=this.localUniforms;n.uniforms.uTransformMatrix=e.layerTransform,n.uniforms.uRound=this.renderer._roundPixels|e.view.roundPixels,n.update(),qt(e.layerColor,n.uniforms.uColor,0),this._adaptor.execute(this,e)}_getRenderableData(e){return this._renderableHash[e.uid]||this._initRenderableData(e)}_initRenderableData(e){let t=e.view;return this._renderableHash[e.uid]={batched:t.batched,indexSize:t._geometry.indices.length,vertexSize:t._geometry.positions.length},e.on("destroyed",()=>{this.destroyRenderable(e)}),this._renderableHash[e.uid]}_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}_initBatchableMesh(e){let t=G.get(Jt);return t.renderable=e,t.texture=e.view._texture,t.roundPixels=this.renderer._roundPixels|e.view.roundPixels,this._gpuBatchableMeshHash[e.uid]=t,t.renderable=e,t}destroy(){for(let e in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[e]&&G.return(this._gpuBatchableMeshHash[e]);this._gpuBatchableMeshHash=null,this._renderableHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}};dt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"mesh"};var pe=class{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.layerBlendMode}packAttributes(e,t,n,i){let o=this.renderable,s=this.texture,a=o.layerTransform,l=a.a,c=a.b,u=a.c,d=a.d,m=a.tx,h=a.ty,f=this.bounds,b=f[1],p=f[0],y=f[3],_=f[2],v=s._layout.uvs,x=o.layerColor,U=i<<16|this.roundPixels&65535;e[n+0]=l*p+u*_+m,e[n+1]=d*_+c*p+h,e[n+2]=v.x0,e[n+3]=v.y0,t[n+4]=x,t[n+5]=U,e[n+6]=l*b+u*_+m,e[n+7]=d*_+c*b+h,e[n+8]=v.x1,e[n+9]=v.y1,t[n+10]=x,t[n+11]=U,e[n+12]=l*b+u*y+m,e[n+13]=d*y+c*b+h,e[n+14]=v.x2,e[n+15]=v.y2,t[n+16]=x,t[n+17]=U,e[n+18]=l*p+u*y+m,e[n+19]=d*y+c*p+h,e[n+20]=v.x3,e[n+21]=v.y3,t[n+22]=x,t[n+23]=U}packIndex(e,t,n){e[t]=n+0,e[t+1]=n+1,e[t+2]=n+2,e[t+3]=n+0,e[t+4]=n+2,e[t+5]=n+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}};var Ee,ht=class{constructor(e){this._gpuSpriteHash=Object.create(null),this._renderer=e,Ee=this._gpuSpriteHash}addRenderable(e,t){let n=this._getGpuSprite(e);e.view._didUpdate&&this._updateBatchableSprite(e,n),this._renderer.renderPipes.batch.addToBatch(n)}updateRenderable(e){let t=Ee[e.uid];e.view._didUpdate&&this._updateBatchableSprite(e,t),t.batcher.updateElement(t)}validateRenderable(e){let t=e.view._texture,n=this._getGpuSprite(e);return n.texture._source!==t._source?!n.batcher.checkAndUpdateTexture(n,t):!1}destroyRenderable(e){let t=Ee[e.uid];G.return(t),Ee[e.uid]=null}_updateBatchableSprite(e,t){let n=e.view;n._didUpdate=!1,t.bounds=n.bounds,t.texture=n._texture}_getGpuSprite(e){return Ee[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let t=G.get(pe);t.renderable=e;let n=e.view;return t.texture=n._texture,t.bounds=n.bounds,t.roundPixels=this._renderer._roundPixels|n.roundPixels,Ee[e.uid]=t,e.view._didUpdate=!1,e.on("destroyed",()=>{this.destroyRenderable(e)}),t}destroy(){for(let e in this._gpuSpriteHash)G.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}};ht.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"sprite"};var Me=class extends Y{constructor({original:e,view:t}){super(),this.uid=I("renderable"),this.didViewUpdate=!1,this.view=t,e&&this.init(e)}init(e){this._original=e,this.layerTransform=e.layerTransform}get layerColor(){return this._original.layerColor}get layerBlendMode(){return this._original.layerBlendMode}get layerVisibleRenderable(){return this._original.layerVisibleRenderable}get isRenderable(){return this._original.isRenderable}};var Si=new Vn,ft=class{constructor(e){this.uid=I("meshView"),this.renderPipeId="mesh",this.canBundle=!0,this.owner=Wt,this.state=ee.for2d(),this.roundPixels=0,this.shader=e.shader,this.texture=e.texture??this.shader?.texture??A.WHITE,this._geometry=e.geometry,this._geometry.on("update",this.onUpdate,this)}set shader(e){this._shader!==e&&(this._shader=e,this.onUpdate())}get shader(){return this._shader}set geometry(e){this._geometry!==e&&(this._geometry?.off("update",this.onUpdate,this),e.on("update",this.onUpdate,this),this._geometry=e,this.onUpdate())}get geometry(){return this._geometry}set texture(e){this._texture!==e&&(this.shader&&(this.shader.texture=e),this._texture=e,this.onUpdate())}get texture(){return this._texture}get batched(){return this._shader?!1:this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch"}addBounds(e){e.addVertexData(this.geometry.positions,0,this.geometry.positions.length)}containsPoint(e){let{x:t,y:n}=e,i=this.geometry.getBuffer("aPosition").data,o=Si.points,s=this.geometry.getIndex().data,a=s.length,l=this.geometry.topology==="triangle-strip"?3:1;for(let c=0;c+2<a;c+=l){let u=s[c]*2,d=s[c+1]*2,m=s[c+2]*2;if(o[0]=i[u],o[1]=i[u+1],o[2]=i[d],o[3]=i[d+1],o[4]=i[m],o[5]=i[m+1],Si.contains(t,n))return!0}return!1}onUpdate(){this.owner.onViewUpdate()}destroy(e=!1){if(typeof e=="boolean"?e:e?.texture){let n=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(n)}this._texture=null,this._geometry=null,this._shader=null}};var Ti=class extends fe{constructor(...r){let e=r[0]??{};e instanceof Float32Array&&(Q(J,"use new MeshGeometry({ positions, uvs, indices }) instead"),e={positions:e,uvs:r[1],indices:r[2]}),e={...Ti.defaultOptions,...e};let t=e.positions||new Float32Array([0,0,1,0,1,1,0,1]),n=e.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=e.indices||new Uint32Array([0,1,2,0,2,3]),o=new X({data:t,label:"attribute-mesh-positions",usage:z.VERTEX|z.COPY_DST}),s=new X({data:n,label:"attribute-mesh-uvs",usage:z.VERTEX|z.COPY_DST}),a=new X({data:i,label:"index-mesh-buffer",usage:z.INDEX|z.COPY_DST});super({attributes:{aPosition:{buffer:o,shaderLocation:0,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:s,shaderLocation:1,format:"float32x2",stride:2*4,offset:0}},indexBuffer:a,topology:e.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(r){this.attributes.aPosition.buffer.data=r}get uvs(){return this.attributes.aUV.buffer.data}set uvs(r){this.attributes.aUV.buffer.data=r}get indices(){return this.indexBuffer.data}set indices(r){this.indexBuffer.data=r}},un=Ti;un.defaultOptions={topology:"triangle-list"};var pt=class extends un{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}};function Ci(r,e,t){let n=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;if(i==="highp"&&n!=="highp"&&(i="mediump"),r.substring(0,8)!=="#version")return`precision ${i} float;
${r}`;let o=r.indexOf(`
`);return`${r.substring(0,o+1)}precision ${i} float;
${r.substring(o+1)}`}else if(n!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var Bi={},Qt=Bi;function Mi(){return(Qt===Bi||Qt?.isContextLost())&&(Qt=$.ADAPTER.createCanvas().getContext("webgl2",{})),Qt}var er;function Pi(){if(!er){er="mediump";let r=Mi();r&&r.getShaderPrecisionFormat&&(er=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump")}return er}var Ss={},Ts={};function ki(r,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";let n=t?Ss:Ts;if(n[e]?(n[e]++,e+=`-${n[e]}`):n[e]=1,r.indexOf("#define SHADER_NAME")!==-1)return r;let i=`#define SHADER_NAME ${e}`;if(r.substring(0,8)!=="#version")return`${i}
${r}`;let o=r.indexOf(`
`);return`${r.substring(0,o+1)}${i}
${r.substring(o+1)}`}function Ri(r,{version:e="300 es"}){return r.substring(0,8)==="#version"?r:`#version ${e}
${r}`}var dn={ensurePrecision:Ci,setProgramName:ki,setProgramVersion:Ri},De=class{constructor(r){r={...De.defaultOptions,...r};let e={ensurePrecision:{requestedFragmentPrecision:r.preferredFragmentPrecision,requestedVertexPrecision:r.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Pi()},setProgramName:{name:r.name},setProgramVersion:{version:"300 es"}},t=r.fragment,n=r.vertex;Object.keys(dn).forEach(i=>{let o=e[i]??{};t=dn[i](t,o,!0),n=dn[i](n,o,!1)}),this.fragment=t,this.vertex=n,this.key=`${this.vertex}:${this.fragment}`}destroy(){this.fragment=null,this.vertex=null,this.attributeData=null,this.uniformData=null,this.uniformBlockData=null,this.transformFeedbackVaryings=null}static from(r){let e=`${r.vertex}:${r.fragment}`;return De.programCached[e]||(De.programCached[e]=new De(r)),De.programCached[e]}},me=De;me.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};me.programCached=Object.create(null);function tr(r){let e=/(?<!\/\/.*)@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,n=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,o=/:\s*(\w+)/,s=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=r.match(e)?.map(d=>({group:parseInt(d.match(t)[1],10),binding:parseInt(d.match(n)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(o)[1]}));if(!c)return{groups:[],structs:[]};let u=r.match(s)?.map(d=>{let m=d.match(l)[1],h=d.match(a).reduce((f,b)=>{let[p,y]=b.split(":");return f[p.trim()]=y.trim(),f},{});return h?{name:m,members:h}:null}).filter(({name:d})=>c.some(m=>m.type===d))??[];return{groups:c,structs:u}}var Ie=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))(Ie||{});function Ui({groups:r}){let e=[];for(let t=0;t<r.length;t++){let n=r[t];e[n.group]||(e[n.group]=[]),n.isUniform?e[n.group].push({binding:n.binding,visibility:Ie.VERTEX|Ie.FRAGMENT,buffer:{type:"uniform"}}):n.type==="sampler"?e[n.group].push({binding:n.binding,visibility:Ie.FRAGMENT,sampler:{type:"filtering"}}):n.type==="texture_2d"&&e[n.group].push({binding:n.binding,visibility:Ie.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Fi({groups:r}){let e=[];for(let t=0;t<r.length;t++){let n=r[t];e[n.group]||(e[n.group]={}),e[n.group][n.name]=n.binding}return e}function Ai(r,e){let t=new Set,n=new Set,i=[...r.structs,...e.structs].filter(s=>t.has(s.name)?!1:(t.add(s.name),!0)),o=[...r.groups,...e.groups].filter(s=>{let a=`${s.name}-${s.binding}`;return n.has(a)?!1:(n.add(a),!0)});return{structs:i,groups:o}}var mt=class{constructor({fragment:r,vertex:e,layout:t,gpuLayout:n,name:i}){if(this._layoutKey=0,this.name=i,this.fragment=r,this.vertex=e,r.source===e.source){let o=tr(r.source);this.structsAndGroups=o}else{let o=tr(e.source),s=tr(r.source);this.structsAndGroups=Ai(o,s)}this.layout=t??Fi(this.structsAndGroups),this.gpuLayout=n??Ui(this.structsAndGroups)}destroy(){this._gpuLayout=null,this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(r){let e=`${r.vertex.source}:${r.fragment.source}:${r.fragment.entryPoint}:${r.vertex.entryPoint}`;return mt.programCached[e]||(mt.programCached[e]=new mt(r)),mt.programCached[e]}},Pe=mt;Pe.programCached=Object.create(null);function hn(r,e,t){if(r)for(let n in r){let i=n.toLocaleLowerCase(),o=e[i];if(o){let s=r[n];n==="header"&&(s=s.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&o.push(`//----${t}----//`),o.push(s)}else oe(`${n} placement hook does not exist in shader`)}}var Cs=/\{\{(.*?)\}\}/g;function fn(r){let e={};return(r.match(Cs)?.map(n=>n.replace(/[{()}]/g,""))??[]).forEach(n=>{e[n]=[]}),e}function Gi(r,e){let t,n=/@in\s+([^;]+);/g;for(;(t=n.exec(r))!==null;)e.push(t[1])}function pn(r,e,t=!1){let n=[];Gi(e,n),r.forEach(a=>{a.header&&Gi(a.header,n)});let i=n;t&&i.sort();let o=i.map((a,l)=>`       @location(${l}) ${a},`).join(`
`),s=e.replace(/@in\s+[^;]+;\s*/g,"");return s=s.replace("{{in}}",`
${o}
`),s}function Li(r,e){let t,n=/@out\s+([^;]+);/g;for(;(t=n.exec(r))!==null;)e.push(t[1])}function Bs(r){let t=/\b(\w+)\s*:/g.exec(r);return t?t[1]:""}function Ms(r){let e=/@.*?\s+/g;return r.replace(e,"")}function Ei(r,e){let t=[];Li(e,t),r.forEach(l=>{l.header&&Li(l.header,t)});let n=0,i=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${n++}) ${l}`).join(`,
`),o=t.sort().map(l=>`       var ${Ms(l)};`).join(`
`),s=`return VSOutput(
                ${t.sort().map(l=>` ${Bs(l)}`).join(`,
`)});`,a=e.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${i}
`),a=a.replace("{{start}}",`
${o}
`),a=a.replace("{{return}}",`
${s}
`),a}function mn(r,e){let t=r;for(let n in e){let i=e[n];i.join(`
`).length?t=t.replace(`{{${n}}}`,`//-----${n} START-----//
${i.join(`
`)}
//----${n} FINISH----//`):t=t.replace(`{{${n}}}`,"")}return t}var ge=Object.create(null),gn=new Map,Ps=0;function Di({template:r,bits:e}){let t=zi(r,e);if(ge[t])return ge[t];let{vertex:n,fragment:i}=ks(r,e);return ge[t]=Wi(n,i,e),ge[t]}function Ii({template:r,bits:e}){let t=zi(r,e);return ge[t]||(ge[t]=Wi(r.vertex,r.fragment,e)),ge[t]}function ks(r,e){let t=e.map(s=>s.vertex).filter(s=>!!s),n=e.map(s=>s.fragment).filter(s=>!!s),i=pn(t,r.vertex);i=Ei(t,i);let o=pn(n,r.fragment,!0);return{vertex:i,fragment:o}}function zi(r,e){return e.map(t=>(gn.has(t)||gn.set(t,Ps++),gn.get(t))).sort((t,n)=>t-n).join("-")+r.vertex+r.fragment}function Wi(r,e,t){let n=fn(r),i=fn(e);return t.forEach(o=>{hn(o.vertex,n,o.name),hn(o.fragment,i,o.name)}),{vertex:mn(r,n),fragment:mn(e,i)}}var Hi=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.worldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);
        vUV = aUV;

        {{main}}

        var modelViewProjectionMatrix = globalUniforms.projectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.worldAlpha;

        {{end}}

        {{return}}
    };
`,Oi=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,Vi=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = worldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;

        {{start}}
        
        vColor = vec4(1.);
        vUV = aUV;

        {{main}}

        mat3 modelViewProjectionMatrix = projectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= worldAlpha;

        {{end}}
    }
`,$i=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`;var Ni={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            projectionMatrix:mat3x3<f32>,
            worldTransformMatrix:mat3x3<f32>,
            worldAlpha: f32,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},ji={name:"global-uniforms-bit",vertex:{header:`
          uniform globalUniforms {
            mat3 projectionMatrix;
            mat3 worldTransformMatrix;
            float worldAlpha;
            vec2 uResolution;
          };
        `}};function rr({bits:r,name:e}){let t=Di({template:{fragment:Oi,vertex:Hi},bits:[Ni,...r]});return new Pe({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function nr({bits:r,name:e}){return new me({name:e,...Ii({template:{vertex:Vi,fragment:$i},bits:[ji,...r]})})}var Ki={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},ir={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};var or={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}},sr={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}};var xe=class extends Y{constructor({gpuProgram:e,glProgram:t,groups:n,resources:i,groupMap:o,compatibleRenderers:s}){super(),this.uniformBindMap=Object.create(null),this.gpuProgram=e,this.glProgram=t,s===void 0&&(s=0,e&&(s|=Re.WEBGPU),t&&(s|=Re.WEBGL)),this.compatibleRenderers=s;let a={};if(i&&n)throw new Error("[Shader] Cannot have both resources and groups");if(!i&&!n)throw new Error("[Shader] Must provide either resources or groups descriptor");if(!e&&n&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&n&&o)for(let l in o)for(let c in o[l]){let u=o[l][c];a[u]={group:l,binding:c,name:u}}else if(e&&n&&!o){let l=e.structsAndGroups.groups;o={},l.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,a[c.name]=c})}else if(i){if(e){let l=e.structsAndGroups.groups;o={},l.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,a[c.name]=c})}else{o={},n={99:new q};let l=0;for(let c in i)a[c]={group:99,binding:l,name:c},o[99]=o[99]||{},o[99][l]=c,l++}n={};for(let l in i){let c=l,u=i[l];!u.source&&!u.resourceType&&(u=new N(u));let d=a[c];d&&(n[d.group]=n[d.group]||new q,n[d.group].setResource(u,d.binding))}}this.groups=n,this.uniformBindMap=o,this.resources=this._buildResourceAccessor(n,a)}addResource(e,t,n){var i,o;(i=this.uniformBindMap)[t]||(i[t]={}),(o=this.uniformBindMap[t])[n]||(o[n]=e)}_buildResourceAccessor(e,t){let n={};for(let i in t){let o=t[i];Object.defineProperty(n,o.name,{get(){return e[o.group].getResource(o.binding)},set(s){e[o.group].setResource(s,o.binding)}})}return n}destroy(e=!1){this.emit("destroy",this),e&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.groups=null,this.removeAllListeners(),this.uniformBindMap=null,this.resources=null}};var Yi={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            vUV = (tilingUniforms.uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},Xi={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,main:`
            vUV = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0
    
        `}};var ar=class extends xe{constructor(e){let t=rr({name:"tiling-sprite-shader",bits:[Ki,Yi,or]}),n=nr({name:"tiling-sprite-shader",bits:[ir,Xi,sr]}),i=new N({uMapCoord:{value:new E,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new E,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,200,.5,.5]),type:"vec4<f32>"}});super({glProgram:n,gpuProgram:t,resources:{tilingUniforms:i,uTexture:e.texture.source,uSampler:e.texture.source.style}})}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture=e,this.resources.uTexture=e.source,this.resources.uSampler=e.source.style)}};var Rs=new pt,gt=class{constructor(e){this._renderableHash=Object.create(null),this._gpuBatchedTilingSprite=Object.create(null),this._gpuTilingSprite=Object.create(null),this._renderer=e}validateRenderable(e){let t=e.view.texture.textureMatrix,n=!1,i=this._getRenderableData(e);return i.batched!==t.isSimple&&(i.batched=t.isSimple,n=!0),n}addRenderable(e,t){e.view._didUpdate&&(e.view._didUpdate=!1,this._rebuild(e));let{batched:n}=this._getRenderableData(e);if(n){let i=this._getBatchedTilingSprite(e);this._renderer.renderPipes.mesh.addRenderable(i,t)}else{let i=this._getGpuTilingSprite(e);this._renderer.renderPipes.mesh.addRenderable(i.meshRenderable,t)}}updateRenderable(e){e.view._didUpdate&&(e.view._didUpdate=!1,this._rebuild(e));let{batched:t}=this._getRenderableData(e);if(t){let n=this._getBatchedTilingSprite(e);this._renderer.renderPipes.mesh.updateRenderable(n)}else{let n=this._getGpuTilingSprite(e);this._renderer.renderPipes.mesh.updateRenderable(n.meshRenderable)}}destroyRenderable(e){this._renderableHash[e.uid]=null,this._gpuTilingSprite[e.uid]=null,this._gpuBatchedTilingSprite[e.uid]=null}_getRenderableData(e){return this._renderableHash[e.uid]||this._initRenderableData(e)}_initRenderableData(e){let t={batched:!0};return this._renderableHash[e.uid]=t,this.validateRenderable(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),t}_rebuild(e){let t=this._getRenderableData(e),n=e.view,i=n.texture.textureMatrix;if(t.batched){let o=this._getBatchedTilingSprite(e);o.view.texture=n.texture;let s=n.texture.source.style;s.addressMode!=="repeat"&&(s.addressMode="repeat",s.update()),this._updateBatchPositions(e),this._updateBatchUvs(e)}else{let o=this._getGpuTilingSprite(e),{meshRenderable:s}=o,a=s.view;a.shader.texture=n.texture;let l=a.shader.resources.tilingUniforms,c=n.width,u=n.height,d=n.texture.width,m=n.texture.height,h=n._tileTransform.matrix,f=l.uniforms.uTextureTransform;f.set(h.a*d/c,h.b*d/u,h.c*m/c,h.d*m/u,h.tx/c,h.ty/u),f.invert(),l.uniforms.uMapCoord=i.mapCoord,l.uniforms.uClampFrame=i.uClampFrame,l.uniforms.uClampOffset=i.uClampOffset,l.uniforms.uTextureTransform=f,l.uniforms.uSizeAnchor[0]=c,l.uniforms.uSizeAnchor[1]=u,l.uniforms.uSizeAnchor[2]=e.view.anchor.x,l.uniforms.uSizeAnchor[3]=e.view.anchor.y,l.update()}}_getGpuTilingSprite(e){return this._gpuTilingSprite[e.uid]||this._initGpuTilingSprite(e)}_initGpuTilingSprite(e){let t=e.view,n=t.texture.source.style;n.addressMode="repeat",n.update();let i=new ft({geometry:Rs,shader:new ar({texture:t.texture})}),o=new Me({original:e,view:i}),s=new E,a={meshRenderable:o,textureMatrix:s};return this._gpuTilingSprite[e.uid]=a,a}_getBatchedTilingSprite(e){return this._gpuBatchedTilingSprite[e.uid]||this._initBatchedTilingSprite(e)}_initBatchedTilingSprite(e){let t=new ft({geometry:new pt,texture:e.view.texture});t.roundPixels=this._renderer._roundPixels|e.view.roundPixels;let n=new Me({original:e,view:t});return this._gpuBatchedTilingSprite[e.uid]=n,n}_updateBatchPositions(e){let t=this._getBatchedTilingSprite(e),n=e.view,o=t.view.geometry.getBuffer("aPosition").data,s=n.anchor.x,a=n.anchor.y;o[0]=-s*n.width,o[1]=-a*n.height,o[2]=(1-s)*n.width,o[3]=-a*n.height,o[4]=(1-s)*n.width,o[5]=(1-a)*n.height,o[6]=-s*n.width,o[7]=(1-a)*n.height}_updateBatchUvs(e){let t=e.view,n=t.texture.frameWidth,i=t.texture.frameHeight,a=this._getBatchedTilingSprite(e).view.geometry.getBuffer("aUV").data,l=0,c=0;t._applyAnchorToTexture&&(l=t.anchor.x,c=t.anchor.y),a[0]=a[6]=-l,a[2]=a[4]=1-l,a[1]=a[3]=-c,a[5]=a[7]=1-c;let u=E.shared;u.copyFrom(t._tileTransform.matrix),u.tx/=t.width,u.ty/=t.height,u.invert(),u.scale(t.width/n,t.height/i),Us(a,2,0,u)}destroy(){this._renderableHash=null,this._gpuTilingSprite=null,this._gpuBatchedTilingSprite=null,this._renderer=null}};gt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"tilingSprite"};function Us(r,e,t,n){let i=0,o=r.length/(e||2),s=n.a,a=n.b,l=n.c,c=n.d,u=n.tx,d=n.ty;for(t*=e;i<o;){let m=r[t],h=r[t+1];r[t]=s*m+l*h+u,r[t+1]=a*m+c*h+d,t+=e,i++}}var lr=class{constructor(e){this.uid=I("graphicsView"),this.canBundle=!0,this.owner=Wt,this.renderPipeId="graphics",this.roundPixels=0,this._context=e||new Ze,this._context.on("update",this.onGraphicsContextUpdate,this)}set context(e){e!==this._context&&(this._context.off("update",this.onGraphicsContextUpdate,this),this._context=e,this._context.on("update",this.onGraphicsContextUpdate,this),this.onGraphicsContextUpdate())}get context(){return this._context}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}onGraphicsContextUpdate(){this._didUpdate=!0,this.owner.onViewUpdate()}destroy(e=!1){this.owner=null,(typeof e=="boolean"?e:e?.context)&&this._context.destroy(e),this._context=null}};var Zi={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},qi={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}};var ze={};function Fs(r){let e=[];if(r===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let n=0;n<r;n++)e.push(`@group(1) @binding(${t++}) var textureSource${n+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${n+1}: sampler;`)}return e.join(`
`)}function As(r){let e=[];if(r===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<r;t++)t===r-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function Ji(r){return ze[r]||(ze[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${Fs(16)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${As(16)}
            `}}),ze[r]}function Gs(r){let e=[];for(let t=0;t<r;t++)t>0&&e.push("else"),t<r-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uSamplers[${t}], vUV);`),e.push("}");return e.join(`
`)}function Qi(r){return ze[r]||(ze[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uSamplers[${r}];
              
            `,main:`
    
                ${Gs(16)}
            `}}),ze[r]}var eo=new Int32Array(16);for(let r=0;r<16;r++)eo[r]=r;var to=new N({uSamplers:{value:eo,type:"u32",size:16}},{isStatic:!0});var ro={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:` 
            outColor = vColor * calculateMSDFAlpha(outColor, localUniforms.uDistance);
        `}};var no={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `}},io={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }

            uniform float uDistance;
        `,main:`

            outColor = vColor * calculateMSDFAlpha(outColor, uDistance);
        `}};var cr=class extends xe{constructor(){let e=new N({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new E,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),t=rr({name:"sdf-shader",bits:[Zi,Ji(16),ro,no,or]}),n=nr({name:"sdf-shader",bits:[qi,Qi(16),ir,io,sr]});super({glProgram:n,gpuProgram:t,resources:{localUniforms:e,batchSamplers:to}})}};var oo=["_fontFamily","_fontStyle","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides"];function so(r){let e=[],t=0;for(let n=0;n<oo.length;n++){let i=oo[n];e[t++]=r[i]}return t=ao(r._fill,e,t),t=Ls(r._stroke,e,t),e.join("-")}function ao(r,e,t){return r&&(e[t++]=r.color,e[t++]=r.alpha,e[t++]=r.fill?.uid),t}function Ls(r,e,t){return r&&(t=ao(r,e,t),e[t++]=r.width,e[t++]=r.alignment,e[t++]=r.cap,e[t++]=r.join,e[t++]=r.miterLimit),t}var We=class extends Y{constructor(r={}){super(),Es(r);let e={...We.defaultTextStyle,...r};for(let t in We.defaultTextStyle){let n=t;this[n]=e[t]}this.dropShadow=null,typeof e.fill=="string"?this.fontSize=parseInt(e.fontSize,10):this.fontSize=e.fontSize,r.dropShadow&&(r.dropShadow instanceof Boolean?r.dropShadow===!0&&(this.dropShadow={...We.defaultTextStyle.dropShadow}):this.dropShadow={...We.defaultTextStyle.dropShadow,...r.dropShadow}),this.update()}get align(){return this._align}set align(r){this._align=r,this.update()}get breakWords(){return this._breakWords}set breakWords(r){this._breakWords=r,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(r){this._dropShadow=r,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(r){this._fontFamily=r,this.update()}get fontSize(){return this._fontSize}set fontSize(r){this._fontSize=r,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(r){this._fontStyle=r,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(r){this._fontVariant=r,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(r){this._fontWeight=r,this.update()}get leading(){return this._leading}set leading(r){this._leading=r,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(r){this._letterSpacing=r,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(r){this._lineHeight=r,this.update()}get padding(){return this._padding}set padding(r){this._padding=r,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(r){this._textBaseline=r,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(r){this._whiteSpace=r,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(r){this._wordWrap=r,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(r){this._wordWrapWidth=r,this.update()}get fill(){return this._originalFill}set fill(r){r!==this._originalFill&&(this._originalFill=r,this._fill=Vr(r,Ze.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(r){r!==this._originalFill&&(this._originalFill=r,this._stroke=Vr(r,Ze.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=so(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new We({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(r=!1){if(this.removeAllListeners(),typeof r=="boolean"?r:r?.texture){let t=typeof r=="boolean"?r:r?.textureSource;this._fill?.texture&&this._fill.texture.destroy(t),this._originalFill?.texture&&this._originalFill.texture.destroy(t),this._stroke?.texture&&this._stroke.texture.destroy(t),this._originalStroke?.texture&&this._originalStroke.texture.destroy(t)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}},ur=We;ur.defaultTextStyle={align:"left",breakWords:!1,dropShadow:{alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5},fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};function Es(r){let e=r;if(typeof e.dropShadow=="boolean"&&(Q(J,"dropShadow is now an object, not a boolean"),r.dropShadow={alpha:e.dropShadowAlpha??1,angle:e.dropShadowAngle,blur:e.dropShadowBlur??0,color:e.dropShadowColor,distance:e.dropShadowDistance}),e.strokeThickness){Q(J,"strokeThickness is now a part of stroke");let t=e.stroke;r.stroke={color:t,width:e.strokeThickness}}if(Array.isArray(e.fill)){Q(J,"gradient fill is now a fill pattern: `new FillGradient(...)`");let t=new zt(0,0,0,r.fontSize*1.7),n=e.fill.map(i=>K.shared.setValue(i).toNumber());n.forEach((i,o)=>{let s=e.fillGradientStops[o]??o/n.length;t.addColorStop(s,i)}),r.fill={fill:t}}}var xn=class{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){let n=$.ADAPTER.createCanvas();n.width=e,n.height=t;let i=n.getContext("2d");return{canvas:n,context:i}}getOptimalCanvasAndContext(e,t,n=1){e=Math.ceil(e*n-1e-6),t=Math.ceil(t*n-1e-6),e=ce(e),t=ce(t);let i=(e<<17)+(t<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let o=this._canvasPool[i].pop();return o||(o=this._createCanvasAndContext(e,t)),o}returnCanvasAndContext(e){let{width:t,height:n}=e.canvas,i=(t<<17)+(n<<1);this._canvasPool[i].push(e)}clear(){this._canvasPool={}}},ue=new xn;var Ds=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function ke(r){let e=typeof r.fontSize=="number"?`${r.fontSize}px`:r.fontSize,t=r.fontFamily;Array.isArray(r.fontFamily)||(t=r.fontFamily.split(","));for(let n=t.length-1;n>=0;n--){let i=t[n].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Ds.includes(i)&&(i=`"${i}"`),t[n]=i}return`${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${e} ${t.join(",")}`}var bn={willReadFrequently:!0},T=class{static get experimentalLetterSpacingSupported(){let r=T._experimentalLetterSpacingSupported;if(r!==void 0){let e=$.ADAPTER.getCanvasRenderingContext2D().prototype;r=T._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return r}constructor(r,e,t,n,i,o,s,a,l){this.text=r,this.style=e,this.width=t,this.height=n,this.lines=i,this.lineWidths=o,this.lineHeight=s,this.maxLineWidth=a,this.fontProperties=l}static measureText(r=" ",e,t=T._canvas,n=e.wordWrap){let i=`${r}:${e.styleKey}`;if(T._measurementCache[i])return T._measurementCache[i];let o=ke(e),s=T.measureFont(o);s.fontSize===0&&(s.fontSize=e.fontSize,s.ascent=e.fontSize);let a=T.__context;a.font=o;let c=(n?T._wordWrap(r,e,t):r).split(/(?:\r\n|\r|\n)/),u=new Array(c.length),d=0;for(let y=0;y<c.length;y++){let _=T._measureText(c[y],e.letterSpacing,a);u[y]=_,d=Math.max(d,_)}let m=e._stroke?.width||0,h=d+m;e.dropShadow&&(h+=e.dropShadow.distance);let f=e.lineHeight||s.fontSize+m,b=Math.max(f,s.fontSize+m*2)+(c.length-1)*(f+e.leading);return e.dropShadow&&(b+=e.dropShadow.distance),new T(r,e,h,b,c,u,f+e.leading,d,s)}static _measureText(r,e,t){let n=!1;T.experimentalLetterSpacingSupported&&(T.experimentalLetterSpacing?(t.letterSpacing=`${e}px`,t.textLetterSpacing=`${e}px`,n=!0):(t.letterSpacing="0px",t.textLetterSpacing="0px"));let i=t.measureText(r).width;return i>0&&(n?i-=e:i+=(T.graphemeSegmenter(r).length-1)*e),i}static _wordWrap(r,e,t=T._canvas){let n=t.getContext("2d",bn),i=0,o="",s="",a=Object.create(null),{letterSpacing:l,whiteSpace:c}=e,u=T._collapseSpaces(c),d=T._collapseNewlines(c),m=!u,h=e.wordWrapWidth+l,f=T._tokenize(r);for(let b=0;b<f.length;b++){let p=f[b];if(T._isNewline(p)){if(!d){s+=T._addLine(o),m=!u,o="",i=0;continue}p=" "}if(u){let _=T.isBreakingSpace(p),v=T.isBreakingSpace(o[o.length-1]);if(_&&v)continue}let y=T._getFromCache(p,l,a,n);if(y>h)if(o!==""&&(s+=T._addLine(o),o="",i=0),T.canBreakWords(p,e.breakWords)){let _=T.wordWrapSplit(p);for(let v=0;v<_.length;v++){let x=_[v],U=x,L=1;for(;_[v+L];){let B=_[v+L];if(!T.canBreakChars(U,B,p,v,e.breakWords))x+=B;else break;U=B,L++}v+=L-1;let F=T._getFromCache(x,l,a,n);F+i>h&&(s+=T._addLine(o),m=!1,o="",i=0),o+=x,i+=F}}else{o.length>0&&(s+=T._addLine(o),o="",i=0);let _=b===f.length-1;s+=T._addLine(p,!_),m=!1,o="",i=0}else y+i>h&&(m=!1,s+=T._addLine(o),o="",i=0),(o.length>0||!T.isBreakingSpace(p)||m)&&(o+=p,i+=y)}return s+=T._addLine(o,!1),s}static _addLine(r,e=!0){return r=T._trimRight(r),r=e?`${r}
`:r,r}static _getFromCache(r,e,t,n){let i=t[r];return typeof i!="number"&&(i=T._measureText(r,e,n)+e,t[r]=i),i}static _collapseSpaces(r){return r==="normal"||r==="pre-line"}static _collapseNewlines(r){return r==="normal"}static _trimRight(r){if(typeof r!="string")return"";for(let e=r.length-1;e>=0;e--){let t=r[e];if(!T.isBreakingSpace(t))break;r=r.slice(0,-1)}return r}static _isNewline(r){return typeof r!="string"?!1:T._newlines.includes(r.charCodeAt(0))}static isBreakingSpace(r,e){return typeof r!="string"?!1:T._breakingSpaces.includes(r.charCodeAt(0))}static _tokenize(r){let e=[],t="";if(typeof r!="string")return e;for(let n=0;n<r.length;n++){let i=r[n],o=r[n+1];if(T.isBreakingSpace(i,o)||T._isNewline(i)){t!==""&&(e.push(t),t=""),e.push(i);continue}t+=i}return t!==""&&e.push(t),e}static canBreakWords(r,e){return e}static canBreakChars(r,e,t,n,i){return!0}static wordWrapSplit(r){return T.graphemeSegmenter(r)}static measureFont(r){if(T._fonts[r])return T._fonts[r];let e=T._context;e.font=r;let t=e.measureText(T.METRICS_STRING+T.BASELINE_SYMBOL),n={ascent:t.actualBoundingBoxAscent,descent:t.actualBoundingBoxDescent,fontSize:t.actualBoundingBoxAscent+t.actualBoundingBoxDescent};return T._fonts[r]=n,n}static clearMetrics(r=""){r?delete T._fonts[r]:T._fonts={}}static get _canvas(){if(!T.__canvas){let r;try{let e=new OffscreenCanvas(0,0);if(e.getContext("2d",bn)?.measureText)return T.__canvas=e,e;r=$.ADAPTER.createCanvas()}catch{r=$.ADAPTER.createCanvas()}r.width=r.height=10,T.__canvas=r}return T.__canvas}static get _context(){return T.__context||(T.__context=T._canvas.getContext("2d",bn)),T.__context}},H=T;H.METRICS_STRING="|\xC9q\xC5";H.BASELINE_SYMBOL="M";H.BASELINE_MULTIPLIER=1.4;H.HEIGHT_MULTIPLIER=2;H.graphemeSegmenter=(()=>{if(typeof Intl?.Segmenter=="function"){let r=new Intl.Segmenter;return e=>[...r.segment(e)].map(t=>t.segment)}return r=>[...r]})();H.experimentalLetterSpacing=!1;H._fonts={};H._newlines=[10,13];H._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];H._measurementCache={};function He(r,e){if(r.texture===A.WHITE&&!r.fill)return K.shared.setValue(r.color).toHex();if(r.fill){if(r.fill instanceof Nn){let t=r.fill,n=e.createPattern(t.texture.source.resource,"repeat"),i=t.transform.copyTo(E.shared);return i.scale(t.texture.frameWidth,t.texture.frameHeight),n.setTransform(i),n}else if(r.fill instanceof zt){let t=r.fill;if(t.type==="linear"){let n=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);return t.gradientStops.forEach(i=>{n.addColorStop(i.offset,K.shared.setValue(i.color).toHex())}),n}}}else{let t=e.createPattern(r.texture.source.resource,"repeat"),n=r.matrix.copyTo(E.shared);return n.scale(r.texture.frameWidth,r.texture.frameHeight),t.setTransform(n),t}return oe("FillStyle not recognised",r),"red"}function dr(r){if(r==="")return[];typeof r=="string"&&(r=[r]);let e=[];for(let t=0,n=r.length;t<n;t++){let i=r[t];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");let o=i[0].charCodeAt(0),s=i[1].charCodeAt(0);if(s<o)throw new Error("[BitmapFont]: Invalid character range.");for(let a=o,l=s;a<=l;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}var xt=class extends On{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=4,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;let t=e,n=t.style.clone();n.fontSize=this.baseMeasurementFontSize,t.overrideFill&&(n._fill.color=16777215,n._fill.alpha=1,n._fill.texture=A.WHITE,n._fill.fill=null),this._style=n,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4;let i=ke(n),o=this;o.fontMetrics=H.measureFont(i),o.lineHeight=n.lineHeight||this.fontMetrics.fontSize||n.fontSize}ensureCharacters(e){let t=dr(e).filter(b=>!this._currentChars.includes(b)).filter((b,p,y)=>y.indexOf(b)===p);if(!t.length)return;this._currentChars=[...this._currentChars,...t];let n;this._currentPageIndex===-1?n=this._nextPage():n=this.pages[this._currentPageIndex];let{canvas:i,context:o}=n.canvasAndContext,s=n.texture.source,a=this._style,l=this._currentX,c=this._currentY,u=this.baseRenderedFontSize/this.baseMeasurementFontSize,d=this._padding*u,m=a.fontStyle==="italic"?2:1,h=0,f=!1;for(let b=0;b<t.length;b++){let p=t[b],y=H.measureText(p,a,i,!1),_=m*y.width*u,v=y.height*u,x=_+d*2,U=v+d*2;if(f=!1,p!==`
`&&p!=="\r"&&p!=="	"&&p!==" "&&(f=!0,h=Math.ceil(Math.max(U,h))),l+x>512&&(c+=h,h=U,l=0,c+h>512)){s.update();let F=this._nextPage();i=F.canvasAndContext.canvas,o=F.canvasAndContext.context,s=F.texture.source,c=0}let L=_/u-(a.dropShadow?.distance??0)-(a._stroke?.width??0);if(this.chars[p]={id:p.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:L,kerning:{}},f){this._drawGlyph(o,y,l+d,c+d,u,a);let F=s.width*u,B=s.height*u,w=new ie(l/F,c/B,x/F,U/B);this.chars[p].texture=new A({source:s,layout:{frame:w}}),l+=Math.ceil(x)}}s.update(),this._currentX=l,this._currentY=c,this._skipKerning&&this._applyKerning(t,o)}get pageTextures(){return Q(J,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){let n=this._measureCache;for(let i=0;i<e.length;i++){let o=e[i];for(let s=0;s<this._currentChars.length;s++){let a=this._currentChars[s],l=n[o];l||(l=n[o]=t.measureText(o).width);let c=n[a];c||(c=n[a]=t.measureText(a).width);let u=t.measureText(o+a).width,d=u-(l+c);d&&(this.chars[o].kerning[a]=d),u=t.measureText(o+a).width,d=u-(l+c),d&&(this.chars[a].kerning[o]=d)}}}_nextPage(){this._currentPageIndex++;let e=this.resolution,t=ue.getOptimalCanvasAndContext(512,512,e);this._setupContext(t.context,this._style,e);let n=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new A({source:new $n({resource:t.canvas,resolution:n,alphaMode:"premultiply-alpha-on-upload"})}),o={canvasAndContext:t,texture:i};return this.pages[this._currentPageIndex]=o,o}_setupContext(e,t,n){t.fontSize=this.baseRenderedFontSize,e.scale(n,n),e.font=ke(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;let i=t._stroke,o=i?.width??0;if(i&&(e.lineWidth=o,e.lineJoin=i.join,e.miterLimit=i.miterLimit,e.strokeStyle=He(i,e)),t._fill&&(e.fillStyle=He(t._fill,e)),t.dropShadow){let s=t.dropShadow,a=K.shared.setValue(s.color).toArray(),l=s.blur*n,c=s.distance*n;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${s.alpha})`,e.shadowBlur=l,e.shadowOffsetX=Math.cos(s.angle)*c,e.shadowOffsetY=Math.sin(s.angle)*c}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,n,i,o,s){let a=t.text,l=t.fontProperties,u=(s._stroke?.width??0)*o,d=n+u/2,m=i-u/2,h=l.descent*o,f=t.lineHeight*o;s.stroke&&u&&e.strokeText(a,d,m+f-h),s._fill&&e.fillText(a,d,m+f-h)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){let{canvasAndContext:t,texture:n}=this.pages[e];ue.returnCanvasAndContext(t),n.destroy(!0)}this.pages=null}};function hr(r,e,t){let n={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};n.offsetY=t.baseLineOffset;let i=n.lines[0],o=null,s=!0,a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=h=>{let f=i.width;for(let b=0;b<a.index;b++){let p=h.positions[b];i.chars.push(h.chars[b]),i.charPositions.push(p+f)}i.width+=h.width,s=!1,a.width=0,a.index=0,a.chars.length=0},c=()=>{let h=i.chars.length-1,f=i.chars[h];for(;f===" ";)i.width-=t.chars[f].xAdvance,f=i.chars[--h];n.width=Math.max(n.width,i.width),i={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},s=!0,n.lines.push(i),n.height+=t.lineHeight},u=t.baseMeasurementFontSize/e.fontSize,d=e.letterSpacing*u,m=e.wordWrapWidth*u;for(let h=0;h<r.length+1;h++){let f,b=h===r.length;b||(f=r[h]);let p=t.chars[f];if(/(?:\s)/.test(f)||f==="\r"||f===`
`||b){if(!s&&e.wordWrap&&i.width+a.width-d>m?(c(),l(a),b||i.charPositions.push(0)):(a.start=i.width,l(a),b||i.charPositions.push(0)),f==="\r"||f===`
`)i.width!==0&&c();else if(!b){let x=p.xAdvance+(p.kerning[o]||0)+d;i.width+=x,i.spaceWidth=x,i.spacesIndex.push(i.charPositions.length),i.chars.push(f)}}else{let v=p.kerning[o]||0,x=p.xAdvance+v+d;a.positions[a.index++]=a.width+v,a.chars.push(f),a.width+=x}o=f}return c(),e.align==="center"?Is(n):e.align==="right"?zs(n):e.align==="justify"&&Ws(n),n}function Is(r){for(let e=0;e<r.lines.length;e++){let t=r.lines[e],n=r.width/2-t.width/2;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=n}}function zs(r){for(let e=0;e<r.lines.length;e++){let t=r.lines[e],n=r.width-t.width;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=n}}function Ws(r){let e=r.width;for(let t=0;t<r.lines.length;t++){let n=r.lines[t],i=0,o=n.spacesIndex[i++],s=0,a=n.spacesIndex.length,c=(e-n.width)/a;for(let u=0;u<n.charPositions.length;u++)u===o&&(o=n.spacesIndex[i++],s+=c),n.charPositions[u]+=s}}var vn=class{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(e,t){let n=t.fontFamily,i=!0;t._fill.fill&&(n+=t._fill.fill.uid,i=!1),ae.has(n)||ae.set(n,new xt({style:t,overrideFill:i,...this.defaultOptions}));let o=ae.get(n);return o.ensureCharacters?.(e),o}getLayout(e,t){let n=this.getFont(e,t);return hr(e.split(""),t,n)}measureText(e,t){return this.getLayout(e,t)}install(e,t,n){if(!e)throw new Error("[BitmapFontManager] Property `name` is required.");n={...this.defaultOptions,...n};let i=t instanceof ur?t:new ur(t),o=i._fill.fill!==null&&i._fill.fill!==void 0,s=new xt({style:i,overrideFill:o,skipKerning:n.skipKerning,padding:n.padding,resolution:n.resolution}),a=dr(n.chars);return s.ensureCharacters(a.join("")),ae.set(e,s),s}},lo=new vn;var _n=class extends Me{constructor(){super({view:new lr})}},bt=class{constructor(e){this._gpuBitmapText={},this._renderer=e}validateRenderable(e){let t=this._getGpuBitmapText(e);return e.view._didUpdate&&(e.view._didUpdate=!1,this._updateContext(e,t.view.context)),this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){let n=this._getGpuBitmapText(e);e.view._didUpdate&&(e.view._didUpdate=!1,this._updateContext(e,n.view.context)),this._renderer.renderPipes.graphics.addRenderable(n,t),n.view.context.customShader&&this._updateDistanceField(e)}destroyRenderable(e){this._destroyRenderableByUid(e.uid)}_destroyRenderableByUid(e){G.return(this._gpuBitmapText[e]),this._gpuBitmapText[e]=null}updateRenderable(e){let t=this._getGpuBitmapText(e);this._renderer.renderPipes.graphics.updateRenderable(t),t.view.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){let n=e.view,i=lo.getFont(n.text,n._style);t.clear(),i.distanceField.type!=="none"&&(t.customShader||(this._sdfShader||(this._sdfShader=new cr),t.customShader=this._sdfShader));let o=Array.from(n.text),s=n._style,a=(s._stroke?.width||0)/2;a+=i.baseLineOffset;let l=hr(o,s,i),c=0,u=s.padding,d=l.scale;t.translate(-n.anchor._x*l.width-u,-n.anchor._y*(l.height+l.offsetY)-u).scale(d,d);let m=s._fill.color;for(let h=0;h<l.lines.length;h++){let f=l.lines[h];for(let b=0;b<f.charPositions.length;b++){let p=o[c++],y=i.chars[p];y?.texture&&t.texture(y.texture,m,Math.round(f.charPositions[b]+y.xOffset),Math.round(a+y.yOffset))}a+=i.lineHeight}}_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this._initGpuText(e)}_initGpuText(e){e.view._style.update();let t=G.get(_n,e);return this._gpuBitmapText[e.uid]=t,t.view.roundPixels=this._renderer._roundPixels|e.view.roundPixels,this._updateContext(e,t.view.context),e.on("destroyed",()=>{this.destroyRenderable(e)}),this._gpuBitmapText[e.uid]}_updateDistanceField(e){let t=this._getGpuBitmapText(e).view.context,n=e.view,i=n._style.fontFamily,o=ae.get(i),{a:s,b:a,c:l,d:c}=e.layerTransform,u=Math.sqrt(s*s+a*a),d=Math.sqrt(l*l+c*c),m=(Math.abs(u)+Math.abs(d))/2,h=o.baseRenderedFontSize/n._style.fontSize,f=n.resolution??this._renderer.resolution,b=m*o.distanceField.range*(1/h)*f;t.customShader.resources.localUniforms.uniforms.uDistance=b}destroy(){for(let e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,this._sdfShader?.destroy(!0),this._sdfShader=null,this._renderer=null}};bt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"bitmapText"};var vt=class{constructor(e){this._gpuText=Object.create(null),this._renderer=e}validateRenderable(e){let t=this._getGpuText(e),n=e.view._getKey();if(t.currentKey!==n){let i=e.view,o=i.resolution??this._renderer.resolution,{width:s,height:a}=this._renderer.canvasText.getTextureSize(i.text,o,i._style);return!(this._renderer.canvasText.getReferenceCount(t.currentKey)===1&&s===t.texture._source.width&&a===t.texture._source.height)}return!1}addRenderable(e,t){let i=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(i)}updateRenderable(e){let n=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),n.batcher.updateElement(n)}destroyRenderable(e){this._destroyRenderableById(e.uid)}_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey),G.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){let t=e.view._getKey(),n=this._getGpuText(e),i=n.batchableSprite;n.currentKey!==t&&this._updateGpuText(e),e.view._didUpdate=!1;let o=e.view._style.padding;qe(i.bounds,e.view.anchor,i.texture,o)}_updateGpuText(e){let t=this._getGpuText(e),n=t.batchableSprite,i=e.view;t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey);let o=i.resolution??this._renderer.resolution;t.texture=n.texture=this._renderer.canvasText.getTexture(i.text,o,i._style,i._getKey()),t.currentKey=i._getKey(),n.texture=t.texture}_getGpuText(e){return this._gpuText[e.uid]||this._initGpuText(e)}_initGpuText(e){e.view._style.update();let n={texture:null,currentKey:"--",batchableSprite:G.get(pe)};return n.batchableSprite.renderable=e,n.batchableSprite.bounds=[0,1,0,0],n.batchableSprite.roundPixels=this._renderer._roundPixels|e.view.roundPixels,this._gpuText[e.uid]=n,this._updateText(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),n}destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}};vt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"text"};var Hs=new he;function fr(r,e,t,n){let i=Hs;i.minX=0,i.minY=0,i.maxX=r.width/n|0,i.maxY=r.height/n|0;let o=j.getOptimalTexture(i.width,i.height,n,!1);return o.source.uploadMethodId="image",o.source.resource=r,o.source.alphaMode="premultiply-alpha-on-upload",o.frameWidth=e/n,o.frameHeight=t/n,o.source.update(),o.layout.updateUvs(),o}var _t=class{constructor(){this._activeTextures={}}getTextureSize(e,t,n){let i=H.measureText(e||" ",n),o=Math.ceil(Math.ceil(Math.max(1,i.width)+n.padding*2)*t),s=Math.ceil(Math.ceil(Math.max(1,i.height)+n.padding*2)*t);return o=Math.ceil(o-1e-6),s=Math.ceil(s-1e-6),o=ce(o),s=ce(s),{width:o,height:s}}getTexture(e,t,n,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].texture;let o=H.measureText(e||" ",n),s=Math.ceil(Math.ceil(Math.max(1,o.width)+n.padding*2)*t),a=Math.ceil(Math.ceil(Math.max(1,o.height)+n.padding*2)*t),l=ue.getOptimalCanvasAndContext(s,a),{canvas:c}=l;this.renderTextToCanvas(e,n,t,l);let u=fr(c,s,a,t);return this._activeTextures[i]={canvasAndContext:l,texture:u,usageCount:1},u}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let t=this._activeTextures[e];if(t.usageCount--,t.usageCount===0){ue.returnCanvasAndContext(t.canvasAndContext),j.returnTexture(t.texture);let n=t.texture.source;n.resource=null,n.uploadMethodId="unknown",n.alphaMode="no-premultiply-alpha",this._activeTextures[e]=null}}getReferenceCount(e){return this._activeTextures[e].usageCount}renderTextToCanvas(e,t,n,i){let{canvas:o,context:s}=i,a=ke(t),l=H.measureText(e||" ",t),c=l.lines,u=l.lineHeight,d=l.lineWidths,m=l.maxLineWidth,h=l.fontProperties,f=o.height;if(s.resetTransform(),s.scale(n,n),s.clearRect(0,0,l.width+4,l.height+4),t._stroke?.width){let _=t._stroke;s.lineWidth=_.width,s.miterLimit=_.miterLimit,s.lineJoin=_.join,s.lineCap=_.cap}s.font=a;let b,p,y=t.dropShadow?2:1;for(let _=0;_<y;++_){let v=t.dropShadow&&_===0,x=v?Math.ceil(Math.max(1,f)+t.padding*2):0,U=x*n;if(v){s.fillStyle="black",s.strokeStyle="black";let B=t.dropShadow,w=B.color,S=B.alpha;s.shadowColor=K.shared.setValue(w).setAlpha(S).toRgbaString();let te=B.blur*n,ne=B.distance*n;s.shadowBlur=te,s.shadowOffsetX=Math.cos(B.angle)*ne,s.shadowOffsetY=Math.sin(B.angle)*ne+U}else s.globalAlpha=t._fill?.alpha??1,s.fillStyle=t._fill?He(t._fill,s):null,t._stroke?.width&&(s.strokeStyle=He(t._stroke,s)),s.shadowColor="black";let L=(u-h.fontSize)/2;u-h.fontSize<0&&(L=0);let F=t._stroke?.width??0;for(let B=0;B<c.length;B++)b=F/2,p=F/2+B*u+h.ascent+L,t.align==="right"?b+=m-d[B]:t.align==="center"&&(b+=(m-d[B])/2),t._stroke&&this._drawLetterSpacing(c[B],t,i,b+t.padding,p+t.padding-x,!0),t._fill!==void 0&&this._drawLetterSpacing(c[B],t,i,b+t.padding,p+t.padding-x)}}_drawLetterSpacing(e,t,n,i,o,s=!1){let{context:a}=n,l=t.letterSpacing,c=!1;if(H.experimentalLetterSpacingSupported&&(H.experimentalLetterSpacing?(a.letterSpacing=`${l}px`,a.textLetterSpacing=`${l}px`,c=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),l===0||c){s?a.strokeText(e,i,o):a.fillText(e,i,o);return}let u=i,d=H.graphemeSegmenter(e),m=a.measureText(e).width,h=0;for(let f=0;f<d.length;++f){let b=d[f];s?a.strokeText(b,u,o):a.fillText(b,u,o);let p="";for(let y=f+1;y<d.length;++y)p+=d[y];h=a.measureText(p).width,u+=m-h+l,m=h}}destroy(){this._activeTextures=null}};_t.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"canvasText"};var yt=class{constructor(e){this._gpuText=Object.create(null),this._renderer=e}validateRenderable(e){let t=this._getGpuText(e),n=e.view._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==n}addRenderable(e){let n=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(n)}updateRenderable(e){let n=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),n.batcher.updateElement(n)}destroyRenderable(e){this._destroyRenderableById(e.uid)}_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey),G.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){let t=e.view._getKey(),n=this._getGpuText(e),i=n.batchableSprite;n.currentKey!==t&&this._updateGpuText(e).catch(s=>{console.error(s)}),e.view._didUpdate=!1;let o=e.view._style.padding;qe(i.bounds,e.view.anchor,i.texture,o)}async _updateGpuText(e){e.view._didUpdate=!1;let t=this._getGpuText(e);if(t.generatingTexture)return;let n=e.view._getKey();this._renderer.htmlText.decreaseReferenceCount(t.currentKey),t.generatingTexture=!0,t.currentKey=n;let i=e.view,o=i.resolution??this._renderer.resolution,s=await this._renderer.htmlText.getManagedTexture(i.text,o,i._style,i._getKey()),a=t.batchableSprite;a.texture=t.texture=s,t.generatingTexture=!1,t.textureNeedsUploading=!0,e.view.onUpdate();let l=e.view._style.padding;qe(a.bounds,e.view.anchor,a.texture,l)}_getGpuText(e){return this._gpuText[e.uid]||this._initGpuText(e)}_initGpuText(e){e.view._style.update();let n={texture:A.EMPTY,currentKey:"--",batchableSprite:G.get(pe),textureNeedsUploading:!1,generatingTexture:!1},i=n.batchableSprite;return i.renderable=e,i.texture=A.EMPTY,i.bounds=[0,1,0,0],i.roundPixels=this._renderer._roundPixels|e.view.roundPixels,this._gpuText[e.uid]=n,e.on("destroyed",()=>{this.destroyRenderable(e)}),n}destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}};yt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"htmlText"};function co(){let{userAgent:r}=$.ADAPTER.getNavigator();return/^((?!chrome|android).)*safari/i.test(r)}function uo(r,e){let t=/font-family:([^;"\s]+)/g,n=r.match(t),i=[e],o={};return o[e]=!0,n&&n.forEach(s=>{let a=s.split(":")[1].trim();o[a]||(i.push(a),o[a]=!0)}),i}async function ho(r){let t=await(await $.ADAPTER.fetch(r)).blob(),n=new FileReader;return await new Promise((o,s)=>{n.onloadend=()=>o(n.result),n.onerror=s,n.readAsDataURL(t)})}async function yn(r,e){let t=await ho(e);return`@font-face {
        font-family: "${r.fontFamily}";
        src: url('${t}');
        font-weight: ${r.fontWeight};
        font-style: ${r.fontStyle};
    }`}async function fo(r,e){let t=r.filter(n=>ae.has(n)).map((n,i)=>{if(!wt.has(n)){let{url:o}=ae.get(n);i===0?wt.set(n,yn(e,o)):wt.set(n,yn({...be.defaultFontOptions,fontFamily:n},o))}return wt.get(n)});return(await Promise.all(t)).join(`
`)}function po(r,e,t,n,i){let{domElement:o,styleElement:s,svgRoot:a}=i;o.innerHTML=r,o.setAttribute("style",`transform: scale(${t});
${e.cssStyle}`),s.textContent=n;let{width:l,height:c}=i.image;return a.setAttribute("width",l.toString()),a.setAttribute("height",c.toString()),new XMLSerializer().serializeToString(a)}function mo(r,e){let t=ue.getOptimalCanvasAndContext(r.width,r.height,e),{context:n}=t;return n.clearRect(0,0,r.width,r.height),n.drawImage(r,0,0),ue.returnCanvasAndContext(t),t.canvas}function go(r,e,t){return new Promise(async n=>{t&&await new Promise(i=>setTimeout(i,100)),r.onload=()=>{n()},r.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,r.crossOrigin="anonymous"})}var xo;function bo(r,e,t,n){n=n||xo||(xo=new St);let{domElement:i,styleElement:o,svgRoot:s}=n;i.innerHTML=r,i.setAttribute("style",e.cssStyle),t&&(o.textContent=t),document.body.appendChild(s);let a=i.getBoundingClientRect();s.remove();let l=H.measureFont(e.fontStyle).descent;return{width:a.width,height:a.height+l}}var vo="http://www.w3.org/2000/svg",_o="http://www.w3.org/1999/xhtml",wt=new Map,St=class{constructor(){this.svgRoot=document.createElementNS(vo,"svg"),this.foreignObject=document.createElementNS(vo,"foreignObject"),this.domElement=document.createElementNS(_o,"div"),this.styleElement=document.createElementNS(_o,"style"),this.image=new Image;let{foreignObject:e,svgRoot:t,styleElement:n,domElement:i}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",t.appendChild(e),e.appendChild(n),e.appendChild(i)}},be=class{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===Re.WEBGPU}getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}getManagedTexture(e,t,n,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].promise;let o=this._buildTexturePromise(e,t,n).then(s=>(this._activeTextures[i].texture=s,s));return this._activeTextures[i]={texture:null,promise:o,usageCount:1},o}async _buildTexturePromise(e,t,n){let i=G.get(St),o=uo(e,n.fontFamily),s=await fo(o,n),a=bo(e,n,s,i),l=Math.ceil(Math.ceil(Math.max(1,a.width)+n.padding*2)*t),c=Math.ceil(Math.ceil(Math.max(1,a.height)+n.padding*2)*t),u=i.image;u.width=l|0,u.height=c|0;let d=po(e,n,t,s,i);await go(u,d,co()&&o.length>0);let m=u;this._createCanvas&&(m=mo(u,t));let h=fr(m,m.width,m.height,t);return this._createCanvas&&this._renderer.texture.initSource(h.source),G.return(i),h}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let t=this._activeTextures[e];!t||(t.usageCount--,t.usageCount===0&&(t.texture?this._cleanUp(t):t.promise.then(n=>{t.texture=n,this._cleanUp(t)}).catch(()=>{oe("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}_cleanUp(e){j.returnTexture(e.texture),e.texture.source.resource=null,e.texture.source.uploadMethodId="unknown"}getReferenceCount(e){return this._activeTextures[e].usageCount}destroy(){this._activeTextures=null}};be.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"htmlText"};be.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"};var Tt=class{constructor(e,t){this.state=ee.for2d(),this._batches=Object.create(null),this._geometries=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}buildStart(e){if(!this._batches[e.uid]){let t=new Ge;this._batches[e.uid]=t,this._geometries[t.uid]=new Fe}this._activeBatch=this._batches[e.uid],this._activeGeometry=this._geometries[this._activeBatch.uid],this._activeBatch.begin()}addToBatch(e){this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){let t=this._activeBatch,n=this._activeGeometry;t.finish(e),n.indexBuffer.data=t.indexBuffer,n.indexBuffer.update(t.indexSize*4),n.buffers[0].data=t.attributeBuffer.float32View}upload(e){let t=this._batches[e.uid],n=this._geometries[t.uid];t.dirty&&(t.dirty=!1,n.buffers[0].update(t.attributeSize*4))}execute(e){if(e.action==="startBatch"){let t=e.batcher,n=this._geometries[t.uid];this._adaptor.start(this,n)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor.destroy(),this._adaptor=null;for(let e in this._batches)this._batches[e].destroy();this._batches=null;for(let e in this._geometries)this._geometries[e].destroy();this._geometries=null}};Tt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"batch"};var yo=class extends xe{constructor(r){r={...yo.defaultOptions,...r},super(r),this.enabled=!0,this._state=ee.for2d(),this.padding=r.padding,typeof r.antialias=="boolean"?this.antialias=r.antialias?"on":"off":this.antialias=r.antialias??"inherit",this.resolution=r.resolution,this.blendRequired=r.blendRequired,this.addResource("filterUniforms",0,0),this.addResource("uSampler",0,1)}apply(r,e,t,n){r.applyFilter(this,e,t,n)}get blendMode(){return this._state.blendMode}set blendMode(r){this._state.blendMode=r}},Ct=yo;Ct.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"inherit",blendRequired:!1};var wo=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mapTexture;

uniform float alpha;
uniform vec4 maskClamp;

out vec4 fragColor;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = alpha; 
    vec4 original = texture(uSampler, vTextureCoord);
    vec4 masky = texture(mapTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    fragColor = original;
}
`;var So=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 inputSize;
uniform vec4 outputFrame;
uniform vec4 outputTexture;
uniform mat3 filterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * outputFrame.zw + outputFrame.xy;
       
    position.x = position.x * (2.0 / outputTexture.x) - 1.0;
    position.y = position.y * (2.0*outputTexture.z / outputTexture.y) - outputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (outputFrame.zw * inputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( filterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`;var wn=`struct GlobalFilterUniforms {
  inputSize:vec4<f32>,
  inputPixel:vec4<f32>,
  inputClamp:vec4<f32>,
  outputFrame:vec4<f32>,
  globalFrame:vec4<f32>,
  outputTexture:vec4<f32>,  
};

struct MaskUniforms {
  filterMatrix:mat3x3<f32>,
  maskClamp:vec4<f32>,
  alpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uSampler: texture_2d<f32>;
@group(0) @binding(2) var mySampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var mapTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.outputFrame.zw + gfu.outputFrame.xy;

    position.x = position.x * (2.0 / gfu.outputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.outputTexture.z / gfu.outputTexture.y) - gfu.outputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.outputFrame.zw * gfu.inputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.globalFrame.zw) + (gfu.globalFrame.xy / gfu.globalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.filterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.globalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.maskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(mapTexture, mySampler, filterUv);
    var source = textureSample(uSampler, mySampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

    var a = (alphaMul * mask.r) * clip;

    return vec4(source.rgb * a, source.a) * a;
  
}`;var pr=class extends Ct{constructor({sprite:e}){let t=new Hn(e.texture),n=new N({filterMatrix:{value:new E,type:"mat3x3<f32>"},maskClamp:{value:t.uClampFrame,type:"vec4<f32>"},alpha:{value:1,type:"f32"}}),i=new Pe({vertex:{source:wn,entryPoint:"mainVertex"},fragment:{source:wn,entryPoint:"mainFragment"}}),o=me.from({vertex:So,fragment:wo,name:"mask-filter"});super({gpuProgram:i,glProgram:o,resources:{filterUniforms:n,mapTexture:e.texture.source}}),this.sprite=e,this._textureMatrix=t}apply(e,t,n,i){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.filterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.mapTexture=this.sprite.texture.source,e.applyFilter(this,t,n,i)}};var Os=new he,Sn=class extends Dt{constructor(){super({filters:[new pr({sprite:new jn(A.EMPTY)})]})}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}},Bt=class{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,n){let i=this._renderer;if(i.renderPipes.batch.break(n),n.add({type:"alphaMask",action:"pushMaskBegin",mask:e,canBundle:!1,maskedContainer:t}),e.renderMaskToTexture){let o=e.mask;o.includeInBuild=!0,Ue(o,n,i.renderPipes),o.includeInBuild=!1}i.renderPipes.batch.break(n),n.add({type:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,canBundle:!1})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({type:"alphaMask",action:"popMaskEnd",mask:e,canBundle:!1})}execute(e){let t=this._renderer,n=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){let i=G.get(Sn);if(n){e.mask.mask.measurable=!0;let o=It(e.mask.mask,!0,Os);e.mask.mask.measurable=!1,o.ceil();let s=j.getOptimalTexture(o.width,o.height,1,!1),a=t.renderTarget.push(s,!0);t.globalUniforms.push({projectionData:a,offset:o,worldColor:4294967295});let l=i.sprite;l.texture=s,l.worldTransform.tx=o.minX,l.worldTransform.ty=o.minY,this._activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer,filterTexture:s})}else i.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){let i=this._activeMaskStage[this._activeMaskStage.length-1];n&&(t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({type:"filter",action:"pushFilter",container:i.maskedContainer,filterEffect:i.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();let i=this._activeMaskStage.pop();n&&j.returnTexture(i.filterTexture),G.return(i.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}};Bt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"alphaMask"};var Mt=class{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,n){this._renderer.renderPipes.batch.break(n);let o=this._colorStack;o[this._colorStackIndex]=o[this._colorStackIndex-1]&e.mask;let s=this._colorStack[this._colorStackIndex];s!==this._currentColor&&(this._currentColor=s,n.add({type:"colorMask",colorMask:s,canBundle:!1})),this._colorStackIndex++}pop(e,t,n){this._renderer.renderPipes.batch.break(n);let o=this._colorStack;this._colorStackIndex--;let s=o[this._colorStackIndex-1];s!==this._currentColor&&(this._currentColor=s,n.add({type:"colorMask",colorMask:s,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}};Mt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"colorMask"};var Tn=(r=>(r[r.NONE=0]="NONE",r[r.COLOR=16384]="COLOR",r[r.STENCIL=1024]="STENCIL",r[r.DEPTH=256]="DEPTH",r[r.COLOR_DEPTH=16640]="COLOR_DEPTH",r[r.COLOR_STENCIL=17408]="COLOR_STENCIL",r[r.DEPTH_STENCIL=1280]="DEPTH_STENCIL",r[r.ALL=17664]="ALL",r))(Tn||{});var Z=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",r[r.NONE=4]="NONE",r))(Z||{});var Pt=class{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,n){let i=e,o=this._renderer;o.renderPipes.batch.break(n),o.renderPipes.blendMode.setBlendMode(i.mask,"none",n),n.add({type:"stencilMask",action:"pushMaskBegin",mask:e,canBundle:!1});let s=i.mask;s.includeInBuild=!0,this._maskHash.has(i)||this._maskHash.set(i,{instructionsStart:0,instructionsLength:0});let a=this._maskHash.get(i);a.instructionsStart=n.instructionSize,Ue(s,n,o.renderPipes),s.includeInBuild=!1,o.renderPipes.batch.break(n),n.add({type:"stencilMask",action:"pushMaskEnd",mask:e,canBundle:!1});let l=n.instructionSize-a.instructionsStart-1;a.instructionsLength=l;let c=o.renderTarget.renderTarget.uid;this._maskStackHash[c]===void 0&&(this._maskStackHash[c]=0),this._maskStackHash[c]++}pop(e,t,n){let i=e,o=this._renderer,s=o.renderTarget.renderTarget.uid;this._maskStackHash[s]--,o.renderPipes.batch.break(n),o.renderPipes.blendMode.setBlendMode(i.mask,"none",n),n.add({type:"stencilMask",action:"popMaskBegin",canBundle:!1});let a=this._maskHash.get(e);if(this._maskStackHash[s]!==0)for(let l=0;l<a.instructionsLength;l++)n.instructions[n.instructionSize++]=n.instructions[a.instructionsStart++];n.add({type:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){let t=this._renderer,n=t.renderTarget.renderTarget.uid,i=this._maskStackHash[n]??0;e.action==="pushMaskBegin"?(i++,t.stencil.setStencilMode(Z.RENDERING_MASK_ADD,i),t.colorMask.setMask(0)):e.action==="pushMaskEnd"?(t.stencil.setStencilMode(Z.MASK_ACTIVE,i),t.colorMask.setMask(15)):e.action==="popMaskBegin"?(i--,i!==0?(t.stencil.setStencilMode(Z.RENDERING_MASK_REMOVE,i),t.colorMask.setMask(0)):t.renderTarget.clear(Tn.STENCIL)):e.action==="popMaskEnd"&&(i===0?t.stencil.setStencilMode(Z.DISABLED,i):t.stencil.setStencilMode(Z.MASK_ACTIVE,i),t.colorMask.setMask(15)),this._maskStackHash[n]=i}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}};Pt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"stencilMask"};var To=class{constructor(){this._backgroundColorRgba=[0,0,0,0],this.clearBeforeRender=!0,this._backgroundColor=new K(0),this.color=this._backgroundColor,this.alpha=1}init(r){r={...To.defaultOptions,...r},this.clearBeforeRender=r.clearBeforeRender,this.color=r.background||r.backgroundColor||this._backgroundColor,this.alpha=r.backgroundAlpha}get color(){return this._backgroundColor}set color(r){this._backgroundColor.setValue(r),this._backgroundColorRgba=this._backgroundColor.toArray()}get alpha(){return this._backgroundColor.alpha}set alpha(r){this._backgroundColor.setAlpha(r)}get colorRgba(){return this._backgroundColorRgba}destroy(){}},mr=To;mr.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"background",priority:0};mr.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var Co=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 fragColor;

uniform float uBlend;

uniform sampler2D uSampler;
uniform sampler2D backTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(backTexture, vTextureCoord);
    vec4 front = texture(uSampler, vTextureCoord);

    {MAIN}
}
`;var Bo=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

uniform globalUniforms {
  mat3 projectionMatrix;
  mat3 worldTransformMatrix;
  float worldAlpha;
};

uniform vec4 inputSize;
uniform vec4 outputFrame;
uniform vec4 backgroundFrame;
uniform vec4 outputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * outputFrame.zw + outputFrame.xy;
    
    position.x = position.x * (2.0 / outputTexture.x) - 1.0;
    position.y = position.y * (2.0*outputTexture.z / outputTexture.y) - outputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;var Mo=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

struct GlobalFilterUniforms {
  inputSize:vec4<f32>,
  inputPixel:vec4<f32>,
  inputClamp:vec4<f32>,
  outputFrame:vec4<f32>,
  globalFrame:vec4<f32>,
  outputTexture:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uSampler: texture_2d<f32>;
@group(0) @binding(2) var mySampler : sampler;
@group(0) @binding(3) var backTexture: texture_2d<f32>;

@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.outputFrame.zw + gfu.outputFrame.xy;

    position.x = position.x * (2.0 / gfu.outputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.outputTexture.z / gfu.outputTexture.y) - gfu.outputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.outputFrame.zw * gfu.inputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.globalFrame.zw) + (gfu.globalFrame.xy / gfu.globalFrame.zw);  
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {


   var back =  textureSample(backTexture, mySampler, uv);
   var front = textureSample(uSampler, mySampler, uv);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`;var M=class extends Ct{constructor(e){let t=e.gpu,n=Po({source:Mo,...t}),i=new Pe({vertex:{source:n,entryPoint:"mainVertex"},fragment:{source:n,entryPoint:"mainFragment"}}),o=e.gl,s=Po({source:Co,...o}),a=new me({vertex:Bo,fragment:s}),l=new N({uBlend:{value:1,type:"f32"}});super({gpuProgram:i,glProgram:a,blendRequired:!0,resources:{blendUniforms:l,backTexture:A.EMPTY}})}};function Po(r){let{source:e,functions:t,main:n}=r;return e.replace("{FUNCTIONS}",t).replace("{MAIN}",n)}var Oe=`
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `;var Ve=`
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;var gr=class extends M{constructor(){super({gl:{functions:`
                ${Oe}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendColor(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                ${Ve}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var xr=class extends M{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendColorBurn(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var br=class extends M{constructor(){super({gl:{functions:`
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendColorDodge(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var vr=class extends M{constructor(){super({gl:{functions:`
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendDarken(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var _r=class extends M{constructor(){super({gl:{functions:`
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendDifference(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var yr=class extends M{constructor(){super({gl:{functions:`
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendDivide(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var wr=class extends M{constructor(){super({gl:{functions:`
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendExclusion(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Sr=class extends M{constructor(){super({gl:{functions:`
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendHardLight(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Tr=class extends M{constructor(){super({gl:{functions:`
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendHardMix(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Cr=class extends M{constructor(){super({gl:{functions:`
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLighten(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Br=class extends M{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLinearBurn(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Mr=class extends M{constructor(){super({gl:{functions:`
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLinearDodge(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Pr=class extends M{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendLinearLight(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var kr=class extends M{constructor(){super({gl:{functions:`
                ${Oe}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLuminosity(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                ${Ve}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Rr=class extends M{constructor(){super({gl:{functions:`
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendNegation(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Ur=class extends M{constructor(){super({gl:{functions:`
                float overlay(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendOverlay(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Fr=class extends M{constructor(){super({gl:{functions:`
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Ar=class extends M{constructor(){super({gl:{functions:`
                ${Oe}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                ${Ve}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Gr=class extends M{constructor(){super({gl:{functions:`
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Lr=class extends M{constructor(){super({gl:{functions:`
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Er=class extends M{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendVividLight(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var Cn={color:gr,"color-burn":xr,"color-dodge":br,darken:vr,difference:_r,divide:yr,exclusion:wr,"hard-light":Sr,"hard-mix":Tr,lighten:Cr,"linear-burn":Br,"linear-dodge":Mr,"linear-light":Pr,luminosity:kr,negation:Rr,overlay:Ur,"pin-light":Fr,saturation:Ar,"soft-light":Gr,subtract:Lr,"vivid-light":Er},kt=class{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,n){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(n),this._isAdvanced=!!Cn[t],this._isAdvanced&&(this._beginAdvancedBlendMode(n),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);let t=this._activeBlendMode;if(!Cn[t]){oe(`Unable to assign 'BLEND_MODES.${t}' using the blend mode pipeline`);return}this._filterHash[t]||(this._filterHash[t]=new Dt({filters:[new Cn[t]]}));let n={type:"filter",action:"pushFilter",renderables:[],filterEffect:this._filterHash[t],canBundle:!1};this._renderableList=n.renderables,e.add(n)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({type:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(let e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}};kt.extension={type:[g.WebGLPipes,g.WebGPUPipes,g.CanvasPipes],name:"blendMode"};var ko=class{constructor(r){this._renderer=r}_normalizeOptions(r,e={}){return r instanceof se||r instanceof A?{target:r,...e}:{...e,...r}}async image(r){let e=new Image;return e.src=await this.base64(r),e}async base64(r){r=this._normalizeOptions(r,ko.defaultImageOptions);let{format:e,quality:t}=r,n=this.canvas(r);if(n.toBlob!==void 0)return new Promise((i,o)=>{n.toBlob(s=>{if(!s){o(new Error("ICanvas.toBlob failed!"));return}let a=new FileReader;a.onload=()=>i(a.result),a.onerror=o,a.readAsDataURL(s)},e,t)});if(n.toDataURL!==void 0)return n.toDataURL(e,t);if(n.convertToBlob!==void 0){let i=await n.convertToBlob({type:e,quality:t});return new Promise((o,s)=>{let a=new FileReader;a.onload=()=>o(a.result),a.onerror=s,a.readAsDataURL(i)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(r){r=this._normalizeOptions(r);let e=r.target,t=this._renderer,n=e instanceof A?e:t.textureGenerator.generateTexture(r),i=t.texture.generateCanvas(n);return e instanceof se&&n.destroy(),i}pixels(r){r=this._normalizeOptions(r);let e=r.target,t=this._renderer,n=e instanceof A?e:t.textureGenerator.generateTexture(r),i=t.texture.getPixels(n);return e instanceof se&&n.destroy(),i}texture(r){return r=this._normalizeOptions(r),r.target instanceof A?r.target:this._renderer.textureGenerator.generateTexture(r)}download(r){r=this._normalizeOptions(r);let e=this.canvas(r),t=document.createElement("a");t.download=r.filename??"image.png",t.href=e.toDataURL("image/png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}log(r){let e=r.width??200;r=this._normalizeOptions(r);let t=this.canvas(r),n=t.toDataURL();console.log(`[Pixi Texture] ${t.width}px ${t.height}px`);let i=["font-size: 1px;",`padding: ${e}px ${300}px;`,`background: url(${n}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",i)}destroy(){this._renderer=null}},Dr=ko;Dr.extension={type:[g.WebGLSystem,g.WebGPUSystem],name:"extract"};Dr.defaultImageOptions={format:"png",quality:1};var Ir=class extends A{static create(e){return new A({source:new le(e)})}resize(e,t,n){return this.source.resize(e,t,n),this}};var Vs=new ie,$s=new he,Ns=[0,0,0,0],Rt=class{constructor(e){this._renderer=e}generateTexture(e){e instanceof se&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});let t=e.resolution||this._renderer.resolution,n=e.target,i=e.clearColor;i?i=Array.isArray(i)&&i.length===4?i:K.shared.setValue(i).toArray():i=Ns;let o=e.frame?.copyTo(Vs)||Ln(n,$s).rectangle;o.width=Math.max(o.width,1/t)|0,o.height=Math.max(o.height,1/t)|0;let s=Ir.create({...e.textureSourceOptions,width:o.width,height:o.height,resolution:t}),a=E.shared.translate(-o.x,-o.y);return this._renderer.render({container:n,transform:a,target:s,clearColor:i}),s}destroy(){let e=this;e._renderer=null}};Rt.extension={type:[g.WebGLSystem,g.WebGPUSystem],name:"textureGenerator"};var Ut=class{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({projectionData:e,worldTransformMatrix:t,worldColor:n,offset:i}){let o=this._renderer.renderTarget.renderTarget,s=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:o,worldTransformMatrix:new E,worldColor:4294967295,offset:new Se},a={projectionMatrix:e?.projectionMatrix||o.projectionMatrix,resolution:e?.size||o.size,worldTransformMatrix:t||s.worldTransformMatrix,worldColor:n||s.worldColor,offset:i||s.offset,bindGroup:null},l=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(l);let c=l.uniforms;c.projectionMatrix=a.projectionMatrix,c.uResolution=a.resolution,c.worldTransformMatrix.copyFrom(a.worldTransformMatrix),c.worldTransformMatrix.tx-=a.offset.x,c.worldTransformMatrix.ty-=a.offset.y,c.worldAlpha=(a.worldColor>>24&255)/255,l.update();let u;this._renderer.renderPipes.uniformBatch?u=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(l,!1):(this._renderer.uniformBuffer.updateUniformGroup(l),u=this._bindGroupPool.pop()||new q,this._activeBindGroups.push(u),u.setResource(l,0)),a.bindGroup=u,this._currentGlobalUniformData=a}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1]}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new N({projectionMatrix:{value:new E,type:"mat3x3<f32>"},worldTransformMatrix:{value:new E,type:"mat3x3<f32>"},worldAlpha:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}},{ubo:!0,isStatic:!0})}destroy(){let e=this;e._renderer=null}};Ut.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"globalUniforms"};var Bn={f32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"mat2x2<f32>":48,"mat3x3<f32>":48,"mat4x4<f32>":64};function Ro(r){let e=r.map(o=>({data:o,offset:0,size:0})),t=0,n=0,i=0;for(let o=0;o<e.length;o++){let s=e[o];if(t=Bn[s.data.type],!t)throw new Error(`Unknown type ${s.data.type}`);if(s.data.size>1&&(t=Math.max(t,16)*s.data.size),s.size=t,n%t!==0&&n<16){let a=n%t%16;n+=a,i+=a}n+t>16?(i=Math.ceil(i/16)*16,s.offset=i,i+=t,n=t):(s.offset=i,n+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:e,size:i}}var zr=[{type:"mat3x3<f32>",test:r=>r.value.a!==void 0,code:r=>`
                var ${r}_matrix = uv.${r}.toArray(true);

                data[offset] = ${r}_matrix[0];
                data[offset+1] = ${r}_matrix[1];
                data[offset+2] = ${r}_matrix[2];

                data[offset + 4] = ${r}_matrix[3];
                data[offset + 5] = ${r}_matrix[4];
                data[offset + 6] = ${r}_matrix[5];

                data[offset + 8] = ${r}_matrix[6];
                data[offset + 9] = ${r}_matrix[7];
                data[offset + 10] = ${r}_matrix[8];
            `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.width!==void 0,code:r=>`
                        v = uv.${r};

                        data[offset] = v.x;
                        data[offset+1] = v.y;
                        data[offset+2] = v.width;
                        data[offset+3] = v.height;
                    `},{type:"vec2<f32>",test:r=>r.type==="vec2<f32>"&&r.size===1&&r.value.x!==void 0,code:r=>`
                    v = uv.${r};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                `}];var js={f32:`
        data[offset] = v;
    `,"vec2<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,"vec3<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,"vec4<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,"mat4x4<f32>":`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `};function Uo(r){let e=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
    `],t=0;for(let i=0;i<r.length;i++){let o=r[i],s=o.data.name,a=!1,l=0;for(let c=0;c<zr.length;c++)if(zr[c].test(o.data)){l=o.offset/4,e.push(`offset += ${l-t};`,zr[c].code(s)),a=!0;break}if(!a)if(o.data.size>1){let c=Math.max(Bn[o.data.type]/16,1),u=o.data.value.length/o.data.size,d=(4-u%4)%4;l=o.offset/4,e.push(`
                    v = uv.${s};
                    offset += ${l-t};

                    let arrayOffset = offset;
                    
                    t = 0;

                    for(var i=0; i < ${o.data.size*c}; i++)
                    {
                        for(var j = 0; j < ${u}; j++)
                        {
                            data[arrayOffset++] = v[t++];
                        }
                        ${d!==0?"arrayOffset += ${remainder};":""}
                    }
                `)}else{let c=js[o.data.type];l=o.offset/4,e.push(`
                    v = uv.${s};
                    offset += ${l-t};
                    ${c};
                `)}t=l}let n=e.join(`
`);return new Function("uv","data","offset",n)}var Ft=class{constructor(){this._syncFunctionHash=Object.create(null)}ensureUniformGroup(e){e._syncFunction||this._initUniformGroup(e)}_initUniformGroup(e){let t=e.signature,n=this._syncFunctionHash[t];if(!n){let i=Object.keys(e.uniformStructures).map(a=>e.uniformStructures[a]),o=Ro(i),s=Uo(o.uboElements);n=this._syncFunctionHash[t]={layout:o,syncFunction:s}}return e._syncFunction=n.syncFunction,e.buffer=new X({data:new Float32Array(n.layout.size/4),usage:z.UNIFORM|z.COPY_DST}),e._syncFunction}syncUniformGroup(e,t,n){let i=e._syncFunction||this._initUniformGroup(e);return t||(t=e.buffer.data),n||(n=0),i(e.uniforms,t,n),!0}updateUniformGroup(e){if(e.isStatic&&!e.dirtyId)return!1;e.dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}};Ft.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"uniformBuffer"};var Fo=!1,Ao="8.0.0-beta.3";function Go(r){if(!Fo){if($.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){let e=[`%c  %c  %c  %c  %c PixiJS %c v${Ao} (${r}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${Ao} - ${r} - http://www.pixijs.com/`);Fo=!0}}var $e=class{constructor(e){this._renderer=e}init(e){e.hello&&Go(this._renderer.name)}};$e.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"hello",priority:0};$e.defaultOptions={hello:!1};var Lo=class{constructor(r){this._renderer=r,this.count=0,this.checkCount=0}init(r){r={...Lo.defaultOptions,...r},this.checkCountMax=r.textureGCCheckCountMax,this.maxIdle=r.textureGCAMaxIdle,this.active=r.textureGCActive}postrender(){!this._renderer.renderingToScreen||(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){let r=this._renderer.texture.managedTextures;for(let e=0;e<r.length;e++){let t=r[e];t.resource&&t.touched>-1&&this.count-t.touched>this.maxIdle&&(t.touched=-1,t.unload())}}destroy(){this._renderer=null}},At=Lo;At.extension={type:[g.WebGLSystem,g.WebGPUSystem],name:"textureGC"};At.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:60*60,textureGCCheckCountMax:600};An.add(At);var Wr=class extends le{constructor(e){e.resource||(e.resource=$.ADAPTER.createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),e.alphaMode??(e.alphaMode="premultiply-alpha-on-upload"),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;let t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas()}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight}resize(e=this.width,t=this.height,n=this._resolution){super.resize(e,t,n),this.resizeCanvas()}};var Mn=new Map;function Eo(r,e){if(!Mn.has(r)){let t=new A({source:new Wr({resource:r,...e})});Mn.set(r,t)}return Mn.get(r)}var Do=class{get resolution(){return this.texture.source._resolution}set resolution(r){this.texture.source.resize(this.texture.source.width,this.texture.source.height,r)}init(r){r={...Do.defaultOptions,...r},r.element&&(Q(J,"ViewSystem.element has been renamed to ViewSystem.canvas"),r.canvas=r.element),this.screen=new ie(0,0,r.width,r.height),this.canvas=r.canvas||$.ADAPTER.createCanvas(),this.antialias=!!r.antialias,this.texture=Eo(this.canvas,r),this.multiView=!!r.multiView,this.autoDensity&&(this.canvas.style.width=`${this.texture.width}px`,this.canvas.style.height=`${this.texture.height}px`)}resize(r,e,t){this.texture.source.resize(r,e,t),this.screen.width=this.texture.frameWidth,this.screen.height=this.texture.frameHeight,this.autoDensity&&(this.canvas.style.width=`${r}px`,this.canvas.style.height=`${e}px`)}destroy(r=!1){(typeof r=="boolean"?r:!!r?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}},Hr=Do;Hr.extension={type:[g.WebGLSystem,g.WebGPUSystem,g.CanvasSystem],name:"view",priority:0};Hr.defaultOptions={width:800,height:600,resolution:$.RESOLUTION,autoDensity:!1,antialias:!1};var Gx=[mr,Qe,ct,Ut,$e,Hr,_t,be,rt,Ft,At,Rt,Dr,Wn],Lx=[kt,Tt,ht,et,dt,ut,vt,yt,bt,gt,Je,Bt,Pt,Mt];var Dx={name:"texture-bit",fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},Ix={name:"texture-bit",fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};var Io=class extends Y{constructor({buffer:e,offset:t,size:n}){super(),this.uid=I("buffer"),this.touched=0,this.resourceType="bufferResource",this.resourceId=I("buffer"),this.bufferResource=!0,this.buffer=e,this.offset=t,this.size=n,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this.resourceId=I("buffer"),this.emit("change",this)}destroy(e=!1){e&&this.buffer.destroy(),this.buffer=null}};var Ne=[];Ne[Z.NONE]=void 0;Ne[Z.DISABLED]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilWriteMask:0,stencilReadMask:0,stencilBack:{compare:"always",passOp:"keep"}};Ne[Z.RENDERING_MASK_ADD]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"increment-clamp"}};Ne[Z.RENDERING_MASK_ADD]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"increment-clamp"}};Ne[Z.RENDERING_MASK_REMOVE]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"decrement-clamp"}};Ne[Z.MASK_ACTIVE]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilWriteMask:0,stencilBack:{compare:"equal",passOp:"keep"}};function Nx(r){let e=r.colorTexture.source.resource;return e instanceof HTMLCanvasElement&&document.body.contains(e)}function zo(r,e,t,n,i,o){let s=o?1:-1;return r.identity(),r.a=1/n*2,r.d=s*(1/i*2),r.tx=-1-e*r.a,r.ty=-s-t*r.d,r}var Wo=class{constructor(r={}){if(this.uid=I("renderTarget"),this.width=0,this.height=0,this.resolution=1,this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._projectionMatrix=new E,this._size=new Float32Array(2),r={...Wo.defaultDescriptor,...r},this.width=r.width,this.height=r.height,this.resolution=r.resolution,this.stencil=r.stencil,this._viewport=new ie(0,0,this.width,this.height),typeof r.colorTextures=="number")for(let e=0;e<r.colorTextures;e++)this.colorTextures.push(new A({source:new le({width:this.width,height:this.height,resolution:r.resolution,antialias:r.antialias})}));else{this.colorTextures=[...r.colorTextures];let e=this.colorTexture.source;this._resize(e.width,e.height,e._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),r.depthTexture&&(this.depthTexture=new A({source:new le({width:this.width,height:this.height,resolution:this.resolution,format:"stencil8"})}))}get size(){let r=this._size;return r[0]=this.pixelWidth,r[1]=this.pixelHeight,r}get pixelWidth(){return this.width*this.resolution}get pixelHeight(){return this.height*this.resolution}get colorTexture(){return this.colorTextures[0]}get projectionMatrix(){let r=this.colorTexture;return zo(this._projectionMatrix,0,0,r.frameWidth,r.frameHeight,!this.isRoot),this._projectionMatrix}get viewport(){let r=this.colorTexture,e=r.source,t=e.pixelWidth,n=e.pixelHeight,i=this._viewport,o=r.layout.frame;return i.x=o.x*t|0,i.y=o.y*n|0,i.width=o.width*t|0,i.height=o.height*n|0,i}onSourceResize(r){this._resize(r.width,r.height,r._resolution,!0)}_resize(r,e,t=this.resolution,n=!1){this.width=r,this.height=e,this.resolution=t,this.dirtyId++,this.colorTextures.forEach((i,o)=>{n&&o===0||i.source.resize(r,e,t)}),this.depthTexture&&this.depthTexture.source.resize(r,e,t)}destroy(){throw new Error("Method not implemented.")}},Ks=Wo;Ks.defaultDescriptor={width:0,height:0,resolution:1,colorTextures:1,stencil:!0,antialias:!1};export{q as a,si as b,me as c,rr as d,nr as e,Zi as f,qi as g,Ji as h,Qi as i,or as j,sr as k,Re as l,N as m,xe as n,Ki as o,ir as p,Dx as q,Ix as r,ee as s,Ht as t,Kn as u,X as v,z as w,Yr as x,gi as y,to as z,ue as A,Tn as B,Z as C,Eo as D,Gx as E,Lx as F,Io as G,Ne as H,Nx as I,Ks as J};
