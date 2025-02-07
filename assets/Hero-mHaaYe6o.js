import{r as l,j as e}from"./index-ChmeNyLY.js";import{F as f,a as g,b as j}from"./index-DTfr6bbb.js";import{g as b,S as w}from"./ScrollTrigger-FjUmd4ZA.js";/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...t)=>t.filter((s,r,a)=>!!s&&s.trim()!==""&&a.indexOf(s)===r).join(" ").trim();/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:o="",children:n,iconNode:m,...x},h)=>l.createElement("svg",{ref:h,...y,width:s,height:s,stroke:t,strokeWidth:a?Number(r)*24/Number(s):r,className:c("lucide",o),...x},[...m.map(([u,p])=>l.createElement(u,p)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(t,s)=>{const r=l.forwardRef(({className:a,...o},n)=>l.createElement(v,{ref:n,iconNode:s,className:c(`lucide-${N(t)}`,a),...o}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],C=d("Menu",k);/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],S=d("X",I);function A(){const[t,s]=l.useState(!1);return e.jsxs("nav",{className:"glass   header top-5 left-2/5 h-[50px] md:h-[70px] flex justify-between items-center p-6 cursor-pointer",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("img",{src:"./svg/logo.svg",alt:"Logo",className:"h-10"}),e.jsx("h1",{className:"text-[crimson] text-2xl font-bold",children:"Kumo Kirie"})]}),e.jsxs("ul",{className:"hidden md:flex space-x-8",children:[e.jsx("li",{className:"text-red-800 hover:text-red-500 transition-colors duration-300",children:"Home"}),e.jsx("li",{className:"text-red-800 hover:text-red-500 transition-colors duration-300",children:"About"}),e.jsx("li",{className:"text-red-800 hover:text-red-500 transition-colors duration-300",children:"Projects"}),e.jsx("li",{className:"text-red-800 hover:text-red-500 transition-colors duration-300",children:"Contact"})]}),e.jsx("div",{className:"md:hidden",children:t?e.jsx(S,{onClick:()=>s(!t),className:"w-8 h-8 text-blue-600"}):e.jsx(C,{onClick:()=>s(!t),className:"w-8 h-8 text-blue-600"})}),e.jsx("div",{className:`glass sidebar ${t&&"showDialog"} place-items-center text-blue-600 w-64 fixed`,children:e.jsxs("ul",{className:"space-y-4 p-4",children:[e.jsx("li",{className:"p-2 rounded",children:e.jsx("a",{href:"#home",children:"Home"})}),e.jsx("li",{className:" p-2 rounded",children:e.jsx("a",{href:"#about",children:"About"})}),e.jsx("li",{className:" p-2 rounded",children:e.jsx("a",{href:"#services",children:"Services"})}),e.jsx("li",{className:"p-2 rounded",children:e.jsx("a",{href:"#contact",children:"Contact"})})]})})]})}b.registerPlugin(w);const $=()=>{const[t,s]=l.useState(""),r="Crrafting robust and scalable Java applications";return l.useEffect(()=>{let a=0;const o=setInterval(()=>{a<r.length?(s(n=>n+r.charAt(a)),a++):clearInterval(o)},50);return()=>clearInterval(o)},[]),e.jsxs("div",{id:"home",className:"hero-container bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center",children:[e.jsx(A,{}),e.jsxs("div",{className:"glass hero-content flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto",children:[e.jsx("div",{className:"hero-image place-items-center w-full md:w-1/4 mb-4 md:mb-0",children:e.jsx("img",{src:"./images/OIP.jpg",alt:"Hero Image",className:"rounded-lg shadow-xl hover:shadow-yellow-300/20 transition-shadow duration-300 w-[60%] h-auto"})}),e.jsxs("div",{className:"hero-text w-full md:w-2/3 mt-4 md:mt-0 md:ml-8",children:[e.jsx("h1",{className:"text-blue-300 text-2xl md:text-4xl font-bold mb-2 md:mb-4 animate-fade-in-down",children:"Welcome to my Portfolio"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-lg mb-2 md:mb-4 whitespace-pre-wrap",children:t}),e.jsx("p",{className:"text-slate-300 text-sm md:text-md mb-4 md:mb-6 animate-fade-in",children:"I am a passionate developer with experience in building high-quality software solutions."}),e.jsxs("div",{className:"hero-buttons place-content-center flex flex-wrap gap-4",children:[e.jsx(i,{href:"https://github.com/creepJxvedant",icon:e.jsx(f,{className:"mr-2"}),text:"GitHub",className:"bg-yellow-300 text-gray-900 hover:bg-yellow-400"}),e.jsx(i,{href:"https://linkedin.com/in/_icycoldwater",icon:e.jsx(g,{className:"mr-2"}),text:"LinkedIn",className:"bg-blue-600 hover:bg-blue-700"}),e.jsx(i,{href:"https://twitter.com/_icycoldwater",icon:e.jsx(j,{className:"mr-2"}),text:"Twitter",className:"bg-blue-400 hover:bg-blue-500"})]})]})]})]})},i=({href:t,icon:s,text:r,className:a})=>e.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg transition duration-300 ${a}`,children:[s,r]});export{$ as default};
