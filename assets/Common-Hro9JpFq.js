import{R as a,j as i}from"./index-BOxrgFY-.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=a.createContext&&a.createContext(p),j=["attr","size","title"];function g(e,t){if(e==null)return{};var r=v(e,t),n,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function v(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(n){y(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function y(e,t,r){return t=b(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=O(e,"string");return typeof t=="symbol"?t:t+""}function O(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function h(e){return e&&e.map((t,r)=>a.createElement(t.tag,u({key:r},t.attr),h(t.child)))}function w(e){return t=>a.createElement(P,o({attr:u({},e.attr)},t),h(e.child))}function P(e){var t=r=>{var{attr:n,size:s,title:l}=e,x=g(e,j),m=s||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,x,{className:c,style:u(u({color:e.color||r.color},r.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return d!==void 0?a.createElement(d.Consumer,null,r=>t(r)):t(p)}function N(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 6v12l10-6z"},child:[]}]})(e)}function C({code:e}){return i.jsxs("div",{className:"my-2 bg-slate-300 relative",children:[e.func?i.jsx("button",{className:"bg-green-500 px-4 text-white sm:absolute top-0 right-0 block w-full sm:w-auto",onClick:e.func,"aria-label":"Run Code",title:"Run Code",children:i.jsx(N,{size:40,className:"mx-auto"})}):null,i.jsx("div",{className:"text-green-700 text-lg py-3 px-5",children:e.script?e.script.map((t,r)=>i.jsxs("p",{children:[i.jsx("span",{className:"mr-2 text-gray-600",children:r+1}),t]},r)):i.jsx("p",{className:"text-gray-600",children:e})})]})}function S({obj:e}){return i.jsxs("section",{children:[i.jsx("h2",{className:"title",children:e.title}),e.points?i.jsxs("div",{className:"p-3",children:[i.jsx("h3",{children:"Points:"}),i.jsx("ul",{children:e.points.map((t,r)=>i.jsx("li",{children:t},r))})]}):null,e.summary?i.jsxs("div",{className:"p-3",children:[i.jsx("h3",{children:"Summary:"}),i.jsx("ul",{children:e.summary.map((t,r)=>i.jsx("li",{children:t},r))})]}):null,e.tasks?i.jsxs("div",{className:"p-3",children:[i.jsx("h3",{children:"Tasks:"}),e.tasks.map((t,r)=>i.jsxs("div",{children:[i.jsx("h4",{className:"font-bold",children:`${r+1}. ${t.name}`}),i.jsxs("p",{children:[i.jsx("span",{className:"font-bold",children:"Task: "}),t.task]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Solution:"}),i.jsx(C,{code:t.code})]})]},r))]}):null]})}export{S as C};
