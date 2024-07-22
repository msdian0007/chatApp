import{r as n,j as e,a as se}from"./react-DHBI0EtI.js";import{c as te}from"./react-dom-vAgahkSm.js";import{a as ae}from"./axios-B4uVmeYG.js";import{l as ne}from"./socket.io-client-DFi9RC7o.js";import{s as re,S as v,B as $,P as le,a as ie,A as oe,b as ce}from"./antd-Blvr2oBB.js";import{h as z}from"./moment-C5S46NFB.js";import{I as de}from"./react-input-emoji-CvgSBe5K.js";import{m as me}from"./@ant-design-BXSslDOJ.js";import{d as F,b as ge,e as pe,f as E}from"./react-router-By940BZ8.js";import{L as P,H as ue}from"./react-router-dom-hqyTw6Bc.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./engine.io-client-DBBxzneW.js";import"./engine.io-parser-BiEtp6m2.js";import"./@socket.io-Dkula2eQ.js";import"./socket.io-parser-BBkuslX-.js";import"./rc-util-CKS6iVdJ.js";import"./@babel-DDXZNtFh.js";import"./rc-resize-observer-CRkq6iVc.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./rc-motion-CrFfCSa5.js";import"./rc-tooltip-ClTVruCb.js";import"./@rc-component-DIXMz7SD.js";import"./rc-field-form-CC_rKtwh.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-pagination-C8e5ATKj.js";import"./rc-picker-byqou3sD.js";import"./@ctrl-DOFZgDuz.js";import"./rc-notification-Co1WApSr.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./@remix-run-DvHAOhjM.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&m(h)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}})();let B="",D="";B="https://chatapp-5f1p.onrender.com/api",D="https://chatapp-socket-oi5c.onrender.com";const xe=Object.freeze({server:B,socket:D}),T=xe,I=ae.create({baseURL:T.server,timeout:4e4,headers:{"Content-Type":"application/json"}}),q=n.createContext(null),he=({children:s,user:a})=>{const[o,m]=n.useState(!1),[t,l]=n.useState([]),[h,i]=n.useState([]),[x,c]=n.useState([]),[y,u]=n.useState([]),[r,C]=n.useState(null),[k,g]=n.useState(!1),[R,S]=n.useState(null),[w,A]=n.useState(null),[f,V]=n.useState(null),[W,Z]=n.useState([]),[U,O]=n.useState([]),G=n.useCallback(async(p,d)=>{try{m(!0);const j=await I.post("/chats",{firstId:p,secondId:d});j.data&&(l(N=>[j.data,...N]),m(!1))}catch(j){console.log(j)}},[]),Q=n.useCallback(async(p,d,j,N)=>{try{const b=await I.post("/messages",{chatId:j,senderId:d,text:p});b.data&&(A(b.data),S(M=>[...M,b.data]),N(""))}catch(b){console.log(b)}},[]),X=n.useCallback((p,d)=>{C(p);const j=U.map(N=>N.senderId===d?{...N,isRead:!0}:N);O(j)},[U]),Y=n.useCallback(async(p,d)=>{try{const j=await I.get(`/chats/${p}/${d}`);if(j.data){C(j.data);const N=U.map(b=>b.senderId===p?{...b,isRead:!0}:b);O(N)}}catch(j){console.log(j)}},[U]),ee=n.useCallback(p=>{const d=p.map(j=>({...j,isRead:!0}));console.log(d),O(d)},[]);return n.useEffect(()=>{if(!a)return;(async()=>{try{m(!0);const d=await I.get(`/chats/${a==null?void 0:a._id}`);d.data&&(l(d.data),m(!1))}catch(d){console.log(d)}})()},[a]),n.useEffect(()=>{if(!a)return;(async()=>{try{i(!0);const d=await I.get("/user/find");if(d.data){const j=d.data.filter(N=>{let b=!1;return a._id===N._id?!1:(t&&(b=t==null?void 0:t.some(M=>M.members[0]===N._id||M.members[1]===N._id)),!b)});u(d.data),c(j),i(!1)}}catch(d){console.log(d)}})()},[t]),n.useEffect(()=>{const p=async()=>{try{g(!0);const d=await I.get(`/messages/${r==null?void 0:r._id}`);d.data&&(S(d.data),g(!1))}catch(d){console.log(d)}};r&&p()},[r]),n.useEffect(()=>{const p=ne(T.socket);return V(p),()=>{p.disconnect()}},[a]),n.useEffect(()=>{f===null&&!a||f.emit("addOnlineUser",a==null?void 0:a._id)},[f]),n.useEffect(()=>{if(!(f===null&&!a))return f.on("getOnlineUsers",p=>{console.log(p),Z(p)}),()=>{f.off("getOnlineUsers")}},[f]),n.useEffect(()=>{f===null&&!a||f.emit("sendNewMessage",{recipientId:r==null?void 0:r.members.find(p=>p!==(a==null?void 0:a._id)),textMessage:w})},[w]),n.useEffect(()=>{if(!(f===null&&!a))return f.on("getNewMessage",p=>{(r==null?void 0:r._id)===p.chatId&&S(d=>[...d,p])}),f.on("sendNotification",p=>{r!=null&&r.members.find(d=>d===p.senderId)?O(d=>[{...p,isRead:!0},...d]):O(d=>[p,...d])}),()=>{f.off("getNewMessage"),f.off("sendNotification")}},[f,r]),e.jsx(e.Fragment,{children:e.jsx(q.Provider,{value:{userChat:t,chatLoading:o,potentialChats:x,potentialChatsLoading:h,allUsers:y,createChat:G,currentChat:r,updateCurrentChat:X,messages:R,messagesLoading:k,sendTextMessage:Q,onlineUsers:W,notifications:U,openNewChat:Y,markAllAsRead:ee},children:s})})},_=()=>n.useContext(q),H=n.createContext(),fe=({children:s})=>{const[a,o]=n.useState(!0),[m,t]=n.useState(null),[l,h]=n.useState({name:"",email:"",password:""}),[i,x]=n.useState({email:"",password:""}),c=(g,R,S)=>{re[g]({message:R,desc:S})},y=n.useCallback(async()=>{try{if(!l.email&&!l.password&&!l.name)return c("warning","All fields required");const g=await I.post("/user/register",l);g.data&&(localStorage.setItem("userData",JSON.stringify(g.data)),t(g.data),o(!1),c("success",g.data.message),window.location="/")}catch(g){console.log(g)}},[l]),u=n.useCallback(g=>{h(g)},[]),r=n.useCallback(g=>{x(g)},[]),C=n.useCallback(()=>{localStorage.removeItem("userData"),t(null)},[]),k=n.useCallback(async()=>{try{if(!i.email&&!i.password)return c("warning","All fields required");const g=await I.post("/user/login",i);g.data&&(localStorage.setItem("userData",JSON.stringify(g.data)),t(g.data),o(!1),c("success",g.data.message),window.location="/")}catch(g){g.response&&g.response.data?c("error",g.response.data.message):c("error","An error occurred. Please try again."),console.log(g)}},[i]);return n.useEffect(()=>{const g=localStorage.getItem("userData");t(JSON.parse(g)),o(!1)},[]),e.jsx(e.Fragment,{children:e.jsx(H.Provider,{value:{user:m,registerInfo:l,updateRegisterInfo:u,registerUser:y,loading:a,logOut:C,logIn:k,loginInfo:i,updateLoginInfo:r},children:s})})},L=()=>n.useContext(H),J=()=>{const[s,a]=n.useState(),[o,m]=n.useState(!0);return{recipientLoading:o,recipient:s,getRecipient:async(t,l)=>{const h=t==null?void 0:t.members.find(x=>x!==(l==null?void 0:l._id));if(!h)return null;const i=await I.get(`/user/find/${h}`);i.data&&(a(i.data),m(!1))}}},je=()=>e.jsx("div",{className:"user-card flex justify-between items-center p-2 cursor-pointer",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:" ",children:e.jsx(v.Avatar,{size:"large",active:!0})}),e.jsxs("div",{className:"text-content",children:[e.jsx(v.Input,{size:"small",style:{height:"14px"},block:!0,active:!0}),e.jsx(v.Input,{size:"small",style:{height:"10px"},active:!0})]})]})}),ve=()=>e.jsxs("div",{className:"flex flex-col gap-1 items-center w-6 pl-8",children:[e.jsx(v.Avatar,{active:!0}),e.jsx(v.Button,{active:!0,size:"small",style:{height:"6px"}})]}),Ne=()=>e.jsx("div",{className:"chat-box content-center !bg-neutral-700 min-h-[calc(100vh-8vh)]",children:e.jsxs("div",{className:"messages pb-4 px-1 lg:px-4",children:[e.jsx(v.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message self !p-0 !bg-transparent",active:!0}),e.jsx(v.Input,{className:"message !p-0 !bg-transparent",active:!0})]})}),K=s=>s.filter(a=>!a.isRead),be=(s,a)=>K(s).filter(m=>m.senderId===a).length,Ce=()=>{const[s,a]=n.useState(!0),[o,m]=n.useState();return{lastMessageLoading:s,lastMessage:o,getLatestMessage:async t=>{const l=await I.get(`/messages/latest/${t}`);l.data&&(m(l.data),a(!1))}}};function ye({chat:s,user:a,index:o,setIsChatBoxOpen:m}){const{onlineUsers:t,notifications:l,updateCurrentChat:h,messages:i}=_(),{getRecipient:x,recipient:c,recipientLoading:y}=J(),{getLatestMessage:u,lastMessage:r}=Ce(),C=be(l,c==null?void 0:c._id),k=w=>t.some(f=>f.userId===w)&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"}),g=w=>w.split(" ").map(A=>A.charAt(0).toUpperCase()).join(""),R=w=>r&&(w==null?void 0:w.senderId)!==(c==null?void 0:c._id)?e.jsxs("div",{className:"flex text-[12px]",children:[e.jsx("div",{className:"font-bold text-orange-400 pr-1",children:"you:"}),e.jsx("div",{className:"text-clip overflow-hidden",children:r==null?void 0:r.text})]}):e.jsx("div",{className:"text",children:r==null?void 0:r.text}),S=()=>{h(s,c==null?void 0:c._id),m(!0)};return n.useEffect(()=>{x(s,a)},[s]),n.useEffect(()=>{u(s==null?void 0:s._id)},[l,i]),e.jsx(e.Fragment,{children:y?e.jsx(je,{}):e.jsxs("div",{className:"user-card flex justify-between items-center p-2 cursor-pointer",onClick:S,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"relative w-9 h-9",children:[e.jsx("div",{className:"w-full h-full rounded-full object-cover bg-slate-400 text-center content-center",children:g(c==null?void 0:c.name)}),k(c==null?void 0:c._id)]}),e.jsxs("div",{className:"text-content",children:[e.jsx("div",{className:"name",children:c==null?void 0:c.name}),R(r)]})]}),e.jsxs("div",{className:"grid text-right items-end",children:[e.jsx("div",{className:"date !text-[12px]",children:z(r==null?void 0:r.updatedAt).calendar()}),C?e.jsx("div",{className:"flex justify-end",children:e.jsx("span",{className:"this-user-notifications",children:C})}):null]})]})})}const we=({user:s})=>{const{potentialChats:a,createChat:o,onlineUsers:m,potentialChatsLoading:t}=_(),l=i=>m.some(c=>c.userId===i)&&e.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-[1px] border-white rounded-full"}),h=i=>i.split(" ").map(x=>x.charAt(0).toUpperCase()).join("");return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex gap-2",children:t?e.jsx(ve,{}):a&&a.map((i,x)=>e.jsxs("div",{className:"flex flex-col items-center w-14 p-2 rounded-lg cursor-pointer  border-b-2 mb-2",onClick:()=>o(s==null?void 0:s._id,i==null?void 0:i._id),children:[e.jsxs("div",{className:"relative w-7 h-7",children:[e.jsx("div",{className:"w-full h-full rounded-full object-cover text-[12px] bg-violet-600 text-center content-center",children:h(i==null?void 0:i.name)}),l(i._id)]}),e.jsx("div",{className:"mt-1 text-[9px] text-center",children:i==null?void 0:i.name})]},x))})})},Ie=({user:s,setIsChatBoxOpen:a})=>{const{messages:o,messagesLoading:m,currentChat:t,sendTextMessage:l}=_(),{loading:h,recipient:i,getRecipient:x}=J(),[c,y]=n.useState(""),u=n.useRef();return n.useEffect(()=>{x(t,s)},[t]),n.useEffect(()=>{var r;(r=u.current)==null||r.scrollIntoView({behavior:"smooth"})},[o]),m?e.jsx(Ne,{}):t?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"chat-box relative min-h-[calc(100vh-8vh)]",children:[e.jsxs("div",{className:"chat-header !flex !justify-between",children:[e.jsx("div",{className:"cursor-pointer lg:text-lg text-xl pl-2",onClick:()=>a(!1),children:e.jsx(me,{})}),e.jsx("strong",{children:i==null?void 0:i.name}),e.jsx("span",{})]}),e.jsx("div",{className:"messages lg:pb-[46px] pt-2 pb-5 px-1 lg:px-4",children:o&&o.map((r,C)=>e.jsxs("div",{ref:u,className:`${r.senderId===(s==null?void 0:s._id)?"message self ":"message "} `,children:[e.jsx("div",{children:r.text}),e.jsx("div",{className:"message-footer",children:z(r.createdAt).calendar()})]},C))}),e.jsxs("div",{className:"chat-input absolute left-0 right-0 bottom-0 flex justify-between items-center",children:[e.jsx(de,{value:c,onChange:r=>y(r),fontFamily:"nunito",borderColor:"rgba(72, 112, 223, 0.2)"}),e.jsx("button",{className:" bg-sky-600 items-end content-center rounded-full h-8 w-8",onClick:()=>l(c,s==null?void 0:s._id,t._id,y),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-send scale-75",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"})})})]})]})}):e.jsx("div",{className:"chat-box content-center min-h-[calc(100vh-8vh)]",children:e.jsx("div",{className:"flex justify-center ",children:"...No conversation selected"})})},Se=()=>{const{userChat:s,loading:a}=_(),{user:o}=L(),[m,t]=n.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-8",children:[e.jsxs("div",{className:`${m?"hidden lg:block col-span-3":"lg:col-span-3 col-span-8"} "px-3 my-2 border-r-2"`,children:[e.jsx(we,{user:o}),e.jsx("div",{children:!a&&s.map((l,h)=>e.jsx("div",{children:e.jsx(ye,{chat:l,user:o,index:h,setIsChatBoxOpen:t})},h))})]}),e.jsx("div",{className:`${m?"lg:col-span-5 col-span-8":"hidden lg:block"} col-span-5 lg:pl-2`,children:e.jsx(Ie,{user:o,setIsChatBoxOpen:t})})]})})},Le=()=>{const{logIn:s,user:a,updateLoginInfo:o,loginInfo:m}=L();return e.jsxs(e.Fragment,{children:[a?e.jsx(F,{to:"/"}):null,e.jsx("div",{className:"flex justify-center min-h-[calc(100vh-10vh)]",children:e.jsxs("div",{className:"grid grid-cols-4 my-auto ",children:[e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:[e.jsx("label",{htmlFor:"",children:"Email"}),e.jsx("input",{type:"email",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:t=>o({...m,email:t.target.value})})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-4",children:[e.jsx("label",{htmlFor:"",children:"Password"}),e.jsx("input",{type:"password",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:t=>o({...m,password:t.target.value})})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:e.jsx("button",{onClick:s,className:"bg-blue-600 px-2 py-1 rounded-md",children:"Log In"})})]})})]})},ke=()=>{const{registerInfo:s,user:a,updateRegisterInfo:o,registerUser:m,loading:t}=L();return e.jsxs(e.Fragment,{children:[a?e.jsx(F,{to:"/"}):null,e.jsx("form",{action:"",children:e.jsx("div",{className:"flex justify-center min-h-[calc(100vh-10vh)]",children:e.jsxs("div",{className:"grid grid-cols-4 my-auto ",children:[e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:[e.jsx("label",{htmlFor:"",children:"Name"}),e.jsx("input",{type:"text",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:l=>o({...s,name:l.target.value})})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:[e.jsx("label",{htmlFor:"",children:"Email"}),e.jsx("input",{type:"email",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:l=>o({...s,email:l.target.value})})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-4",children:[e.jsx("label",{htmlFor:"",children:"Create Password"}),e.jsx("input",{type:"password",className:"bg-neutral-600 px-2 py-1 rounded-md",onChange:l=>o({...s,password:l.target.value})})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-1 gap-1 pb-2",children:e.jsx($,{onClick:m,type:"primary",loading:t,iconPosition:"end",children:"Sign Up"})})]})})})]})},Re=()=>{const{user:s}=L(),{notifications:a,allUsers:o,openNewChat:m,markAllAsRead:t}=_(),[l,h]=n.useState(!1),i=K(a),x=a.map(u=>{let r=o.find(C=>C._id===u.senderId);return{...u,senderName:r==null?void 0:r.name}}),c=(u,r)=>{m(u,r),h(!1)};let y=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid",children:[x!=null&&x.length?x.map((u,r)=>e.jsxs("div",{className:`${u.isRead?" text-black/30":"text-black"} border-slate-300 cursor-pointer border-b-[1px] p-1`,onClick:()=>c(u==null?void 0:u.senderId,s==null?void 0:s._id),children:[e.jsx("span",{className:"font-bold ",children:u==null?void 0:u.senderName}),e.jsx("span",{children:" sent a message"}),e.jsx("span",{className:"text-[10px] pl-4 align-bottom italic",children:z(u==null?void 0:u.date).calendar()})]},r)):e.jsx("div",{className:"text-center text-rose-600",children:"Empty"}),(x==null?void 0:x.length)>1?e.jsx("div",{className:"flex justify-end pt-3",children:e.jsx($,{className:"text-[12px]",size:"small",type:"default",onClick:()=>t(x),children:"Mark all as read"})}):null]})});return e.jsx(e.Fragment,{children:e.jsx(le,{placement:"bottomRight",title:"Unread Notifications",content:y,trigger:"click",open:l,onOpenChange:()=>h(!l),children:e.jsx(ie,{className:"cursor-pointer content-center",size:"small",count:i==null?void 0:i.length,children:e.jsx(oe,{className:"lg:scale-100 scale-75",shape:"circle",size:"default",icon:"🔔"})})})})},Ue=()=>{const{user:s,logOut:a}=L();return e.jsx(e.Fragment,{children:e.jsx("div",{className:" bg-slate-700 ",children:e.jsxs("div",{className:"flex justify-between min-h-[8vh] lg:px-[56px] px-3 ",children:[e.jsx("div",{className:"cursor-pointer content-center hidden lg:block",children:e.jsx(P,{to:"/",children:"ChatApp"})}),e.jsxs("div",{className:" flex gap-1",children:[e.jsx("div",{className:"content-center italic scale-125",children:"🍁"}),s&&e.jsxs("div",{className:"content-center",children:[e.jsx("span",{children:"Hi "}),e.jsx("span",{className:"text-amber-500 italic",children:s==null?void 0:s.name})]})]}),e.jsxs("div",{className:"flex gap-1 lg:gap-3 my-auto",children:[e.jsx(Re,{}),s?e.jsx("div",{className:"content-center lg:text-md text-xs cursor-pointer",children:e.jsx("a",{onClick:a,children:"Logout"})}):e.jsxs("div",{className:"flex flex-col my-auto text-right lg:text-md text-xs",children:[e.jsx("div",{children:e.jsx(P,{className:"cursor-pointer ",to:"/login",children:"Login"})}),e.jsx("div",{children:e.jsx(P,{className:"cursor-pointer",to:"/register",children:"Register"})})]})]})]})})})},Oe=({children:s})=>{const{user:a,loading:o}=L();console.log(o);const m=ge();return o?e.jsx("div",{className:"h-[100vh] content-center",children:e.jsx("div",{className:"flex justify-center ",children:e.jsx(ce,{size:"large"})})}):a?s:e.jsx(F,{to:"/login",state:{from:m}})};function _e(){const{user:s}=L();return e.jsx(e.Fragment,{children:e.jsxs(he,{user:s,children:[e.jsx(Ue,{}),e.jsx("div",{className:"lg:px-[46px]",children:e.jsxs(pe,{children:[e.jsx(E,{path:"/",element:e.jsx(Oe,{children:e.jsx(Se,{})})}),e.jsx(E,{path:"/login",element:e.jsx(Le,{})}),e.jsx(E,{path:"/register",element:e.jsx(ke,{})}),e.jsx(E,{path:"*",element:e.jsx(F,{to:"/"})})]})})]})})}te.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(fe,{children:e.jsx(ue,{children:e.jsx(_e,{})})})}));