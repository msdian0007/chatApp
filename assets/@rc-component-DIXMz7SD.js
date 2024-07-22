import{g as T,i as Ee,f as De,h as $,c as Xn,d as et,a as Un,b as We,e as xn,_ as Jn,l as rt,j as Qn,k as nt}from"./@babel-DDXZNtFh.js";import{r as c}from"./react-DHBI0EtI.js";import{r as tt}from"./react-dom-vAgahkSm.js";import{c as Kr,u as ee,d as at,a as it,r as En,s as In,e as Zn,f as ot,h as st,i as Oe,j as bn,k as ft,g as Cn,l as ut,m as ct}from"./rc-util-CKS6iVdJ.js";import{c as cr}from"./classnames-C9FZUsQl.js";import{R as Gn}from"./rc-resize-observer-CRkq6iVc.js";import{C as Kn}from"./rc-motion-CrFfCSa5.js";var On=c.createContext(null),Dn=[];function lt(n,e){var r=c.useState(function(){if(!Kr())return null;var u=document.createElement("div");return u}),t=T(r,1),a=t[0],o=c.useRef(!1),i=c.useContext(On),s=c.useState(Dn),h=T(s,2),y=h[0],g=h[1],v=i||(o.current?void 0:function(u){g(function(C){var f=[u].concat(Ee(C));return f})});function S(){a.parentElement||document.body.appendChild(a),o.current=!0}function m(){var u;(u=a.parentElement)===null||u===void 0||u.removeChild(a),o.current=!1}return ee(function(){return n?i?i(S):S():m(),m},[n]),ee(function(){y.length&&(y.forEach(function(u){return u()}),g(Dn))},[y]),[a,v]}function dt(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var vt="rc-util-locker-".concat(Date.now()),Rn=0;function ht(n){var e=!!n,r=c.useState(function(){return Rn+=1,"".concat(vt,"_").concat(Rn)}),t=T(r,1),a=t[0];ee(function(){if(e){var o=at(document.body).width,i=dt();it(`
html body {
  overflow-y: hidden;
  `.concat(i?"width: calc(100% - ".concat(o,"px);"):"",`
}`),a)}else En(a);return function(){En(a)}},[e,a])}var gt=!1;function mt(n){return gt}var Nn=function(e){return e===!1?!1:!Kr()||!e?null:typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e},Yn=c.forwardRef(function(n,e){var r=n.open,t=n.autoLock,a=n.getContainer;n.debug;var o=n.autoDestroy,i=o===void 0?!0:o,s=n.children,h=c.useState(r),y=T(h,2),g=y[0],v=y[1],S=g||r;c.useEffect(function(){(i||r)&&v(r)},[r,i]);var m=c.useState(function(){return Nn(a)}),u=T(m,2),C=u[0],f=u[1];c.useEffect(function(){var K=Nn(a);f(K??null)});var F=lt(S&&!C),w=T(F,2),M=w[0],d=w[1],q=C??M;ht(t&&r&&Kr()&&(q===M||q===document.body));var R=null;if(s&&In(s)&&e){var D=s;R=D.ref}var J=Zn(R,e);if(!S||!Kr()||C===void 0)return null;var z=q===!1||mt(),Q=s;return e&&(Q=c.cloneElement(s,{ref:J})),c.createElement(On.Provider,{value:d},z?Q:tt.createPortal(Q,q))});function Mn(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Sn=Mn();var yt=/%[sdj%]/g,wt=function(){};function Pn(n){if(!n||!n.length)return null;var e={};return n.forEach(function(r){var t=r.field;e[t]=e[t]||[],e[t].push(r)}),e}function re(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var a=0,o=r.length;if(typeof n=="function")return n.apply(null,r);if(typeof n=="string"){var i=n.replace(yt,function(s){if(s==="%%")return"%";if(a>=o)return s;switch(s){case"%s":return String(r[a++]);case"%d":return Number(r[a++]);case"%j":try{return JSON.stringify(r[a++])}catch{return"[Circular]"}break;default:return s}});return i}return n}function bt(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function U(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||bt(e)&&typeof n=="string"&&!n)}function Ct(n,e,r){var t=[],a=0,o=n.length;function i(s){t.push.apply(t,Ee(s||[])),a++,a===o&&r(t)}n.forEach(function(s){e(s,i)})}function An(n,e,r){var t=0,a=n.length;function o(i){if(i&&i.length){r(i);return}var s=t;t=t+1,s<a?e(n[s],o):r([])}o([])}function Mt(n){var e=[];return Object.keys(n).forEach(function(r){e.push.apply(e,Ee(n[r]||[]))}),e}var Tn=function(n){Xn(r,n);var e=et(r);function r(t,a){var o;return Un(this,r),o=e.call(this,"Async Validation Error"),We(xn(o),"errors",void 0),We(xn(o),"fields",void 0),o.errors=t,o.fields=a,o}return Jn(r)}(rt(Error));function St(n,e,r,t,a){if(e.first){var o=new Promise(function(S,m){var u=function(F){return t(F),F.length?m(new Tn(F,Pn(F))):S(a)},C=Mt(n);An(C,r,u)});return o.catch(function(S){return S}),o}var i=e.firstFields===!0?Object.keys(n):e.firstFields||[],s=Object.keys(n),h=s.length,y=0,g=[],v=new Promise(function(S,m){var u=function(f){if(g.push.apply(g,f),y++,y===h)return t(g),g.length?m(new Tn(g,Pn(g))):S(a)};s.length||(t(g),S(a)),s.forEach(function(C){var f=n[C];i.indexOf(C)!==-1?An(f,r,u):Ct(f,r,u)})});return v.catch(function(S){return S}),v}function Pt(n){return!!(n&&n.message!==void 0)}function qt(n,e){for(var r=n,t=0;t<e.length;t++){if(r==null)return r;r=r[e[t]]}return r}function $n(n,e){return function(r){var t;return n.fullFields?t=qt(e,n.fullFields):t=e[r.field||n.fullField],Pt(r)?(r.field=r.field||n.fullField,r.fieldValue=t,r):{message:typeof r=="function"?r():r,fieldValue:t,field:r.field||n.fullField}}}function Ln(n,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var t=e[r];De(t)==="object"&&De(n[r])==="object"?n[r]=$($({},n[r]),t):n[r]=t}}return n}var fr="enum",Ft=function(e,r,t,a,o){e[fr]=Array.isArray(e[fr])?e[fr]:[],e[fr].indexOf(r)===-1&&a.push(re(o.messages[fr],e.fullField,e[fr].join(", ")))},xt=function(e,r,t,a,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||a.push(re(o.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var i=new RegExp(e.pattern);i.test(r)||a.push(re(o.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Et=function(e,r,t,a,o){var i=typeof e.len=="number",s=typeof e.min=="number",h=typeof e.max=="number",y=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,g=r,v=null,S=typeof r=="number",m=typeof r=="string",u=Array.isArray(r);if(S?v="number":m?v="string":u&&(v="array"),!v)return!1;u&&(g=r.length),m&&(g=r.replace(y,"_").length),i?g!==e.len&&a.push(re(o.messages[v].len,e.fullField,e.len)):s&&!h&&g<e.min?a.push(re(o.messages[v].min,e.fullField,e.min)):h&&!s&&g>e.max?a.push(re(o.messages[v].max,e.fullField,e.max)):s&&h&&(g<e.min||g>e.max)&&a.push(re(o.messages[v].range,e.fullField,e.min,e.max))},pn=function(e,r,t,a,o,i){e.required&&(!t.hasOwnProperty(e.field)||U(r,i||e.type))&&a.push(re(o.messages.required,e.fullField))},Gr;const Dt=function(){if(Gr)return Gr;var n="[a-fA-F\\d:]",e=function(R){return R&&R.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(n,")|(?<=").concat(n,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",t="[a-fA-F\\d]{1,4}",a=["(?:".concat(t,":){7}(?:").concat(t,"|:)"),"(?:".concat(t,":){6}(?:").concat(r,"|:").concat(t,"|:)"),"(?:".concat(t,":){5}(?::").concat(r,"|(?::").concat(t,"){1,2}|:)"),"(?:".concat(t,":){4}(?:(?::").concat(t,"){0,1}:").concat(r,"|(?::").concat(t,"){1,3}|:)"),"(?:".concat(t,":){3}(?:(?::").concat(t,"){0,2}:").concat(r,"|(?::").concat(t,"){1,4}|:)"),"(?:".concat(t,":){2}(?:(?::").concat(t,"){0,3}:").concat(r,"|(?::").concat(t,"){1,5}|:)"),"(?:".concat(t,":){1}(?:(?::").concat(t,"){0,4}:").concat(r,"|(?::").concat(t,"){1,6}|:)"),"(?::(?:(?::".concat(t,"){0,5}:").concat(r,"|(?::").concat(t,"){1,7}|:))")],o="(?:%[0-9a-zA-Z]{1,})?",i="(?:".concat(a.join("|"),")").concat(o),s=new RegExp("(?:^".concat(r,"$)|(?:^").concat(i,"$)")),h=new RegExp("^".concat(r,"$")),y=new RegExp("^".concat(i,"$")),g=function(R){return R&&R.exact?s:new RegExp("(?:".concat(e(R)).concat(r).concat(e(R),")|(?:").concat(e(R)).concat(i).concat(e(R),")"),"g")};g.v4=function(q){return q&&q.exact?h:new RegExp("".concat(e(q)).concat(r).concat(e(q)),"g")},g.v6=function(q){return q&&q.exact?y:new RegExp("".concat(e(q)).concat(i).concat(e(q)),"g")};var v="(?:(?:[a-z]+:)?//)",S="(?:\\S+(?::\\S*)?@)?",m=g.v4().source,u=g.v6().source,C="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",f="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",F="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",w="(?::\\d{2,5})?",M='(?:[/?#][^\\s"]*)?',d="(?:".concat(v,"|www\\.)").concat(S,"(?:localhost|").concat(m,"|").concat(u,"|").concat(C).concat(f).concat(F,")").concat(w).concat(M);return Gr=new RegExp("(?:^".concat(d,"$)"),"i"),Gr};var kn={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Fr={integer:function(e){return Fr.number(e)&&parseInt(e,10)===e},float:function(e){return Fr.number(e)&&!Fr.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return De(e)==="object"&&!Fr.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(kn.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Dt())},hex:function(e){return typeof e=="string"&&!!e.match(kn.hex)}},Rt=function(e,r,t,a,o){if(e.required&&r===void 0){pn(e,r,t,a,o);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;i.indexOf(s)>-1?Fr[s](r)||a.push(re(o.messages.types[s],e.fullField,e.type)):s&&De(r)!==e.type&&a.push(re(o.messages.types[s],e.fullField,e.type))},Nt=function(e,r,t,a,o){(/^\s+$/.test(r)||r==="")&&a.push(re(o.messages.whitespace,e.fullField))};const P={required:pn,whitespace:Nt,type:Rt,range:Et,enum:Ft,pattern:xt};var At=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o)}t(i)},Tt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return t();P.required(e,r,a,i,o,"array"),r!=null&&(P.type(e,r,a,i,o),P.range(e,r,a,i,o))}t(i)},$t=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&P.type(e,r,a,i,o)}t(i)},Lt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r,"date")&&!e.required)return t();if(P.required(e,r,a,i,o),!U(r,"date")){var h;r instanceof Date?h=r:h=new Date(r),P.type(e,h,a,i,o),h&&P.range(e,h.getTime(),a,i,o)}}t(i)},kt="enum",jt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&P[kt](e,r,a,i,o)}t(i)},Wt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&(P.type(e,r,a,i,o),P.range(e,r,a,i,o))}t(i)},_t=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&(P.type(e,r,a,i,o),P.range(e,r,a,i,o))}t(i)},zt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&P.type(e,r,a,i,o)}t(i)},Vt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&(P.type(e,r,a,i,o),P.range(e,r,a,i,o))}t(i)},Bt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),r!==void 0&&P.type(e,r,a,i,o)}t(i)},Ht=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r,"string")&&!e.required)return t();P.required(e,r,a,i,o),U(r,"string")||P.pattern(e,r,a,i,o)}t(i)},Ut=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r)&&!e.required)return t();P.required(e,r,a,i,o),U(r)||P.type(e,r,a,i,o)}t(i)},Jt=function(e,r,t,a,o){var i=[],s=Array.isArray(r)?"array":De(r);P.required(e,r,a,i,o,s),t(i)},Qt=function(e,r,t,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(U(r,"string")&&!e.required)return t();P.required(e,r,a,i,o,"string"),U(r,"string")||(P.type(e,r,a,i,o),P.range(e,r,a,i,o),P.pattern(e,r,a,i,o),e.whitespace===!0&&P.whitespace(e,r,a,i,o))}t(i)},wn=function(e,r,t,a,o){var i=e.type,s=[],h=e.required||!e.required&&a.hasOwnProperty(e.field);if(h){if(U(r,i)&&!e.required)return t();P.required(e,r,a,s,o,i),U(r,i)||P.type(e,r,a,s,o)}t(s)};const xr={string:Qt,method:zt,number:Vt,boolean:$t,regexp:Ut,integer:_t,float:Wt,array:Tt,object:Bt,enum:jt,pattern:Ht,date:Lt,url:wn,hex:wn,email:wn,required:Jt,any:At};var Or=function(){function n(e){Un(this,n),We(this,"rules",null),We(this,"_messages",Sn),this.define(e)}return Jn(n,[{key:"define",value:function(r){var t=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(De(r)!=="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(a){var o=r[a];t.rules[a]=Array.isArray(o)?o:[o]})}},{key:"messages",value:function(r){return r&&(this._messages=Ln(Mn(),r)),this._messages}},{key:"validate",value:function(r){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},i=r,s=a,h=o;if(typeof s=="function"&&(h=s,s={}),!this.rules||Object.keys(this.rules).length===0)return h&&h(null,i),Promise.resolve(i);function y(u){var C=[],f={};function F(M){if(Array.isArray(M)){var d;C=(d=C).concat.apply(d,Ee(M))}else C.push(M)}for(var w=0;w<u.length;w++)F(u[w]);C.length?(f=Pn(C),h(C,f)):h(null,i)}if(s.messages){var g=this.messages();g===Sn&&(g=Mn()),Ln(g,s.messages),s.messages=g}else s.messages=this.messages();var v={},S=s.keys||Object.keys(this.rules);S.forEach(function(u){var C=t.rules[u],f=i[u];C.forEach(function(F){var w=F;typeof w.transform=="function"&&(i===r&&(i=$({},i)),f=i[u]=w.transform(f),f!=null&&(w.type=w.type||(Array.isArray(f)?"array":De(f)))),typeof w=="function"?w={validator:w}:w=$({},w),w.validator=t.getValidationMethod(w),w.validator&&(w.field=u,w.fullField=w.fullField||u,w.type=t.getType(w),v[u]=v[u]||[],v[u].push({rule:w,value:f,source:i,field:u}))})});var m={};return St(v,s,function(u,C){var f=u.rule,F=(f.type==="object"||f.type==="array")&&(De(f.fields)==="object"||De(f.defaultField)==="object");F=F&&(f.required||!f.required&&u.value),f.field=u.field;function w(D,J){return $($({},J),{},{fullField:"".concat(f.fullField,".").concat(D),fullFields:f.fullFields?[].concat(Ee(f.fullFields),[D]):[D]})}function M(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],J=Array.isArray(D)?D:[D];!s.suppressWarning&&J.length&&n.warning("async-validator:",J),J.length&&f.message!==void 0&&(J=[].concat(f.message));var z=J.map($n(f,i));if(s.first&&z.length)return m[f.field]=1,C(z);if(!F)C(z);else{if(f.required&&!u.value)return f.message!==void 0?z=[].concat(f.message).map($n(f,i)):s.error&&(z=[s.error(f,re(s.messages.required,f.field))]),C(z);var Q={};f.defaultField&&Object.keys(u.value).map(function(V){Q[V]=f.defaultField}),Q=$($({},Q),u.rule.fields);var K={};Object.keys(Q).forEach(function(V){var W=Q[V],fe=Array.isArray(W)?W:[W];K[V]=fe.map(w.bind(null,V))});var ne=new n(K);ne.messages(s.messages),u.rule.options&&(u.rule.options.messages=s.messages,u.rule.options.error=s.error),ne.validate(u.value,u.rule.options||s,function(V){var W=[];z&&z.length&&W.push.apply(W,Ee(z)),V&&V.length&&W.push.apply(W,Ee(V)),C(W.length?W:null)})}}var d;if(f.asyncValidator)d=f.asyncValidator(f,u.value,M,u.source,s);else if(f.validator){try{d=f.validator(f,u.value,M,u.source,s)}catch(D){var q,R;(q=(R=console).error)===null||q===void 0||q.call(R,D),s.suppressValidatorError||setTimeout(function(){throw D},0),M(D.message)}d===!0?M():d===!1?M(typeof f.message=="function"?f.message(f.fullField||f.field):f.message||"".concat(f.fullField||f.field," fails")):d instanceof Array?M(d):d instanceof Error&&M(d.message)}d&&d.then&&d.then(function(){return M()},function(D){return M(D)})},function(u){y(u)},i)}},{key:"getType",value:function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!xr.hasOwnProperty(r.type))throw new Error(re("Unknown rule type %s",r.type));return r.type||"string"}},{key:"getValidationMethod",value:function(r){if(typeof r.validator=="function")return r.validator;var t=Object.keys(r),a=t.indexOf("message");return a!==-1&&t.splice(a,1),t.length===1&&t[0]==="required"?xr.required:xr[this.getType(r)]||void 0}}]),n}();We(Or,"register",function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");xr[e]=r});We(Or,"warning",wt);We(Or,"messages",Sn);We(Or,"validators",xr);function It(n){var e=n.prefixCls,r=n.align,t=n.arrow,a=n.arrowPos,o=t||{},i=o.className,s=o.content,h=a.x,y=h===void 0?0:h,g=a.y,v=g===void 0?0:g,S=c.useRef();if(!r||!r.points)return null;var m={position:"absolute"};if(r.autoArrow!==!1){var u=r.points[0],C=r.points[1],f=u[0],F=u[1],w=C[0],M=C[1];f===w||!["t","b"].includes(f)?m.top=v:f==="t"?m.top=0:m.bottom=0,F===M||!["l","r"].includes(F)?m.left=y:F==="l"?m.left=0:m.right=0}return c.createElement("div",{ref:S,className:cr("".concat(e,"-arrow"),i),style:m},s)}function Zt(n){var e=n.prefixCls,r=n.open,t=n.zIndex,a=n.mask,o=n.motion;return a?c.createElement(Kn,Qn({},o,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(i){var s=i.className;return c.createElement("div",{style:{zIndex:t},className:cr("".concat(e,"-mask"),s)})}):null}var Gt=c.memo(function(n){var e=n.children;return e},function(n,e){return e.cache}),Kt=c.forwardRef(function(n,e){var r=n.popup,t=n.className,a=n.prefixCls,o=n.style,i=n.target,s=n.onVisibleChanged,h=n.open,y=n.keepDom,g=n.fresh,v=n.onClick,S=n.mask,m=n.arrow,u=n.arrowPos,C=n.align,f=n.motion,F=n.maskMotion,w=n.forceRender,M=n.getPopupContainer,d=n.autoDestroy,q=n.portal,R=n.zIndex,D=n.onMouseEnter,J=n.onMouseLeave,z=n.onPointerEnter,Q=n.ready,K=n.offsetX,ne=n.offsetY,V=n.offsetR,W=n.offsetB,fe=n.onAlign,B=n.onPrepare,I=n.stretch,x=n.targetWidth,te=n.targetHeight,N=typeof r=="function"?r():r,ge=h||y,ue=(M==null?void 0:M.length)>0,lr=c.useState(!M||!ue),Ye=T(lr,2),be=Ye[0],pe=Ye[1];if(ee(function(){!be&&ue&&i&&pe(!0)},[be,ue,i]),!be)return null;var ce="auto",Z={left:"-1000vw",top:"-1000vh",right:ce,bottom:ce};if(Q||!h){var ae,me=C.points,ye=C.dynamicInset||((ae=C._experimental)===null||ae===void 0?void 0:ae.dynamicInset),Xe=ye&&me[0][1]==="r",dr=ye&&me[0][0]==="b";Xe?(Z.right=V,Z.left=ce):(Z.left=K,Z.right=ce),dr?(Z.bottom=W,Z.top=ce):(Z.top=ne,Z.bottom=ce)}var G={};return I&&(I.includes("height")&&te?G.height=te:I.includes("minHeight")&&te&&(G.minHeight=te),I.includes("width")&&x?G.width=x:I.includes("minWidth")&&x&&(G.minWidth=x)),h||(G.pointerEvents="none"),c.createElement(q,{open:w||ge,getContainer:M&&function(){return M(i)},autoDestroy:d},c.createElement(Zt,{prefixCls:a,open:h,zIndex:R,mask:S,motion:F}),c.createElement(Gn,{onResize:fe,disabled:!h},function(er){return c.createElement(Kn,Qn({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:w,leavedClassName:"".concat(a,"-hidden")},f,{onAppearPrepare:B,onEnterPrepare:B,visible:h,onVisibleChanged:function(p){var Ce;f==null||(Ce=f.onVisibleChanged)===null||Ce===void 0||Ce.call(f,p),s(p)}}),function(Re,p){var Ce=Re.className,E=Re.style,_e=cr(a,Ce,t);return c.createElement("div",{ref:ot(er,e,p),className:_e,style:$($($($({"--arrow-x":"".concat(u.x||0,"px"),"--arrow-y":"".concat(u.y||0,"px")},Z),G),E),{},{boxSizing:"border-box",zIndex:R},o),onMouseEnter:D,onMouseLeave:J,onPointerEnter:z,onClick:v},m&&c.createElement(It,{prefixCls:a,arrow:m,arrowPos:u,align:C}),c.createElement(Gt,{cache:!h&&!g},N))})}))}),Ot=c.forwardRef(function(n,e){var r=n.children,t=n.getTriggerDOMNode,a=In(r),o=c.useCallback(function(s){st(e,t?t(s):s)},[t]),i=Zn(o,r.ref);return a?c.cloneElement(r,{ref:i}):r}),jn=c.createContext(null);function Wn(n){return n?Array.isArray(n)?n:[n]:[]}function Yt(n,e,r,t){return c.useMemo(function(){var a=Wn(r??e),o=Wn(t??e),i=new Set(a),s=new Set(o);return n&&(i.has("hover")&&(i.delete("hover"),i.add("click")),s.has("hover")&&(s.delete("hover"),s.add("click"))),[i,s]},[n,e,r,t])}function pt(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?n[0]===e[0]:n[0]===e[0]&&n[1]===e[1]}function Xt(n,e,r,t){for(var a=r.points,o=Object.keys(n),i=0;i<o.length;i+=1){var s,h=o[i];if(pt((s=n[h])===null||s===void 0?void 0:s.points,a,t))return"".concat(e,"-placement-").concat(h)}return""}function _n(n,e,r,t){return e||(r?{motionName:"".concat(n,"-").concat(r)}:t?{motionName:t}:null)}function Dr(n){return n.ownerDocument.defaultView}function qn(n){for(var e=[],r=n==null?void 0:n.parentElement,t=["hidden","scroll","clip","auto"];r;){var a=Dr(r).getComputedStyle(r),o=a.overflowX,i=a.overflowY,s=a.overflow;[o,i,s].some(function(h){return t.includes(h)})&&e.push(r),r=r.parentElement}return e}function Er(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(n)?e:n}function qr(n){return Er(parseFloat(n),0)}function zn(n,e){var r=$({},n);return(e||[]).forEach(function(t){if(!(t instanceof HTMLBodyElement||t instanceof HTMLHtmlElement)){var a=Dr(t).getComputedStyle(t),o=a.overflow,i=a.overflowClipMargin,s=a.borderTopWidth,h=a.borderBottomWidth,y=a.borderLeftWidth,g=a.borderRightWidth,v=t.getBoundingClientRect(),S=t.offsetHeight,m=t.clientHeight,u=t.offsetWidth,C=t.clientWidth,f=qr(s),F=qr(h),w=qr(y),M=qr(g),d=Er(Math.round(v.width/u*1e3)/1e3),q=Er(Math.round(v.height/S*1e3)/1e3),R=(u-C-w-M)*d,D=(S-m-f-F)*q,J=f*q,z=F*q,Q=w*d,K=M*d,ne=0,V=0;if(o==="clip"){var W=qr(i);ne=W*d,V=W*q}var fe=v.x+Q-ne,B=v.y+J-V,I=fe+v.width+2*ne-Q-K-R,x=B+v.height+2*V-J-z-D;r.left=Math.max(r.left,fe),r.top=Math.max(r.top,B),r.right=Math.min(r.right,I),r.bottom=Math.min(r.bottom,x)}}),r}function Vn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(e),t=r.match(/^(.*)\%$/);return t?n*(parseFloat(t[1])/100):parseFloat(r)}function Bn(n,e){var r=e||[],t=T(r,2),a=t[0],o=t[1];return[Vn(n.width,a),Vn(n.height,o)]}function Hn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[n[0],n[1]]}function ur(n,e){var r=e[0],t=e[1],a,o;return r==="t"?o=n.y:r==="b"?o=n.y+n.height:o=n.y+n.height/2,t==="l"?a=n.x:t==="r"?a=n.x+n.width:a=n.x+n.width/2,{x:a,y:o}}function je(n,e){var r={t:"b",b:"t",l:"r",r:"l"};return n.map(function(t,a){return a===e?r[t]||"c":t}).join("")}function ea(n,e,r,t,a,o,i){var s=c.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[t]||{}}),h=T(s,2),y=h[0],g=h[1],v=c.useRef(0),S=c.useMemo(function(){return e?qn(e):[]},[e]),m=c.useRef({}),u=function(){m.current={}};n||u();var C=Oe(function(){if(e&&r&&n){let se=function(xe,Ke){var or=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_e,sr=N.x+xe,Sr=N.y+Ke,Pr=sr+ae,Qr=Sr+Z,vn=Math.max(sr,or.left),hn=Math.max(Sr,or.top),gn=Math.min(Pr,or.right),mn=Math.min(Qr,or.bottom);return Math.max(0,(gn-vn)*(mn-hn))},Jr=function(){He=N.y+A,Ue=He+Z,Pe=N.x+L,Je=Pe+ae};var w,M,d=e,q=d.ownerDocument,R=Dr(d),D=R.getComputedStyle(d),J=D.width,z=D.height,Q=D.position,K=d.style.left,ne=d.style.top,V=d.style.right,W=d.style.bottom,fe=d.style.overflow,B=$($({},a[t]),o),I=q.createElement("div");(w=d.parentElement)===null||w===void 0||w.appendChild(I),I.style.left="".concat(d.offsetLeft,"px"),I.style.top="".concat(d.offsetTop,"px"),I.style.position=Q,I.style.height="".concat(d.offsetHeight,"px"),I.style.width="".concat(d.offsetWidth,"px"),d.style.left="0",d.style.top="0",d.style.right="auto",d.style.bottom="auto",d.style.overflow="hidden";var x;if(Array.isArray(r))x={x:r[0],y:r[1],width:0,height:0};else{var te=r.getBoundingClientRect();x={x:te.x,y:te.y,width:te.width,height:te.height}}var N=d.getBoundingClientRect(),ge=q.documentElement,ue=ge.clientWidth,lr=ge.clientHeight,Ye=ge.scrollWidth,be=ge.scrollHeight,pe=ge.scrollTop,ce=ge.scrollLeft,Z=N.height,ae=N.width,me=x.height,ye=x.width,Xe={left:0,top:0,right:ue,bottom:lr},dr={left:-ce,top:-pe,right:Ye-ce,bottom:be-pe},G=B.htmlRegion,er="visible",Re="visibleFirst";G!=="scroll"&&G!==Re&&(G=er);var p=G===Re,Ce=zn(dr,S),E=zn(Xe,S),_e=G===er?E:Ce,ie=p?E:_e;d.style.left="auto",d.style.top="auto",d.style.right="0",d.style.bottom="0";var Rr=d.getBoundingClientRect();d.style.left=K,d.style.top=ne,d.style.right=V,d.style.bottom=W,d.style.overflow=fe,(M=d.parentElement)===null||M===void 0||M.removeChild(I);var Ne=Er(Math.round(ae/parseFloat(J)*1e3)/1e3),Ae=Er(Math.round(Z/parseFloat(z)*1e3)/1e3);if(Ne===0||Ae===0||bn(r)&&!ft(r))return;var Nr=B.offset,O=B.targetOffset,Yr=Bn(N,Nr),vr=T(Yr,2),le=vr[0],de=vr[1],Ar=Bn(x,O),ve=T(Ar,2),pr=ve[0],Tr=ve[1];x.x-=pr,x.y-=Tr;var Xr=B.points||[],ze=T(Xr,2),oe=ze[0],Te=ze[1],Me=Hn(Te),X=Hn(oe),$r=ur(x,Me),Lr=ur(N,X),Se=$({},B),L=$r.x-Lr.x+le,A=$r.y-Lr.y+de,_=se(L,A),rr=se(L,A,E),$e=ur(x,["t","l"]),Ve=ur(N,["t","l"]),hr=ur(x,["b","r"]),gr=ur(N,["b","r"]),Be=B.overflow||{},he=Be.adjustX,en=Be.adjustY,mr=Be.shiftX,nr=Be.shiftY,yr=function(Ke){return typeof Ke=="boolean"?Ke:Ke>=0},He,Ue,Pe,Je;Jr();var kr=yr(en),wr=X[0]===Me[0];if(kr&&X[0]==="t"&&(Ue>ie.bottom||m.current.bt)){var Le=A;wr?Le-=Z-me:Le=$e.y-gr.y-de;var jr=se(L,Le),tr=se(L,Le,E);jr>_||jr===_&&(!p||tr>=rr)?(m.current.bt=!0,A=Le,de=-de,Se.points=[je(X,0),je(Me,0)]):m.current.bt=!1}if(kr&&X[0]==="b"&&(He<ie.top||m.current.tb)){var Qe=A;wr?Qe+=Z-me:Qe=hr.y-Ve.y-de;var Y=se(L,Qe),rn=se(L,Qe,E);Y>_||Y===_&&(!p||rn>=rr)?(m.current.tb=!0,A=Qe,de=-de,Se.points=[je(X,0),je(Me,0)]):m.current.tb=!1}var Wr=yr(he),_r=X[1]===Me[1];if(Wr&&X[1]==="l"&&(Je>ie.right||m.current.rl)){var Ie=L;_r?Ie-=ae-ye:Ie=$e.x-gr.x-le;var zr=se(Ie,A),nn=se(Ie,A,E);zr>_||zr===_&&(!p||nn>=rr)?(m.current.rl=!0,L=Ie,le=-le,Se.points=[je(X,1),je(Me,1)]):m.current.rl=!1}if(Wr&&X[1]==="r"&&(Pe<ie.left||m.current.lr)){var Ze=L;_r?Ze+=ae-ye:Ze=hr.x-Ve.x-le;var Vr=se(Ze,A),tn=se(Ze,A,E);Vr>_||Vr===_&&(!p||tn>=rr)?(m.current.lr=!0,L=Ze,le=-le,Se.points=[je(X,1),je(Me,1)]):m.current.lr=!1}Jr();var we=mr===!0?0:mr;typeof we=="number"&&(Pe<E.left&&(L-=Pe-E.left-le,x.x+ye<E.left+we&&(L+=x.x-E.left+ye-we)),Je>E.right&&(L-=Je-E.right-le,x.x>E.right-we&&(L+=x.x-E.right+we)));var qe=nr===!0?0:nr;typeof qe=="number"&&(He<E.top&&(A-=He-E.top-de,x.y+me<E.top+qe&&(A+=x.y-E.top+me-qe)),Ue>E.bottom&&(A-=Ue-E.bottom-de,x.y>E.bottom-qe&&(A+=x.y-E.bottom+qe)));var br=N.x+L,Br=br+ae,ke=N.y+A,Ge=ke+Z,Cr=x.x,ar=Cr+ye,Fe=x.y,an=Fe+me,on=Math.max(br,Cr),sn=Math.min(Br,ar),Hr=(on+sn)/2,fn=Hr-br,un=Math.max(ke,Fe),cn=Math.min(Ge,an),Ur=(un+cn)/2,ln=Ur-ke;i==null||i(e,Se);var Mr=Rr.right-N.x-(L+N.width),ir=Rr.bottom-N.y-(A+N.height);Ne===1&&(L=Math.round(L),Mr=Math.round(Mr)),Ae===1&&(A=Math.round(A),ir=Math.round(ir));var dn={ready:!0,offsetX:L/Ne,offsetY:A/Ae,offsetR:Mr/Ne,offsetB:ir/Ae,arrowX:fn/Ne,arrowY:ln/Ae,scaleX:Ne,scaleY:Ae,align:Se};g(dn)}}),f=function(){v.current+=1;var M=v.current;Promise.resolve().then(function(){v.current===M&&C()})},F=function(){g(function(M){return $($({},M),{},{ready:!1})})};return ee(F,[t]),ee(function(){n||F()},[n]),[y.ready,y.offsetX,y.offsetY,y.offsetR,y.offsetB,y.arrowX,y.arrowY,y.scaleX,y.scaleY,y.align,f]}function ra(n,e,r,t,a){ee(function(){if(n&&e&&r){let v=function(){t(),a()};var o=e,i=r,s=qn(o),h=qn(i),y=Dr(i),g=new Set([y].concat(Ee(s),Ee(h)));return g.forEach(function(S){S.addEventListener("scroll",v,{passive:!0})}),y.addEventListener("resize",v,{passive:!0}),t(),function(){g.forEach(function(S){S.removeEventListener("scroll",v),y.removeEventListener("resize",v)})}}},[n,e,r])}function na(n,e,r,t,a,o,i,s){var h=c.useRef(n);h.current=n,c.useEffect(function(){if(e&&t&&(!a||o)){var y=function(m){var u=m.target;h.current&&!i(u)&&s(!1)},g=Dr(t);g.addEventListener("mousedown",y,!0),g.addEventListener("contextmenu",y,!0);var v=Cn(r);return v&&(v.addEventListener("mousedown",y,!0),v.addEventListener("contextmenu",y,!0)),function(){g.removeEventListener("mousedown",y,!0),g.removeEventListener("contextmenu",y,!0),v&&(v.removeEventListener("mousedown",y,!0),v.removeEventListener("contextmenu",y,!0))}}},[e,r,t,a,o])}var ta=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function aa(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yn,e=c.forwardRef(function(r,t){var a=r.prefixCls,o=a===void 0?"rc-trigger-popup":a,i=r.children,s=r.action,h=s===void 0?"hover":s,y=r.showAction,g=r.hideAction,v=r.popupVisible,S=r.defaultPopupVisible,m=r.onPopupVisibleChange,u=r.afterPopupVisibleChange,C=r.mouseEnterDelay,f=r.mouseLeaveDelay,F=f===void 0?.1:f,w=r.focusDelay,M=r.blurDelay,d=r.mask,q=r.maskClosable,R=q===void 0?!0:q,D=r.getPopupContainer,J=r.forceRender,z=r.autoDestroy,Q=r.destroyPopupOnHide,K=r.popup,ne=r.popupClassName,V=r.popupStyle,W=r.popupPlacement,fe=r.builtinPlacements,B=fe===void 0?{}:fe,I=r.popupAlign,x=r.zIndex,te=r.stretch,N=r.getPopupClassNameFromAlign,ge=r.fresh,ue=r.alignPoint,lr=r.onPopupClick,Ye=r.onPopupAlign,be=r.arrow,pe=r.popupMotion,ce=r.maskMotion,Z=r.popupTransitionName,ae=r.popupAnimation,me=r.maskTransitionName,ye=r.maskAnimation,Xe=r.className,dr=r.getTriggerDOMNode,G=nt(r,ta),er=z||Q||!1,Re=c.useState(!1),p=T(Re,2),Ce=p[0],E=p[1];ee(function(){E(ut())},[]);var _e=c.useRef({}),ie=c.useContext(jn),Rr=c.useMemo(function(){return{registerSubPopup:function(b,k){_e.current[b]=k,ie==null||ie.registerSubPopup(b,k)}}},[ie]),Ne=ct(),Ae=c.useState(null),Nr=T(Ae,2),O=Nr[0],Yr=Nr[1],vr=c.useRef(null),le=Oe(function(l){vr.current=l,bn(l)&&O!==l&&Yr(l),ie==null||ie.registerSubPopup(Ne,l)}),de=c.useState(null),Ar=T(de,2),ve=Ar[0],pr=Ar[1],Tr=c.useRef(null),Xr=Oe(function(l){bn(l)&&ve!==l&&(pr(l),Tr.current=l)}),ze=c.Children.only(i),oe=(ze==null?void 0:ze.props)||{},Te={},Me=Oe(function(l){var b,k,H=ve;return(H==null?void 0:H.contains(l))||((b=Cn(H))===null||b===void 0?void 0:b.host)===l||l===H||(O==null?void 0:O.contains(l))||((k=Cn(O))===null||k===void 0?void 0:k.host)===l||l===O||Object.values(_e.current).some(function(j){return(j==null?void 0:j.contains(l))||l===j})}),X=_n(o,pe,ae,Z),$r=_n(o,ce,ye,me),Lr=c.useState(S||!1),Se=T(Lr,2),L=Se[0],A=Se[1],_=v??L,rr=Oe(function(l){v===void 0&&A(l)});ee(function(){A(v||!1)},[v]);var $e=c.useRef(_);$e.current=_;var Ve=c.useRef([]);Ve.current=[];var hr=Oe(function(l){var b;rr(l),((b=Ve.current[Ve.current.length-1])!==null&&b!==void 0?b:_)!==l&&(Ve.current.push(l),m==null||m(l))}),gr=c.useRef(),Be=function(){clearTimeout(gr.current)},he=function(b){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Be(),k===0?hr(b):gr.current=setTimeout(function(){hr(b)},k*1e3)};c.useEffect(function(){return Be},[]);var en=c.useState(!1),mr=T(en,2),nr=mr[0],yr=mr[1];ee(function(l){(!l||_)&&yr(!0)},[_]);var He=c.useState(null),Ue=T(He,2),Pe=Ue[0],Je=Ue[1],kr=c.useState([0,0]),wr=T(kr,2),Le=wr[0],jr=wr[1],tr=function(b){jr([b.clientX,b.clientY])},Qe=ea(_,O,ue?Le:ve,W,B,I,Ye),Y=T(Qe,11),rn=Y[0],Wr=Y[1],_r=Y[2],Ie=Y[3],zr=Y[4],nn=Y[5],Ze=Y[6],Vr=Y[7],tn=Y[8],we=Y[9],qe=Y[10],br=Yt(Ce,h,y,g),Br=T(br,2),ke=Br[0],Ge=Br[1],Cr=ke.has("click"),ar=Ge.has("click")||Ge.has("contextMenu"),Fe=Oe(function(){nr||qe()}),an=function(){$e.current&&ue&&ar&&he(!1)};ra(_,ve,O,Fe,an),ee(function(){Fe()},[Le,W]),ee(function(){_&&!(B!=null&&B[W])&&Fe()},[JSON.stringify(I)]);var on=c.useMemo(function(){var l=Xt(B,o,we,ue);return cr(l,N==null?void 0:N(we))},[we,N,B,o,ue]);c.useImperativeHandle(t,function(){return{nativeElement:Tr.current,popupElement:vr.current,forceAlign:Fe}});var sn=c.useState(0),Hr=T(sn,2),fn=Hr[0],un=Hr[1],cn=c.useState(0),Ur=T(cn,2),ln=Ur[0],Mr=Ur[1],ir=function(){if(te&&ve){var b=ve.getBoundingClientRect();un(b.width),Mr(b.height)}},dn=function(){ir(),Fe()},se=function(b){yr(!1),qe(),u==null||u(b)},Jr=function(){return new Promise(function(b){ir(),Je(function(){return b})})};ee(function(){Pe&&(qe(),Pe(),Je(null))},[Pe]);function xe(l,b,k,H){Te[l]=function(j){var Ir;H==null||H(j),he(b,k);for(var yn=arguments.length,Fn=new Array(yn>1?yn-1:0),Zr=1;Zr<yn;Zr++)Fn[Zr-1]=arguments[Zr];(Ir=oe[l])===null||Ir===void 0||Ir.call.apply(Ir,[oe,j].concat(Fn))}}(Cr||ar)&&(Te.onClick=function(l){var b;$e.current&&ar?he(!1):!$e.current&&Cr&&(tr(l),he(!0));for(var k=arguments.length,H=new Array(k>1?k-1:0),j=1;j<k;j++)H[j-1]=arguments[j];(b=oe.onClick)===null||b===void 0||b.call.apply(b,[oe,l].concat(H))}),na(_,ar,ve,O,d,R,Me,he);var Ke=ke.has("hover"),or=Ge.has("hover"),sr,Sr;Ke&&(xe("onMouseEnter",!0,C,function(l){tr(l)}),xe("onPointerEnter",!0,C,function(l){tr(l)}),sr=function(b){(_||nr)&&O!==null&&O!==void 0&&O.contains(b.target)&&he(!0,C)},ue&&(Te.onMouseMove=function(l){var b;(b=oe.onMouseMove)===null||b===void 0||b.call(oe,l)})),or&&(xe("onMouseLeave",!1,F),xe("onPointerLeave",!1,F),Sr=function(){he(!1,F)}),ke.has("focus")&&xe("onFocus",!0,w),Ge.has("focus")&&xe("onBlur",!1,M),ke.has("contextMenu")&&(Te.onContextMenu=function(l){var b;$e.current&&Ge.has("contextMenu")?he(!1):(tr(l),he(!0)),l.preventDefault();for(var k=arguments.length,H=new Array(k>1?k-1:0),j=1;j<k;j++)H[j-1]=arguments[j];(b=oe.onContextMenu)===null||b===void 0||b.call.apply(b,[oe,l].concat(H))}),Xe&&(Te.className=cr(oe.className,Xe));var Pr=$($({},oe),Te),Qr={},vn=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];vn.forEach(function(l){G[l]&&(Qr[l]=function(){for(var b,k=arguments.length,H=new Array(k),j=0;j<k;j++)H[j]=arguments[j];(b=Pr[l])===null||b===void 0||b.call.apply(b,[Pr].concat(H)),G[l].apply(G,H)})});var hn=c.cloneElement(ze,$($({},Pr),Qr)),gn={x:nn,y:Ze},mn=be?$({},be!==!0?be:{}):null;return c.createElement(c.Fragment,null,c.createElement(Gn,{disabled:!_,ref:Xr,onResize:dn},c.createElement(Ot,{getTriggerDOMNode:dr},hn)),c.createElement(jn.Provider,{value:Rr},c.createElement(Kt,{portal:n,ref:le,prefixCls:o,popup:K,className:cr(ne,on),style:V,target:ve,onMouseEnter:sr,onMouseLeave:Sr,onPointerEnter:sr,zIndex:x,open:_,keepDom:nr,fresh:ge,onClick:lr,mask:d,motion:X,maskMotion:$r,onVisibleChanged:se,onPrepare:Jr,forceRender:J,autoDestroy:er,getPopupContainer:D,align:we,arrow:mn,arrowPos:gn,ready:rn,offsetX:Wr,offsetY:_r,offsetR:Ie,offsetB:zr,onAlign:Fe,stretch:te,targetWidth:fn/Vr,targetHeight:ln/tn})))});return e}const da=aa(Yn);export{Or as S,da as T};
