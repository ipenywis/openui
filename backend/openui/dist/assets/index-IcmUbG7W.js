var L=Object.defineProperty;var R=(t,s,r)=>s in t?L(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;var h=(t,s,r)=>(R(t,typeof s!="symbol"?s+"":s,r),r);import{R as p,j as n,t as T,c as P,r as c,$ as v,a as O,b as _,d as $,e as N,f as S,g as I,h as m,N as M,Q as C,i as k,k as B}from"./vendor-BJpsy9o3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const A="modulepreload",U=function(t){return"/"+t},y={},b=function(s,r,a){let e=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");e=Promise.all(r.map(i=>{if(i=U(i),i in y)return;y[i]=!0;const l=i.endsWith(".css"),w=l?'[rel="stylesheet"]':"";if(!!a)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===i&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${w}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":A,l||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),l)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};class j extends p.Component{constructor(){super(...arguments);h(this,"state",{error:void 0})}static getDerivedStateFromError(r){return{error:r}}componentDidCatch(r,a){console.error("Encountered ErrorBoundary:",r,a);const{onError:e}=this.props;e==null||e(r)}render(){const{error:r}=this.state;if(r!==void 0){const{renderError:e}=this.props;return e(r)}const{children:a}=this.props;return a}}h(j,"defaultProps",{children:void 0,onError:void 0});function x({error:t}){return n.jsx("div",{className:"flex min-h-screen items-center justify-center",children:n.jsx("h1",{className:"text-xl","data-testid":"LoadingOrError",children:t?t.message:n.jsx("div",{className:"h-16 w-16 animate-spin rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"})})})}x.defaultProps={error:void 0};function D(...t){return T(P(t))}function Z(t,s,r){const a=new Blob([t],{type:s}),e=URL.createObjectURL(a),o=document.createElement("a");o.href=e,o.download=r,document.body.append(o),o.click(),o.remove(),URL.revokeObjectURL(e)}const ee=580,F=O,te=_,re=$,Q=c.forwardRef(({className:t,sideOffset:s=4,...r},a)=>n.jsx(v,{ref:a,sideOffset:s,className:D("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));Q.displayName=v.displayName;const z=500;function oe(t,s=z){const[r,a]=p.useState(t),e=p.useRef(null);return p.useEffect(()=>{const o=Date.now();if(e.current&&o>=e.current+s)e.current=o,a(t);else{const i=window.setTimeout(()=>{e.current=o,a(t)},s);return()=>window.clearTimeout(i)}},[t,s]),r}function V(t){const[s,r]=c.useState(()=>matchMedia(t).matches);return c.useLayoutEffect(()=>{const a=matchMedia(t);function e(){r(a.matches)}return a.addEventListener("change",e),()=>{a.removeEventListener("change",e)}},[t]),s}const q=c.lazy(async()=>b(()=>import("./index-elR9dIvo.js"),__vite__mapDeps([0,1,2]))),E=c.lazy(async()=>b(()=>import("./Builder-nXFc86TB.js").then(t=>t.B),__vite__mapDeps([3,1,2]))),W=N(S(n.jsxs(n.Fragment,{children:[n.jsx(m,{path:"/",element:n.jsx(M,{replace:!0,to:"/ai"})}),n.jsx(m,{path:"/ai",element:n.jsx(q,{}),children:n.jsx(m,{path:":id",element:n.jsx(E,{})})}),n.jsx(m,{path:"/ai/shared/:id",element:n.jsx(E,{shared:!0})})]})));function H(){const t=V("(prefers-color-scheme: dark)");return c.useEffect(()=>{t&&document.documentElement.classList.add("dark")},[t]),n.jsx(c.Suspense,{fallback:n.jsx(x,{}),children:n.jsx(j,{renderError:s=>n.jsx(x,{error:s}),children:n.jsx(F,{children:n.jsx(I,{router:W})})})})}const K=1,X=new C({defaultOptions:{queries:{staleTime:Number.POSITIVE_INFINITY,retry:K}}}),g=document.querySelector("#root");g&&k(g).render(n.jsx(c.StrictMode,{children:n.jsx(B,{client:X,children:n.jsx(H,{})})}));export{j as E,x as L,ee as M,te as T,b as _,re as a,Q as b,D as c,Z as d,oe as e,V as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-elR9dIvo.js","assets/vendor-BJpsy9o3.js","assets/textarea-y4LQmk2i.js","assets/Builder-nXFc86TB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}