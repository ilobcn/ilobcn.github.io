import{r as i,j as t}from"./jsx-runtime-56DGgGmo.js";import{u as h,d as x,O as y}from"./index-CexkxAJe.js";import{h as f,j as S,_ as j,M as w,L as g,S as k}from"./components-fMI_V0Mn.js";/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:e,...l}){let{isSpaMode:c}=f(),o=h(),u=x();S({getKey:e,storageKey:a});let d=i.useMemo(()=>{if(!e)return null;let s=e(o,u);return s!==o.key?s:null},[]);if(c)return null;let m=((s,p)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[p||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",j({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function N({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(g,{})]}),t.jsxs("body",{className:"bg-black",children:[e,t.jsx(M,{}),t.jsx(k,{})]})]})}function R(){return t.jsx(y,{})}function _(){return t.jsx("p",{children:"Loading..."})}export{_ as HydrateFallback,N as Layout,R as default};
