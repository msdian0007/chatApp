const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-input-emoji-BIUyQkSU.js","assets/react-DHBI0EtI.js","assets/classnames-C9FZUsQl.js","assets/react-dom-vAgahkSm.js","assets/scheduler-CzFDRTuY.js"])))=>i.map(i=>d[i]);
import{r as n,j as e,a as ae}from"./react-DHBI0EtI.js";import{c as ne}from"./react-dom-vAgahkSm.js";import{a as re}from"./axios-B4uVmeYG.js";import{l as le}from"./socket.io-client-DFi9RC7o.js";import{s as ie,S as b,a as B,B as T,P as oe,b as ce,A as de}from"./antd-CGJnuDIE.js";import{h as $}from"./moment-C5S46NFB.js";import{m as me}from"./@ant-design-BXSslDOJ.js";import{d as F,b as ue,e as pe,f as P}from"./react-router-mPJ5A8eT.js";import{L as M,B as ge}from"./react-router-dom-CBWY55wr.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./engine.io-client-DBBxzneW.js";import"./engine.io-parser-BiEtp6m2.js";import"./@socket.io-Dkula2eQ.js";import"./socket.io-parser-BBkuslX-.js";import"./rc-util-CKS6iVdJ.js";import"./@babel-DDXZNtFh.js";import"./rc-resize-observer-CRkq6iVc.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./rc-motion-CrFfCSa5.js";import"./rc-tooltip-ClTVruCb.js";import"./@rc-component-DIXMz7SD.js";import"./rc-field-form-CC_rKtwh.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-pagination-C8e5ATKj.js";import"./rc-picker-byqou3sD.js";import"./@ctrl-DOFZgDuz.js";import"./rc-notification-Co1WApSr.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./@remix-run-BZ1VHzzA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();let D="",q="";D="https://chat-app-cc4k.onrender.com",q="https://chatapp-socket-oi5c.onrender.com";const xe=Object.freeze({server:D,socket:q}),J=xe,I=re.create({baseURL:J.server,timeout:4e4,headers:{"Content-Type":"application/json"}}),V=n.createContext(null),he=({children:s,user:a})=>{const[o,d]=n.useState(!1),[r,t]=n.useState([]),[u,l]=n.useState([]),[g,c]=n.useState([]),[f,h]=n.useState([]),[i,j]=n.useState(null),[S,p]=n.useState(!1),[U,k]=n.useState(null),[w,_]=n.useState(null),[v,Z]=n.useState(null),[G,Q]=n.useState([]),[R,E]=n.useState([]),X=n.useCallback(async(x,m)=>{try{d(!0);const N=await I.post("/chats",{firstId:x,secondId:m});N.data&&(t(y=>[N.data,...y]),d(!1))}catch(N){console.log(N)}},[]),Y=n.useCallback(async(x,m,N,y)=>{try{const C=await I.post("/messages",{chatId:N,senderId:m,text:x});C.data&&(_(C.data),k(A=>[...A,C.data]),y(""))}catch(C){console.log(C)}},[]),ee=n.useCallback((x,m)=>{j(x);const N=R.map(y=>y.senderId===m?{...y,isRead:!0}:y);E(N)},[R]),se=n.useCallback(async(x,m)=>{try{const N=await I.get(`/chats/${x}/${m}`);if(N.data){j(N.data);const y=R.map(C=>C.senderId===x?{...C,isRead:!0}:C);E(y)}}catch(N){console.log(N)}},[R]),te=n.useCallback(x=>{const m=x.map(N=>({...N,isRead:!0}));E(m)},[]);return n.useEffect(()=>{if(!a)return;(async()=>{try{d(!0);const m=await I.get(`/chats/${a==null?void 0:a._id}`);m.data&&(t(m.data),d(!1))}catch(m){console.log(m)}})()},[a]),n.useEffect(()=>{if(!a)return;(async()=>{try{l(!0);const m=await I.get("/user/find");if(m.data){const N=m.data.filter(y=>{let C=!1;return a._id===y._id?!1:(r&&(C=r==null?void 0:r.some(A=>A.members[0]===y._id||A.members[1]===y._id)),!C)});h(m.data),c(N),l(!1)}}catch(m){console.log(m)}})()},[r]),n.useEffect(()=>{const x=async()=>{try{p(!0);const m=await I.get(`/messages/${i==null?void 0:i._id}`);m.data&&(k(m.data),p(!1))}catch(m){console.log(m)}};i&&x()},[i]),n.useEffect(()=>{const x=le(J.socket);return Z(x),()=>{x.disconnect()}},[a]),n.useEffect(()=>{v===null&&!a||v.emit("addOnlineUser",a==null?void 0:a._id)},[v]),n.useEffect(()=>{if(!(v===null&&!a))return v.on("getOnlineUsers",x=>{Q(x)}),()=>{v.off("getOnlineUsers")}},[v]),n.useEffect(()=>{v===null&&!a||v.emit("sendNewMessage",{recipientId:i==null?void 0:i.members.find(x=>x!==(a==null?void 0:a._id)),textMessage:w})},[w]),n.useEffect(()=>{if(!(v===null&&!a))return v.on("getNewMessage",x=>{(i==null?void 0:i._id)===x.chatId&&k(m=>[...m,x])}),v.on("sendNotification",x=>{i!=null&&i.members.find(m=>m===x.senderId)?E(m=>[{...x,isRead:!0},...m]):E(m=>[x,...m])}),()=>{v.off("getNewMessage"),v.off("sendNotification")}},[v,i]),e.jsx(e.Fragment,{children:e.jsx(V.Provider,{value:{userChat:r,chatLoading:o,potentialChats:g,potentialChatsLoading:u,allUsers:f,createChat:X,currentChat:i,updateCurrentChat:ee,messages:U,messagesLoading:S,sendTextMessage:Y,onlineUsers:G,notifications:R,openNewChat:se,markAllAsRead:te},children:s})})},O=()=>n.useContext(V),H=n.createContext(),fe=({children:s})=>{const[a,o]=n.useState(!0),[d,r]=n.useState(null),[t,u]=n.useState({name:"",email:"",password:""}),[l,g]=n.useState({email:"",password:""}),c=(p,U,k)=>{ie[p]({message:U,desc:k})},f=n.useCallback(async()=>{try{if(!t.email&&!t.password&&!t.name)return c("warning","All fields required");const p=await I.post("/user/register",t);p.data&&(localStorage.setItem("userData",JSON.stringify(p.data)),r(p.data),o(!1),c("success",p.data.message))}catch(p){console.log(p)}},[t]),h=n.useCallback(p=>{u(p)},[]),i=n.useCallback(p=>{g(p)},[]),j=n.useCallback(()=>{localStorage.removeItem("userData"),r(null)},[]),S=n.useCallback(async()=>{try{if(!l.email&&!l.password)return c("warning","All fields required");const p=await I.post("/user/login",l);p.data&&(localStorage.setItem("userData",JSON.stringify(p.data)),r(p.data),o(!1),c("success",p.data.message))}catch(p){p.response&&p.response.data?c("error",p.response.data.message):c("error","An error occurred. Please try again."),console.log(p)}},[l]);return n.useEffect(()=>{const p=localStorage.getItem("userData");r(JSON.parse(p)),o(!1)},[]),e.jsx(e.Fragment,{children:e.jsx(H.Provider,{value:{user:d,registerInfo:t,updateRegisterInfo:h,registerUser:f,loading:a,logOut:j,logIn:S,loginInfo:l,updateLoginInfo:i},children:s})})},L=()=>n.useContext(H),W=()=>{const[s,a]=n.useState(),[o,d]=n.useState(!0);return{recipientLoading:o,recipient:s,getRecipient:async(r,t)=>{const u=r==null?void 0:r.members.find(g=>g!==(t==null?void 0:t._id));if(!u)return null;const l=await I.get(`/user/find/${u}`);l.data&&(a(l.data),d(!1))}}},je=()=>e.jsx("div",{className:"user-card flex justify-between items-center p-2 cursor-pointer",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:" ",children:e.jsx(b.Avatar,{size:"large",active:!0})}),e.jsxs("div",{className:"text-content",children:[e.jsx(b.Input,{size:"small",style:{height:"14px"},block:!0,active:!0}),e.jsx(b.Input,{size:"small",style:{height:"10px"},active:!0})]})]})}),ve=()=>e.jsxs("div",{className:"flex flex-col gap-1 items-center w-6 pl-8",children:[e.jsx(b.Avatar,{active:!0}),e.jsx(b.Button,{active:!0,size:"small",style:{height:"6px"}})]}),Ne=()=>e.jsx("div",{className:"chat-box content-center !bg-neutral-700 min-h-[calc(100vh-8vh)]",children:e.jsxs("div",{className:"messages pb-4 px-1 lg:px-4",children:[e.jsx(b.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(b.Input,{className:"message !p-0 !bg-transparent",active:!0})]})}),K=s=>s.filter(a=>!a.isRead),be=(s,a)=>K(s).filter(d=>d.senderId===a).length,ye=()=>{const[s,a]=n.useState(!0),[o,d]=n.useState();return{lastMessageLoading:s,lastMessage:o,getLatestMessage:async r=>{const t=await I.get(`/messages/latest/${r}`);t.data&&(d(t.data),a(!1))}}};function Ce({chat:s,user:a,index:o,setIsChatBoxOpen:d}){const{onlineUsers:r,notifications:t,updateCurrentChat:u,messages:l}=O(),{getRecipient:g,recipient:c,recipientLoading:f}=W(),{getLatestMessage:h,lastMessage:i}=ye(),j=be(t,c==null?void 0:c._id),S=w=>r.some(v=>v.userId===w)&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"}),p=w=>w.split(" ").map(_=>_.charAt(0).toUpperCase()).join(""),U=w=>i&&(w==null?void 0:w.senderId)!==(c==null?void 0:c._id)?e.jsxs("div",{className:"flex text-[12px]",children:[e.jsx("div",{className:"font-bold text-orange-400 pr-1",children:"you:"}),e.jsx("div",{className:"truncate",children:i==null?void 0:i.text})]}):e.jsx("div",{className:"text",children:i==null?void 0:i.text}),k=()=>{u(s,c==null?void 0:c._id),d(!0)};return n.useEffect(()=>{g(s,a)},[s]),n.useEffect(()=>{h(s==null?void 0:s._id)},[t,l]),e.jsx(e.Fragment,{children:f?e.jsx(je,{}):e.jsxs("div",{className:"user-card flex justify-between items-center p-2 cursor-pointer",onClick:k,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"relative w-9 h-9",children:[e.jsx("div",{className:"w-full h-full rounded-full object-cover bg-slate-400 text-center content-center",children:p(c==null?void 0:c.name)}),S(c==null?void 0:c._id)]}),e.jsxs("div",{className:"text-content",children:[e.jsx("div",{className:"name",children:c==null?void 0:c.name}),U(i)]})]}),e.jsxs("div",{className:"grid text-right items-end",children:[e.jsx("div",{className:"date !text-[12px]",children:$(i==null?void 0:i.updatedAt).calendar()}),j?e.jsx("div",{className:"flex justify-end",children:e.jsx("span",{className:"this-user-notifications",children:j})}):null]})]})})}const we=({user:s})=>{const{potentialChats:a,createChat:o,onlineUsers:d,potentialChatsLoading:r}=O(),t=l=>d.some(c=>c.userId===l)&&e.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-[1px] border-white rounded-full"}),u=l=>l.split(" ").map(g=>g.charAt(0).toUpperCase()).join("");return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex gap-2 scrollbar overflow-x-scroll overflow-y-hidden",children:r?e.jsx(ve,{}):a&&a.map((l,g)=>e.jsxs("div",{className:"flex flex-col items-center w-14 p-2 rounded-lg cursor-pointer  border-b-2 mb-2",onClick:()=>o(s==null?void 0:s._id,l==null?void 0:l._id),children:[e.jsxs("div",{className:"relative w-7 h-7",children:[e.jsx("div",{className:"w-full h-full rounded-full object-cover text-[12px] bg-violet-600 text-center content-center",children:u(l==null?void 0:l.name)}),t(l._id)]}),e.jsx("div",{className:"mt-1 text-[9px] text-center",children:l==null?void 0:l.name})]},g))})})},Ie="modulepreload",Se=function(s){return"/chatApp/"+s},z={},ke=function(a,o,d){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),u=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(o.map(l=>{if(l=Se(l),l in z)return;z[l]=!0;const g=l.endsWith(".css"),c=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":Ie,g||(f.as="script",f.crossOrigin=""),f.href=l,u&&f.setAttribute("nonce",u),document.head.appendChild(f),g)return new Promise((h,i)=>{f.addEventListener("load",h),f.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>a()).catch(t=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=t,window.dispatchEvent(u),!u.defaultPrevented)throw t})},Le=n.lazy(()=>ke(()=>import("./react-input-emoji-BIUyQkSU.js"),__vite__mapDeps([0,1,2,3,4]))),Ue=n.memo(({text:s,handleChange:a})=>e.jsx(e.Fragment,{children:e.jsx(n.Suspense,{fallback:e.jsx(B,{}),children:e.jsx(Le,{value:s,onChange:a,fontFamily:"nunito",borderColor:"rgba(72, 112, 223, 0.2)"})})})),Re=({user:s,setIsChatBoxOpen:a})=>{const{messages:o,messagesLoading:d,currentChat:r,sendTextMessage:t}=O(),{loading:u,recipient:l,getRecipient:g}=W(),[c,f]=n.useState(""),h=n.useRef();n.useEffect(()=>{g(r,s)},[r]),n.useEffect(()=>{var j;(j=h.current)==null||j.scrollIntoView({behavior:"smooth"})},[o]);const i=n.useCallback(j=>{f(j)},[]);return d?e.jsx(Ne,{}):r?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"chat-box relative min-h-[calc(100vh-8vh)]",children:[e.jsxs("div",{className:"chat-header !flex !justify-between",children:[e.jsx("div",{className:"cursor-pointer lg:text-lg text-xl pl-2",onClick:()=>a(!1),children:e.jsx(me,{})}),e.jsx("strong",{children:l==null?void 0:l.name}),e.jsx("span",{})]}),e.jsx("div",{className:"messages lg:pb-[46px] pt-2 pb-5 px-3 lg:px-4",children:o&&o.map((j,S)=>e.jsxs("div",{ref:h,className:`${j.senderId===(s==null?void 0:s._id)?"message self ":"message "} `,children:[e.jsx("div",{children:j.text}),e.jsx("div",{className:"message-footer",children:$(j.createdAt).calendar()})]},S))}),e.jsxs("div",{className:"chat-input absolute left-0 right-0 bottom-0 flex justify-between items-center",children:[e.jsx(Ue,{text:c,handleChange:i}),e.jsx("button",{className:" bg-sky-600 items-end content-center rounded-full h-8 w-8",onClick:()=>t(c,s==null?void 0:s._id,r._id,f),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-send scale-75",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"})})})]})]})}):e.jsx("div",{className:"chat-box content-center min-h-[calc(100vh-8vh)]",children:e.jsx("div",{className:"flex justify-center ",children:"...No conversation selected"})})},Ee=()=>{const{userChat:s,loading:a}=O(),{user:o}=L(),[d,r]=n.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-8",children:[e.jsxs("div",{className:`${d?"hidden lg:block col-span-3":"lg:col-span-3 col-span-8"} "px-3 my-2 border-r-2"`,children:[e.jsx(we,{user:o}),e.jsx("div",{children:!a&&s.map((t,u)=>e.jsx("div",{children:e.jsx(Ce,{chat:t,user:o,index:u,setIsChatBoxOpen:r})},u))})]}),e.jsx("div",{className:`${d?"lg:col-span-5 col-span-8":"hidden lg:block"} col-span-5 lg:pl-2`,children:e.jsx(Re,{user:o,setIsChatBoxOpen:r})})]})})},Oe=()=>{const{logIn:s,user:a,updateLoginInfo:o,loginInfo:d}=L(),[r,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[a?e.jsx(F,{to:"/"}):null,e.jsx("div",{className:"flex justify-center min-h-[calc(100vh-10vh)]",children:e.jsxs("div",{className:"grid grid-cols-4 my-auto ",children:[e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:[e.jsx("label",{htmlFor:"",children:"Email"}),e.jsx("input",{type:"email",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:u=>o({...d,email:u.target.value})})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-4",children:[e.jsx("label",{htmlFor:"",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:`${r?"text":"password"}`,className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:u=>o({...d,password:u.target.value})}),e.jsx("span",{className:"cursor-pointer absolute right-2 top-1",onClick:()=>t(!r),children:"👁"})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:e.jsx("button",{onClick:s,className:"bg-blue-600 px-2 py-1 rounded-md",children:"Log In"})})]})})]})},_e=()=>{const{registerInfo:s,user:a,updateRegisterInfo:o,registerUser:d,loading:r}=L();return e.jsxs(e.Fragment,{children:[a?e.jsx(F,{to:"/"}):null,e.jsx("form",{action:"",children:e.jsx("div",{className:"flex justify-center min-h-[calc(100vh-10vh)]",children:e.jsxs("div",{className:"grid grid-cols-4 my-auto ",children:[e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:[e.jsx("label",{htmlFor:"",children:"Name"}),e.jsx("input",{type:"text",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:t=>o({...s,name:t.target.value})})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:[e.jsx("label",{htmlFor:"",children:"Email"}),e.jsx("input",{type:"email",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:t=>o({...s,email:t.target.value})})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-4",children:[e.jsx("label",{htmlFor:"",children:"Create Password"}),e.jsx("input",{type:"password",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:t=>o({...s,password:t.target.value})})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:e.jsx(T,{onClick:d,type:"primary",loading:r,iconPosition:"end",children:"Sign Up"})})]})})})]})},Ae=()=>{const{user:s}=L(),{notifications:a,allUsers:o,openNewChat:d,markAllAsRead:r}=O(),[t,u]=n.useState(!1),l=K(a),g=a.map(h=>{let i=o.find(j=>j._id===h.senderId);return{...h,senderName:i==null?void 0:i.name}}),c=(h,i)=>{d(h,i),u(!1)};let f=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid",children:[g!=null&&g.length?g.map((h,i)=>e.jsxs("div",{className:`${h.isRead?" text-black/30":"text-black"} border-slate-300 cursor-pointer border-b-[1px] p-1`,onClick:()=>c(h==null?void 0:h.senderId,s==null?void 0:s._id),children:[e.jsx("span",{className:"font-bold ",children:h==null?void 0:h.senderName}),e.jsx("span",{children:" sent a message"}),e.jsx("span",{className:"text-[10px] pl-4 align-bottom italic",children:$(h==null?void 0:h.date).calendar()})]},i)):e.jsx("div",{className:"text-center text-rose-600",children:"Empty"}),(g==null?void 0:g.length)>1?e.jsx("div",{className:"flex justify-end pt-3",children:e.jsx(T,{className:"text-[12px]",size:"small",type:"default",onClick:()=>r(g),children:"Mark all as read"})}):null]})});return e.jsx(e.Fragment,{children:e.jsx(oe,{placement:"bottomRight",title:"Unread Notifications",content:f,trigger:"click",open:t,onOpenChange:()=>u(!t),children:e.jsx(ce,{className:"cursor-pointer content-center",size:"small",count:l==null?void 0:l.length,children:e.jsx(de,{className:"lg:scale-100 scale-75",shape:"circle",size:"default",icon:"🔔"})})})})},Pe=()=>{const{user:s,logOut:a}=L();return e.jsx(e.Fragment,{children:e.jsx("div",{className:" bg-slate-700 ",children:e.jsxs("div",{className:"flex justify-between min-h-[8vh] lg:px-[56px] px-3 ",children:[e.jsx("div",{className:"cursor-pointer content-center hidden lg:block",children:e.jsx(M,{to:"/",children:"ChatApp"})}),e.jsxs("div",{className:" flex gap-1",children:[e.jsx("div",{className:"content-center italic scale-125",children:"🍁"}),s&&e.jsxs("div",{className:"content-center",children:[e.jsx("span",{children:"Hi "}),e.jsx("span",{className:"text-amber-500 italic",children:s==null?void 0:s.name})]})]}),e.jsxs("div",{className:"flex gap-1 lg:gap-3 my-auto",children:[e.jsx(Ae,{}),s?e.jsx("div",{className:"content-center lg:text-md text-xs cursor-pointer",children:e.jsx("a",{onClick:a,children:"Logout"})}):e.jsxs("div",{className:"flex flex-col my-auto text-right lg:text-md text-xs",children:[e.jsx("div",{children:e.jsx(M,{className:"cursor-pointer ",to:"/login",children:"Login"})}),e.jsx("div",{children:e.jsx(M,{className:"cursor-pointer",to:"/register",children:"Register"})})]})]})]})})})},Fe=({children:s})=>{const{user:a,loading:o}=L(),d=ue();return o?e.jsx("div",{className:"h-[100vh] content-center",children:e.jsx("div",{className:"flex justify-center ",children:e.jsx(B,{size:"large"})})}):a?s:e.jsx(F,{to:"/login",state:{from:d}})};function Me(){const{user:s}=L();return e.jsx(e.Fragment,{children:e.jsxs(he,{user:s,children:[e.jsx(Pe,{}),e.jsx("div",{className:"lg:px-[46px]",children:e.jsxs(pe,{children:[e.jsx(P,{path:"/",element:e.jsx(Fe,{children:e.jsx(Ee,{})})}),e.jsx(P,{path:"/login",element:e.jsx(Oe,{})}),e.jsx(P,{path:"/register",element:e.jsx(_e,{})}),e.jsx(P,{path:"*",element:e.jsx(F,{to:"/"})})]})})]})})}ne.createRoot(document.getElementById("root")).render(e.jsx(ae.StrictMode,{children:e.jsx(fe,{children:e.jsx(ge,{basename:"/chatApp",children:e.jsx(Me,{})})})}));
