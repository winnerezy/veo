(()=>{var e={};e.id=678,e.ids=[678],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},4647:()=>{},9072:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>h,tree:()=>u});var s=r(260),i=r(8203),n=r(5155),o=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["(auth)",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3e3)),"/home/winner/Documents/projects/Veo/veo-client/app/(auth)/register/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7509)),"/home/winner/Documents/projects/Veo/veo-client/app/(auth)/layout.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7102)),"/home/winner/Documents/projects/Veo/veo-client/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1129)),"/home/winner/Documents/projects/Veo/veo-client/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/winner/Documents/projects/Veo/veo-client/app/(auth)/register/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/(auth)/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},1142:(e,t,r)=>{Promise.resolve().then(r.bind(r,5734)),Promise.resolve().then(r.t.bind(r,9607,23)),Promise.resolve().then(r.bind(r,1774))},7998:(e,t,r)=>{Promise.resolve().then(r.bind(r,5970)),Promise.resolve().then(r.t.bind(r,8531,23)),Promise.resolve().then(r.bind(r,2454))},5505:(e,t,r)=>{Promise.resolve().then(r.bind(r,9805))},2129:(e,t,r)=>{Promise.resolve().then(r.bind(r,9745))},9345:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},2497:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},6487:()=>{},8335:()=>{},5970:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(5512),i=r(7166),n=r(4186),o=r(8009);let a=({children:e})=>{let[t]=(0,o.useState)(()=>new i.E);return(0,s.jsx)(n.Ht,{client:t,children:e})}},9745:(e,t,r)=>{"use strict";r.d(t,{default:()=>v});var s=r(5512),i=r(7021),n=r(5409),o=r(5394),a=r(6023),l=r(191),u=r(5668),d=r(2875),c=r(8531),h=r.n(c),p=r(9334),m=r(8009);let f={username:"",email:"",password:""},v=()=>{let[e,t]=(0,m.useState)(f),[r,c]=(0,m.useState)(null),v=e=>{t(t=>({...t,[e.target.name]:e.target.value})),c(null)},x=(0,p.useRouter)(),b=async()=>{console.log((await u.A.post(`${a.f}/api/v1/auth/signup`,e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data),x.push("/login")},{mutate:g,isPending:y}=(0,l.n)({mutationFn:b,mutationKey:["register"],onError(e){e instanceof d.pe&&c(JSON.stringify(e.response?.data))}});return(0,s.jsxs)("div",{className:"flex flex-col py-6 px-4 gap-4 border w-[400px] rounded-2xl",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"Register To Veo"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.J,{children:"Username"}),(0,s.jsx)(n.p,{placeholder:"michael",name:"username",value:e.username,onChange:v})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.J,{children:"Email"}),(0,s.jsx)(n.p,{placeholder:"michael@gmail.com",type:"email",name:"email",value:e.email,onChange:v})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.J,{children:"Password"}),(0,s.jsx)(n.p,{placeholder:"michael1234",type:"password",name:"password",value:e.password,onChange:v})]}),(0,s.jsx)("span",{className:"text-destructive text-center",children:r}),(0,s.jsxs)("p",{children:["Have an account ?"," ",(0,s.jsx)(h(),{className:"text-primary",href:"/login",children:"Login"})]}),(0,s.jsx)(i.$,{disabled:y||Object.values(e).some(e=>""===e.trim()),onClick:()=>g(),children:y?(0,s.jsx)("span",{className:"loader"}):"Register"})]})}},7021:(e,t,r)=>{"use strict";r.d(t,{$:()=>u});var s=r(5512),i=r(8009),n=r(9383),o=r(1643),a=r(9462);let l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef(({className:e,variant:t,size:r,asChild:i=!1,...o},u)=>{let d=i?n.DX:"button";return(0,s.jsx)(d,{className:(0,a.cn)(l({variant:t,size:r,className:e})),ref:u,...o})});u.displayName="Button"},5409:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var s=r(5512),i=r(8009),n=r(9462);let o=i.forwardRef(({className:e,type:t,...r},i)=>(0,s.jsx)("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:i,...r}));o.displayName="Input"},5394:(e,t,r)=>{"use strict";r.d(t,{J:()=>c});var s=r(5512),i=r(8009);r(5740);var n=r(9383),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=i.forwardRef((e,r)=>{let{asChild:i,...o}=e,a=i?n.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(a,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),a=i.forwardRef((e,t)=>(0,s.jsx)(o.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var l=r(1643),u=r(9462);let d=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=i.forwardRef(({className:e,...t},r)=>(0,s.jsx)(a,{ref:r,className:(0,u.cn)(d(),e),...t}));c.displayName=a.displayName},6023:(e,t,r)=>{"use strict";r.d(t,{f:()=>i,q:()=>s});let s=[{title:"Quick poll creation"},{title:"TIme based voting"},{title:"One time voting"},{title:"Easy result compilation"}],i="https://veo-production.up.railway.app"},9462:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(2281),i=r(4805);function n(...e){return(0,i.QP)((0,s.$)(e))}},9334:(e,t,r)=>{"use strict";var s=r(8686);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},7509:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>i});var s=r(2740);let i={title:"Auth"};function n({children:e}){return(0,s.jsx)("section",{children:e})}},3e3:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(2740),i=r(9805);r(6301);let n=()=>(0,s.jsx)("section",{className:"min-h-screen flex items-center justify-center",children:(0,s.jsx)(i.default,{})})},7102:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>p});var s=r(2740),i=r(8088),n=r.n(i),o=r(1189),a=r.n(o);r(2704);var l=r(5734),u=r(9607),d=r.n(u);r(6301);let c=()=>(0,s.jsx)("header",{className:"sticky top-0 w-full h-12 flex items-center px-4 border border-b bg-background z-50",children:(0,s.jsx)(d(),{href:"/home",className:"font-bold text-primary",children:"Veo"})});var h=r(1774);let p={title:"Veo",description:"VOting made easier"};function m({children:e}){return(0,s.jsx)("html",{lang:"en",className:"",children:(0,s.jsxs)("body",{className:`${n().variable} ${a().variable} antialiased`,children:[(0,s.jsx)(l.default,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center min-h-screen",children:[(0,s.jsx)(c,{}),(0,s.jsx)("main",{className:"flex flex-col px-4 mx-auto w-full",children:e}),(0,s.jsx)("footer",{className:"absolute bottom-4",children:(0,s.jsx)("span",{className:"",children:"\xa9 2025 All Rights Reserved"})})]})}),(0,s.jsx)(h.ToastContainer,{hideProgressBar:!0,theme:"light"})]})})}},1129:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(2740);r(6301);let i=()=>(0,s.jsx)("div",{className:"h-screen",children:(0,s.jsxs)("div",{className:"flex flex-col h-full items-center justify-center",children:[(0,s.jsx)("h1",{className:"font-bold  text-3xl",children:"No Page Found"}),(0,s.jsx)("span",{className:"font-semibold text-2xl",children:"404"})]})})},5734:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/winner/Documents/projects/Veo/veo-client/components/ReactQueryProvider.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/winner/Documents/projects/Veo/veo-client/components/ReactQueryProvider.tsx","default")},9805:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/winner/Documents/projects/Veo/veo-client/components/Register.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/winner/Documents/projects/Veo/veo-client/components/Register.tsx","default")},6055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(8077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{},191:(e,t,r)=>{"use strict";r.d(t,{n:()=>c});var s=r(8009),i=r(6141),n=r(1432),o=r(7),a=r(9529),l=class extends o.Q{#e;#t=void 0;#r;#s;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,a.f8)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.EN)(t.mutationKey)!==(0,a.EN)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#n(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#i(),this.#n()}mutate(e,t){return this.#s=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#i(){let e=this.#r?.state??(0,i.$)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#n(e){n.j.batch(()=>{if(this.#s&&this.hasListeners()){let t=this.#t.variables,r=this.#t.context;e?.type==="success"?(this.#s.onSuccess?.(e.data,t,r),this.#s.onSettled?.(e.data,null,t,r)):e?.type==="error"&&(this.#s.onError?.(e.error,t,r),this.#s.onSettled?.(void 0,e.error,t,r))}this.listeners.forEach(e=>{e(this.#t)})})}},u=r(4186),d=r(2053);function c(e,t){let r=(0,u.jE)(t),[i]=s.useState(()=>new l(r,e));s.useEffect(()=>{i.setOptions(e)},[i,e]);let o=s.useSyncExternalStore(s.useCallback(e=>i.subscribe(n.j.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=s.useCallback((e,t)=>{i.mutate(e,t).catch(d.l)},[i]);if(o.error&&(0,d.G)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}},2875:(e,t,r)=>{"use strict";r.d(t,{pe:()=>i});let{Axios:s,AxiosError:i,CanceledError:n,isCancel:o,CancelToken:a,VERSION:l,all:u,Cancel:d,isAxiosError:c,spread:h,toFormData:p,AxiosHeaders:m,HttpStatusCode:f,formToJSON:v,getAdapter:x,mergeConfig:b}=r(5668).A}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,648,805,594],()=>r(9072));module.exports=s})();