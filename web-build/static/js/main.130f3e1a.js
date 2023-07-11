(()=>{var e={1600:(e,t,n)=>{"use strict";n.r(t);var a=n(2125),r=n(3147),l=n(2566),o=n(6381),i=n(17),c=n(8352),s=n.n(c);const d="GET_USERS_FETCH",u="GET_USERS_SUCCESS";n(3901),n(9415);const m=l.default.div`
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
color:black;
display:flex;
align-items:center;
justify-content:center;
transform:scale(1);

`,p=l.default.div`
padding: 20px;
border-radius:12px;
background-color:white;
heigth: 200px;
width:500px;
`,f=l.default.div`
margin-bottom: 15px;
margin-top:15px;
`,b=l.default.div`
display:flex;
align-items:center;
justify-content:flex-end;
`,v=({active:e,setActive:t,addTask:n,updateData:r})=>{const[l,o]=(0,a.useState)(),c=(0,i.useDispatch)(),s=e=>{e.preventDefault(),c((e=>(t,n)=>{const{Todo:{todos:a}}=n();a.find((t=>t.todo===e))||""===e||t({type:"ADD_TODO",payload:[{id:e,todo:e},...a]})})(l)),t(!1)};return a.createElement(m,{style:{transform:e?"scale(1)":"scale(0)"}},a.createElement(p,null,a.createElement(f,null,a.createElement("form",{onSubmit:s},a.createElement("h1",null,"\u0424\u043e\u0440\u043c\u0430"),a.createElement("input",{type:"text",className:"form-control mb-30",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","aria-label":"Username","aria-describedby":"basic-addon1",onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"===e.key&&s(e)}}))),a.createElement(b,null,a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:s},"\u041e\u043a"),a.createElement("button",{type:"button",class:"btn btn-light",onClick:()=>t(!1)},"\u041e\u0442\u043c\u0435\u043d\u0430"))))};v.propTypes={handleSubmit:s().func,setActive:s().func,onClick:s().func};const h=v,g=l.default.div`
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
color:black;
display:flex;
align-items:center;
justify-content:center;
transform:scale(1);

`,y=l.default.div`
padding: 20px;
border-radius:12px;
background-color:white;
heigth: 200px;
width:500px;
`,E=l.default.div`
display:flex;
align-items:center;
justify-content:flex-end;
`,k=({todo:e,t:t,active:n,setActive:r,removeHandler:l})=>(console.log(t),a.createElement(g,{style:{transform:n?"scale(1)":"scale(0)"}},a.createElement(y,null,a.createElement("h3",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c?"),a.createElement(E,null,a.createElement("button",{type:"button",class:"btn btn-primary",onClick:()=>{l(t),r(!1)}},"\u0414\u0430"),a.createElement("button",{type:"button",class:"btn btn-light",onClick:()=>r(!1)},"\u041d\u0435\u0442")))));k.propTypes={};const w=k,x=l.default.li`
    display:flex;
    margin-bottom:25px;
    justify-content:space-between;
    `,T=l.default.div`
    padding-left:50px
    `,S=({products:e,todos:t,active:n,setActive:r,onDeleted:l,handleToggle:o,removeTask:c,setDeletionActive:s,removeHandler:d})=>{const u=(0,i.useSelector)((e=>e.Todo.todos)),[m,p]=(0,a.useState)(),f=u.map((e=>a.createElement(a.Fragment,null,a.createElement(x,{key:e.id,onClick:()=>p(e)},a.createElement("span",null,e.todo),a.createElement(T,{key:e.id},a.createElement("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>s(!0)},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))));return a.createElement(a.Fragment,null,a.createElement("ul",null,f),a.createElement(w,{t:m,removeHandler:d,active:n,setActive:r}))};var O=n(4817),C=n(4972);const D=l.default.div`
width:100%;
min-height: 100vh;
padding: 100px 200px;
// background: black;
color:black;
`,j=l.default.div`
display:flex;
width:100%
padding-left:0;
align-items:center;
margin-top:20px;
margin-bottom:20px;
`;async function A(){const{data:e}=await(0,O.default)({url:"https://graphqlzero.almansi.me/api",method:"post",data:{query:"{\n        user(id: 1) {\n          id\n          name\n          username\n          email\n        }\n      }"}});return e}const P=function(){const[e,t]=(0,a.useState)(!0),[n,r]=(0,a.useState)(!1),l=(0,i.useDispatch)(),c=(0,i.useSelector)((e=>e.Todo.todos));console.log(c);const s=(0,i.useSelector)((e=>e.Data.users.data));console.log(s);const[u,m]=(0,a.useState)([{label:"\u0417\u0430\u043f\u0438\u0441\u044c 1",id:1},{label:"\u0417\u0430\u043f\u0438\u0441\u044c 2",id:2},{label:"\u0414\u0430\u043d\u043d\u044b\u0435 3",id:3},{label:"\u0414\u0430\u043d\u043d\u044b\u0435 4",id:4}]),{data:p,isLoading:f,isError:b}=(0,C.useQuery)("coins",A);if(console.log(p),f)return a.createElement("h3",null,"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430");if(b)return a.createElement("h3",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445");if(!p)return a.createElement("h3",null,"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445");const v=e=>{if(e){const t={id:Math.random().toString(36).substr(2,9),label:e};m([...u,t])}};return a.createElement(D,null,a.createElement("div",{className:"container pt-3"},a.createElement("div",{className:"row"},a.createElement("h1",null,"Test Work"),a.createElement("h2",null,"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445"),a.createElement("div",{className:"col"})),a.createElement("div",{className:"row"},a.createElement("button",{type:"button",className:"btn btn-light",onClick:()=>(t(!0),l({type:d}))},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),a.createElement(j,null,a.createElement(S,{addTask:v,todos:c,onDeleted:e=>{console.log("Deleted id",e),m((t=>{const n=t.findIndex((t=>t.id===e));return[...t.slice(0,n),...t.slice(n+1)]}))},setDeletionActive:r,removeHandler:e=>{var t;l((t=e,(e,n)=>{const{Todo:{todos:a}}=n();e({type:"REMOVE_TODO",payload:a.filter((e=>e.id!==t.id))})}))},active:n,setActive:r})),a.createElement(o.SnackbarProvider,null),a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>{(0,o.enqueueSnackbar)(`\u0418\u043c\u044f: ${p.data.user.name} / Username: ${p.data.user.username} / Email: ${p.data.user.email}`)}},"\u0422\u0435\u0441\u0442 GraphQL")),a.createElement(h,{active:e,setActive:t,addTask:v,todos:u})))},_=e=>{e&&e instanceof Function&&n.e(775).then(n.bind(n,1775)).then((({getCLS:t,getFID:n,getFCP:a,getLCP:r,getTTFB:l})=>{t(e),n(e),a(e),r(e),l(e)}))};var N=n(3711),F=n(6679),M=n(6793),q=n(7143);var H=n(7478);function L(){return fetch("https://graphqlzero.almansi.me/api",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"{\n            user(id: 1) {\n              id\n              name\n              username\n              email\n            }\n          }"})}).then((e=>e.json()))}function*R(){const e=yield(0,H.call)(L);yield(0,H.put)({type:u,users:e})}const U=function*(){yield(0,H.takeEvery)(d,R)},G=(0,M.default)(),Q=(0,N.combineReducers)({Data:(e={users:[]},t)=>t.type===u?{...e,users:t.users}:e,Todo:(e={todos:[]},t)=>{switch(t.type){case"ADD_TODO":case"REMOVE_TODO":return{todos:t.payload};case"FETCH_POSTS":return{...e,fetchedPosts:t.payload};default:return e}}}),z=[q.default],B=(0,N.createStore)(Q,{},(0,F.composeWithDevTools)((0,N.applyMiddleware)(...z),(0,N.applyMiddleware)(G)));G.run(U);const I=B,$=l.createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`,V=new C.QueryClient;r.createRoot(document.getElementById("root")).render(a.createElement(i.Provider,{store:I},a.createElement($,null),a.createElement(C.QueryClientProvider,{client:V},a.createElement(P,null)))),_()},4654:()=>{}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var l=t[a]={id:a,loaded:!1,exports:{}};return e[a](l,l.exports,n),l.loaded=!0,l.exports}n.m=e,(()=>{var e=[];n.O=(t,a,r,l)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,r,l]=e[d],i=!0,c=0;c<a.length;c++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,r,l]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[])),n.u=e=>"static/js/"+e+".25d1b917.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="web:";n.l=(a,r,l,o)=>{if(e[a])e[a].push(r);else{var i,c;if(void 0!==l)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+l){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+l),i.src=a),e[a]=[r];var m=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={179:0};n.f.j=(t,a)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var l=new Promise(((n,a)=>r=e[t]=[n,a]));a.push(r[2]=l);var o=n.p+n.u(t),i=new Error;n.l(o,(a=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var l=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+o+")",i.name="ChunkLoadError",i.type=l,i.request=o,r[1](i)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[o,i,c]=a,s=0;if(o.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var d=c(n)}for(t&&t(a);s<o.length;s++)l=o[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},a=self.webpackChunkweb=self.webpackChunkweb||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.nc=void 0;var a=n.O(void 0,[687],(()=>n(1600)));a=n.O(a)})();
//# sourceMappingURL=main.130f3e1a.js.map