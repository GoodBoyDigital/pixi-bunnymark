import{a as Bo}from"./chunk-WLHTQZBF.js";import{B as se,E as ae,F as Bi,G as A,H as Mi,I as Pi,J as ki,K as At,L as Ri,M as Ar,N as Ke,O as Gt,P as Ye,Q as Ui,a as we,c as m,d as xi,e as K,f as j,g as E,h as I,i as J,j as Q,k as Ut,l as G,m as ie,n as de,o as vi,p as Ft,q as ne,r as _i,s as yi,t as wi,u as Si,v as Ti,w as oe,y as Ci,z as V}from"./chunk-MPTJJU46.js";import{c as Co}from"./chunk-5GOQA2B2.js";var Pe=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r))(Pe||{});var Lt=class{constructor(e){this.items=[],this._name=e}emit(e,t,i,n,o,s,a,l){let{name:c,items:u}=this;for(let d=0,g=u.length;d<g;d++)u[d][c](e,t,i,n,o,s,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){let t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}};var Mo=["init","destroy","contextChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Fi=class{constructor(e){this.runners=Object.create(null),this.renderPipes=Object.create(null),this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name;let t=[...Mo,...e.runners??[]];this._addRunners(...t),this._addSystems(e.systems),this._addPipes(e.renderPipes,e.renderPipeAdaptors)}async init(e={}){for(let t in this._systemsHash)e={...this._systemsHash[t].constructor.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let t=0;t<this.runners.init.items.length;t++)await this.runners.init.items[t].init(e)}render(e,t){let i=e;if(i instanceof oe&&(i={container:i},t&&(Q(J,"passing a second argument is deprecated, please use render options instead"),i.target=t.renderTexture)),i.target||(i.target=this.view.texture),i.target===this.view.texture&&(this._lastObjectRendered=i.container),i.clearColor){let n=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=n?i.clearColor:j.shared.setValue(i.clearColor).toArray()}this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i)}resize(e,t,i){this.view.resize(e,t,i)}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e}get width(){return this.view.texture.frameWidth}get height(){return this.view.texture.frameHeight}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new Lt(t)})}_addSystems(e){let t;for(t in e){let i=e[t];this._addSystem(i.value,i.name)}}_addSystem(e,t){let i=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=i,this._systemsHash[t]=i;for(let n in this.runners)this.runners[n].add(i);return this}_addPipes(e,t){let i=t.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{let o=n.value,s=n.name,a=i[s];this.renderPipes[s]=new o(this,a?new a:null)})}destroy(e=!1){let t=this;this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(i=>{i.destroy()}),t.runners=null,this._systemsHash=null,t.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}};var Xe=class{constructor(e){this._renderer=e}push(e,t,i){this._renderer.renderPipes.batch.break(i),i.add({type:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,i){this._renderer.renderPipes.batch.break(i),i.add({type:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this._renderer.filter.push(e):e.action==="popFilter"&&this._renderer.filter.pop()}destroy(){this._renderer=null}};Xe.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"filter"};var q=class{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(let i in e){let n=e[i];this.setResource(n,t++)}this.updateKey()}update(){this.updateKey()}updateKey(){if(!this._dirty)return;this._dirty=!1;let e=[],t=0;for(let i in this.resources)e[t++]=this.resources[i].resourceId;this.key=e.join("|")}setResource(e,t){let i=this.resources[t];e!==i&&(i&&e.off?.("change",this.onResourceChange,this),e.on?.("change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}touch(e){let t=this.resources;for(let i in t)t[i].touched=e}destroy(){let e=this.resources;for(let t in e)e[t].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(){this._dirty=!0,this.update()}};var Y=class extends K{constructor({data:e,size:t,usage:i,label:n}){super(),this.resourceType="buffer",this.resourceId=I("bufferResource"),this.touched=0,this.uid=I("buffer"),this._updateID=1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,t=t??e?.byteLength;let o=!!e;this.descriptor={size:t,usage:i,mappedAtCreation:o,label:n}}get data(){return this._data}set data(e){if(this._data!==e){let t=this._data;this._data=e,t.length!==e.length?(this.descriptor.size=e.byteLength,this.resourceId=I("bufferResource"),this.emit("change",this)):this.emit("update",this)}}update(e){this._updateSize=e||this.descriptor.size,this._updateID++,this.emit("update",this)}destroy(){this.emit("destroy",this),this._data=null,this.descriptor=null,this.removeAllListeners()}};var z=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(z||{});function Gr(r,e){if(!(r instanceof Y)){let t=e?z.INDEX:z.VERTEX;r instanceof Array&&(e?(r=new Uint32Array(r),t=z.INDEX|z.COPY_DST):(r=new Float32Array(r),t=z.VERTEX|z.COPY_DST)),r=new Y({data:r,label:"index-mesh-buffer",usage:t})}return r}var he=class extends K{constructor({attributes:e,indexBuffer:t,topology:i}){super(),this.uid=I("geometry"),this._layoutKey=0,this.attributes=e,this.buffers=[];for(let n in e){let o=e[n];o.buffer=Gr(o.buffer,!1),this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this))}t&&(this.indexBuffer=Gr(t,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(let e in this.attributes){let t=this.attributes[e];return this.getBuffer(e).data.length/(t.stride/4||t.size)}return 0}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null}};function Ai(r,e){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Gi=class{constructor(r,e){this.touched=0,this.uid=I("uniform"),this.resourceType="uniformGroup",this.resourceId=this.uid,this.isUniformGroup=!0,this.dirtyId=0,e={...Gi.DEFAULT,...e},this.uniformStructures=r;let t={};for(let i in r){let n=r[i];n.name=i,n.size=n.size??1,n.value??(n.value=Ai(n.type,n.size)),t[i]=n.value}this.uniforms=t,this.dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this.signature=Object.keys(t).map(i=>`${i}-${r[i].type}`).join("-")}update(){this.dirtyId++}},$=Gi;$.DEFAULT={ubo:!1,isStatic:!1};function le(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}var Po=0,Lr=class{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,i){let n=new ae({...this.textureOptions,width:e,height:t,resolution:1,antialias:i});return new A({source:n,label:`texturePool_${Po++}`})}getOptimalTexture(e,t,i=1,n){let o=Math.ceil(e*i-1e-6),s=Math.ceil(t*i-1e-6);o=le(o),s=le(s);let a=(o<<17)+(s<<1)+(n?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(o,s,n)),l.source._resolution=i,l.source.width=o/i,l.source.height=s/i,l.source.pixelWidth=o,l.source.pixelHeight=s,l.frameX=0,l.frameY=0,l.frameWidth=e,l.frameHeight=t,l.layout.update(),this._poolKeyHash[l.id]=a,l}getSameSizeTexture(e,t=!1){let i=e.source;return this.getOptimalTexture(e.width,e.height,i._resolution,t)}returnTexture(e){let t=this._poolKeyHash[e.id];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(let t in this._texturePool){let i=this._texturePool[t];if(i)for(let n=0;n<i.length;n++)i[n].destroy(!0)}this._texturePool={}}},N=new Lr;function Li(r,e){e.clear();let t=e.matrix;for(let i=0;i<r.length;i++){let n=r[i];n.layerVisibleRenderable<3||(e.matrix=n.worldTransform,n.view.addBounds(e))}return e.matrix=t,e}var ko=new he({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),shaderLocation:0,format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])}),qe=class{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new $({inputSize:{value:new Float32Array(4),type:"vec4<f32>"},inputPixel:{value:new Float32Array(4),type:"vec4<f32>"},inputClamp:{value:new Float32Array(4),type:"vec4<f32>"},outputFrame:{value:new Float32Array(4),type:"vec4<f32>"},globalFrame:{value:new Float32Array(4),type:"vec4<f32>"},outputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new q({}),this.renderer=e}push(e){let t=this.renderer,i=e.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());let n=this._filterStack[this._filterStackIndex];this._filterStackIndex++;let o=n.bounds;if(e.renderables?Li(e.renderables,o):Ft(e.container,!0,o),i.length===0){n.skip=!0;return}let s=t.renderTarget.rootRenderTarget.colorTexture.source._resolution,a=0,l=t.renderTarget.rootRenderTarget.colorTexture.source.antialias,c=!1,u=!1;for(let d=0;d<i.length;d++){let g=i[d];if(s=Math.min(s,g.resolution),a+=g.padding,g.antialias!=="inherit"&&(g.antialias==="on"?l=!0:l=!1),!!!(g.compatibleRenderers&t.type)){u=!1;break}if(g.blendRequired&&!(t.backBuffer?.useBackBuffer??!0)){ne("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),u=!1;break}u=g.enabled||u,c=c||g.blendRequired}if(!u){n.skip=!0;return}if(o.scale(s).fit(t.renderTarget.rootRenderTarget.viewport).scale(1/s).pad(a).ceil(),!o.isPositive){n.skip=!0;return}n.skip=!1,n.bounds=o,n.blendRequired=c,n.container=e.container,n.filterEffect=e.filterEffect,n.previousRenderSurface=t.renderTarget.renderTarget,n.inputTexture=N.getOptimalTexture(o.width,o.height,s,l),t.renderTarget.bind(n.inputTexture,!0),t.globalUniforms.push({offset:o})}pop(){let e=this.renderer;this._filterStackIndex--;let t=this._filterStack[this._filterStackIndex];if(t.skip)return;this._activeFilterData=t;let i=t.inputTexture,n=t.bounds,o=A.EMPTY;if(e.renderTarget.finishRenderPass?.(),t.blendRequired){e.encoder.finishRenderPass();let a=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null;o=this.getBackTexture(t.previousRenderSurface,n,a)}t.backTexture=o;let s=t.filterEffect.filters;if(this._globalFilterBindGroup.setResource(i.source.style,2),this._globalFilterBindGroup.setResource(o.source,3),e.globalUniforms.pop(),s.length===1)s[0].apply(this,i,t.previousRenderSurface,!1),N.returnTexture(i);else{let a=t.inputTexture,l=N.getOptimalTexture(n.width,n.height,a.source._resolution,!1),c=0;for(c=0;c<s.length-1;++c){s[c].apply(this,a,l,!0);let d=a;a=l,l=d}s[c].apply(this,a,t.previousRenderSurface,!1),N.returnTexture(a),N.returnTexture(l)}t.blendRequired&&N.returnTexture(o)}getBackTexture(e,t,i){let n=e.colorTexture.source._resolution,o=N.getOptimalTexture(t.width,t.height,n,!1),s=t.minX,a=t.minY;i&&(s-=i.minX,a-=i.minY),s=Math.floor(s*n),a=Math.floor(a*n);let l=Math.ceil(t.width*n),c=Math.ceil(t.height*n);return this.renderer.renderTarget.copyToTexture(e,o,{x:s,y:a},{width:l,height:c}),o}applyFilter(e,t,i,n){let o=this.renderer,s=this._filterStack[this._filterStackIndex],a=s.bounds,l=we.shared,u=s.previousRenderSurface===this.renderer.renderTarget.getRenderTarget(i),d=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;this._filterStackIndex>0&&(d=this._filterStack[this._filterStackIndex-1].inputTexture.source._resolution);let g=this._filterGlobalUniforms,h=g.uniforms,p=h.outputFrame,b=h.inputSize,f=h.inputPixel,_=h.inputClamp,v=h.globalFrame,y=h.outputTexture;u?(this._filterStackIndex>0&&(l.x=this._filterStack[this._filterStackIndex-1].bounds.minX,l.y=this._filterStack[this._filterStackIndex-1].bounds.minY),p[0]=a.minX-l.x,p[1]=a.minY-l.y):(p[0]=0,p[1]=0),p[2]=t.frameWidth,p[3]=t.frameHeight,b[0]=t.source.width,b[1]=t.source.height,b[2]=1/b[0],b[3]=1/b[1],f[0]=t.source.pixelWidth,f[1]=t.source.pixelHeight,f[2]=1/f[0],f[3]=1/f[1],_[0]=.5*f[2],_[1]=.5*f[3],_[2]=t.frameWidth*b[2]-.5*f[2],_[3]=t.frameHeight*b[3]-.5*f[3];let x=this.renderer.renderTarget.rootRenderTarget.colorTexture;v[0]=l.x*d,v[1]=l.y*d,v[2]=x.source.width*d,v[3]=x.source.height*d;let U=this.renderer.renderTarget.getRenderTarget(i);if(y[0]=U.colorTexture.frameWidth,y[1]=U.colorTexture.frameHeight,y[2]=U.isRoot?-1:1,g.update(),o.renderPipes.uniformBatch){let L=o.renderPipes.uniformBatch.getUniformBufferResource(this._filterGlobalUniforms);this._globalFilterBindGroup.setResource(L,0)}else this._globalFilterBindGroup.setResource(g,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),o.renderTarget.bind(i,!!n),e.groups[0]=this._globalFilterBindGroup,o.encoder.draw({geometry:ko,shader:e,state:e._state,topology:"triangle-list"})}_getFilterData(){return{skip:!1,inputTexture:null,bounds:new de,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){let i=this._activeFilterData,n=e.set(i.inputTexture._source.width,0,0,i.inputTexture._source.height,i.bounds.minX,i.bounds.minY),o=t.worldTransform.copyTo(E.shared);return o.invert(),n.prepend(o),n.scale(1/t.texture.frameWidth,1/t.texture.frameHeight),n.translate(t.anchor.x,t.anchor.y),n}};qe.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"filter"};function Et(r,e){let t=r.instructionSet,i=t.instructions;for(let n=0;n<t.instructionSize;n++){let o=i[n];e[o.type].execute(o)}}var Je=class{constructor(e){this._renderer=e}addLayerGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){!e.isRenderable||(this._renderer.globalUniforms.push({projectionData:this._renderer.renderTarget.renderTarget,worldTransformMatrix:e.worldTransform,worldColor:e.worldColor}),Et(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}};Je.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"layer"};var Dt=class extends K{constructor({original:e,view:t}){super(),this.uid=I("renderable"),this.view=t,this._original=e,this.layerTransform=new E,this.layerColor=4294967295,this.layerVisibleRenderable=3,this.view.owner=this}get layerBlendMode(){return this._original.layerBlendMode}onViewUpdate(){this.didViewUpdate=!0,this._original.layerGroup.onChildViewUpdate(this)}get isRenderable(){return this._original.isRenderable}};function Ei(r,e){let t=r.root,i=r.instructionSet;i.reset(),e.batch.buildStart(i),e.blendMode.buildStart(),e.colorMask.buildStart(),t.sortableChildren&&t.sortChildren(),Di(t,i,e,!0),e.batch.buildEnd(i),e.blendMode.buildEnd(i)}function ke(r,e,t){r.layerVisibleRenderable<3||!r.includeInBuild||(r.sortableChildren&&r.sortChildren(),r.isSimple?Ro(r,e,t):Di(r,e,t,!1))}function Ro(r,e,t){let i=r.view;if(i&&(t.blendMode.setBlendMode(r,r.layerBlendMode,e),r.didViewUpdate=!1,t[i.renderPipeId].addRenderable(r,e)),!r.isLayerRoot){let n=r.children,o=n.length;for(let s=0;s<o;s++)ke(n[s],e,t)}}function Di(r,e,t,i){if(i){let n=r.layerGroup;if(n.root.view){let o=n.proxyRenderable??Uo(n);o&&(t.blendMode.setBlendMode(o,o.layerBlendMode,e),t[o.view.renderPipeId].addRenderable(o,e))}}else for(let n=0;n<r.effects.length;n++){let o=r.effects[n];t[o.pipe].push(o,r,e)}if(!i&&r.isLayerRoot)t.layer.addLayerGroup(r.layerGroup,e);else{let n=r.view;n&&(t.blendMode.setBlendMode(r,r.layerBlendMode,e),r.didViewUpdate=!1,t[n.renderPipeId].addRenderable(r,e));let o=r.children;if(o.length)for(let s=0;s<o.length;s++)ke(o[s],e,t)}if(!i)for(let n=r.effects.length-1;n>=0;n--){let o=r.effects[n];t[o.pipe].pop(o,r,e)}}function Uo(r){let e=r.root;r.proxyRenderable=new Dt({original:e,view:e.view})}function Er(r,e=[]){e.push(r);for(let t=0;t<r.layerGroupChildren.length;t++)Er(r.layerGroupChildren[t],e);return e}function Ii(r,e,t){let i=r>>16&255,n=r>>8&255,o=r&255,s=e>>16&255,a=e>>8&255,l=e&255,c=i+(s-i)*t,u=n+(a-n)*t,d=o+(l-o)*t;return(c<<16)+(u<<8)+d}var Fo=16777215+(16777215<<32);function Qe(r,e){let t=(r>>24&255)/255,i=(e>>24&255)/255,n=t*i*255,o=r&16777215,s=e&16777215,a=16777215;return o+(s<<32)!==Fo&&(o===16777215?a=s:s===16777215?a=o:a=Ii(o,s,.5)),a+(n<<24)}var Ao=new oe;function Dr(r,e=!1){Go(r);let t=r.childrenToUpdate,i=r.updateTick;r.updateTick++;for(let n in t){let o=t[n],s=o.list,a=o.index;for(let l=0;l<a;l++)Wi(s[l],i,0);o.index=0}if(e)for(let n=0;n<r.layerGroupChildren.length;n++)Dr(r.layerGroupChildren[n],e)}function Go(r){r.layerGroupParent?(r.worldTransform.appendFrom(r.root.layerTransform,r.layerGroupParent.worldTransform),r.worldColor=Qe(r.root.layerColor,r.layerGroupParent.worldColor)):(r.worldTransform.copyFrom(r.root.layerTransform),r.worldColor=r.root.localColor)}function Wi(r,e,t){if(e===r.updateTick)return;r.updateTick=e,r.didChange=!1;let i=r.localTransform;vi(i,r);let n=r.parent;if(n&&!n.isLayerRoot?(t=t|r._updateFlags,r.layerTransform.appendFrom(i,n.layerTransform),t&&zi(r,n,t)):(t=r._updateFlags,r.layerTransform.copyFrom(i),t&&zi(r,Ao,t)),!r.isLayerRoot){let o=r.children,s=o.length;for(let l=0;l<s;l++)Wi(o[l],e,t);let a=r.layerGroup;r.view&&!a.structureDidChange&&a.updateRenderable(r)}}function zi(r,e,t){t&wi&&(r.layerColor=Qe(r.localColor,e.layerColor)),t&Si&&(r.layerBlendMode=r.localBlendMode==="inherit"?e.layerBlendMode:r.localBlendMode),t&Ti&&(r.layerVisibleRenderable=r.localVisibleRenderable&e.layerVisibleRenderable),r._updateFlags=0}function Hi(r,e){let{list:t,index:i}=r.childrenRenderablesToUpdate,n=!1;for(let o=0;o<i;o++){let s=t[o],a=s.view;if(n=e[a.renderPipeId].validateRenderable(s),n)break}return r.structureDidChange=n,n&&(r.childrenRenderablesToUpdate.index=0),n}var Ze=class{constructor(e){this._renderer=e}render({container:e,transform:t}){e.layer=!0;let i=this._renderer,n=Er(e.layerGroup,[]),o=i.renderPipes;for(let s=0;s<n.length;s++){let a=n[s];a.runOnRender(),a.instructionSet.renderPipes=o,a.structureDidChange||Hi(a,o),Dr(a),a.structureDidChange?(a.structureDidChange=!1,Ei(a,o)):Lo(a),i.renderPipes.batch.upload(a.instructionSet)}t&&e.layerGroup.worldTransform.copyFrom(t),i.globalUniforms.start({projectionData:i.renderTarget.rootRenderTarget,worldTransformMatrix:e.layerGroup.worldTransform}),Et(e.layerGroup,o),o.uniformBatch&&(o.uniformBatch.renderEnd(),o.uniformBuffer.renderEnd())}destroy(){let e=this;e._renderer=null}};Ze.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"layer"};function Lo(r){let{list:e,index:t}=r.childrenRenderablesToUpdate;for(let i=0;i<t;i++){let n=e[i];n.didViewUpdate&&r.updateRenderable(n)}r.childrenRenderablesToUpdate.index=0}var Oi=new Float32Array(1),Vi=new Uint32Array(1),Re=class extends he{constructor(){let t=new Y({data:Oi,label:"attribute-batch-buffer",usage:z.VERTEX|z.COPY_DST}),i=new Y({data:Vi,label:"index-batch-buffer",usage:z.INDEX|z.COPY_DST}),n=6*4;super({attributes:{aPosition:{buffer:t,shaderLocation:0,format:"float32x2",stride:n,offset:0},aUV:{buffer:t,shaderLocation:1,format:"float32x2",stride:n,offset:2*4},aColor:{buffer:t,shaderLocation:2,format:"unorm8x4",stride:n,offset:4*4},aTextureIdAndRound:{buffer:t,shaderLocation:3,format:"uint16x2",stride:n,offset:5*4}},indexBuffer:i})}reset(){this.indexBuffer.data=Vi,this.buffers[0].data=Oi}};var $i={};function Ni(r,e){let t=0;for(let i=0;i<e;i++)t=t*31+r[i].uid>>>0;return $i[t]||Eo(r,t)}function Eo(r,e){let t={},i=0;for(let o=0;o<16;o++){let s=o<r.length?r[o]:A.EMPTY.source;t[i++]=s.source,t[i++]=s.style}let n=new q(t);return $i[e]=n,n}var et=class{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}};function Ir(r,e){let t=r.byteLength/8|0,i=new Float64Array(r,0,t),n=new Float64Array(e,0,t);for(let a=0;a<t;a++)n[a]=i[a];let o=new Uint8Array(r,t*8),s=new Uint8Array(e,t*8);for(let a=0;a<o.length;a++)s[a]=o[a]}var tt=class{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}};var It=class{constructor(){this.type="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}},rt=0,Fe=class{constructor(e=4,t=6){this.uid=I("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,this.attributeBuffer=new et(e*this._vertexSize*4),this.indexBuffer=new Uint32Array(t)}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e.indexStart=this.indexSize,e.location=this.attributeSize,e.batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this._vertexSize}checkAndUpdateTexture(e,t){let i=e.batch.textures.ids[t._source.uid];return!i&&i!==0?!1:(e.textureId=i,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}break(e){let t=this._elements,i=this._textureBatchPool[this._textureBatchPoolIndex++]||new tt;if(i.clear(),!t[this.elementStart])return;let n=t[this.elementStart].blendMode;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);let o=this.attributeBuffer.float32View,s=this.attributeBuffer.uint32View,a=this.indexBuffer,l=this._batchIndexSize,c=this._batchIndexStart,u="startBatch",d=this._batchPool[this._batchPoolIndex++]||new It;for(let g=this.elementStart;g<this.elementSize;++g){let h=t[g];t[g]=null;let b=h.texture._source,f=n!==h.blendMode;if(b._batchTick===rt&&!f){h.textureId=b._textureBindLocation,l+=h.indexSize,h.packAttributes(o,s,h.location,h.textureId),h.packIndex(a,h.indexStart,h.location/this._vertexSize),h.batch=d;continue}b._batchTick=rt,(i.count>=16||f)&&(this._finishBatch(d,c,l-c,i,n,e,u),u="renderBatch",c=l,n=h.blendMode,i=this._textureBatchPool[this._textureBatchPoolIndex++]||new tt,i.clear(),d=this._batchPool[this._batchPoolIndex++]||new It,++rt),h.textureId=b._textureBindLocation=i.count,i.ids[b.uid]=i.count,i.textures[i.count++]=b,h.batch=d,l+=h.indexSize,h.packAttributes(o,s,h.location,h.textureId),h.packIndex(a,h.indexStart,h.location/this._vertexSize)}i.count>0&&(this._finishBatch(d,c,l-c,i,n,e,u),c=l,++rt),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=l}_finishBatch(e,t,i,n,o,s,a){e.gpuBindGroup=null,e.action=a,e.batcher=this,e.textures=n,e.blendMode=o,e.start=t,e.size=i,++rt,s.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){let t=Math.max(e,this.attributeBuffer.size*2),i=new et(t);Ir(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(e){let t=this.indexBuffer,i=Math.max(e,t.length*2),n=new Uint32Array(i);Ir(t.buffer,n.buffer),this.indexBuffer=n}destroy(){for(let e=0;e<this.batches.length;e++)this.batches[e].destroy();this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};function ji(r,e,t,i,n,o,s,a=null){let l=0;t*=e,n*=o;let c=a.a,u=a.b,d=a.c,g=a.d,h=a.tx,p=a.ty;for(;l<s;){let b=r[t],f=r[t+1];i[n]=c*b+d*f+h,i[n+1]=u*b+g*f+p,n+=o,t+=e,l++}}function Ki(r,e,t,i){let n=0;for(e*=t;n<i;)r[e]=0,r[e+1]=0,e+=t,n++}function zr(r,e,t,i,n){let o=e.a,s=e.b,a=e.c,l=e.d,c=e.tx,u=e.ty;t=t||0,i=i||2,n=n||r.length/i-t;let d=t*i;for(let g=0;g<n;g++){let h=r[d],p=r[d+1];r[d]=o*h+a*p+c,r[d+1]=s*h+l*p+u,d+=i}}var Se=class{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.layerBlendMode:"normal"}packIndex(e,t,i){let n=this.geometryData.indices;for(let o=0;o<this.indexSize;o++)e[t++]=n[o+this.indexOffset]+i-this.vertexOffset}packAttributes(e,t,i,n){let o=this.geometryData,s=this.renderable,a=o.vertices,l=o.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,d=this.color,g=d>>16|d&65280|(d&255)<<16;if(this.applyTransform){let h=Qe(g+(this.alpha*255<<24),s.layerColor),p=s.layerTransform,b=n<<16|this.roundPixels&65535,f=p.a,_=p.b,v=p.c,y=p.d,x=p.tx,U=p.ty;for(let L=c;L<u;L+=2){let F=a[L],B=a[L+1];e[i]=f*F+v*B+x,e[i+1]=_*F+y*B+U,e[i+2]=l[L],e[i+3]=l[L+1],t[i+4]=h,t[i+5]=b,i+=6}}else{let h=g+(this.alpha*255<<24);for(let p=c;p<u;p+=2)e[i]=a[p],e[i+1]=a[p+1],e[i+2]=l[p],e[i+3]=l[p+1],t[i+4]=h,t[i+5]=n,i+=6}}get vertSize(){return this.vertexSize}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.vertexOffset=this.vertexOffset,e.vertexSize=this.vertexSize,e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}};var zt={build(r,e){let t,i,n,o,s,a;if(r.type==="circle"){let x=r;t=x.x,i=x.y,s=a=x.radius,n=o=0}else if(r.type==="ellipse"){let x=r;t=x.x,i=x.y,s=x.halfWidth,a=x.halfHeight,n=o=0}else{let x=r,U=x.width/2,L=x.height/2;t=x.x+U,i=x.y+L,s=a=Math.max(0,Math.min(x.radius,Math.min(U,L))),n=U-s,o=L-a}if(!(s>=0&&a>=0&&n>=0&&o>=0))return e;let l=Math.ceil(2.3*Math.sqrt(s+a)),c=l*8+(n?4:0)+(o?4:0);if(c===0)return e;if(l===0)return e[0]=e[6]=t+n,e[1]=e[3]=i+o,e[2]=e[4]=t-n,e[5]=e[7]=i-o,e;let u=0,d=l*4+(n?2:0)+2,g=d,h=c,p=n+s,b=o,f=t+p,_=t-p,v=i+b;if(e[u++]=f,e[u++]=v,e[--d]=v,e[--d]=_,o){let x=i-b;e[g++]=_,e[g++]=x,e[--h]=x,e[--h]=f}for(let x=1;x<l;x++){let U=Math.PI/2*(x/l),L=n+Math.cos(U)*s,F=o+Math.sin(U)*a,B=t+L,w=t-L,S=i+F,ee=i-F;e[u++]=B,e[u++]=S,e[--d]=S,e[--d]=w,e[g++]=w,e[g++]=ee,e[--h]=ee,e[--h]=B}p=n,b=o+a,f=t+p,_=t-p,v=i+b;let y=i-b;return e[u++]=f,e[u++]=v,e[--h]=y,e[--h]=f,n&&(e[u++]=_,e[u++]=v,e[--h]=y,e[--h]=_),e},triangulate(r,e,t,i,n,o){if(r.length===0)return;let s=0,a=0,l=r.length/4;s+=r[0],a+=r[1],s+=r[l|0],a+=r[(l|0)+1],s+=r[l*2|0],a+=r[(l*2|0)+1],s+=r[l*3|0],a+=r[(l*3|0)+1],s/=4,a/=4;let c=i;e[c*t]=s,e[c*t+1]=a,c++;let u=i;e[c*t]=r[0],e[c*t+1]=r[1],c++;for(let d=2;d<r.length;d+=2)e[c*t]=r[d],e[c*t+1]=r[d+1],n[o++]=c,n[o++]=u,n[o++]=c-1,c++;n[o++]=c-1,n[o++]=u,n[o++]=u+1}};function Yi(r){let e=r.length;if(e<6)return 1;let t=0;for(let i=0,n=r[e-2],o=r[e-1];i<e;i+=2){let s=r[i],a=r[i+1];t+=(s-n)*(a+o),n=s,o=a}return t<0?-1:1}function Xi(r,e,t,i,n,o,s,a){let l=r-t*n,c=e-i*n,u=r+t*o,d=e+i*o,g,h;s?(g=i,h=-t):(g=-i,h=t);let p=l+g,b=c+h,f=u+g,_=d+h;return a.push(p,b),a.push(f,_),2}function Te(r,e,t,i,n,o,s,a){let l=t-r,c=i-e,u=Math.atan2(l,c),d=Math.atan2(n-r,o-e);a&&u<d?u+=Math.PI*2:!a&&u>d&&(d+=Math.PI*2);let g=u,h=d-u,p=Math.abs(h),b=Math.sqrt(l*l+c*c),f=(15*p*Math.sqrt(b)/Math.PI>>0)+1,_=h/f;if(g+=_,a){s.push(r,e),s.push(t,i);for(let v=1,y=g;v<f;v++,y+=_)s.push(r,e),s.push(r+Math.sin(y)*b,e+Math.cos(y)*b);s.push(r,e),s.push(n,o)}else{s.push(t,i),s.push(r,e);for(let v=1,y=g;v<f;v++,y+=_)s.push(r+Math.sin(y)*b,e+Math.cos(y)*b),s.push(r,e);s.push(n,o),s.push(r,e)}return f*2}function qi(r,e,t,i,n,o,s,a,l){let c=1e-4;if(r.length===0)return;let u=e,d=u.alignment;if(e.alignment!==.5){let D=Yi(r);t&&(D*=-1),d=(d-.5)*D+.5}let g=new we(r[0],r[1]),h=new we(r[r.length-2],r[r.length-1]),p=i,b=Math.abs(g.x-h.x)<c&&Math.abs(g.y-h.y)<c;if(p){r=r.slice(),b&&(r.pop(),r.pop(),h.set(r[r.length-2],r[r.length-1]));let D=(g.x+h.x)*.5,ue=(h.y+g.y)*.5;r.unshift(D,ue),r.push(D,ue)}let f=n,_=r.length/2,v=r.length,y=f.length/2,x=u.width/2,U=x*x,L=u.miterLimit*u.miterLimit,F=r[0],B=r[1],w=r[2],S=r[3],ee=0,re=0,P=-(B-S),k=F-w,H=0,O=0,te=Math.sqrt(P*P+k*k);P/=te,k/=te,P*=x,k*=x;let fi=d,C=(1-fi)*2,R=fi*2;p||(u.cap==="round"?v+=Te(F-P*(C-R)*.5,B-k*(C-R)*.5,F-P*C,B-k*C,F+P*R,B+k*R,f,!0)+2:u.cap==="square"&&(v+=Xi(F,B,P,k,C,R,!0,f))),f.push(F-P*C,B-k*C),f.push(F+P*R,B+k*R);for(let D=1;D<_-1;++D){F=r[(D-1)*2],B=r[(D-1)*2+1],w=r[D*2],S=r[D*2+1],ee=r[(D+1)*2],re=r[(D+1)*2+1],P=-(B-S),k=F-w,te=Math.sqrt(P*P+k*k),P/=te,k/=te,P*=x,k*=x,H=-(S-re),O=w-ee,te=Math.sqrt(H*H+O*O),H/=te,O/=te,H*=x,O*=x;let ue=w-F,Ve=B-S,$e=w-ee,Ne=re-S,pi=ue*$e+Ve*Ne,Pt=Ve*$e-Ne*ue,je=Pt<0;if(Math.abs(Pt)<.001*Math.abs(pi)){f.push(w-P*C,S-k*C),f.push(w+P*R,S+k*R),pi>=0&&(u.join==="round"?v+=Te(w,S,w-P*C,S-k*C,w-H*C,S-O*C,f,!1)+4:v+=2,f.push(w-H*R,S-O*R),f.push(w+H*C,S+O*C));continue}let mi=(-P+F)*(-k+S)-(-P+w)*(-k+B),gi=(-H+ee)*(-O+S)-(-H+w)*(-O+re),kt=(ue*gi-$e*mi)/Pt,Rt=(Ne*mi-Ve*gi)/Pt,Fr=(kt-w)*(kt-w)+(Rt-S)*(Rt-S),xe=w+(kt-w)*C,ve=S+(Rt-S)*C,_e=w-(kt-w)*R,ye=S-(Rt-S)*R,So=Math.min(ue*ue+Ve*Ve,$e*$e+Ne*Ne),bi=je?C:R,To=So+bi*bi*U;Fr<=To?u.join==="bevel"||Fr/U>L?(je?(f.push(xe,ve),f.push(w+P*R,S+k*R),f.push(xe,ve),f.push(w+H*R,S+O*R)):(f.push(w-P*C,S-k*C),f.push(_e,ye),f.push(w-H*C,S-O*C),f.push(_e,ye)),v+=2):u.join==="round"?je?(f.push(xe,ve),f.push(w+P*R,S+k*R),v+=Te(w,S,w+P*R,S+k*R,w+H*R,S+O*R,f,!0)+4,f.push(xe,ve),f.push(w+H*R,S+O*R)):(f.push(w-P*C,S-k*C),f.push(_e,ye),v+=Te(w,S,w-P*C,S-k*C,w-H*C,S-O*C,f,!1)+4,f.push(w-H*C,S-O*C),f.push(_e,ye)):(f.push(xe,ve),f.push(_e,ye)):(f.push(w-P*C,S-k*C),f.push(w+P*R,S+k*R),u.join==="round"?je?v+=Te(w,S,w+P*R,S+k*R,w+H*R,S+O*R,f,!0)+2:v+=Te(w,S,w-P*C,S-k*C,w-H*C,S-O*C,f,!1)+2:u.join==="miter"&&Fr/U<=L&&(je?(f.push(_e,ye),f.push(_e,ye)):(f.push(xe,ve),f.push(xe,ve)),v+=2),f.push(w-H*C,S-O*C),f.push(w+H*R,S+O*R),v+=2)}F=r[(_-2)*2],B=r[(_-2)*2+1],w=r[(_-1)*2],S=r[(_-1)*2+1],P=-(B-S),k=F-w,te=Math.sqrt(P*P+k*k),P/=te,k/=te,P*=x,k*=x,f.push(w-P*C,S-k*C),f.push(w+P*R,S+k*R),p||(u.cap==="round"?v+=Te(w-P*(C-R)*.5,S-k*(C-R)*.5,w-P*C,S-k*C,w+P*R,S+k*R,f,!1)+2:u.cap==="square"&&(v+=Xi(w,S,P,k,C,R,!1,f)));let wo=1e-4*1e-4;for(let D=y;D<v+y-2;++D)F=f[D*2],B=f[D*2+1],w=f[(D+1)*2],S=f[(D+1)*2+1],ee=f[(D+2)*2],re=f[(D+2)*2+1],!(Math.abs(F*(S-re)+w*(re-B)+ee*(B-S))<wo)&&a.push(D,D+1,D+2)}var Ji=Co(Bo(),1);function Wt(r,e,t,i,n,o,s){let a=(0,Ji.default)(r,e,2);if(!a)return;for(let c=0;c<a.length;c+=3)o[s++]=a[c]+n,o[s++]=a[c+1]+n,o[s++]=a[c+2]+n;let l=n*i;for(let c=0;c<r.length;c+=2)t[l]=r[c],t[l+1]=r[c+1],l+=i}var Io=[],Qi={build(r,e){for(let t=0;t<r.points.length;t++)e[t]=r.points[t];return e},triangulate(r,e,t,i,n,o){Wt(r,Io,e,t,i,n,o)}};var Zi={build(r,e){let t=r,i=t.x,n=t.y,o=t.width,s=t.height;return o>=0&&s>=0&&(e[0]=i,e[1]=n,e[2]=i+o,e[3]=n,e[4]=i+o,e[5]=n+s,e[6]=i,e[7]=n+s),e},triangulate(r,e,t,i,n,o){let s=0;i*=t,e[i+s]=r[0],e[i+s+1]=r[1],s+=t,e[i+s]=r[2],e[i+s+1]=r[3],s+=t,e[i+s]=r[6],e[i+s+1]=r[7],s+=t,e[i+s]=r[4],e[i+s+1]=r[5],s+=t;let a=i/t;n[o++]=a,n[o++]=a+1,n[o++]=a+2,n[o++]=a+1,n[o++]=a+3,n[o++]=a+2}};var en={build(r,e){return e[0]=r.x,e[1]=r.y,e[2]=r.x2,e[3]=r.y2,e[4]=r.x3,e[5]=r.y3,e},triangulate(r,e,t,i,n,o){let s=0;i*=t,e[i+s]=r[0],e[i+s+1]=r[1],s+=t,e[i+s]=r[2],e[i+s+1]=r[3],s+=t,e[i+s]=r[4],e[i+s+1]=r[5];let a=i/t;n[o++]=a,n[o++]=a+1,n[o++]=a+2}};var Wr={rectangle:Zi,polygon:Qi,triangle:en,circle:zt,ellipse:zt,roundedRectangle:zt},zo=new ie;function rn(r){let n={vertices:[],uvs:[],indices:[]},o=[];for(let s=0;s<r.instructions.length;s++){let a=r.instructions[s];if(a.action==="texture")Wo(a.data,o,n);else if(a.action==="fill"||a.action==="stroke"){let l=a.action==="stroke",c=a.data.path.shapePath,u=a.data.style,d=a.data.hole;l&&d&&tn(d.shapePath,u,null,!0,o,n),tn(c,u,d,l,o,n)}}return o}function Wo(r,e,t){let{vertices:i,uvs:n,indices:o}=t,s=o.length,a=i.length/2,l=[],c=Wr.rectangle,u=zo,d=r.image;u.x=r.dx,u.y=r.dy,u.width=r.dw,u.height=r.dh;let g=r.transform;c.build(u,l),g&&zr(l,g),c.triangulate(l,i,2,a,o,s);let h=d.layout.uvs;n.push(h.x0,h.y0,h.x1,h.y1,h.x3,h.y3,h.x2,h.y2);let p=G.get(Se);p.indexOffset=s,p.indexSize=o.length-s,p.vertexOffset=a,p.vertexSize=i.length/2-a,p.color=r.style,p.alpha=r.alpha,p.texture=d,p.geometryData=t,e.push(p)}function tn(r,e,t,i,n,o){let{vertices:s,uvs:a,indices:l}=o,c=r.shapePrimitives.length-1;r.shapePrimitives.forEach(({shape:u,transform:d},g)=>{let h=l.length,p=s.length/2,b=[],f=Wr[u.type];if(f.build(u,b),d&&zr(b,d),i){let x=u.closePath??!0;qi(b,e,!1,x,s,2,p,l,h)}else if(t&&c===g){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");let x=[],U=b.slice();Ho(t.shapePath).forEach(F=>{x.push(U.length/2),U.push(...F)}),Wt(U,x,s,2,p,l,h)}else f.triangulate(b,s,2,p,l,h);let _=a.length/2,v=e.texture;if(v!==A.WHITE){let x=e.matrix;d&&x.append(d.clone().invert()),ji(s,2,p,a,_,2,s.length/2-p,x)}else Ki(a,_,2,s.length/2-p);let y=G.get(Se);y.indexOffset=h,y.indexSize=l.length-h,y.vertexOffset=p,y.vertexSize=s.length/2-p,y.color=e.color,y.alpha=e.alpha,y.texture=v,y.geometryData=o,n.push(y)})}function Ho(r){if(!r)return[];let e=r.shapePrimitives,t=[];for(let i=0;i<e.length;i++){let n=e[i].shape,o=[];Wr[n.type].build(n,o),t.push(o)}return t}var Hr=class{},Or=class{constructor(){this.geometry=new Re,this.instructions=new yi}init(){this.geometry.reset(),this.instructions.reset()}},it=class{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),this._needsContextNeedsRebuild=[]}prerender(){this._returnActiveBatchers()}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e);let i=rn(e),n=0,o=e.batchMode,s=!0;if(e.customShader||o==="no-batch")s=!1;else if(o==="auto"){for(let a=0;a<i.length;a++)if(n+=i[a].vertexSize,n>400){s=!1;break}}t=this._gpuContextHash[e.uid]={isBatchable:s,batches:i},e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_returnActiveBatchers(){for(let e=0;e<this._activeBatchers.length;e++)G.return(this._activeBatchers[e]);this._activeBatchers.length=0}_initContextRenderData(e){let t=G.get(Or),i=this._gpuContextHash[e.uid].batches,n=0,o=0;i.forEach(c=>{c.applyTransform=!1,n+=c.geometryData.vertices.length,o+=c.geometryData.indices.length});let s=G.get(Fe);this._activeBatchers.push(s),s.ensureAttributeBuffer(n),s.ensureIndexBuffer(o),s.begin();for(let c=0;c<i.length;c++){let u=i[c];s.add(u)}s.finish(t.instructions);let a=t.geometry;a.indexBuffer.data=s.indexBuffer,a.buffers[0].data=s.attributeBuffer.float32View,a.indexBuffer.update(s.indexSize*4),a.buffers[0].update(s.attributeSize*4);let l=s.batches;for(let c=0;c<l.length;c++){let u=l[c];u.bindGroup=Ni(u.textures.textures,u.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){let t=new Hr;return this._gpuContextHash[e.uid]=t,e.on("update",this.onGraphicsContextUpdate,this),e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextUpdate(e){this._needsContextNeedsRebuild.push(e)}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){let t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(G.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(i=>{G.return(i)})}destroy(){for(let e of this._needsContextNeedsRebuild)this._cleanGraphicsContextData(e),this._gpuContextHash[e.uid]=null;this._needsContextNeedsRebuild.length=0}};it.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"graphicsContext"};var Oo={normal:0,additive:1,multiply:2,screen:3,overlay:4,erase:5},Vr=0,$r=1,Nr=2,jr=3,Kr=4,Yr=5,Z=class{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Vr)}set blend(e){!!(this.data&1<<Vr)!==e&&(this.data^=1<<Vr)}get offsets(){return!!(this.data&1<<$r)}set offsets(e){!!(this.data&1<<$r)!==e&&(this.data^=1<<$r)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Nr)}set culling(e){!!(this.data&1<<Nr)!==e&&(this.data^=1<<Nr)}get depthTest(){return!!(this.data&1<<jr)}set depthTest(e){!!(this.data&1<<jr)!==e&&(this.data^=1<<jr)}get depthMask(){return!!(this.data&1<<Yr)}set depthMask(e){!!(this.data&1<<Yr)!==e&&(this.data^=1<<Yr)}get clockwiseFrontFace(){return!!(this.data&1<<Kr)}set clockwiseFrontFace(e){!!(this.data&1<<Kr)!==e&&(this.data^=1<<Kr)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Oo[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){let e=new Z;return e.depthTest=!1,e.blend=!0,e}};function Ht(r,e,t){e[t++]=(r&255)/255,e[t++]=(r>>8&255)/255,e[t++]=(r>>16&255)/255,e[t++]=(r>>24&255)/255}var nt=class{constructor(e,t){this.state=Z.for2d(),this._renderableBatchesHash=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){let t=e.view.context,i=!!this._renderableBatchesHash[e.uid],n=this.renderer.graphicsContext.updateGpuContext(t);return!!(n.isBatchable||i!==n.isBatchable)}addRenderable(e,t){let i=this.renderer.graphicsContext.updateGpuContext(e.view.context);e.view._didUpdate&&(e.view._didUpdate=!1,this._rebuild(e)),i.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add({type:"graphics",renderable:e}))}updateRenderable(e){let t=this._renderableBatchesHash[e.uid];if(t)for(let i=0;i<t.length;i++){let n=t[i];n.batcher.updateElement(n)}}destroyRenderable(e){this._removeBatchForRenderable(e.uid)}execute({renderable:e}){if(!e.isRenderable)return;let t=this.renderer,i=e.view.context;if(!t.graphicsContext.getGpuContext(i).batches.length)return;let o=i.customShader||this._adaptor.shader;this.state.blendMode=e.layerBlendMode;let s=o.resources.localUniforms.uniforms;s.uTransformMatrix=e.layerTransform,s.uRound=t._roundPixels|e.view.roundPixels,Ht(e.layerColor,s.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){let t=!!this._renderableBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(e.view.context);t&&this._removeBatchForRenderable(e.uid),i.isBatchable&&this._initBatchesForRenderable(e),e.view.batched=i.isBatchable}_addToBatcher(e,t){let i=this.renderer.renderPipes.batch,n=this._getBatchesForRenderable(e);for(let o=0;o<n.length;o++){let s=n[o];i.addToBatch(s,t)}}_getBatchesForRenderable(e){return this._renderableBatchesHash[e.uid]||this._initBatchesForRenderable(e)}_initBatchesForRenderable(e){let t=e.view.context,i=this.renderer.graphicsContext.getGpuContext(t),n=this.renderer._roundPixels|e.view.roundPixels,o=i.batches.map(s=>{let a=G.get(Se);return s.copyTo(a),a.renderable=e,a.roundPixels=n,a});return this._renderableBatchesHash[e.uid]=o,e.on("destroyed",()=>{this.destroyRenderable(e)}),o}_removeBatchForRenderable(e){this._renderableBatchesHash[e].forEach(t=>{G.return(t)}),this._renderableBatchesHash[e]=null}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null;for(let e in this._renderableBatchesHash)this._removeBatchForRenderable(e);this._renderableBatchesHash=null}};nt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"graphics"};var Ot=class{constructor(){this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.layerBlendMode}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null}packIndex(e,t,i){let n=this.renderable.view.geometry.indices;for(let o=0;o<n.length;o++)e[t++]=n[o]+i}packAttributes(e,t,i,n){let o=this.renderable,a=this.renderable.view.geometry,l=o.layerTransform,c=n<<16|this.roundPixels&65535,u=l.a,d=l.b,g=l.c,h=l.d,p=l.tx,b=l.ty,f=a.positions,_=a.uvs,v=o.layerColor;for(let y=0;y<f.length;y+=2){let x=f[y],U=f[y+1];e[i]=u*x+g*U+p,e[i+1]=d*x+h*U+b,e[i+2]=_[y],e[i+3]=_[y+1],t[i+4]=v,t[i+5]=c,i+=6}}get vertexSize(){return this.renderable.view.geometry.positions.length/2}get indexSize(){return this.renderable.view.geometry.indices.length}};var ot=class{constructor(e,t){this.localUniforms=new $({uTransformMatrix:{value:new E,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new q({0:this.localUniforms}),this._renderableHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){let t=this._getRenderableData(e),i=t.batched,n=e.view.batched;if(t.batched=n,i!==n)return!0;if(n){let o=e.view._geometry;if(o.indices.length!==t.indexSize||o.positions.length!==t.vertexSize)return t.indexSize=o.indices.length,t.vertexSize=o.positions.length,!0;let s=this._getBatchableMesh(e),a=e.view.texture;if(s.texture._source!==a._source&&s.texture._source!==a._source)return s.batcher.checkAndUpdateTexture(s,a)}return!1}addRenderable(e,t){let i=this.renderer.renderPipes.batch,{batched:n}=this._getRenderableData(e);if(n){let o=this._getBatchableMesh(e);o.texture=e.view._texture,i.addToBatch(o)}else i.break(t),t.add({type:"mesh",renderable:e})}updateRenderable(e){if(e.view.batched){let t=this._gpuBatchableMeshHash[e.uid];t.texture=e.view._texture,t.batcher.updateElement(t)}}destroyRenderable(e){this._renderableHash[e.uid]=null;let t=this._gpuBatchableMeshHash[e.uid];G.return(t),this._gpuBatchableMeshHash[e.uid]=null}execute({renderable:e}){if(!e.isRenderable)return;let t=e.view;t.state.blendMode=e.layerBlendMode;let i=this.localUniforms;i.uniforms.uTransformMatrix=e.layerTransform,i.uniforms.uRound=this.renderer._roundPixels|e.view.roundPixels,i.update(),Ht(e.layerColor,i.uniforms.uColor,0),this._adaptor.execute(this,e)}_getRenderableData(e){return this._renderableHash[e.uid]||this._initRenderableData(e)}_initRenderableData(e){let t=e.view;return this._renderableHash[e.uid]={batched:t.batched,indexSize:t._geometry.indices.length,vertexSize:t._geometry.positions.length},e.on("destroyed",()=>{this.destroyRenderable(e)}),this._renderableHash[e.uid]}_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}_initBatchableMesh(e){let t=G.get(Ot);return t.renderable=e,t.texture=e.view._texture,t.roundPixels=this.renderer._roundPixels|e.view.roundPixels,this._gpuBatchableMeshHash[e.uid]=t,t.renderable=e,t}destroy(){for(let e in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[e]&&G.return(this._gpuBatchableMeshHash[e]);this._gpuBatchableMeshHash=null,this._renderableHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}};ot.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"mesh"};var fe=class{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.layerBlendMode}packAttributes(e,t,i,n){let o=this.renderable,s=this.texture,a=o.layerTransform,l=a.a,c=a.b,u=a.c,d=a.d,g=a.tx,h=a.ty,p=this.bounds,b=p[1],f=p[0],_=p[3],v=p[2],y=s._layout.uvs,x=o.layerColor,U=n<<16|this.roundPixels&65535;e[i+0]=l*f+u*v+g,e[i+1]=d*v+c*f+h,e[i+2]=y.x0,e[i+3]=y.y0,t[i+4]=x,t[i+5]=U,e[i+6]=l*b+u*v+g,e[i+7]=d*v+c*b+h,e[i+8]=y.x1,e[i+9]=y.y1,t[i+10]=x,t[i+11]=U,e[i+12]=l*b+u*_+g,e[i+13]=d*_+c*b+h,e[i+14]=y.x2,e[i+15]=y.y2,t[i+16]=x,t[i+17]=U,e[i+18]=l*f+u*_+g,e[i+19]=d*_+c*f+h,e[i+20]=y.x3,e[i+21]=y.y3,t[i+22]=x,t[i+23]=U}packIndex(e,t,i){e[t]=i+0,e[t+1]=i+1,e[t+2]=i+2,e[t+3]=i+0,e[t+4]=i+2,e[t+5]=i+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}};var Ae,st=class{constructor(e){this._gpuSpriteHash=Object.create(null),this._renderer=e,Ae=this._gpuSpriteHash}addRenderable(e,t){let i=this._getGpuSprite(e);e.view._didUpdate&&this._updateBatchableSprite(e,i),this._renderer.renderPipes.batch.addToBatch(i)}updateRenderable(e){let t=Ae[e.uid];e.view._didUpdate&&this._updateBatchableSprite(e,t),t.batcher.updateElement(t)}validateRenderable(e){let t=e.view._texture,i=this._getGpuSprite(e);return i.texture._source!==t._source?!i.batcher.checkAndUpdateTexture(i,t):!1}destroyRenderable(e){let t=Ae[e.uid];G.return(t),Ae[e.uid]=null}_updateBatchableSprite(e,t){let i=e.view;i._didUpdate=!1,t.bounds=i.bounds,t.texture=i._texture}_getGpuSprite(e){return Ae[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let t=G.get(fe);t.renderable=e;let i=e.view;return t.texture=i._texture,t.bounds=i.bounds,t.roundPixels=this._renderer._roundPixels|i.roundPixels,Ae[e.uid]=t,e.view._didUpdate=!1,e.on("destroyed",()=>{this.destroyRenderable(e)}),t}destroy(){for(let e in this._gpuSpriteHash)G.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}};st.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"sprite"};var Ce=class extends K{constructor({original:e,view:t}){super(),this.uid=I("renderable"),this.didViewUpdate=!1,this.view=t,e&&this.init(e)}init(e){this._original=e,this.layerTransform=e.layerTransform}get layerColor(){return this._original.layerColor}get layerBlendMode(){return this._original.layerBlendMode}get layerVisibleRenderable(){return this._original.layerVisibleRenderable}get isRenderable(){return this._original.isRenderable}};var nn=new Pi,at=class{constructor(e){this.uid=I("meshView"),this.renderPipeId="mesh",this.canBundle=!0,this.owner=Gt,this.state=Z.for2d(),this.roundPixels=0,this.shader=e.shader,this.texture=e.texture??this.shader?.texture??A.WHITE,this._geometry=e.geometry,this._geometry.on("update",this.onUpdate,this)}set shader(e){this._shader!==e&&(this._shader=e,this.onUpdate())}get shader(){return this._shader}set geometry(e){this._geometry!==e&&(this._geometry?.off("update",this.onUpdate,this),e.on("update",this.onUpdate,this),this._geometry=e,this.onUpdate())}get geometry(){return this._geometry}set texture(e){this._texture!==e&&(this.shader&&(this.shader.texture=e),this._texture=e,this.onUpdate())}get texture(){return this._texture}get batched(){return this._shader?!1:this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch"}addBounds(e){e.addVertexData(this.geometry.positions,0,this.geometry.positions.length)}containsPoint(e){let{x:t,y:i}=e,n=this.geometry.getBuffer("aPosition").data,o=nn.points,s=this.geometry.getIndex().data,a=s.length,l=this.geometry.topology==="triangle-strip"?3:1;for(let c=0;c+2<a;c+=l){let u=s[c]*2,d=s[c+1]*2,g=s[c+2]*2;if(o[0]=n[u],o[1]=n[u+1],o[2]=n[d],o[3]=n[d+1],o[4]=n[g],o[5]=n[g+1],nn.contains(t,i))return!0}return!1}onUpdate(){this.owner.onViewUpdate()}destroy(e=!1){if(typeof e=="boolean"?e:e?.texture){let i=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(i)}this._texture=null,this._geometry=null,this._shader=null}};var on=class extends he{constructor(...r){let e=r[0]??{};e instanceof Float32Array&&(Q(J,"use new MeshGeometry({ positions, uvs, indices }) instead"),e={positions:e,uvs:r[1],indices:r[2]}),e={...on.defaultOptions,...e};let t=e.positions||new Float32Array([0,0,1,0,1,1,0,1]),i=e.uvs||new Float32Array([0,0,1,0,1,1,0,1]),n=e.indices||new Uint32Array([0,1,2,0,2,3]),o=new Y({data:t,label:"attribute-mesh-positions",usage:z.VERTEX|z.COPY_DST}),s=new Y({data:i,label:"attribute-mesh-uvs",usage:z.VERTEX|z.COPY_DST}),a=new Y({data:n,label:"index-mesh-buffer",usage:z.INDEX|z.COPY_DST});super({attributes:{aPosition:{buffer:o,shaderLocation:0,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:s,shaderLocation:1,format:"float32x2",stride:2*4,offset:0}},indexBuffer:a,topology:e.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(r){this.attributes.aPosition.buffer.data=r}get uvs(){return this.attributes.aUV.buffer.data}set uvs(r){this.attributes.aUV.buffer.data=r}get indices(){return this.indexBuffer.data}set indices(r){this.indexBuffer.data=r}},Xr=on;Xr.defaultOptions={topology:"triangle-list"};var lt=class extends Xr{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}};function sn(r,e,t){let i=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let n=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;if(n==="highp"&&i!=="highp"&&(n="mediump"),r.substring(0,8)!=="#version")return`precision ${n} float;
${r}`;let o=r.indexOf(`
`);return`${r.substring(0,o+1)}precision ${n} float;
${r.substring(o+1)}`}else if(i!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var an={},Vt=an;function ln(){return(Vt===an||Vt?.isContextLost())&&(Vt=V.ADAPTER.createCanvas().getContext("webgl2",{})),Vt}var $t;function cn(){if(!$t){$t="mediump";let r=ln();r&&r.getShaderPrecisionFormat&&($t=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump")}return $t}var Vo={},$o={};function un(r,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";let i=t?Vo:$o;if(i[e]?(i[e]++,e+=`-${i[e]}`):i[e]=1,r.indexOf("#define SHADER_NAME")!==-1)return r;let n=`#define SHADER_NAME ${e}`;if(r.substring(0,8)!=="#version")return`${n}
${r}`;let o=r.indexOf(`
`);return`${r.substring(0,o+1)}${n}
${r.substring(o+1)}`}function dn(r,{version:e="300 es"}){return r.substring(0,8)==="#version"?r:`#version ${e}
${r}`}var qr={ensurePrecision:sn,setProgramName:un,setProgramVersion:dn},Ge=class{constructor(r){r={...Ge.defaultOptions,...r};let e={ensurePrecision:{requestedFragmentPrecision:r.preferredFragmentPrecision,requestedVertexPrecision:r.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:cn()},setProgramName:{name:r.name},setProgramVersion:{version:"300 es"}},t=r.fragment,i=r.vertex;Object.keys(qr).forEach(n=>{let o=e[n]??{};t=qr[n](t,o,!0),i=qr[n](i,o,!1)}),this.fragment=t,this.vertex=i,this.key=`${this.vertex}:${this.fragment}`}destroy(){this.fragment=null,this.vertex=null,this.attributeData=null,this.uniformData=null,this.uniformBlockData=null,this.transformFeedbackVaryings=null}static from(r){let e=`${r.vertex}:${r.fragment}`;return Ge.programCached[e]||(Ge.programCached[e]=new Ge(r)),Ge.programCached[e]}},pe=Ge;pe.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};pe.programCached=Object.create(null);function Nt(r){let e=/(?<!\/\/.*)@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,n=/var(<[^>]+>)? (\w+)/,o=/:\s*(\w+)/,s=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=r.match(e)?.map(d=>({group:parseInt(d.match(t)[1],10),binding:parseInt(d.match(i)[1],10),name:d.match(n)[2],isUniform:d.match(n)[1]==="<uniform>",type:d.match(o)[1]}));if(!c)return{groups:[],structs:[]};let u=r.match(s)?.map(d=>{let g=d.match(l)[1],h=d.match(a).reduce((p,b)=>{let[f,_]=b.split(":");return p[f.trim()]=_.trim(),p},{});return h?{name:g,members:h}:null}).filter(({name:d})=>c.some(g=>g.type===d))??[];return{groups:c,structs:u}}var Le=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))(Le||{});function hn({groups:r}){let e=[];for(let t=0;t<r.length;t++){let i=r[t];e[i.group]||(e[i.group]=[]),i.isUniform?e[i.group].push({binding:i.binding,visibility:Le.VERTEX|Le.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?e[i.group].push({binding:i.binding,visibility:Le.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"&&e[i.group].push({binding:i.binding,visibility:Le.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function fn({groups:r}){let e=[];for(let t=0;t<r.length;t++){let i=r[t];e[i.group]||(e[i.group]={}),e[i.group][i.name]=i.binding}return e}function pn(r,e){let t=new Set,i=new Set,n=[...r.structs,...e.structs].filter(s=>t.has(s.name)?!1:(t.add(s.name),!0)),o=[...r.groups,...e.groups].filter(s=>{let a=`${s.name}-${s.binding}`;return i.has(a)?!1:(i.add(a),!0)});return{structs:n,groups:o}}var ct=class{constructor({fragment:r,vertex:e,layout:t,gpuLayout:i,name:n}){if(this._layoutKey=0,this.name=n,this.fragment=r,this.vertex=e,r.source===e.source){let o=Nt(r.source);this.structsAndGroups=o}else{let o=Nt(e.source),s=Nt(r.source);this.structsAndGroups=pn(o,s)}this.layout=t??fn(this.structsAndGroups),this.gpuLayout=i??hn(this.structsAndGroups)}destroy(){this._gpuLayout=null,this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(r){let e=`${r.vertex.source}:${r.fragment.source}:${r.fragment.entryPoint}:${r.vertex.entryPoint}`;return ct.programCached[e]||(ct.programCached[e]=new ct(r)),ct.programCached[e]}},Be=ct;Be.programCached=Object.create(null);function Jr(r,e,t){if(r)for(let i in r){let n=i.toLocaleLowerCase(),o=e[n];if(o){let s=r[i];i==="header"&&(s=s.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&o.push(`//----${t}----//`),o.push(s)}else ne(`${i} placement hook does not exist in shader`)}}var No=/\{\{(.*?)\}\}/g;function Qr(r){let e={};return(r.match(No)?.map(i=>i.replace(/[{()}]/g,""))??[]).forEach(i=>{e[i]=[]}),e}function mn(r,e){let t,i=/@in\s+([^;]+);/g;for(;(t=i.exec(r))!==null;)e.push(t[1])}function Zr(r,e,t=!1){let i=[];mn(e,i),r.forEach(a=>{a.header&&mn(a.header,i)});let n=i;t&&n.sort();let o=n.map((a,l)=>`       @location(${l}) ${a},`).join(`
`),s=e.replace(/@in\s+[^;]+;\s*/g,"");return s=s.replace("{{in}}",`
${o}
`),s}function gn(r,e){let t,i=/@out\s+([^;]+);/g;for(;(t=i.exec(r))!==null;)e.push(t[1])}function jo(r){let t=/\b(\w+)\s*:/g.exec(r);return t?t[1]:""}function Ko(r){let e=/@.*?\s+/g;return r.replace(e,"")}function bn(r,e){let t=[];gn(e,t),r.forEach(l=>{l.header&&gn(l.header,t)});let i=0,n=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${i++}) ${l}`).join(`,
`),o=t.sort().map(l=>`       var ${Ko(l)};`).join(`
`),s=`return VSOutput(
                ${t.sort().map(l=>` ${jo(l)}`).join(`,
`)});`,a=e.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${n}
`),a=a.replace("{{start}}",`
${o}
`),a=a.replace("{{return}}",`
${s}
`),a}function ei(r,e){let t=r;for(let i in e){let n=e[i];n.join(`
`).length?t=t.replace(`{{${i}}}`,`//-----${i} START-----//
${n.join(`
`)}
//----${i} FINISH----//`):t=t.replace(`{{${i}}}`,"")}return t}var me=Object.create(null),ti=new Map,Yo=0;function xn({template:r,bits:e}){let t=_n(r,e);if(me[t])return me[t];let{vertex:i,fragment:n}=Xo(r,e);return me[t]=yn(i,n,e),me[t]}function vn({template:r,bits:e}){let t=_n(r,e);return me[t]||(me[t]=yn(r.vertex,r.fragment,e)),me[t]}function Xo(r,e){let t=e.map(s=>s.vertex).filter(s=>!!s),i=e.map(s=>s.fragment).filter(s=>!!s),n=Zr(t,r.vertex);n=bn(t,n);let o=Zr(i,r.fragment,!0);return{vertex:n,fragment:o}}function _n(r,e){return e.map(t=>(ti.has(t)||ti.set(t,Yo++),ti.get(t))).sort((t,i)=>t-i).join("-")+r.vertex+r.fragment}function yn(r,e,t){let i=Qr(r),n=Qr(e);return t.forEach(o=>{Jr(o.vertex,i,o.name),Jr(o.fragment,n,o.name)}),{vertex:ei(r,i),fragment:ei(e,n)}}var wn=`
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
`,Sn=`
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
`,Tn=`
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
`,Cn=`
   
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
`;var Bn={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            projectionMatrix:mat3x3<f32>,
            worldTransformMatrix:mat3x3<f32>,
            worldAlpha: f32,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Mn={name:"global-uniforms-bit",vertex:{header:`
          uniform globalUniforms {
            mat3 projectionMatrix;
            mat3 worldTransformMatrix;
            float worldAlpha;
            vec2 uResolution;
          };
        `}};function jt({bits:r,name:e}){let t=xn({template:{fragment:Sn,vertex:wn},bits:[Bn,...r]});return new Be({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function Kt({bits:r,name:e}){return new pe({name:e,...vn({template:{vertex:Tn,fragment:Cn},bits:[Mn,...r]})})}var Pn={name:"local-uniform-bit",vertex:{header:`

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
        `}},Yt={name:"local-uniform-bit",vertex:{header:`

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
        `}};var Xt={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}},qt={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}};var ge=class extends K{constructor({gpuProgram:e,glProgram:t,groups:i,resources:n,groupMap:o,compatibleRenderers:s}){super(),this.uniformBindMap=Object.create(null),this.gpuProgram=e,this.glProgram=t,s===void 0&&(s=0,e&&(s|=Pe.WEBGPU),t&&(s|=Pe.WEBGL)),this.compatibleRenderers=s;let a={};if(n&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&!i)throw new Error("[Shader] Must provide either resources or groups descriptor");if(!e&&i&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&i&&o)for(let l in o)for(let c in o[l]){let u=o[l][c];a[u]={group:l,binding:c,name:u}}else if(e&&i&&!o){let l=e.structsAndGroups.groups;o={},l.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,a[c.name]=c})}else if(n){if(e){let l=e.structsAndGroups.groups;o={},l.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,a[c.name]=c})}else{o={},i={99:new q};let l=0;for(let c in n)a[c]={group:99,binding:l,name:c},o[99]=o[99]||{},o[99][l]=c,l++}i={};for(let l in n){let c=l,u=n[l];!u.source&&!u.resourceType&&(u=new $(u));let d=a[c];d&&(i[d.group]=i[d.group]||new q,i[d.group].setResource(u,d.binding))}}this.groups=i,this.uniformBindMap=o,this.resources=this._buildResourceAccessor(i,a)}addResource(e,t,i){var n,o;(n=this.uniformBindMap)[t]||(n[t]={}),(o=this.uniformBindMap[t])[i]||(o[i]=e)}_buildResourceAccessor(e,t){let i={};for(let n in t){let o=t[n];Object.defineProperty(i,o.name,{get(){return e[o.group].getResource(o.binding)},set(s){e[o.group].setResource(s,o.binding)}})}return i}destroy(e=!1){this.emit("destroy",this),e&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.groups=null,this.removeAllListeners(),this.uniformBindMap=null,this.resources=null}};var kn={name:"tiling-bit",vertex:{header:`
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
        `}},Rn={name:"tiling-bit",vertex:{header:`
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
    
        `}};var Jt=class extends ge{constructor(e){let t=jt({name:"tiling-sprite-shader",bits:[Pn,kn,Xt]}),i=Kt({name:"tiling-sprite-shader",bits:[Yt,Rn,qt]}),n=new $({uMapCoord:{value:new E,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new E,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,200,.5,.5]),type:"vec4<f32>"}});super({glProgram:i,gpuProgram:t,resources:{tilingUniforms:n,uTexture:e.texture.source,uSampler:e.texture.source.style}})}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture=e,this.resources.uTexture=e.source,this.resources.uSampler=e.source.style)}};var qo=new lt,ut=class{constructor(e){this._renderableHash=Object.create(null),this._gpuBatchedTilingSprite=Object.create(null),this._gpuTilingSprite=Object.create(null),this._renderer=e}validateRenderable(e){let t=e.view.texture.textureMatrix,i=!1,n=this._getRenderableData(e);return n.batched!==t.isSimple&&(n.batched=t.isSimple,i=!0),i}addRenderable(e,t){e.view._didUpdate&&(e.view._didUpdate=!1,this._rebuild(e));let{batched:i}=this._getRenderableData(e);if(i){let n=this._getBatchedTilingSprite(e);this._renderer.renderPipes.mesh.addRenderable(n,t)}else{let n=this._getGpuTilingSprite(e);this._renderer.renderPipes.mesh.addRenderable(n.meshRenderable,t)}}updateRenderable(e){e.view._didUpdate&&(e.view._didUpdate=!1,this._rebuild(e));let{batched:t}=this._getRenderableData(e);if(t){let i=this._getBatchedTilingSprite(e);this._renderer.renderPipes.mesh.updateRenderable(i)}else{let i=this._getGpuTilingSprite(e);this._renderer.renderPipes.mesh.updateRenderable(i.meshRenderable)}}destroyRenderable(e){this._renderableHash[e.uid]=null,this._gpuTilingSprite[e.uid]=null,this._gpuBatchedTilingSprite[e.uid]=null}_getRenderableData(e){return this._renderableHash[e.uid]||this._initRenderableData(e)}_initRenderableData(e){let t={batched:!0};return this._renderableHash[e.uid]=t,this.validateRenderable(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),t}_rebuild(e){let t=this._getRenderableData(e),i=e.view,n=i.texture.textureMatrix;if(t.batched){let o=this._getBatchedTilingSprite(e);o.view.texture=i.texture;let s=i.texture.source.style;s.addressMode!=="repeat"&&(s.addressMode="repeat",s.update()),this._updateBatchPositions(e),this._updateBatchUvs(e)}else{let o=this._getGpuTilingSprite(e),{meshRenderable:s}=o,a=s.view;a.shader.texture=i.texture;let l=a.shader.resources.tilingUniforms,c=i.width,u=i.height,d=i.texture.width,g=i.texture.height,h=i._tileTransform.matrix,p=l.uniforms.uTextureTransform;p.set(h.a*d/c,h.b*d/u,h.c*g/c,h.d*g/u,h.tx/c,h.ty/u),p.invert(),l.uniforms.uMapCoord=n.mapCoord,l.uniforms.uClampFrame=n.uClampFrame,l.uniforms.uClampOffset=n.uClampOffset,l.uniforms.uTextureTransform=p,l.uniforms.uSizeAnchor[0]=c,l.uniforms.uSizeAnchor[1]=u,l.uniforms.uSizeAnchor[2]=e.view.anchor.x,l.uniforms.uSizeAnchor[3]=e.view.anchor.y,l.update()}}_getGpuTilingSprite(e){return this._gpuTilingSprite[e.uid]||this._initGpuTilingSprite(e)}_initGpuTilingSprite(e){let t=e.view,i=t.texture.source.style;i.addressMode="repeat",i.update();let n=new at({geometry:qo,shader:new Jt({texture:t.texture})}),o=new Ce({original:e,view:n}),s=new E,a={meshRenderable:o,textureMatrix:s};return this._gpuTilingSprite[e.uid]=a,a}_getBatchedTilingSprite(e){return this._gpuBatchedTilingSprite[e.uid]||this._initBatchedTilingSprite(e)}_initBatchedTilingSprite(e){let t=new at({geometry:new lt,texture:e.view.texture});t.roundPixels=this._renderer._roundPixels|e.view.roundPixels;let i=new Ce({original:e,view:t});return this._gpuBatchedTilingSprite[e.uid]=i,i}_updateBatchPositions(e){let t=this._getBatchedTilingSprite(e),i=e.view,o=t.view.geometry.getBuffer("aPosition").data,s=i.anchor.x,a=i.anchor.y;o[0]=-s*i.width,o[1]=-a*i.height,o[2]=(1-s)*i.width,o[3]=-a*i.height,o[4]=(1-s)*i.width,o[5]=(1-a)*i.height,o[6]=-s*i.width,o[7]=(1-a)*i.height}_updateBatchUvs(e){let t=e.view,i=t.texture.frameWidth,n=t.texture.frameHeight,a=this._getBatchedTilingSprite(e).view.geometry.getBuffer("aUV").data,l=0,c=0;t._applyAnchorToTexture&&(l=t.anchor.x,c=t.anchor.y),a[0]=a[6]=-l,a[2]=a[4]=1-l,a[1]=a[3]=-c,a[5]=a[7]=1-c;let u=E.shared;u.copyFrom(t._tileTransform.matrix),u.tx/=t.width,u.ty/=t.height,u.invert(),u.scale(t.width/i,t.height/n),Jo(a,2,0,u)}destroy(){this._renderableHash=null,this._gpuTilingSprite=null,this._gpuBatchedTilingSprite=null,this._renderer=null}};ut.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"tilingSprite"};function Jo(r,e,t,i){let n=0,o=r.length/(e||2),s=i.a,a=i.b,l=i.c,c=i.d,u=i.tx,d=i.ty;for(t*=e;n<o;){let g=r[t],h=r[t+1];r[t]=s*g+l*h+u,r[t+1]=a*g+c*h+d,t+=e,n++}}var Qt=class{constructor(e){this.uid=I("graphicsView"),this.canBundle=!0,this.owner=Gt,this.renderPipeId="graphics",this.roundPixels=0,this._context=e||new Ke,this._context.on("update",this.onGraphicsContextUpdate,this)}set context(e){e!==this._context&&(this._context.off("update",this.onGraphicsContextUpdate,this),this._context=e,this._context.on("update",this.onGraphicsContextUpdate,this),this.onGraphicsContextUpdate())}get context(){return this._context}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}onGraphicsContextUpdate(){this._didUpdate=!0,this.owner.onViewUpdate()}destroy(e=!1){this.owner=null,(typeof e=="boolean"?e:e?.context)&&this._context.destroy(e),this._context=null}};var Un={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Fn={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}};var Ee={};function Qo(r){let e=[];if(r===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let i=0;i<r;i++)e.push(`@group(1) @binding(${t++}) var textureSource${i+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${i+1}: sampler;`)}return e.join(`
`)}function Zo(r){let e=[];if(r===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<r;t++)t===r-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function An(r){return Ee[r]||(Ee[r]={name:"texture-batch-bit",vertex:{header:`
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
    
                ${Qo(16)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${Zo(16)}
            `}}),Ee[r]}function es(r){let e=[];for(let t=0;t<r;t++)t>0&&e.push("else"),t<r-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uSamplers[${t}], vUV);`),e.push("}");return e.join(`
`)}function Gn(r){return Ee[r]||(Ee[r]={name:"texture-batch-bit",vertex:{header:`
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
    
                ${es(16)}
            `}}),Ee[r]}var Ln=new Int32Array(16);for(let r=0;r<16;r++)Ln[r]=r;var En=new $({uSamplers:{value:Ln,type:"u32",size:16}},{isStatic:!0});var Dn={name:"local-uniform-msdf-bit",vertex:{header:`
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
        `}};var In={name:"msdf-bit",fragment:{header:`
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
        `}},zn={name:"msdf-bit",fragment:{header:`
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
        `}};var Zt=class extends ge{constructor(){let e=new $({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new E,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),t=jt({name:"sdf-shader",bits:[Un,An(16),Dn,In,Xt]}),i=Kt({name:"sdf-shader",bits:[Fn,Gn(16),Yt,zn,qt]});super({glProgram:i,gpuProgram:t,resources:{localUniforms:e,batchSamplers:En}})}};var Wn=["_fontFamily","_fontStyle","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides"];function Hn(r){let e=[],t=0;for(let i=0;i<Wn.length;i++){let n=Wn[i];e[t++]=r[n]}return t=On(r._fill,e,t),t=ts(r._stroke,e,t),e.join("-")}function On(r,e,t){return r&&(e[t++]=r.color,e[t++]=r.alpha,e[t++]=r.fill?.uid),t}function ts(r,e,t){return r&&(t=On(r,e,t),e[t++]=r.width,e[t++]=r.alignment,e[t++]=r.cap,e[t++]=r.join,e[t++]=r.miterLimit),t}var De=class extends K{constructor(r={}){super(),rs(r);let e={...De.defaultTextStyle,...r};for(let t in De.defaultTextStyle){let i=t;this[i]=e[t]}this.dropShadow=null,typeof e.fill=="string"?this.fontSize=parseInt(e.fontSize,10):this.fontSize=e.fontSize,r.dropShadow&&(r.dropShadow instanceof Boolean?r.dropShadow===!0&&(this.dropShadow={...De.defaultTextStyle.dropShadow}):this.dropShadow={...De.defaultTextStyle.dropShadow,...r.dropShadow}),this.update()}get align(){return this._align}set align(r){this._align=r,this.update()}get breakWords(){return this._breakWords}set breakWords(r){this._breakWords=r,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(r){this._dropShadow=r,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(r){this._fontFamily=r,this.update()}get fontSize(){return this._fontSize}set fontSize(r){this._fontSize=r,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(r){this._fontStyle=r,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(r){this._fontVariant=r,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(r){this._fontWeight=r,this.update()}get leading(){return this._leading}set leading(r){this._leading=r,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(r){this._letterSpacing=r,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(r){this._lineHeight=r,this.update()}get padding(){return this._padding}set padding(r){this._padding=r,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(r){this._textBaseline=r,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(r){this._whiteSpace=r,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(r){this._wordWrap=r,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(r){this._wordWrapWidth=r,this.update()}get fill(){return this._originalFill}set fill(r){r!==this._originalFill&&(this._originalFill=r,this._fill=Ar(r,Ke.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(r){r!==this._originalFill&&(this._originalFill=r,this._stroke=Ar(r,Ke.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Hn(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new De({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(r=!1){if(this.removeAllListeners(),typeof r=="boolean"?r:r?.texture){let t=typeof r=="boolean"?r:r?.textureSource;this._fill?.texture&&this._fill.texture.destroy(t),this._originalFill?.texture&&this._originalFill.texture.destroy(t),this._stroke?.texture&&this._stroke.texture.destroy(t),this._originalStroke?.texture&&this._originalStroke.texture.destroy(t)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}},er=De;er.defaultTextStyle={align:"left",breakWords:!1,dropShadow:{alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5},fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};function rs(r){let e=r;if(typeof e.dropShadow=="boolean"&&(Q(J,"dropShadow is now an object, not a boolean"),r.dropShadow={alpha:e.dropShadowAlpha??1,angle:e.dropShadowAngle,blur:e.dropShadowBlur??0,color:e.dropShadowColor,distance:e.dropShadowDistance}),e.strokeThickness){Q(J,"strokeThickness is now a part of stroke");let t=e.stroke;r.stroke={color:t,width:e.strokeThickness}}if(Array.isArray(e.fill)){Q(J,"gradient fill is now a fill pattern: `new FillGradient(...)`");let t=new At(0,0,0,r.fontSize*1.7),i=e.fill.map(n=>j.shared.setValue(n).toNumber());i.forEach((n,o)=>{let s=e.fillGradientStops[o]??o/i.length;t.addColorStop(s,n)}),r.fill={fill:t}}}var ri=class{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){let i=V.ADAPTER.createCanvas();i.width=e,i.height=t;let n=i.getContext("2d");return{canvas:i,context:n}}getOptimalCanvasAndContext(e,t,i=1){e=Math.ceil(e*i-1e-6),t=Math.ceil(t*i-1e-6),e=le(e),t=le(t);let n=(e<<17)+(t<<1);this._canvasPool[n]||(this._canvasPool[n]=[]);let o=this._canvasPool[n].pop();return o||(o=this._createCanvasAndContext(e,t)),o}returnCanvasAndContext(e){let{width:t,height:i}=e.canvas,n=(t<<17)+(i<<1);this._canvasPool[n].push(e)}clear(){this._canvasPool={}}},ce=new ri;var is=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Me(r){let e=typeof r.fontSize=="number"?`${r.fontSize}px`:r.fontSize,t=r.fontFamily;Array.isArray(r.fontFamily)||(t=r.fontFamily.split(","));for(let i=t.length-1;i>=0;i--){let n=t[i].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&!is.includes(n)&&(n=`"${n}"`),t[i]=n}return`${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${e} ${t.join(",")}`}var ii={willReadFrequently:!0},T=class{static get experimentalLetterSpacingSupported(){let r=T._experimentalLetterSpacingSupported;if(r!==void 0){let e=V.ADAPTER.getCanvasRenderingContext2D().prototype;r=T._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return r}constructor(r,e,t,i,n,o,s,a,l){this.text=r,this.style=e,this.width=t,this.height=i,this.lines=n,this.lineWidths=o,this.lineHeight=s,this.maxLineWidth=a,this.fontProperties=l}static measureText(r=" ",e,t=T._canvas,i=e.wordWrap){let n=`${r}:${e.styleKey}`;if(T._measurementCache[n])return T._measurementCache[n];let o=Me(e),s=T.measureFont(o);s.fontSize===0&&(s.fontSize=e.fontSize,s.ascent=e.fontSize);let a=T.__context;a.font=o;let c=(i?T._wordWrap(r,e,t):r).split(/(?:\r\n|\r|\n)/),u=new Array(c.length),d=0;for(let _=0;_<c.length;_++){let v=T._measureText(c[_],e.letterSpacing,a);u[_]=v,d=Math.max(d,v)}let g=e._stroke?.width||0,h=d+g;e.dropShadow&&(h+=e.dropShadow.distance);let p=e.lineHeight||s.fontSize+g,b=Math.max(p,s.fontSize+g*2)+(c.length-1)*(p+e.leading);return e.dropShadow&&(b+=e.dropShadow.distance),new T(r,e,h,b,c,u,p+e.leading,d,s)}static _measureText(r,e,t){let i=!1;T.experimentalLetterSpacingSupported&&(T.experimentalLetterSpacing?(t.letterSpacing=`${e}px`,t.textLetterSpacing=`${e}px`,i=!0):(t.letterSpacing="0px",t.textLetterSpacing="0px"));let n=t.measureText(r).width;return n>0&&(i?n-=e:n+=(T.graphemeSegmenter(r).length-1)*e),n}static _wordWrap(r,e,t=T._canvas){let i=t.getContext("2d",ii),n=0,o="",s="",a=Object.create(null),{letterSpacing:l,whiteSpace:c}=e,u=T._collapseSpaces(c),d=T._collapseNewlines(c),g=!u,h=e.wordWrapWidth+l,p=T._tokenize(r);for(let b=0;b<p.length;b++){let f=p[b];if(T._isNewline(f)){if(!d){s+=T._addLine(o),g=!u,o="",n=0;continue}f=" "}if(u){let v=T.isBreakingSpace(f),y=T.isBreakingSpace(o[o.length-1]);if(v&&y)continue}let _=T._getFromCache(f,l,a,i);if(_>h)if(o!==""&&(s+=T._addLine(o),o="",n=0),T.canBreakWords(f,e.breakWords)){let v=T.wordWrapSplit(f);for(let y=0;y<v.length;y++){let x=v[y],U=x,L=1;for(;v[y+L];){let B=v[y+L];if(!T.canBreakChars(U,B,f,y,e.breakWords))x+=B;else break;U=B,L++}y+=L-1;let F=T._getFromCache(x,l,a,i);F+n>h&&(s+=T._addLine(o),g=!1,o="",n=0),o+=x,n+=F}}else{o.length>0&&(s+=T._addLine(o),o="",n=0);let v=b===p.length-1;s+=T._addLine(f,!v),g=!1,o="",n=0}else _+n>h&&(g=!1,s+=T._addLine(o),o="",n=0),(o.length>0||!T.isBreakingSpace(f)||g)&&(o+=f,n+=_)}return s+=T._addLine(o,!1),s}static _addLine(r,e=!0){return r=T._trimRight(r),r=e?`${r}
`:r,r}static _getFromCache(r,e,t,i){let n=t[r];return typeof n!="number"&&(n=T._measureText(r,e,i)+e,t[r]=n),n}static _collapseSpaces(r){return r==="normal"||r==="pre-line"}static _collapseNewlines(r){return r==="normal"}static _trimRight(r){if(typeof r!="string")return"";for(let e=r.length-1;e>=0;e--){let t=r[e];if(!T.isBreakingSpace(t))break;r=r.slice(0,-1)}return r}static _isNewline(r){return typeof r!="string"?!1:T._newlines.includes(r.charCodeAt(0))}static isBreakingSpace(r,e){return typeof r!="string"?!1:T._breakingSpaces.includes(r.charCodeAt(0))}static _tokenize(r){let e=[],t="";if(typeof r!="string")return e;for(let i=0;i<r.length;i++){let n=r[i],o=r[i+1];if(T.isBreakingSpace(n,o)||T._isNewline(n)){t!==""&&(e.push(t),t=""),e.push(n);continue}t+=n}return t!==""&&e.push(t),e}static canBreakWords(r,e){return e}static canBreakChars(r,e,t,i,n){return!0}static wordWrapSplit(r){return T.graphemeSegmenter(r)}static measureFont(r){if(T._fonts[r])return T._fonts[r];let e=T._context;e.font=r;let t=e.measureText(T.METRICS_STRING+T.BASELINE_SYMBOL),i={ascent:t.actualBoundingBoxAscent,descent:t.actualBoundingBoxDescent,fontSize:t.actualBoundingBoxAscent+t.actualBoundingBoxDescent};return T._fonts[r]=i,i}static clearMetrics(r=""){r?delete T._fonts[r]:T._fonts={}}static get _canvas(){if(!T.__canvas){let r;try{let e=new OffscreenCanvas(0,0);if(e.getContext("2d",ii)?.measureText)return T.__canvas=e,e;r=V.ADAPTER.createCanvas()}catch{r=V.ADAPTER.createCanvas()}r.width=r.height=10,T.__canvas=r}return T.__canvas}static get _context(){return T.__context||(T.__context=T._canvas.getContext("2d",ii)),T.__context}},W=T;W.METRICS_STRING="|\xC9q\xC5";W.BASELINE_SYMBOL="M";W.BASELINE_MULTIPLIER=1.4;W.HEIGHT_MULTIPLIER=2;W.graphemeSegmenter=(()=>{if(typeof Intl?.Segmenter=="function"){let r=new Intl.Segmenter;return e=>[...r.segment(e)].map(t=>t.segment)}return r=>[...r]})();W.experimentalLetterSpacing=!1;W._fonts={};W._newlines=[10,13];W._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];W._measurementCache={};function Ie(r,e){if(r.texture===A.WHITE&&!r.fill)return j.shared.setValue(r.color).toHex();if(r.fill){if(r.fill instanceof Ri){let t=r.fill,i=e.createPattern(t.texture.source.resource,"repeat"),n=t.transform.copyTo(E.shared);return n.scale(t.texture.frameWidth,t.texture.frameHeight),i.setTransform(n),i}else if(r.fill instanceof At){let t=r.fill;if(t.type==="linear"){let i=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);return t.gradientStops.forEach(n=>{i.addColorStop(n.offset,j.shared.setValue(n.color).toHex())}),i}}}else{let t=e.createPattern(r.texture.source.resource,"repeat"),i=r.matrix.copyTo(E.shared);return i.scale(r.texture.frameWidth,r.texture.frameHeight),t.setTransform(i),t}return ne("FillStyle not recognised",r),"red"}function tr(r){if(r==="")return[];typeof r=="string"&&(r=[r]);let e=[];for(let t=0,i=r.length;t<i;t++){let n=r[t];if(Array.isArray(n)){if(n.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${n.length}.`);if(n[0].length===0||n[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");let o=n[0].charCodeAt(0),s=n[1].charCodeAt(0);if(s<o)throw new Error("[BitmapFont]: Invalid character range.");for(let a=o,l=s;a<=l;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(n))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}var dt=class extends Mi{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=4,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;let t=e,i=t.style.clone();i.fontSize=this.baseMeasurementFontSize,t.overrideFill&&(i._fill.color=16777215,i._fill.alpha=1,i._fill.texture=A.WHITE,i._fill.fill=null),this._style=i,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4;let n=Me(i),o=this;o.fontMetrics=W.measureFont(n),o.lineHeight=i.lineHeight||this.fontMetrics.fontSize||i.fontSize}ensureCharacters(e){let t=tr(e).filter(b=>!this._currentChars.includes(b)).filter((b,f,_)=>_.indexOf(b)===f);if(!t.length)return;this._currentChars=[...this._currentChars,...t];let i;this._currentPageIndex===-1?i=this._nextPage():i=this.pages[this._currentPageIndex];let{canvas:n,context:o}=i.canvasAndContext,s=i.texture.source,a=this._style,l=this._currentX,c=this._currentY,u=this.baseRenderedFontSize/this.baseMeasurementFontSize,d=this._padding*u,g=a.fontStyle==="italic"?2:1,h=0,p=!1;for(let b=0;b<t.length;b++){let f=t[b],_=W.measureText(f,a,n,!1),v=g*_.width*u,y=_.height*u,x=v+d*2,U=y+d*2;if(p=!1,f!==`
`&&f!=="\r"&&f!=="	"&&f!==" "&&(p=!0,h=Math.ceil(Math.max(U,h))),l+x>512&&(c+=h,h=U,l=0,c+h>512)){s.update();let F=this._nextPage();n=F.canvasAndContext.canvas,o=F.canvasAndContext.context,s=F.texture.source,c=0}let L=v/u-(a.dropShadow?.distance??0)-(a._stroke?.width??0);if(this.chars[f]={id:f.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:L,kerning:{}},p){this._drawGlyph(o,_,l+d,c+d,u,a);let F=s.width*u,B=s.height*u,w=new ie(l/F,c/B,x/F,U/B);this.chars[f].texture=new A({source:s,layout:{frame:w}}),l+=Math.ceil(x)}}s.update(),this._currentX=l,this._currentY=c,this._skipKerning&&this._applyKerning(t,o)}get pageTextures(){return Q(J,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){let i=this._measureCache;for(let n=0;n<e.length;n++){let o=e[n];for(let s=0;s<this._currentChars.length;s++){let a=this._currentChars[s],l=i[o];l||(l=i[o]=t.measureText(o).width);let c=i[a];c||(c=i[a]=t.measureText(a).width);let u=t.measureText(o+a).width,d=u-(l+c);d&&(this.chars[o].kerning[a]=d),u=t.measureText(o+a).width,d=u-(l+c),d&&(this.chars[a].kerning[o]=d)}}}_nextPage(){this._currentPageIndex++;let e=this.resolution,t=ce.getOptimalCanvasAndContext(512,512,e);this._setupContext(t.context,this._style,e);let i=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),n=new A({source:new ki({resource:t.canvas,resolution:i,alphaMode:"premultiply-alpha-on-upload"})}),o={canvasAndContext:t,texture:n};return this.pages[this._currentPageIndex]=o,o}_setupContext(e,t,i){t.fontSize=this.baseRenderedFontSize,e.scale(i,i),e.font=Me(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;let n=t._stroke,o=n?.width??0;if(n&&(e.lineWidth=o,e.lineJoin=n.join,e.miterLimit=n.miterLimit,e.strokeStyle=Ie(n,e)),t._fill&&(e.fillStyle=Ie(t._fill,e)),t.dropShadow){let s=t.dropShadow,a=j.shared.setValue(s.color).toArray(),l=s.blur*i,c=s.distance*i;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${s.alpha})`,e.shadowBlur=l,e.shadowOffsetX=Math.cos(s.angle)*c,e.shadowOffsetY=Math.sin(s.angle)*c}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,i,n,o,s){let a=t.text,l=t.fontProperties,u=(s._stroke?.width??0)*o,d=i+u/2,g=n-u/2,h=l.descent*o,p=t.lineHeight*o;s.stroke&&u&&e.strokeText(a,d,g+p-h),s._fill&&e.fillText(a,d,g+p-h)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){let{canvasAndContext:t,texture:i}=this.pages[e];ce.returnCanvasAndContext(t),i.destroy(!0)}this.pages=null}};function rr(r,e,t){let i={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};i.offsetY=t.baseLineOffset;let n=i.lines[0],o=null,s=!0,a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=h=>{let p=n.width;for(let b=0;b<a.index;b++){let f=h.positions[b];n.chars.push(h.chars[b]),n.charPositions.push(f+p)}n.width+=h.width,s=!1,a.width=0,a.index=0,a.chars.length=0},c=()=>{let h=n.chars.length-1,p=n.chars[h];for(;p===" ";)n.width-=t.chars[p].xAdvance,p=n.chars[--h];i.width=Math.max(i.width,n.width),n={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},s=!0,i.lines.push(n),i.height+=t.lineHeight},u=t.baseMeasurementFontSize/e.fontSize,d=e.letterSpacing*u,g=e.wordWrapWidth*u;for(let h=0;h<r.length+1;h++){let p,b=h===r.length;b||(p=r[h]);let f=t.chars[p];if(/(?:\s)/.test(p)||p==="\r"||p===`
`||b){if(!s&&e.wordWrap&&n.width+a.width-d>g?(c(),l(a),b||n.charPositions.push(0)):(a.start=n.width,l(a),b||n.charPositions.push(0)),p==="\r"||p===`
`)n.width!==0&&c();else if(!b){let x=f.xAdvance+(f.kerning[o]||0)+d;n.width+=x,n.spaceWidth=x,n.spacesIndex.push(n.charPositions.length),n.chars.push(p)}}else{let y=f.kerning[o]||0,x=f.xAdvance+y+d;a.positions[a.index++]=a.width+y,a.chars.push(p),a.width+=x}o=p}return c(),e.align==="center"?ns(i):e.align==="right"?os(i):e.align==="justify"&&ss(i),i}function ns(r){for(let e=0;e<r.lines.length;e++){let t=r.lines[e],i=r.width/2-t.width/2;for(let n=0;n<t.charPositions.length;n++)t.charPositions[n]+=i}}function os(r){for(let e=0;e<r.lines.length;e++){let t=r.lines[e],i=r.width-t.width;for(let n=0;n<t.charPositions.length;n++)t.charPositions[n]+=i}}function ss(r){let e=r.width;for(let t=0;t<r.lines.length;t++){let i=r.lines[t],n=0,o=i.spacesIndex[n++],s=0,a=i.spacesIndex.length,c=(e-i.width)/a;for(let u=0;u<i.charPositions.length;u++)u===o&&(o=i.spacesIndex[n++],s+=c),i.charPositions[u]+=s}}var ni=class{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(e,t){let i=t.fontFamily,n=!0;t._fill.fill&&(i+=t._fill.fill.uid,n=!1),se.has(i)||se.set(i,new dt({style:t,overrideFill:n,...this.defaultOptions}));let o=se.get(i);return o.ensureCharacters?.(e),o}getLayout(e,t){let i=this.getFont(e,t);return rr(e.split(""),t,i)}measureText(e,t){return this.getLayout(e,t)}install(e,t,i){if(!e)throw new Error("[BitmapFontManager] Property `name` is required.");i={...this.defaultOptions,...i};let n=t instanceof er?t:new er(t),o=n._fill.fill!==null&&n._fill.fill!==void 0,s=new dt({style:n,overrideFill:o,skipKerning:i.skipKerning,padding:i.padding,resolution:i.resolution}),a=tr(i.chars);return s.ensureCharacters(a.join("")),se.set(e,s),s}},Vn=new ni;var oi=class extends Ce{constructor(){super({view:new Qt})}},ht=class{constructor(e){this._gpuBitmapText={},this._renderer=e}validateRenderable(e){let t=this._getGpuBitmapText(e);return e.view._didUpdate&&(e.view._didUpdate=!1,this._updateContext(e,t.view.context)),this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){let i=this._getGpuBitmapText(e);e.view._didUpdate&&(e.view._didUpdate=!1,this._updateContext(e,i.view.context)),this._renderer.renderPipes.graphics.addRenderable(i,t),i.view.context.customShader&&this._updateDistanceField(e)}destroyRenderable(e){this._destroyRenderableByUid(e.uid)}_destroyRenderableByUid(e){G.return(this._gpuBitmapText[e]),this._gpuBitmapText[e]=null}updateRenderable(e){let t=this._getGpuBitmapText(e);this._renderer.renderPipes.graphics.updateRenderable(t),t.view.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){let i=e.view,n=Vn.getFont(i.text,i._style);t.clear(),n.distanceField.type!=="none"&&(t.customShader||(this._sdfShader||(this._sdfShader=new Zt),t.customShader=this._sdfShader));let o=Array.from(i.text),s=i._style,a=(s._stroke?.width||0)/2;a+=n.baseLineOffset;let l=rr(o,s,n),c=0,u=s.padding,d=l.scale;t.translate(-i.anchor._x*l.width-u,-i.anchor._y*(l.height+l.offsetY)-u).scale(d,d);let g=s._fill.color;for(let h=0;h<l.lines.length;h++){let p=l.lines[h];for(let b=0;b<p.charPositions.length;b++){let f=o[c++],_=n.chars[f];_?.texture&&t.texture(_.texture,g,Math.round(p.charPositions[b]+_.xOffset),Math.round(a+_.yOffset))}a+=n.lineHeight}}_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this._initGpuText(e)}_initGpuText(e){e.view._style.update();let t=G.get(oi,e);return this._gpuBitmapText[e.uid]=t,t.view.roundPixels=this._renderer._roundPixels|e.view.roundPixels,this._updateContext(e,t.view.context),e.on("destroyed",()=>{this.destroyRenderable(e)}),this._gpuBitmapText[e.uid]}_updateDistanceField(e){let t=this._getGpuBitmapText(e).view.context,i=e.view,n=i._style.fontFamily,o=se.get(n),{a:s,b:a,c:l,d:c}=e.layerTransform,u=Math.sqrt(s*s+a*a),d=Math.sqrt(l*l+c*c),g=(Math.abs(u)+Math.abs(d))/2,h=o.baseRenderedFontSize/i._style.fontSize,p=i.resolution??this._renderer.resolution,b=g*o.distanceField.range*(1/h)*p;t.customShader.resources.localUniforms.uniforms.uDistance=b}destroy(){for(let e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,this._sdfShader?.destroy(!0),this._sdfShader=null,this._renderer=null}};ht.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"bitmapText"};var ft=class{constructor(e){this._gpuText=Object.create(null),this._renderer=e}validateRenderable(e){let t=this._getGpuText(e),i=e.view._getKey();if(t.currentKey!==i){let n=e.view,o=n.resolution??this._renderer.resolution,{width:s,height:a}=this._renderer.canvasText.getTextureSize(n.text,o,n._style);return!(this._renderer.canvasText.getReferenceCount(t.currentKey)===1&&s===t.texture._source.width&&a===t.texture._source.height)}return!1}addRenderable(e,t){let n=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(n)}updateRenderable(e){let i=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),i.batcher.updateElement(i)}destroyRenderable(e){this._destroyRenderableById(e.uid)}_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey),G.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){let t=e.view._getKey(),i=this._getGpuText(e),n=i.batchableSprite;i.currentKey!==t&&this._updateGpuText(e),e.view._didUpdate=!1;let o=e.view._style.padding;Ye(n.bounds,e.view.anchor,n.texture,o)}_updateGpuText(e){let t=this._getGpuText(e),i=t.batchableSprite,n=e.view;t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey);let o=n.resolution??this._renderer.resolution;t.texture=i.texture=this._renderer.canvasText.getTexture(n.text,o,n._style,n._getKey()),t.currentKey=n._getKey(),i.texture=t.texture}_getGpuText(e){return this._gpuText[e.uid]||this._initGpuText(e)}_initGpuText(e){e.view._style.update();let i={texture:null,currentKey:"--",batchableSprite:G.get(fe)};return i.batchableSprite.renderable=e,i.batchableSprite.bounds=[0,1,0,0],i.batchableSprite.roundPixels=this._renderer._roundPixels|e.view.roundPixels,this._gpuText[e.uid]=i,this._updateText(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),i}destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}};ft.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"text"};var as=new de;function ir(r,e,t,i){let n=as;n.minX=0,n.minY=0,n.maxX=r.width/i|0,n.maxY=r.height/i|0;let o=N.getOptimalTexture(n.width,n.height,i,!1);return o.source.uploadMethodId="image",o.source.resource=r,o.source.alphaMode="premultiply-alpha-on-upload",o.frameWidth=e/i,o.frameHeight=t/i,o.source.update(),o.layout.updateUvs(),o}var pt=class{constructor(){this._activeTextures={}}getTextureSize(e,t,i){let n=W.measureText(e||" ",i),o=Math.ceil(Math.ceil(Math.max(1,n.width)+i.padding*2)*t),s=Math.ceil(Math.ceil(Math.max(1,n.height)+i.padding*2)*t);return o=Math.ceil(o-1e-6),s=Math.ceil(s-1e-6),o=le(o),s=le(s),{width:o,height:s}}getTexture(e,t,i,n){if(this._activeTextures[n])return this._increaseReferenceCount(n),this._activeTextures[n].texture;let o=W.measureText(e||" ",i),s=Math.ceil(Math.ceil(Math.max(1,o.width)+i.padding*2)*t),a=Math.ceil(Math.ceil(Math.max(1,o.height)+i.padding*2)*t),l=ce.getOptimalCanvasAndContext(s,a),{canvas:c}=l;this.renderTextToCanvas(e,i,t,l);let u=ir(c,s,a,t);return this._activeTextures[n]={canvasAndContext:l,texture:u,usageCount:1},u}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let t=this._activeTextures[e];if(t.usageCount--,t.usageCount===0){ce.returnCanvasAndContext(t.canvasAndContext),N.returnTexture(t.texture);let i=t.texture.source;i.resource=null,i.uploadMethodId="unknown",i.alphaMode="no-premultiply-alpha",this._activeTextures[e]=null}}getReferenceCount(e){return this._activeTextures[e].usageCount}renderTextToCanvas(e,t,i,n){let{canvas:o,context:s}=n,a=Me(t),l=W.measureText(e||" ",t),c=l.lines,u=l.lineHeight,d=l.lineWidths,g=l.maxLineWidth,h=l.fontProperties,p=o.height;if(s.resetTransform(),s.scale(i,i),s.clearRect(0,0,l.width+4,l.height+4),t._stroke?.width){let v=t._stroke;s.lineWidth=v.width,s.miterLimit=v.miterLimit,s.lineJoin=v.join,s.lineCap=v.cap}s.font=a;let b,f,_=t.dropShadow?2:1;for(let v=0;v<_;++v){let y=t.dropShadow&&v===0,x=y?Math.ceil(Math.max(1,p)+t.padding*2):0,U=x*i;if(y){s.fillStyle="black",s.strokeStyle="black";let B=t.dropShadow,w=B.color,S=B.alpha;s.shadowColor=j.shared.setValue(w).setAlpha(S).toRgbaString();let ee=B.blur*i,re=B.distance*i;s.shadowBlur=ee,s.shadowOffsetX=Math.cos(B.angle)*re,s.shadowOffsetY=Math.sin(B.angle)*re+U}else s.globalAlpha=t._fill?.alpha??1,s.fillStyle=t._fill?Ie(t._fill,s):null,t._stroke?.width&&(s.strokeStyle=Ie(t._stroke,s)),s.shadowColor="black";let L=(u-h.fontSize)/2;u-h.fontSize<0&&(L=0);let F=t._stroke?.width??0;for(let B=0;B<c.length;B++)b=F/2,f=F/2+B*u+h.ascent+L,t.align==="right"?b+=g-d[B]:t.align==="center"&&(b+=(g-d[B])/2),t._stroke&&this._drawLetterSpacing(c[B],t,n,b+t.padding,f+t.padding-x,!0),t._fill!==void 0&&this._drawLetterSpacing(c[B],t,n,b+t.padding,f+t.padding-x)}}_drawLetterSpacing(e,t,i,n,o,s=!1){let{context:a}=i,l=t.letterSpacing,c=!1;if(W.experimentalLetterSpacingSupported&&(W.experimentalLetterSpacing?(a.letterSpacing=`${l}px`,a.textLetterSpacing=`${l}px`,c=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),l===0||c){s?a.strokeText(e,n,o):a.fillText(e,n,o);return}let u=n,d=W.graphemeSegmenter(e),g=a.measureText(e).width,h=0;for(let p=0;p<d.length;++p){let b=d[p];s?a.strokeText(b,u,o):a.fillText(b,u,o);let f="";for(let _=p+1;_<d.length;++_)f+=d[_];h=a.measureText(f).width,u+=g-h+l,g=h}}destroy(){this._activeTextures=null}};pt.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"canvasText"};var mt=class{constructor(e){this._gpuText=Object.create(null),this._renderer=e}validateRenderable(e){let t=this._getGpuText(e),i=e.view._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==i}addRenderable(e){let i=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(i)}updateRenderable(e){let i=this._getGpuText(e).batchableSprite;e.view._didUpdate&&this._updateText(e),i.batcher.updateElement(i)}destroyRenderable(e){this._destroyRenderableById(e.uid)}_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey),G.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){let t=e.view._getKey(),i=this._getGpuText(e),n=i.batchableSprite;i.currentKey!==t&&this._updateGpuText(e).catch(s=>{console.error(s)}),e.view._didUpdate=!1;let o=e.view._style.padding;Ye(n.bounds,e.view.anchor,n.texture,o)}async _updateGpuText(e){e.view._didUpdate=!1;let t=this._getGpuText(e);if(t.generatingTexture)return;let i=e.view._getKey();this._renderer.htmlText.decreaseReferenceCount(t.currentKey),t.generatingTexture=!0,t.currentKey=i;let n=e.view,o=n.resolution??this._renderer.resolution,s=await this._renderer.htmlText.getManagedTexture(n.text,o,n._style,n._getKey()),a=t.batchableSprite;a.texture=t.texture=s,t.generatingTexture=!1,t.textureNeedsUploading=!0,e.view.onUpdate();let l=e.view._style.padding;Ye(a.bounds,e.view.anchor,a.texture,l)}_getGpuText(e){return this._gpuText[e.uid]||this._initGpuText(e)}_initGpuText(e){e.view._style.update();let i={texture:A.EMPTY,currentKey:"--",batchableSprite:G.get(fe),textureNeedsUploading:!1,generatingTexture:!1},n=i.batchableSprite;return n.renderable=e,n.texture=A.EMPTY,n.bounds=[0,1,0,0],n.roundPixels=this._renderer._roundPixels|e.view.roundPixels,this._gpuText[e.uid]=i,e.on("destroyed",()=>{this.destroyRenderable(e)}),i}destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}};mt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"htmlText"};function $n(){let{userAgent:r}=V.ADAPTER.getNavigator();return/^((?!chrome|android).)*safari/i.test(r)}function Nn(r,e){let t=/font-family:([^;"\s]+)/g,i=r.match(t),n=[e],o={};return o[e]=!0,i&&i.forEach(s=>{let a=s.split(":")[1].trim();o[a]||(n.push(a),o[a]=!0)}),n}async function jn(r){let t=await(await V.ADAPTER.fetch(r)).blob(),i=new FileReader;return await new Promise((o,s)=>{i.onloadend=()=>o(i.result),i.onerror=s,i.readAsDataURL(t)})}async function si(r,e){let t=await jn(e);return`@font-face {
        font-family: "${r.fontFamily}";
        src: url('${t}');
        font-weight: ${r.fontWeight};
        font-style: ${r.fontStyle};
    }`}async function Kn(r,e){let t=r.filter(i=>se.has(i)).map((i,n)=>{if(!gt.has(i)){let{url:o}=se.get(i);n===0?gt.set(i,si(e,o)):gt.set(i,si({...be.defaultFontOptions,fontFamily:i},o))}return gt.get(i)});return(await Promise.all(t)).join(`
`)}function Yn(r,e,t,i,n){let{domElement:o,styleElement:s,svgRoot:a}=n;o.innerHTML=r,o.setAttribute("style",`transform: scale(${t});
${e.cssStyle}`),s.textContent=i;let{width:l,height:c}=n.image;return a.setAttribute("width",l.toString()),a.setAttribute("height",c.toString()),new XMLSerializer().serializeToString(a)}function Xn(r,e){let t=ce.getOptimalCanvasAndContext(r.width,r.height,e),{context:i}=t;return i.clearRect(0,0,r.width,r.height),i.drawImage(r,0,0),ce.returnCanvasAndContext(t),t.canvas}function qn(r,e,t){return new Promise(async i=>{t&&await new Promise(n=>setTimeout(n,100)),r.onload=()=>{i()},r.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,r.crossOrigin="anonymous"})}var Jn;function Qn(r,e,t,i){i=i||Jn||(Jn=new bt);let{domElement:n,styleElement:o,svgRoot:s}=i;n.innerHTML=r,n.setAttribute("style",e.cssStyle),t&&(o.textContent=t),document.body.appendChild(s);let a=n.getBoundingClientRect();s.remove();let l=W.measureFont(e.fontStyle).descent;return{width:a.width,height:a.height+l}}var Zn="http://www.w3.org/2000/svg",eo="http://www.w3.org/1999/xhtml",gt=new Map,bt=class{constructor(){this.svgRoot=document.createElementNS(Zn,"svg"),this.foreignObject=document.createElementNS(Zn,"foreignObject"),this.domElement=document.createElementNS(eo,"div"),this.styleElement=document.createElementNS(eo,"style"),this.image=new Image;let{foreignObject:e,svgRoot:t,styleElement:i,domElement:n}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",t.appendChild(e),e.appendChild(i),e.appendChild(n)}},be=class{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===Pe.WEBGPU}getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}getManagedTexture(e,t,i,n){if(this._activeTextures[n])return this._increaseReferenceCount(n),this._activeTextures[n].promise;let o=this._buildTexturePromise(e,t,i).then(s=>(this._activeTextures[n].texture=s,s));return this._activeTextures[n]={texture:null,promise:o,usageCount:1},o}async _buildTexturePromise(e,t,i){let n=G.get(bt),o=Nn(e,i.fontFamily),s=await Kn(o,i),a=Qn(e,i,s,n),l=Math.ceil(Math.ceil(Math.max(1,a.width)+i.padding*2)*t),c=Math.ceil(Math.ceil(Math.max(1,a.height)+i.padding*2)*t),u=n.image;u.width=l|0,u.height=c|0;let d=Yn(e,i,t,s,n);await qn(u,d,$n()&&o.length>0);let g=u;this._createCanvas&&(g=Xn(u,t));let h=ir(g,g.width,g.height,t);return this._createCanvas&&this._renderer.texture.initSource(h.source),G.return(n),h}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let t=this._activeTextures[e];!t||(t.usageCount--,t.usageCount===0&&(t.texture?this._cleanUp(t):t.promise.then(i=>{t.texture=i,this._cleanUp(t)}).catch(()=>{ne("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}_cleanUp(e){N.returnTexture(e.texture),e.texture.source.resource=null,e.texture.source.uploadMethodId="unknown"}getReferenceCount(e){return this._activeTextures[e].usageCount}destroy(){this._activeTextures=null}};be.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"htmlText"};be.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"};var xt=class{constructor(e,t){this.state=Z.for2d(),this._batches=Object.create(null),this._geometries=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init()}buildStart(e){if(!this._batches[e.uid]){let t=new Fe;this._batches[e.uid]=t,this._geometries[t.uid]=new Re}this._activeBatch=this._batches[e.uid],this._activeGeometry=this._geometries[this._activeBatch.uid],this._activeBatch.begin()}addToBatch(e){this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){let t=this._activeBatch,i=this._activeGeometry;t.finish(e),i.indexBuffer.data=t.indexBuffer,i.indexBuffer.update(t.indexSize*4),i.buffers[0].data=t.attributeBuffer.float32View}upload(e){let t=this._batches[e.uid],i=this._geometries[t.uid];t.dirty&&(t.dirty=!1,i.buffers[0].update(t.attributeSize*4))}execute(e){if(e.action==="startBatch"){let t=e.batcher,i=this._geometries[t.uid];this._adaptor.start(this,i)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor.destroy(),this._adaptor=null;for(let e in this._batches)this._batches[e].destroy();this._batches=null;for(let e in this._geometries)this._geometries[e].destroy();this._geometries=null}};xt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"batch"};var to=class extends ge{constructor(r){r={...to.defaultOptions,...r},super(r),this.enabled=!0,this._state=Z.for2d(),this.padding=r.padding,typeof r.antialias=="boolean"?this.antialias=r.antialias?"on":"off":this.antialias=r.antialias??"inherit",this.resolution=r.resolution,this.blendRequired=r.blendRequired,this.addResource("filterUniforms",0,0),this.addResource("uSampler",0,1)}apply(r,e,t,i){r.applyFilter(this,e,t,i)}get blendMode(){return this._state.blendMode}set blendMode(r){this._state.blendMode=r}},vt=to;vt.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"inherit",blendRequired:!1};var ro=`in vec2 vMaskCoord;
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
`;var io=`in vec2 aPosition;

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
`;var ai=`struct GlobalFilterUniforms {
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
  
}`;var nr=class extends vt{constructor({sprite:e}){let t=new Bi(e.texture),i=new $({filterMatrix:{value:new E,type:"mat3x3<f32>"},maskClamp:{value:t.uClampFrame,type:"vec4<f32>"},alpha:{value:1,type:"f32"}}),n=new Be({vertex:{source:ai,entryPoint:"mainVertex"},fragment:{source:ai,entryPoint:"mainFragment"}}),o=pe.from({vertex:io,fragment:ro,name:"mask-filter"});super({gpuProgram:n,glProgram:o,resources:{filterUniforms:i,mapTexture:e.texture.source}}),this.sprite=e,this._textureMatrix=t}apply(e,t,i,n){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.filterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.mapTexture=this.sprite.texture.source,e.applyFilter(this,t,i,n)}};var ls=new de,li=class extends Ut{constructor(){super({filters:[new nr({sprite:new Ui(A.EMPTY)})]})}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}},_t=class{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,i){let n=this._renderer;if(n.renderPipes.batch.break(i),i.add({type:"alphaMask",action:"pushMaskBegin",mask:e,canBundle:!1,maskedContainer:t}),e.renderMaskToTexture){let o=e.mask;o.includeInBuild=!0,ke(o,i,n.renderPipes),o.includeInBuild=!1}n.renderPipes.batch.break(i),i.add({type:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,canBundle:!1})}pop(e,t,i){this._renderer.renderPipes.batch.break(i),i.add({type:"alphaMask",action:"popMaskEnd",mask:e,canBundle:!1})}execute(e){let t=this._renderer,i=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){let n=G.get(li);if(i){e.mask.mask.measurable=!0;let o=Ft(e.mask.mask,!0,ls);e.mask.mask.measurable=!1,o.ceil();let s=N.getOptimalTexture(o.width,o.height,1,!1),a=t.renderTarget.push(s,!0);t.globalUniforms.push({projectionData:a,offset:o,worldColor:4294967295});let l=n.sprite;l.texture=s,l.worldTransform.tx=o.minX,l.worldTransform.ty=o.minY,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer,filterTexture:s})}else n.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){let n=this._activeMaskStage[this._activeMaskStage.length-1];i&&(t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({type:"filter",action:"pushFilter",container:n.maskedContainer,filterEffect:n.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();let n=this._activeMaskStage.pop();i&&N.returnTexture(n.filterTexture),G.return(n.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}};_t.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"alphaMask"};var yt=class{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,i){this._renderer.renderPipes.batch.break(i);let o=this._colorStack;o[this._colorStackIndex]=o[this._colorStackIndex-1]&e.mask;let s=this._colorStack[this._colorStackIndex];s!==this._currentColor&&(this._currentColor=s,i.add({type:"colorMask",colorMask:s,canBundle:!1})),this._colorStackIndex++}pop(e,t,i){this._renderer.renderPipes.batch.break(i);let o=this._colorStack;this._colorStackIndex--;let s=o[this._colorStackIndex-1];s!==this._currentColor&&(this._currentColor=s,i.add({type:"colorMask",colorMask:s,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}};yt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"colorMask"};var ci=(r=>(r[r.NONE=0]="NONE",r[r.COLOR=16384]="COLOR",r[r.STENCIL=1024]="STENCIL",r[r.DEPTH=256]="DEPTH",r[r.COLOR_DEPTH=16640]="COLOR_DEPTH",r[r.COLOR_STENCIL=17408]="COLOR_STENCIL",r[r.DEPTH_STENCIL=1280]="DEPTH_STENCIL",r[r.ALL=17664]="ALL",r))(ci||{});var X=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",r[r.NONE=4]="NONE",r))(X||{});var wt=class{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,i){let n=e,o=this._renderer;o.renderPipes.batch.break(i),o.renderPipes.blendMode.setBlendMode(n.mask,"none",i),i.add({type:"stencilMask",action:"pushMaskBegin",mask:e,canBundle:!1});let s=n.mask;s.includeInBuild=!0,this._maskHash.has(n)||this._maskHash.set(n,{instructionsStart:0,instructionsLength:0});let a=this._maskHash.get(n);a.instructionsStart=i.instructionSize,ke(s,i,o.renderPipes),s.includeInBuild=!1,o.renderPipes.batch.break(i),i.add({type:"stencilMask",action:"pushMaskEnd",mask:e,canBundle:!1});let l=i.instructionSize-a.instructionsStart-1;a.instructionsLength=l;let c=o.renderTarget.renderTarget.uid;this._maskStackHash[c]===void 0&&(this._maskStackHash[c]=0),this._maskStackHash[c]++}pop(e,t,i){let n=e,o=this._renderer,s=o.renderTarget.renderTarget.uid;this._maskStackHash[s]--,o.renderPipes.batch.break(i),o.renderPipes.blendMode.setBlendMode(n.mask,"none",i),i.add({type:"stencilMask",action:"popMaskBegin",canBundle:!1});let a=this._maskHash.get(e);if(this._maskStackHash[s]!==0)for(let l=0;l<a.instructionsLength;l++)i.instructions[i.instructionSize++]=i.instructions[a.instructionsStart++];i.add({type:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){let t=this._renderer,i=t.renderTarget.renderTarget.uid,n=this._maskStackHash[i]??0;e.action==="pushMaskBegin"?(n++,t.stencil.setStencilMode(X.RENDERING_MASK_ADD,n),t.colorMask.setMask(0)):e.action==="pushMaskEnd"?(t.stencil.setStencilMode(X.MASK_ACTIVE,n),t.colorMask.setMask(15)):e.action==="popMaskBegin"?(n--,n!==0?(t.stencil.setStencilMode(X.RENDERING_MASK_REMOVE,n),t.colorMask.setMask(0)):t.renderTarget.clear(ci.STENCIL)):e.action==="popMaskEnd"&&(n===0?t.stencil.setStencilMode(X.DISABLED,n):t.stencil.setStencilMode(X.MASK_ACTIVE,n),t.colorMask.setMask(15)),this._maskStackHash[i]=n}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}};wt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"stencilMask"};var no=class{constructor(){this._backgroundColorRgba=[0,0,0,0],this.clearBeforeRender=!0,this._backgroundColor=new j(0),this.color=this._backgroundColor,this.alpha=1}init(r){r={...no.defaultOptions,...r},this.clearBeforeRender=r.clearBeforeRender,this.color=r.background||r.backgroundColor||this._backgroundColor,this.alpha=r.backgroundAlpha}get color(){return this._backgroundColor}set color(r){this._backgroundColor.setValue(r),this._backgroundColorRgba=this._backgroundColor.toArray()}get alpha(){return this._backgroundColor.alpha}set alpha(r){this._backgroundColor.setAlpha(r)}get colorRgba(){return this._backgroundColorRgba}destroy(){}},or=no;or.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"background",priority:0};or.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var oo=`
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
`;var so=`in vec2 aPosition;
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
`;var ao=`struct GlobalUniforms {
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
}`;var M=class extends vt{constructor(e){let t=e.gpu,i=lo({source:ao,...t}),n=new Be({vertex:{source:i,entryPoint:"mainVertex"},fragment:{source:i,entryPoint:"mainFragment"}}),o=e.gl,s=lo({source:oo,...o}),a=new pe({vertex:so,fragment:s}),l=new $({uBlend:{value:1,type:"f32"}});super({gpuProgram:n,glProgram:a,blendRequired:!0,resources:{blendUniforms:l,backTexture:A.EMPTY}})}};function lo(r){let{source:e,functions:t,main:i}=r;return e.replace("{FUNCTIONS}",t).replace("{MAIN}",i)}var ze=`
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
    `;var We=`
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
	`;var sr=class extends M{constructor(){super({gl:{functions:`
                ${ze}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendColor(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                ${We}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}};var ar=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var lr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var cr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var ur=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var dr=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var hr=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var fr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var pr=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var mr=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var gr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var br=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var xr=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var vr=class extends M{constructor(){super({gl:{functions:`
                ${ze}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLuminosity(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                ${We}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var _r=class extends M{constructor(){super({gl:{functions:`
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
            `}})}};var yr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var wr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var Sr=class extends M{constructor(){super({gl:{functions:`
                ${ze}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                ${We}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}};var Tr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var Cr=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var Br=class extends M{constructor(){super({gl:{functions:`
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
                `}})}};var ui={color:sr,"color-burn":ar,"color-dodge":lr,darken:cr,difference:ur,divide:dr,exclusion:hr,"hard-light":fr,"hard-mix":pr,lighten:mr,"linear-burn":gr,"linear-dodge":br,"linear-light":xr,luminosity:vr,negation:_r,overlay:yr,"pin-light":wr,saturation:Sr,"soft-light":Tr,subtract:Cr,"vivid-light":Br},St=class{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,i){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(i),this._isAdvanced=!!ui[t],this._isAdvanced&&(this._beginAdvancedBlendMode(i),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);let t=this._activeBlendMode;if(!ui[t]){ne(`Unable to assign 'BLEND_MODES.${t}' using the blend mode pipeline`);return}this._filterHash[t]||(this._filterHash[t]=new Ut({filters:[new ui[t]]}));let i={type:"filter",action:"pushFilter",renderables:[],filterEffect:this._filterHash[t],canBundle:!1};this._renderableList=i.renderables,e.add(i)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({type:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(let e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}};St.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"blendMode"};var co=class{constructor(r){this._renderer=r}_normalizeOptions(r,e={}){return r instanceof oe||r instanceof A?{target:r,...e}:{...e,...r}}async image(r){let e=new Image;return e.src=await this.base64(r),e}async base64(r){r=this._normalizeOptions(r,co.defaultImageOptions);let{format:e,quality:t}=r,i=this.canvas(r);if(i.toBlob!==void 0)return new Promise((n,o)=>{i.toBlob(s=>{if(!s){o(new Error("ICanvas.toBlob failed!"));return}let a=new FileReader;a.onload=()=>n(a.result),a.onerror=o,a.readAsDataURL(s)},e,t)});if(i.toDataURL!==void 0)return i.toDataURL(e,t);if(i.convertToBlob!==void 0){let n=await i.convertToBlob({type:e,quality:t});return new Promise((o,s)=>{let a=new FileReader;a.onload=()=>o(a.result),a.onerror=s,a.readAsDataURL(n)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(r){r=this._normalizeOptions(r);let e=r.target,t=this._renderer,i=e instanceof A?e:t.textureGenerator.generateTexture(r),n=t.texture.generateCanvas(i);return e instanceof oe&&i.destroy(),n}pixels(r){r=this._normalizeOptions(r);let e=r.target,t=this._renderer,i=e instanceof A?e:t.textureGenerator.generateTexture(r),n=t.texture.getPixels(i);return e instanceof oe&&i.destroy(),n}texture(r){return r=this._normalizeOptions(r),r.target instanceof A?r.target:this._renderer.textureGenerator.generateTexture(r)}download(r){r=this._normalizeOptions(r);let e=this.canvas(r),t=document.createElement("a");t.download=r.filename??"image.png",t.href=e.toDataURL("image/png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}log(r){let e=r.width??200;r=this._normalizeOptions(r);let t=this.canvas(r),i=t.toDataURL();console.log(`[Pixi Texture] ${t.width}px ${t.height}px`);let n=["font-size: 1px;",`padding: ${e}px ${300}px;`,`background: url(${i}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",n)}destroy(){this._renderer=null}},Mr=co;Mr.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"extract"};Mr.defaultImageOptions={format:"png",quality:1};var Pr=class extends A{static create(e){return new A({source:new ae(e)})}resize(e,t,i){return this.source.resize(e,t,i),this}};var cs=new ie,us=new de,ds=[0,0,0,0],Tt=class{constructor(e){this._renderer=e}generateTexture(e){e instanceof oe&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});let t=e.resolution||this._renderer.resolution,i=e.target,n=e.clearColor;n?n=Array.isArray(n)&&n.length===4?n:j.shared.setValue(n).toArray():n=ds;let o=e.frame?.copyTo(cs)||_i(i,us).rectangle;o.width=Math.max(o.width,1/t)|0,o.height=Math.max(o.height,1/t)|0;let s=Pr.create({...e.textureSourceOptions,width:o.width,height:o.height,resolution:t}),a=E.shared.translate(-o.x,-o.y);return this._renderer.render({container:i,transform:a,target:s,clearColor:n}),s}destroy(){let e=this;e._renderer=null}};Tt.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"textureGenerator"};var Ct=class{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({projectionData:e,worldTransformMatrix:t,worldColor:i,offset:n}){let o=this._renderer.renderTarget.renderTarget,s=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:o,worldTransformMatrix:new E,worldColor:4294967295,offset:new we},a={projectionMatrix:e?.projectionMatrix||o.projectionMatrix,resolution:e?.size||o.size,worldTransformMatrix:t||s.worldTransformMatrix,worldColor:i||s.worldColor,offset:n||s.offset,bindGroup:null},l=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(l);let c=l.uniforms;c.projectionMatrix=a.projectionMatrix,c.uResolution=a.resolution,c.worldTransformMatrix.copyFrom(a.worldTransformMatrix),c.worldTransformMatrix.tx-=a.offset.x,c.worldTransformMatrix.ty-=a.offset.y,c.worldAlpha=(a.worldColor>>24&255)/255,l.update();let u;this._renderer.renderPipes.uniformBatch?u=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(l,!1):(this._renderer.uniformBuffer.updateUniformGroup(l),u=this._bindGroupPool.pop()||new q,this._activeBindGroups.push(u),u.setResource(l,0)),a.bindGroup=u,this._currentGlobalUniformData=a}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1]}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new $({projectionMatrix:{value:new E,type:"mat3x3<f32>"},worldTransformMatrix:{value:new E,type:"mat3x3<f32>"},worldAlpha:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}},{ubo:!0,isStatic:!0})}destroy(){let e=this;e._renderer=null}};Ct.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"globalUniforms"};var di={f32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"mat2x2<f32>":48,"mat3x3<f32>":48,"mat4x4<f32>":64};function uo(r){let e=r.map(o=>({data:o,offset:0,size:0})),t=0,i=0,n=0;for(let o=0;o<e.length;o++){let s=e[o];if(t=di[s.data.type],!t)throw new Error(`Unknown type ${s.data.type}`);if(s.data.size>1&&(t=Math.max(t,16)*s.data.size),s.size=t,i%t!==0&&i<16){let a=i%t%16;i+=a,n+=a}i+t>16?(n=Math.ceil(n/16)*16,s.offset=n,n+=t,i=t):(s.offset=n,i+=t,n+=t)}return n=Math.ceil(n/16)*16,{uboElements:e,size:n}}var kr=[{type:"mat3x3<f32>",test:r=>r.value.a!==void 0,code:r=>`
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
                `}];var hs={f32:`
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
    `};function ho(r){let e=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
    `],t=0;for(let n=0;n<r.length;n++){let o=r[n],s=o.data.name,a=!1,l=0;for(let c=0;c<kr.length;c++)if(kr[c].test(o.data)){l=o.offset/4,e.push(`offset += ${l-t};`,kr[c].code(s)),a=!0;break}if(!a)if(o.data.size>1){let c=Math.max(di[o.data.type]/16,1),u=o.data.value.length/o.data.size,d=(4-u%4)%4;l=o.offset/4,e.push(`
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
                `)}else{let c=hs[o.data.type];l=o.offset/4,e.push(`
                    v = uv.${s};
                    offset += ${l-t};
                    ${c};
                `)}t=l}let i=e.join(`
`);return new Function("uv","data","offset",i)}var Bt=class{constructor(){this._syncFunctionHash=Object.create(null)}ensureUniformGroup(e){e._syncFunction||this._initUniformGroup(e)}_initUniformGroup(e){let t=e.signature,i=this._syncFunctionHash[t];if(!i){let n=Object.keys(e.uniformStructures).map(a=>e.uniformStructures[a]),o=uo(n),s=ho(o.uboElements);i=this._syncFunctionHash[t]={layout:o,syncFunction:s}}return e._syncFunction=i.syncFunction,e.buffer=new Y({data:new Float32Array(i.layout.size/4),usage:z.UNIFORM|z.COPY_DST}),e._syncFunction}syncUniformGroup(e,t,i){let n=e._syncFunction||this._initUniformGroup(e);return t||(t=e.buffer.data),i||(i=0),n(e.uniforms,t,i),!0}updateUniformGroup(e){if(e.isStatic&&!e.dirtyId)return!1;e.dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}};Bt.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"uniformBuffer"};var fo=!1,po="8.0.0-beta.3";function mo(r){if(!fo){if(V.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){let e=[`%c  %c  %c  %c  %c PixiJS %c v${po} (${r}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${po} - ${r} - http://www.pixijs.com/`);fo=!0}}var He=class{constructor(e){this._renderer=e}init(e){e.hello&&mo(this._renderer.name)}};He.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"hello",priority:0};He.defaultOptions={hello:!1};var go=class{constructor(r){this._renderer=r,this.count=0,this.checkCount=0}init(r){r={...go.defaultOptions,...r},this.checkCountMax=r.textureGCCheckCountMax,this.maxIdle=r.textureGCAMaxIdle,this.active=r.textureGCActive}postrender(){!this._renderer.renderingToScreen||(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){let r=this._renderer.texture.managedTextures;for(let e=0;e<r.length;e++){let t=r[e];t.resource&&t.touched>-1&&this.count-t.touched>this.maxIdle&&(t.touched=-1,t.unload())}}destroy(){this._renderer=null}},Mt=go;Mt.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"textureGC"};Mt.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:60*60,textureGCCheckCountMax:600};xi.add(Mt);var Rr=class extends ae{constructor(e){e.resource||(e.resource=V.ADAPTER.createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),e.alphaMode??(e.alphaMode="premultiply-alpha-on-upload"),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;let t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas()}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight}resize(e=this.width,t=this.height,i=this._resolution){super.resize(e,t,i),this.resizeCanvas()}};var hi=new Map;function bo(r,e){if(!hi.has(r)){let t=new A({source:new Rr({resource:r,...e})});hi.set(r,t)}return hi.get(r)}var xo=class{get resolution(){return this.texture.source._resolution}set resolution(r){this.texture.source.resize(this.texture.source.width,this.texture.source.height,r)}init(r){r={...xo.defaultOptions,...r},r.element&&(Q(J,"ViewSystem.element has been renamed to ViewSystem.canvas"),r.canvas=r.element),this.screen=new ie(0,0,r.width,r.height),this.canvas=r.canvas||V.ADAPTER.createCanvas(),this.antialias=!!r.antialias,this.texture=bo(this.canvas,r),this.multiView=!!r.multiView,this.autoDensity&&(this.canvas.style.width=`${this.texture.width}px`,this.canvas.style.height=`${this.texture.height}px`)}resize(r,e,t){this.texture.source.resize(r,e,t),this.screen.width=this.texture.frameWidth,this.screen.height=this.texture.frameHeight,this.autoDensity&&(this.canvas.style.width=`${r}px`,this.canvas.style.height=`${e}px`)}destroy(r=!1){(typeof r=="boolean"?r:!!r?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}},Ur=xo;Ur.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"view",priority:0};Ur.defaultOptions={width:800,height:600,resolution:V.RESOLUTION,autoDensity:!1,antialias:!1};var Zg=[or,qe,it,Ct,He,Ur,pt,be,Ze,Bt,Mt,Tt,Mr,Ci],eb=[St,xt,st,Je,ot,nt,ft,mt,ht,ut,Xe,_t,wt,yt];var rb={name:"texture-bit",fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},ib={name:"texture-bit",fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};var vo=class extends K{constructor({buffer:e,offset:t,size:i}){super(),this.uid=I("buffer"),this.touched=0,this.resourceType="bufferResource",this.resourceId=I("buffer"),this.bufferResource=!0,this.buffer=e,this.offset=t,this.size=i,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this.resourceId=I("buffer"),this.emit("change",this)}destroy(e=!1){e&&this.buffer.destroy(),this.buffer=null}};var Oe=[];Oe[X.NONE]=void 0;Oe[X.DISABLED]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilWriteMask:0,stencilReadMask:0,stencilBack:{compare:"always",passOp:"keep"}};Oe[X.RENDERING_MASK_ADD]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"increment-clamp"}};Oe[X.RENDERING_MASK_ADD]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"increment-clamp"}};Oe[X.RENDERING_MASK_REMOVE]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"decrement-clamp"}};Oe[X.MASK_ACTIVE]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilWriteMask:0,stencilBack:{compare:"equal",passOp:"keep"}};function ub(r){let e=r.colorTexture.source.resource;return e instanceof HTMLCanvasElement&&document.body.contains(e)}function _o(r,e,t,i,n,o){let s=o?1:-1;return r.identity(),r.a=1/i*2,r.d=s*(1/n*2),r.tx=-1-e*r.a,r.ty=-s-t*r.d,r}var yo=class{constructor(r={}){if(this.uid=I("renderTarget"),this.width=0,this.height=0,this.resolution=1,this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._projectionMatrix=new E,this._size=new Float32Array(2),r={...yo.defaultDescriptor,...r},this.width=r.width,this.height=r.height,this.resolution=r.resolution,this.stencil=r.stencil,this._viewport=new ie(0,0,this.width,this.height),typeof r.colorTextures=="number")for(let e=0;e<r.colorTextures;e++)this.colorTextures.push(new A({source:new ae({width:this.width,height:this.height,resolution:r.resolution,antialias:r.antialias})}));else{this.colorTextures=[...r.colorTextures];let e=this.colorTexture.source;this._resize(e.width,e.height,e._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),r.depthTexture&&(this.depthTexture=new A({source:new ae({width:this.width,height:this.height,resolution:this.resolution,format:"stencil8"})}))}get size(){let r=this._size;return r[0]=this.pixelWidth,r[1]=this.pixelHeight,r}get pixelWidth(){return this.width*this.resolution}get pixelHeight(){return this.height*this.resolution}get colorTexture(){return this.colorTextures[0]}get projectionMatrix(){let r=this.colorTexture;return _o(this._projectionMatrix,0,0,r.frameWidth,r.frameHeight,!this.isRoot),this._projectionMatrix}get viewport(){let r=this.colorTexture,e=r.source,t=e.pixelWidth,i=e.pixelHeight,n=this._viewport,o=r.layout.frame;return n.x=o.x*t|0,n.y=o.y*i|0,n.width=o.width*t|0,n.height=o.height*i|0,n}onSourceResize(r){this._resize(r.width,r.height,r._resolution,!0)}_resize(r,e,t=this.resolution,i=!1){this.width=r,this.height=e,this.resolution=t,this.dirtyId++,this.colorTextures.forEach((n,o)=>{i&&o===0||n.source.resize(r,e,t)}),this.depthTexture&&this.depthTexture.source.resize(r,e,t)}destroy(){throw new Error("Method not implemented.")}},fs=yo;fs.defaultDescriptor={width:0,height:0,resolution:1,colorTextures:1,stencil:!0,antialias:!1};export{q as a,Ni as b,pe as c,jt as d,Kt as e,Un as f,Fn as g,An as h,Gn as i,Xt as j,qt as k,Pe as l,$ as m,ge as n,Pn as o,Yt as p,rb as q,ib as r,Z as s,Lt as t,Fi as u,Y as v,z as w,Ir as x,En as y,ce as z,ci as A,X as B,bo as C,Zg as D,eb as E,vo as F,Oe as G,ub as H,fs as I};
