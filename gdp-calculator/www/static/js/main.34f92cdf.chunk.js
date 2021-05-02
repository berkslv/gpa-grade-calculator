(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(19),r=n.n(a),i=(n(26),n(12)),l=n(8),o=n(2),d=n(0),m=function(){var e=Object(o.f)();return Object(d.jsx)("nav",{className:"flex fixed bg-green-200 w-full h-12 z-10",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"text-xl w-100 h-100 text-center px-3 flex justify-center items-center",children:Object(d.jsx)("button",{className:"font-bold text-green-900 ",onClick:function(){e.push("/ana-sayfa")},children:"GDP"})})})},j=function(){var e=Object(o.f)();return Object(d.jsx)("section",{className:"flex items-center justify-center text-dark h-screen bg-green-50",children:Object(d.jsx)("div",{className:"container px-5",children:Object(d.jsxs)("div",{className:"rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center",children:[Object(d.jsx)("p",{className:"md:text-xl sm:text-base",children:"\xdcniversite ortalama hesaplama"}),Object(d.jsx)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:Object(d.jsx)("button",{className:"button md:text-lg sm:text-base",onClick:function(){e.push("/universite")},children:"Ba\u015flayal\u0131m"})})]})})})},b=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(j,{})]})},u=function(){return Object(d.jsx)("section",{className:"flex bg-yellow-50 w-100 min-h-screen",children:Object(d.jsxs)("div",{className:"flex-box px-4 text-center m-auto",children:[Object(d.jsx)("p",{className:"text-4xl font-bold font-sans tracking-wider text-yellow-700",children:"404?"}),Object(d.jsx)("p",{className:"text-lg my-5",children:window.location.href}),Object(d.jsx)("p",{className:"text-lg my-5",children:"\xdczg\xfcn\xfcm, b\xf6yle bir sayfa yok. Ba\u015fka bir \u015feyler mi ar\u0131yordun?"}),Object(d.jsx)(l.b,{to:"/ana-sayfa",className:"rounded-md shadow-md hover:bg-yellow-300 bg-yellow-200 p-3",children:"Ana sayfaya d\xf6n"})]})})},x=n(4),h=[{key:"AA",grade:4},{key:"BA",grade:3.5},{key:"BB",grade:3},{key:"CB",grade:2.5},{key:"CC",grade:2},{key:"DC",grade:1.5},{key:"DD",grade:1},{key:"FD",grade:.5},{key:"FF",grade:0}],f=[{key:"A",grade:4},{key:"A-",grade:3.7},{key:"B+",grade:3.3},{key:"B",grade:3},{key:"B-",grade:2.7},{key:"C+",grade:2.3},{key:"C",grade:2},{key:"C-",grade:1.7},{key:"D+",grade:1.3},{key:"D",grade:1},{key:"F",grade:0}],O=n(21),g=function(e){var t=e.index,n=e.lessons,c=e.setLessons,a=e.grading,r=Object(s.useState)(""),i=Object(x.a)(r,2),l=i[0],o=i[1],m=Object(s.useState)(""),j=Object(x.a)(m,2),b=j[0],u=j[1];return Object(s.useEffect)((function(){var e=n.findIndex((function(e){return e.key===t}));if(e>-1)n[e].grading=parseFloat(l),n[e].credit=parseFloat(b);else if(l&&b){var s={key:t,grading:parseFloat(l),credit:parseFloat(b)};c([].concat(Object(O.a)(n),[s]))}}),[l,b]),Object(d.jsxs)("div",{className:"flex justify-center items-center my-5",children:[Object(d.jsx)("div",{className:"md:mx-4 md:my-1 sm:mx-2 sm:my-1 mx-1 my-1",children:Object(d.jsxs)("div",{className:"",children:[t+1,"."]})}),Object(d.jsx)("div",{className:"md:mx-4 md:my-1 sm:mx-2 sm:my-1 mx-1 my-1",children:Object(d.jsxs)("div",{className:"relative inline-block w-full text-gray-700 z-0",children:[Object(d.jsxs)("select",{className:"py-1 md:pr-12 md:pl-8 sm:pr-10 sm:pl-6 pr-6 pl-4 text-base border rounded-lg w-full appearance-none focus:shadow-outline",onChange:function(e){o(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Not"}),a.map((function(e,t){return Object(d.jsx)("option",{value:e.grade,children:e.key},t)}))]}),Object(d.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",children:Object(d.jsx)("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 20 20",children:Object(d.jsx)("path",{d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd",fillRule:"evenodd"})})})]})}),Object(d.jsx)("div",{className:"md:mx-4 md:my-1 sm:mx-2 sm:my-1 mx-1 my-1",children:Object(d.jsxs)("div",{className:"relative inline-block w-full text-gray-700 z-0",children:[Object(d.jsxs)("select",{className:"py-1 md:pr-12 md:pl-8 sm:pr-10 sm:pl-6 pr-6 pl-4 text-base border rounded-lg w-full appearance-none focus:shadow-outline",onChange:function(e){u(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Kredi"}),[.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30].map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))]}),Object(d.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",children:Object(d.jsx)("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 20 20",children:Object(d.jsx)("path",{d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd",fillRule:"evenodd"})})})]})})]})},v=function(e){var t=e.lessons,n=Object(o.f)(),c=Object(s.useState)(0),a=Object(x.a)(c,2),r=a[0],i=a[1],l=Object(s.useState)(0),m=Object(x.a)(l,2),j=m[0],b=m[1];Object(s.useEffect)((function(){u()}),[]);var u=function(){var e=0,n=0;console.log("lessons",t),t.forEach((function(t){e+=t.grading*t.credit,n+=t.credit})),b(n.toFixed(2)),i((e/n).toFixed(2))};return Object(d.jsxs)("div",{className:"rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center",children:[Object(d.jsx)("p",{className:"md:text-xl sm:text-base",children:"Sonu\xe7"}),Object(d.jsxs)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:[Object(d.jsxs)("div",{className:"md:text-xl sm:text-lg text-lg my-2",children:["Not ortalaman \xa0",Object(d.jsx)("span",{className:"font-bold",children:r})]}),Object(d.jsxs)("div",{className:"md:text-lg sm:text-base text-base my-2",children:["Toplam kredi \xa0",Object(d.jsx)("span",{className:"font-bold",children:j})]})]}),Object(d.jsx)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:Object(d.jsx)("button",{className:"button",onClick:function(){n.push("/ana-sayfa")},children:"Tekrar hesapla"})})]})},p=function(e){e.semester;var t=e.grading,n=e.count,c=Object(s.useState)(!1),a=Object(x.a)(c,2),r=a[0],i=a[1],l=Object(s.useState)([]),o=Object(x.a)(l,2),m=o[0],j=o[1];Object(s.useEffect)((function(){console.log("lessons",m)}),[m]);return Object(d.jsx)("div",{children:r?Object(d.jsx)(v,{lessons:m}):Object(d.jsxs)("div",{className:"rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center my-20",children:[Object(d.jsx)("p",{className:"md:text-xl sm:text-base",children:"Not ve kredi se\xe7imi"}),Object(d.jsx)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:Object(d.jsxs)("form",{onSubmit:function(e){i(!0)},children:[function(){for(var e=[],s=0;s<n;s++)e.push(s);return e.map((function(e,n){return Object(d.jsx)(g,{index:n,grading:t,lessons:m,setLessons:j},n)}))}(),Object(d.jsx)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:Object(d.jsx)("button",{type:"submit",className:"button",children:"Tamam"})})]})})]})})},y=function(e){var t=e.semester,n=e.grading,c=Object(s.useState)(1),a=Object(x.a)(c,2),r=a[0],i=a[1],l=Object(s.useState)(!1),o=Object(x.a)(l,2),m=o[0],j=o[1];return Object(d.jsx)("div",{children:m?Object(d.jsx)(p,{semester:t,grading:n,count:r}):Object(d.jsxs)("div",{className:"rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center",children:[Object(d.jsx)("p",{className:"md:text-xl sm:text-base",children:"Ders say\u0131s\u0131"}),Object(d.jsx)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(!0)},children:[Object(d.jsxs)("div",{className:"flex justify-center items-center",children:[Object(d.jsx)("div",{className:"m-1",children:Object(d.jsx)("button",{type:"button",className:"bg-yellow-200 text-yellow-900 hover:bg-yellow-300 duration-75 font-medium text-md rounded w-10 h-10",onClick:function(){r>1&&i(r-1)},children:Object(d.jsx)("span",{className:"text-lg",children:"-"})})}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("input",{className:"rounded border focus:outline-none focus:border-4 focus:border-blue-300 border-gray-400 w-full h-10 p-3",type:"number",required:!0,min:"1",value:r,onChange:function(e){var t;""===(t=e.target.value)?i(0):isNaN(t)?isNaN(t)&&i(0):i(parseInt(t))}})})}),Object(d.jsx)("div",{className:"m-1",children:Object(d.jsx)("button",{type:"button",className:"bg-blue-200 text-blue-900 hover:bg-blue-300 duration-75 font-medium text-md rounded w-10 h-10",onClick:function(){i(r+1)},children:Object(d.jsx)("span",{className:"text-lg",children:"+"})})})]}),Object(d.jsx)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:Object(d.jsx)("button",{className:"button",children:"Tamam"})})]})})]})})},N=function(){var e=Object(s.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(x.a)(a,2),i=r[0],l=r[1],o=function(){l(!0)};return Object(d.jsx)("div",{children:i?Object(d.jsx)(y,{grading:n}):Object(d.jsxs)("div",{className:"rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center",children:[Object(d.jsx)("p",{className:"md:text-xl sm:text-base",children:"Kredi \xe7e\u015fidi"}),Object(d.jsxs)("div",{className:"md:mt-14 sm:mt-10 mt-8",children:[Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)("button",{onClick:function(){c(h),o()},className:"button md:text-base sm:text-sm text-sm",children:"AA, BA, BB, CB, CC, DC, DD, FD, FF"})}),Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)("button",{onClick:function(){c(f),o()},className:"button md:text-base sm:text-sm text-sm",children:"A, A-, B+, B, B-, C+, C, C-, D+, D, F"})})]})]})})},w=[{path:["/","/ana-sayfa","/index.html"],component:b,exact:!0},{path:"/universite",component:function(e){var t=e.location;return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)("section",{className:"flex items-center justify-center text-dark min-h-screen bg-green-50",children:Object(d.jsx)("div",{className:"container px-5",children:Object(d.jsx)(N,{location:t})})})]})},exact:!1},{component:u,exact:!1}],k=function(e){return Object(d.jsx)(o.a,{path:e.path,exact:e.exact,render:function(t){return Object(d.jsx)(e.component,Object(i.a)(Object(i.a)({},t),{},{routes:e.routes}))}})};var C=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(o.c,{children:w.map((function(e,t){return Object(d.jsx)(k,Object(i.a)({},e),t)}))})})},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},D=function(){r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",D,!1):D(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}(),F()}},[[33,1,2]]]);
//# sourceMappingURL=main.34f92cdf.chunk.js.map