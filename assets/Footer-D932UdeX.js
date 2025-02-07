import{r as u,j as d}from"./index-ChmeNyLY.js";import{F as T,a as L,b as H,c as _}from"./index-DTfr6bbb.js";let Y={data:""},q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Y,G=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,K=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,x=(e,t)=>{let r="",i="",s="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":i+=a[1]=="f"?x(n,a):a+"{"+x(n,a[1]=="k"?"":t)+"}":typeof n=="object"?i+=x(n,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=x.p?x.p(a,n):a+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+i},y={},S=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+S(e[r]);return t}return e},R=(e,t,r,i,s)=>{let a=S(e),n=y[a]||(y[a]=(l=>{let c=0,m=11;for(;c<l.length;)m=101*m+l.charCodeAt(c++)>>>0;return"go"+m})(a));if(!y[n]){let l=a!==e?e:(c=>{let m,g,f=[{}];for(;m=G.exec(c.replace(K,""));)m[4]?f.shift():m[3]?(g=m[3].replace(M," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][m[1]]=m[2].replace(M," ").trim();return f[0]})(e);y[n]=x(s?{["@keyframes "+n]:l}:l,r?"":"."+n)}let o=r&&y.g?y.g:null;return r&&(y.g=y[n]),((l,c,m,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=m?l+c.data:c.data+l)})(y[n],t,i,o),n},U=(e,t,r)=>e.reduce((i,s,a)=>{let n=t[a];if(n&&n.call){let o=n(r),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=l?"."+l:o&&typeof o=="object"?o.props?"":x(o,""):o===!1?"":o}return i+s+(n??"")},"");function D(e){let t=this||{},r=e.call?e(t.p):e;return R(r.unshift?r.raw?U(r,[].slice.call(arguments,1),t.p):r.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):r,q(t.target),t.g,t.o,t.k)}let I,A,O;D.bind({g:1});let b=D.bind({k:1});function Q(e,t,r,i){x.p=t,I=e,A=r,O=i}function v(e,t){let r=this||{};return function(){let i=arguments;function s(a,n){let o=Object.assign({},a),l=o.className||s.className;r.p=Object.assign({theme:A&&A()},o),r.o=/ *go\d+/.test(l),o.className=D.apply(r,i)+(l?" "+l:"");let c=e;return e[0]&&(c=o.as||e,delete o.as),O&&c[0]&&O(o),I(c,o)}return s}}var Z=e=>typeof e=="function",C=(e,t)=>Z(e)?e(t):e,B=(()=>{let e=0;return()=>(++e).toString()})(),z=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),J=20,P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return P(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},k=[],$={toasts:[],pausedAt:void 0},w=e=>{$=P($,e),k.forEach(t=>{t($)})},V={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(e={})=>{let[t,r]=u.useState($);u.useEffect(()=>(k.push(r),()=>{let s=k.indexOf(r);s>-1&&k.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var a,n,o;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((a=e[s.type])==null?void 0:a.removeDelay)||(e==null?void 0:e.removeDelay),duration:s.duration||((n=e[s.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||V[s.type],style:{...e.style,...(o=e[s.type])==null?void 0:o.style,...s.style}}});return{...t,toasts:i}},X=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||B()}),N=e=>(t,r)=>{let i=X(t,e,r);return w({type:2,toast:i}),i.id},p=(e,t)=>N("blank")(e,t);p.error=N("error");p.success=N("success");p.loading=N("loading");p.custom=N("custom");p.dismiss=e=>{w({type:3,toastId:e})};p.remove=e=>w({type:4,toastId:e});p.promise=(e,t,r)=>{let i=p.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let a=t.success?C(t.success,s):void 0;return a?p.success(a,{id:i,...r,...r==null?void 0:r.success}):p.dismiss(i),s}).catch(s=>{let a=t.error?C(t.error,s):void 0;a?p.error(a,{id:i,...r,...r==null?void 0:r.error}):p.dismiss(i)}),e};var ee=(e,t)=>{w({type:1,toast:{id:e,height:t}})},te=()=>{w({type:5,time:Date.now()})},j=new Map,ae=1e3,re=(e,t=ae)=>{if(j.has(e))return;let r=setTimeout(()=>{j.delete(e),w({type:4,toastId:e})},t);j.set(e,r)},se=e=>{let{toasts:t,pausedAt:r}=W(e);u.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(l<0){o.visible&&p.dismiss(o.id);return}return setTimeout(()=>p.dismiss(o.id),l)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,r]);let i=u.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),s=u.useCallback((a,n)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:c}=n||{},m=t.filter(h=>(h.position||c)===(a.position||c)&&h.height),g=m.findIndex(h=>h.id===a.id),f=m.filter((h,F)=>F<g&&h.visible).length;return m.filter(h=>h.visible).slice(...o?[f+1]:[0,f]).reduce((h,F)=>h+(F.height||0)+l,0)},[t]);return u.useEffect(()=>{t.forEach(a=>{if(a.dismissed)re(a.id,a.removeDelay);else{let n=j.get(a.id);n&&(clearTimeout(n),j.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:ee,startPause:te,endPause:i,calculateOffset:s}}},oe=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ie=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ne=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,le=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ie} 0.15s ease-out forwards;
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
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,de=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ce=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${de} 1s linear infinite;
`,ue=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=b`
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
}`,pe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
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
`,fe=v("div")`
  position: absolute;
`,ge=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,he=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ye=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${he} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,be=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(ye,null,t):t:r==="blank"?null:u.createElement(ge,null,u.createElement(ce,{...i}),r!=="loading"&&u.createElement(fe,null,r==="error"?u.createElement(le,{...i}):u.createElement(pe,{...i})))},xe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ve=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,we="0%{opacity:0;} 100%{opacity:1;}",je="0%{opacity:1;} 100%{opacity:0;}",Ne=v("div")`
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
`,Ee=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ke=(e,t)=>{let r=e.includes("top")?1:-1,[i,s]=z()?[we,je]:[xe(r),ve(r)];return{animation:t?`${b(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$e=u.memo(({toast:e,position:t,style:r,children:i})=>{let s=e.height?ke(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(be,{toast:e}),n=u.createElement(Ee,{...e.ariaProps},C(e.message,e));return u.createElement(Ne,{className:e.className,style:{...s,...r,...e.style}},typeof i=="function"?i({icon:a,message:n}):u.createElement(u.Fragment,null,a,n))});Q(u.createElement);var Ce=({id:e,className:t,style:r,onHeightUpdate:i,children:s})=>{let a=u.useCallback(n=>{if(n){let o=()=>{let l=n.getBoundingClientRect().height;i(e,l)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:a,className:t,style:r},s)},De=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...s}},Fe=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ae=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:s,containerStyle:a,containerClassName:n})=>{let{toasts:o,handlers:l}=se(r);return u.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(c=>{let m=c.position||t,g=l.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),f=De(m,g);return u.createElement(Ce,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Fe:"",style:f},c.type==="custom"?C(c.message,c):s?s(c):u.createElement($e,{toast:c,position:m}))}))},Oe=p;const Ie=()=>{const[e,t]=u.useState(""),[r,i]=u.useState(""),s=async a=>{a.preventDefault(),console.log("Form submitted",{email:e,message:r}),Oe.success("Thank you for your message. I'll get back to you soon.",{duration:5e3,position:"bottom-center"}),t(""),i("")};return d.jsxs("footer",{className:"bg-gray-900 text-gray-300 border-t border-gray-700 relative overflow-hidden",children:[d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"About Me"}),d.jsx("p",{className:"text-base text-gray-500",children:"I'm a passionate developer creating elegant solutions to complex problems. Always learning, always growing."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Quick Links"}),d.jsx("ul",{className:"space-y-2",children:["Home","Projects","About","Contact"].map(a=>d.jsx("li",{children:d.jsx("a",{href:`#${a.toLowerCase()}`,className:"text-base text-gray-500 hover:text-white transition-colors duration-300",children:a})},a))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Connect"}),d.jsx("div",{className:"flex space-x-6",children:[{icon:T,label:"GitHub",href:"https://github.com/yourusername"},{icon:L,label:"LinkedIn",href:"https://linkedin.com/in/yourusername"},{icon:H,label:"Twitter",href:"https://twitter.com/yourusername"},{icon:_,label:"Email",href:"mailto:your.email@example.com"}].map(({icon:a,label:n,href:o})=>d.jsxs("a",{href:o,className:"text-gray-400 hover:text-white transition-colors duration-300",target:"_blank",rel:"noopener noreferrer",children:[d.jsx("span",{className:"sr-only",children:n}),d.jsx(a,{className:"h-6 w-6"})]},n))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Contact Me"}),d.jsxs("form",{onSubmit:s,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),d.jsx("input",{id:"email",type:"email",placeholder:"Your email",value:e,onChange:a=>t(a.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),d.jsx("textarea",{id:"message",placeholder:"Your message",value:r,onChange:a=>i(a.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:4})]}),d.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",children:"Send Message"})]})]})]}),d.jsx("div",{className:"mt-8 border-t border-gray-700 pt-8",children:d.jsxs("p",{className:"text-base text-gray-400 text-center",children:["© ",new Date().getFullYear()," Kumo Kirie. All rights reserved."]})})]}),d.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"}),d.jsx("div",{className:"sparkles"})]}),d.jsx(Ae,{})]})};export{Ie as default};
