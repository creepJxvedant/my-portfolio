import{r as m,j as d}from"./index-BDFAeT58.js";import{F as G,a as W,b as Q,c as Z}from"./index-D6wu1XWe.js";import"./iconBase-DRyo5xcZ.js";let X={data:""},ee=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||X,te=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,re=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,v=(e,t)=>{let r="",i="",s="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":i+=a[1]=="f"?v(n,a):a+"{"+v(n,a[1]=="k"?"":t)+"}":typeof n=="object"?i+=v(n,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=v.p?v.p(a,n):a+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+i},y={},R=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+R(e[r]);return t}return e},ae=(e,t,r,i,s)=>{let a=R(e),n=y[a]||(y[a]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(a));if(!y[n]){let l=a!==e?e:(u=>{let c,p,f=[{}];for(;c=te.exec(u.replace(re,""));)c[4]?f.shift():c[3]?(p=c[3].replace(H," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][c[1]]=c[2].replace(H," ").trim();return f[0]})(e);y[n]=v(s?{["@keyframes "+n]:l}:l,r?"":"."+n)}let o=r&&y.g?y.g:null;return r&&(y.g=y[n]),((l,u,c,p)=>{p?u.data=u.data.replace(p,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(y[n],t,i,o),n},se=(e,t,r)=>e.reduce((i,s,a)=>{let n=t[a];if(n&&n.call){let o=n(r),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=l?"."+l:o&&typeof o=="object"?o.props?"":v(o,""):o===!1?"":o}return i+s+(n??"")},"");function F(e){let t=this||{},r=e.call?e(t.p):e;return ae(r.unshift?r.raw?se(r,[].slice.call(arguments,1),t.p):r.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):r,ee(t.target),t.g,t.o,t.k)}let A,D,$;F.bind({g:1});let x=F.bind({k:1});function ie(e,t,r,i){v.p=t,A=e,D=r,$=i}function w(e,t){let r=this||{};return function(){let i=arguments;function s(a,n){let o=Object.assign({},a),l=o.className||s.className;r.p=Object.assign({theme:D&&D()},o),r.o=/ *go\d+/.test(l),o.className=F.apply(r,i)+(l?" "+l:"");let u=e;return e[0]&&(u=o.as||e,delete o.as),$&&u[0]&&$(o),A(u,o)}return s}}var oe=e=>typeof e=="function",T=(e,t)=>oe(e)?e(t):e,ne=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),le=20,I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,le)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return I(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},S=[],L={toasts:[],pausedAt:void 0},j=e=>{L=I(L,e),S.forEach(t=>{t(L)})},ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},de=(e={})=>{let[t,r]=m.useState(L);m.useEffect(()=>(S.push(r),()=>{let s=S.indexOf(r);s>-1&&S.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var a,n,o;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((a=e[s.type])==null?void 0:a.removeDelay)||(e==null?void 0:e.removeDelay),duration:s.duration||((n=e[s.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||ce[s.type],style:{...e.style,...(o=e[s.type])==null?void 0:o.style,...s.style}}});return{...t,toasts:i}},ue=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||ne()}),N=e=>(t,r)=>{let i=ue(t,e,r);return j({type:2,toast:i}),i.id},h=(e,t)=>N("blank")(e,t);h.error=N("error");h.success=N("success");h.loading=N("loading");h.custom=N("custom");h.dismiss=e=>{j({type:3,toastId:e})};h.remove=e=>j({type:4,toastId:e});h.promise=(e,t,r)=>{let i=h.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let a=t.success?T(t.success,s):void 0;return a?h.success(a,{id:i,...r,...r==null?void 0:r.success}):h.dismiss(i),s}).catch(s=>{let a=t.error?T(t.error,s):void 0;a?h.error(a,{id:i,...r,...r==null?void 0:r.error}):h.dismiss(i)}),e};var me=(e,t)=>{j({type:1,toast:{id:e,height:t}})},pe=()=>{j({type:5,time:Date.now()})},k=new Map,fe=1e3,ge=(e,t=fe)=>{if(k.has(e))return;let r=setTimeout(()=>{k.delete(e),j({type:4,toastId:e})},t);k.set(e,r)},he=e=>{let{toasts:t,pausedAt:r}=de(e);m.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(l<0){o.visible&&h.dismiss(o.id);return}return setTimeout(()=>h.dismiss(o.id),l)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,r]);let i=m.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),s=m.useCallback((a,n)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:u}=n||{},c=t.filter(b=>(b.position||u)===(a.position||u)&&b.height),p=c.findIndex(b=>b.id===a.id),f=c.filter((b,C)=>C<p&&b.visible).length;return c.filter(b=>b.visible).slice(...o?[f+1]:[0,f]).reduce((b,C)=>b+(C.height||0)+l,0)},[t]);return m.useEffect(()=>{t.forEach(a=>{if(a.dismissed)ge(a.id,a.removeDelay);else{let n=k.get(a.id);n&&(clearTimeout(n),k.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:me,startPause:pe,endPause:i,calculateOffset:s}}},be=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ye=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ve=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ye} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,we=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,je=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${we} 1s linear infinite;
`,ke=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ne=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ee=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ke} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ne} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Pe=w("div")`
  position: absolute;
`,Se=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Le=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Le} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Fe=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?m.createElement(Te,null,t):t:r==="blank"?null:m.createElement(Se,null,m.createElement(je,{...i}),r!=="loading"&&m.createElement(Pe,null,r==="error"?m.createElement(ve,{...i}):m.createElement(Ee,{...i})))},Ce=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,De=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,$e="0%{opacity:0;} 100%{opacity:1;}",_e="0%{opacity:1;} 100%{opacity:0;}",He=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Oe=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Re=(e,t)=>{let r=e.includes("top")?1:-1,[i,s]=M()?[$e,_e]:[Ce(r),De(r)];return{animation:t?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ae=m.memo(({toast:e,position:t,style:r,children:i})=>{let s=e.height?Re(e.position||t||"top-center",e.visible):{opacity:0},a=m.createElement(Fe,{toast:e}),n=m.createElement(Oe,{...e.ariaProps},T(e.message,e));return m.createElement(He,{className:e.className,style:{...s,...r,...e.style}},typeof i=="function"?i({icon:a,message:n}):m.createElement(m.Fragment,null,a,n))});ie(m.createElement);var Me=({id:e,className:t,style:r,onHeightUpdate:i,children:s})=>{let a=m.useCallback(n=>{if(n){let o=()=>{let l=n.getBoundingClientRect().height;i(e,l)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return m.createElement("div",{ref:a,className:t,style:r},s)},Ie=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...s}},Ke=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,P=16,Ve=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:s,containerStyle:a,containerClassName:n})=>{let{toasts:o,handlers:l}=he(r);return m.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:P,left:P,right:P,bottom:P,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(u=>{let c=u.position||t,p=l.calculateOffset(u,{reverseOrder:e,gutter:i,defaultPosition:t}),f=Ie(c,p);return m.createElement(Me,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?Ke:"",style:f},u.type==="custom"?T(u.message,u):s?s(u):m.createElement(Ae,{toast:u,position:c}))}))},ze=h;class E{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const qe=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},g={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:qe()},_=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Be=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=_(e);g.publicKey=r.publicKey,g.blockHeadless=r.blockHeadless,g.storageProvider=r.storageProvider,g.blockList=r.blockList,g.limitRate=r.limitRate,g.origin=r.origin||t},K=async(e,t,r={})=>{const i=await fetch(g.origin+e,{method:"POST",headers:r,body:t}),s=await i.text(),a=new E(i.status,s);if(i.ok)return a;throw a},V=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ye=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},z=e=>e.webdriver||!e.languages||e.languages.length===0,q=()=>new E(451,"Unavailable For Headless Browser"),Je=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Ue=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Ge=(e,t)=>e instanceof FormData?e.get(t):e[t],B=(e,t)=>{if(Ue(e))return!1;Je(e.list,e.watchVariable);const r=Ge(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},Y=()=>new E(403,"Forbidden"),We=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Qe=async(e,t,r)=>{const i=Number(await r.get(e)||0);return t-Date.now()+i},J=async(e,t,r)=>{if(!t.throttle||!r)return!1;We(t.throttle,t.id);const i=t.id||e;return await Qe(i,t.throttle,r)>0?!0:(await r.set(i,Date.now().toString()),!1)},U=()=>new E(429,"Too Many Requests"),Ze=async(e,t,r,i)=>{const s=_(i),a=s.publicKey||g.publicKey,n=s.blockHeadless||g.blockHeadless,o=s.storageProvider||g.storageProvider,l={...g.blockList,...s.blockList},u={...g.limitRate,...s.limitRate};return n&&z(navigator)?Promise.reject(q()):(V(a,e,t),Ye(r),r&&B(l,r)?Promise.reject(Y()):await J(location.pathname,u,o)?Promise.reject(U()):K("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},Xe=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},et=e=>typeof e=="string"?document.querySelector(e):e,tt=async(e,t,r,i)=>{const s=_(i),a=s.publicKey||g.publicKey,n=s.blockHeadless||g.blockHeadless,o=g.storageProvider||s.storageProvider,l={...g.blockList,...s.blockList},u={...g.limitRate,...s.limitRate};if(n&&z(navigator))return Promise.reject(q());const c=et(r);V(a,e,t),Xe(c);const p=new FormData(c);return B(l,p)?Promise.reject(Y()):await J(location.pathname,u,o)?Promise.reject(U()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",a),K("/api/v1.0/email/send-form",p))},O={init:Be,send:Ze,sendForm:tt,EmailJSResponseStatus:E},it=()=>{const[e,t]=m.useState(""),[r,i]=m.useState(""),[s,a]=m.useState(""),n="template_lr17rp1",o="jMx5bzPWmlYNaSvaO",l="service_iinsw15",u=async c=>{c.preventDefault();var p={from_name:e,from_email:r,message:s};O.init({publicKey:o,limitRate:{id:"app",throttle:1e4}}),O.send(l,n,p).then(f=>{console.log("SUCCESS!",f.status,f.text),ze.success("Thank you for your message. I'll get back to you soon.",{duration:5e3,position:"bottom-center"}),t(""),i(""),a("")},f=>{console.log("FAILED...",f)})};return d.jsxs("footer",{className:"bg-gray-900 text-gray-300 border-t border-gray-700 relative overflow-hidden",children:[d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"About Me"}),d.jsx("p",{className:"text-base text-gray-500",children:"I'm a passionate developer creating elegant solutions to complex problems. Always learning, always growing."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Quick Links"}),d.jsx("ul",{className:"space-y-2",children:["Home","Projects","About","Contact"].map(c=>d.jsx("li",{children:d.jsx("a",{href:`#${c.toLowerCase()}`,className:"text-base text-gray-500 hover:text-white transition-colors duration-300",children:c})},c))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Connect"}),d.jsx("div",{className:"flex space-x-6",children:[{icon:G,label:"GitHub",href:"https://github.com/creepJxvedant"},{icon:W,label:"LinkedIn",href:"https://linkedin.com/in/creepJxvedant"},{icon:Q,label:"Twitter",href:"https://twitter.com/creepJxvedant"},{icon:Z,label:"Email",href:"mailto:vedantverma303@gmail.com"}].map(({icon:c,label:p,href:f})=>d.jsxs("a",{href:f,className:"text-gray-400 hover:text-white transition-colors duration-300",target:"_blank",rel:"noopener noreferrer",children:[d.jsx("span",{className:"sr-only",children:p}),d.jsx(c,{className:"h-6 w-6"})]},p))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Contact Me"}),d.jsxs("form",{onSubmit:u,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"name",className:"sr-only",children:"Name"}),d.jsx("input",{id:"userName",type:"text",placeholder:"Your Name",value:e,onChange:c=>t(c.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),d.jsx("input",{id:"email",type:"email",placeholder:"Your email",value:r,onChange:c=>i(c.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),d.jsx("textarea",{id:"message",placeholder:"Your message",value:s,onChange:c=>a(c.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:4})]}),d.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",children:"Send Message"})]})]})]}),d.jsx("div",{className:"mt-8 border-t border-gray-700 pt-8",children:d.jsxs("p",{className:"text-base text-gray-400 text-center",children:["© ",new Date().getFullYear()," Kumo Kirie. All rights reserved."]})})]}),d.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"}),d.jsx("div",{className:"sparkles"})]}),d.jsx(Ve,{})]})};export{it as default};
