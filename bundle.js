var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function u(){return d(" ")}function h(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t){e.value=null==t?"":t}let p;function y(e){p=e}const m=[],g=[],b=[],w=[],x=Promise.resolve();let $=!1;function S(){$||($=!0,x.then(C))}function _(e){b.push(e)}let O=!1;const M=new Set;function C(){if(!O){O=!0;do{for(let e=0;e<m.length;e+=1){const t=m[e];y(t),T(t.$$)}for(y(null),m.length=0;g.length;)g.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];M.has(t)||(M.add(t),t())}b.length=0}while(m.length);for(;w.length;)w.pop()();$=!1,O=!1,M.clear()}}function T(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const L=new Set;function E(e,t){e&&e.i&&(L.delete(e),e.i(t))}function j(e,t){e.d(1),t.delete(e.key)}function q(e,t,n,r,s,o,l,c,i,a,d,u){let h=e.length,f=o.length,v=h;const k={};for(;v--;)k[e[v].key]=v;const p=[],y=new Map,m=new Map;for(v=f;v--;){const e=u(s,o,v),c=n(e);let i=l.get(c);i?r&&i.p(e,t):(i=a(c,e)).c(),y.set(c,p[v]=i),c in k&&m.set(c,Math.abs(v-k[c]))}const g=new Set,b=new Set;function w(e){E(e,1),e.m(c,d),l.set(e.key,e),d=e.first,f--}for(;h&&f;){const t=p[f-1],n=e[h-1],r=t.key,s=n.key;t===n?(d=t.first,h--,f--):y.has(s)?!l.has(r)||g.has(r)?w(t):b.has(s)?h--:m.get(r)>m.get(s)?(b.add(r),w(t)):(g.add(s),h--):(i(n,l),h--)}for(;h--;){const t=e[h];y.has(t.key)||i(t,l)}for(;f;)w(p[f-1]);return p}function F(o,l,c,a,d,u,h=[-1]){const f=p;y(o);const v=o.$$={fragment:null,ctx:null,props:u,update:e,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:l.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let k=!1;if(v.ctx=c?c(o,l.props||{},(e,t,...n)=>{const r=n.length?n[0]:t;return v.ctx&&d(v.ctx[e],v.ctx[e]=r)&&(!v.skip_bound&&v.bound[e]&&v.bound[e](r),k&&function(e,t){-1===e.$$.dirty[0]&&(m.push(e),S(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(o,e)),t}):[],v.update(),k=!0,r(v.before_update),v.fragment=!!a&&a(v.ctx),l.target){if(l.hydrate){const e=(g=l.target,Array.from(g.childNodes));v.fragment&&v.fragment.l(e),e.forEach(i)}else v.fragment&&v.fragment.c();l.intro&&E(o.$$.fragment),function(e,n,o,l){const{fragment:c,on_mount:i,on_destroy:a,after_update:d}=e.$$;c&&c.m(n,o),l||_(()=>{const n=i.map(t).filter(s);a?a.push(...n):r(n),e.$$.on_mount=[]}),d.forEach(_)}(o,l.target,l.anchor,l.customElement),C()}var g;y(f)}class U{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const A=["delhi","pune","mumbai","bangalore","thane","hyderabad","nagpur","lucknow","ahmedabad","chennai","kolkata","goa"];function I(e){return e?e[0].toUpperCase()+e.slice(1):e}const K={generated_links:"generated_links"},H={setItem:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}return t},getItem:(e,t)=>{try{const n=localStorage.getItem(e);return null==n?t:JSON.parse(n)}catch(e){}return t},removeItem:e=>{try{localStorage.removeItem(e)}catch(e){}}};function N(e,t,n){const r=e.slice();return r[20]=t[n],r}function P(e,t,n){const r=e.slice();return r[20]=t[n],r}function D(e,t,n){const r=e.slice();return r[25]=t[n],r[26]=t,r[27]=n,r}function G(e,t,n){const r=e.slice();return r[25]=t[n],r[28]=t,r[29]=n,r}function R(e,t){let n,r,s,o,k,p,y,m,g,b=I(t[25])+"";function w(){t[9].call(r,t[25])}return{key:e,first:null,c(){n=a("div"),r=a("input"),o=u(),k=a("label"),p=d(b),f(r,"type","checkbox"),f(r,"id",s=`alsoSearchFor-${t[25]}`),f(r,"class","svelte-1ro96t7"),f(k,"for",y=`alsoSearchFor-${t[25]}`),f(k,"class","svelte-1ro96t7"),f(n,"class","svelte-1ro96t7"),this.first=n},m(e,s){c(e,n,s),l(n,r),r.checked=t[2][t[25]].checked,l(n,o),l(n,k),l(k,p),m||(g=h(r,"change",w),m=!0)},p(e,n){t=e,4&n&&s!==(s=`alsoSearchFor-${t[25]}`)&&f(r,"id",s),4&n&&(r.checked=t[2][t[25]].checked),4&n&&b!==(b=I(t[25])+"")&&v(p,b),4&n&&y!==(y=`alsoSearchFor-${t[25]}`)&&f(k,"for",y)},d(e){e&&i(n),m=!1,g()}}}function B(e,t){let n,r,s,o,k,p,y,m,g,b,w,x=t[25]+"";function $(){t[11].call(r,t[25])}return{key:e,first:null,c(){n=a("div"),r=a("input"),o=u(),k=a("label"),p=d('"'),y=d(x),m=d('"'),f(r,"type","checkbox"),f(r,"id",s=`excludeKeywords-${t[25]}`),f(r,"class","svelte-1ro96t7"),f(k,"for",g=`excludeKeywords-${t[25]}`),f(k,"class","svelte-1ro96t7"),f(n,"class","svelte-1ro96t7"),this.first=n},m(e,s){c(e,n,s),l(n,r),r.checked=t[3][t[25]].checked,l(n,o),l(n,k),l(k,p),l(k,y),l(k,m),b||(w=h(r,"change",$),b=!0)},p(e,n){t=e,8&n&&s!==(s=`excludeKeywords-${t[25]}`)&&f(r,"id",s),8&n&&(r.checked=t[3][t[25]].checked),8&n&&x!==(x=t[25]+"")&&v(y,x),8&n&&g!==(g=`excludeKeywords-${t[25]}`)&&f(k,"for",g)},d(e){e&&i(n),b=!1,w()}}}function V(e){let t,n,r,s,o,l,d,v=[],k=new Map,p=e[4];const y=e=>e[20].href;for(let t=0;t<p.length;t+=1){let n=P(e,p,t),r=y(n);k.set(r,v[t]=z(r,n))}return{c(){(t=a("h2")).textContent="Your Generated Links",n=u(),r=a("ol");for(let e=0;e<v.length;e+=1)v[e].c();s=u(),(o=a("button")).textContent="Clear saved links",f(t,"class","svelte-1ro96t7"),f(r,"id","city-links"),f(r,"class","svelte-1ro96t7"),f(o,"class","svelte-1ro96t7")},m(i,a){c(i,t,a),c(i,n,a),c(i,r,a);for(let e=0;e<v.length;e+=1)v[e].m(r,null);c(i,s,a),c(i,o,a),l||(d=h(o,"click",e[7]),l=!0)},p(e,t){16&t&&(p=e[4],v=q(v,t,y,1,e,p,k,r,j,z,null,P))},d(e){e&&i(t),e&&i(n),e&&i(r);for(let e=0;e<v.length;e+=1)v[e].d();e&&i(s),e&&i(o),l=!1,d()}}}function z(e,t){let n,r,s,o,u=I(t[20].city)+"";return{key:e,first:null,c(){n=a("li"),r=a("a"),s=d(u),f(r,"href",o=t[20].href),f(r,"target","_blank"),f(r,"rel","noopener noreferrer"),f(r,"class","svelte-1ro96t7"),f(n,"class","svelte-1ro96t7"),this.first=n},m(e,t){c(e,n,t),l(n,r),l(r,s)},p(e,n){t=e,16&n&&u!==(u=I(t[20].city)+"")&&v(s,u),16&n&&o!==(o=t[20].href)&&f(r,"href",o)},d(e){e&&i(n)}}}function J(e,t){let n,r,s,o,u=I(t[20].city)+"";return{key:e,first:null,c(){n=a("li"),r=a("a"),s=d(u),f(r,"href",o=t[20].href),f(r,"target","_blank"),f(r,"rel","noopener noreferrer"),f(r,"class","svelte-1ro96t7"),f(n,"class","svelte-1ro96t7"),this.first=n},m(e,t){c(e,n,t),l(n,r),l(r,s)},p(e,n){t=e,32&n&&u!==(u=I(t[20].city)+"")&&v(s,u),32&n&&o!==(o=t[20].href)&&f(r,"href",o)},d(e){e&&i(n)}}}function Y(t){let n,s,o,v,p,y,m,g,b,w,x,$,S,_,O,M,C,T,L,E,F,U,A,I,K,H,P,z,Y,Q,W,X,Z,ee,te,ne,re,se,oe,le,ce,ie,ae,de,ue,he,fe,ve,ke,pe,ye,me,ge,be,we,xe,$e,Se,_e,Oe,Me,Ce,Te,Le,Ee,je,qe,Fe=[],Ue=new Map,Ae=[],Ie=new Map,Ke=[],He=new Map,Ne=Object.keys(t[2]);const Pe=e=>e[25];for(let e=0;e<Ne.length;e+=1){let n=G(t,Ne,e),r=Pe(n);Ue.set(r,Fe[e]=R(r,n))}let De=Object.keys(t[3]);const Ge=e=>e[25];for(let e=0;e<De.length;e+=1){let n=D(t,De,e),r=Ge(n);Ie.set(r,Ae[e]=B(r,n))}let Re=t[4].length>0&&V(t),Be=t[5];const Ve=e=>e[20].href;for(let e=0;e<Be.length;e+=1){let n=N(t,Be,e),r=Ve(n);He.set(r,Ke[e]=J(r,n))}return{c(){n=a("main"),(s=a("h1")).textContent="Twitter Search for COVID",o=u(),v=a("div"),p=a("div"),(y=a("div")).innerHTML='<h2 class="svelte-1ro96t7">Tips</h2> \n        <ol class="svelte-1ro96t7"><li class="svelte-1ro96t7"><strong class="svelte-1ro96t7">Do NOT make advanced payments unless you are 100% sure about their authenticity</strong></li> \n          <li class="svelte-1ro96t7">Check for replies under the tweets</li> \n          <li class="svelte-1ro96t7">Make sure search results are sorted by &quot;Latest&quot;\n            <br class="svelte-1ro96t7"/> \n            <img src="sort-click-here.jpg" alt="" class="svelte-1ro96t7"/></li></ol>',m=u(),(g=a("h2")).textContent="Search by city/cities",b=u(),w=a("form"),x=a("div"),($=a("label")).textContent="List of cities (comma-separated, e.g. indore, jamnagar)",S=u(),_=a("br"),O=u(),M=a("input"),C=u(),T=a("div"),L=d("Also search for:\n\n          ");for(let e=0;e<Fe.length;e+=1)Fe[e].c();E=u(),F=a("div"),(U=a("label")).textContent="Other:",A=u(),I=a("input"),K=u(),H=a("div"),P=d("Tweets should "),(z=a("strong")).textContent="NOT",Y=d(" have these words:\n\n          ");for(let e=0;e<Ae.length;e+=1)Ae[e].c();Q=u(),W=a("div"),(X=a("label")).textContent="Other:",Z=u(),ee=a("input"),te=u(),ne=a("div"),re=a("input"),se=u(),(oe=a("label")).textContent="Show Tweets near me",le=u(),ce=a("div"),ie=a("input"),ae=u(),(de=a("label")).innerHTML='Show verified tweets only\n            <br class="svelte-1ro96t7"/> \n            <strong class="svelte-1ro96t7">Uncheck this for smaller cities</strong> \n            <br class="svelte-1ro96t7"/>\n            (Tweet should contain &quot;verified&quot;)',ue=u(),he=a("div"),fe=a("input"),ve=u(),(ke=a("label")).innerHTML='Exclude unverified tweets\n            <br class="svelte-1ro96t7"/>\n            (Tweet should not contain &quot;not verified&quot; and &quot;unverified&quot;)',pe=u(),(ye=a("div")).innerHTML='<button class="svelte-1ro96t7">Generate Links</button>',me=u(),Re&&Re.c(),ge=u(),be=a("div"),(we=a("h2")).textContent="Quick Links",xe=u(),$e=a("ol");for(let e=0;e<Ke.length;e+=1)Ke[e].c();Se=u(),(_e=a("h3")).textContent="Scroll down to search for more cities and keywords",Oe=u(),(Me=a("div")).innerHTML='<h2 class="svelte-1ro96t7">Other Resources</h2> \n      <ul class="svelte-1ro96t7"><li class="svelte-1ro96t7"><a href="https://covidfacts.in/" target="_blank" rel="noopener noreferrer" class="svelte-1ro96t7">covidfacts.in</a></li></ul>',Ce=u(),(Te=a("div")).innerHTML='<h2 class="svelte-1ro96t7">[VOLUNTARY] Places you can Donate to</h2> \n      <ul class="svelte-1ro96t7"><li class="svelte-1ro96t7"><a href="https://hemkuntfoundation.com/donate-now/" target="_blank" rel="noopener noreferrer" class="svelte-1ro96t7">Hemkunt Foundation</a> has been helping out with Oxygen Cylinders. 80G donation receipts available.</li></ul>',Le=u(),(Ee=a("div")).innerHTML='<div class="svelte-1ro96t7"><a href="https://twitter.com/umanghome/status/1383759182495588355" target="_blank" rel="noopener noreferrer" class="svelte-1ro96t7">Got feedback?</a></div> \n    <div class="svelte-1ro96t7"><a href="https://github.com/umanghome/twitter-search-covid19" target="_blank" rel="noopener noreferrer" class="svelte-1ro96t7">Source code</a></div> \n    <div class="svelte-1ro96t7">Made by <a href="https://twitter.com/umanghome" target="_blank" rel="noopener noreferrer" class="svelte-1ro96t7">Umang</a> with ideas from a lot of folks on the Internet</div>',f(s,"class","svelte-1ro96t7"),f(y,"id","tips"),f(y,"class","svelte-1ro96t7"),f(g,"class","svelte-1ro96t7"),f($,"for","cities"),f($,"class","svelte-1ro96t7"),f(_,"class","svelte-1ro96t7"),f(M,"type","text"),f(M,"id","cities"),f(M,"class","svelte-1ro96t7"),f(x,"class","svelte-1ro96t7"),f(U,"for","alsoSearchFor-other"),f(U,"class","svelte-1ro96t7"),f(I,"type","text"),f(I,"id","alsoSearchFor-other"),f(I,"class","svelte-1ro96t7"),f(F,"class","svelte-1ro96t7"),f(T,"class","svelte-1ro96t7"),f(z,"class","svelte-1ro96t7"),f(X,"for","excludeKeywords-other"),f(X,"class","svelte-1ro96t7"),f(ee,"type","text"),f(ee,"id","excludeKeywords-other"),f(ee,"class","svelte-1ro96t7"),f(W,"class","svelte-1ro96t7"),f(H,"class","svelte-1ro96t7"),f(re,"type","checkbox"),f(re,"id","nearMe"),f(re,"class","svelte-1ro96t7"),f(oe,"for","nearMe"),f(oe,"class","svelte-1ro96t7"),f(ne,"class","svelte-1ro96t7"),f(ie,"type","checkbox"),f(ie,"id","verifiedOnly"),f(ie,"class","svelte-1ro96t7"),f(de,"for","verifiedOnly"),f(de,"class","svelte-1ro96t7"),f(ce,"class","svelte-1ro96t7"),f(fe,"type","checkbox"),f(fe,"id","excludeUnverified"),f(fe,"class","svelte-1ro96t7"),f(ke,"for","excludeUnverified"),f(ke,"class","svelte-1ro96t7"),f(he,"class","svelte-1ro96t7"),f(ye,"class","svelte-1ro96t7"),f(w,"class","svelte-1ro96t7"),f(p,"id","main-content"),f(p,"class","svelte-1ro96t7"),f(we,"class","svelte-1ro96t7"),f($e,"class","list-split-on-mobile svelte-1ro96t7"),f(_e,"class","only-mobile highlight-red svelte-1ro96t7"),f(be,"id","quick-links"),f(be,"class","svelte-1ro96t7"),f(Me,"id","other-resources"),f(Me,"class","svelte-1ro96t7"),f(Te,"id","donate"),f(Te,"class","svelte-1ro96t7"),f(v,"class","split svelte-1ro96t7"),f(Ee,"class","feedback svelte-1ro96t7"),f(n,"class","svelte-1ro96t7")},m(e,r){c(e,n,r),l(n,s),l(n,o),l(n,v),l(v,p),l(p,y),l(p,m),l(p,g),l(p,b),l(p,w),l(w,x),l(x,$),l(x,S),l(x,_),l(x,O),l(x,M),k(M,t[0].cities),l(w,C),l(w,T),l(T,L);for(let e=0;e<Fe.length;e+=1)Fe[e].m(T,null);l(T,E),l(T,F),l(F,U),l(F,A),l(F,I),k(I,t[0].otherAlsoSearchFor),l(w,K),l(w,H),l(H,P),l(H,z),l(H,Y);for(let e=0;e<Ae.length;e+=1)Ae[e].m(H,null);l(H,Q),l(H,W),l(W,X),l(W,Z),l(W,ee),k(ee,t[0].otherExcludedKeywords),l(w,te),l(w,ne),l(ne,re),re.checked=t[1].nearMe,l(ne,se),l(ne,oe),l(w,le),l(w,ce),l(ce,ie),ie.checked=t[1].verifiedOnly,l(ce,ae),l(ce,de),l(w,ue),l(w,he),l(he,fe),fe.checked=t[1].excludeUnverified,l(he,ve),l(he,ke),l(w,pe),l(w,ye),l(p,me),Re&&Re.m(p,null),l(v,ge),l(v,be),l(be,we),l(be,xe),l(be,$e);for(let e=0;e<Ke.length;e+=1)Ke[e].m($e,null);var i;l(be,Se),l(be,_e),l(v,Oe),l(v,Me),l(v,Ce),l(v,Te),l(n,Le),l(n,Ee),je||(qe=[h(M,"input",t[8]),h(I,"input",t[10]),h(ee,"input",t[12]),h(re,"change",t[13]),h(ie,"change",t[14]),h(fe,"change",t[15]),h(w,"submit",(i=t[6],function(e){return e.preventDefault(),i.call(this,e)}))],je=!0)},p(e,[t]){1&t&&M.value!==e[0].cities&&k(M,e[0].cities),4&t&&(Ne=Object.keys(e[2]),Fe=q(Fe,t,Pe,1,e,Ne,Ue,T,j,R,E,G)),1&t&&I.value!==e[0].otherAlsoSearchFor&&k(I,e[0].otherAlsoSearchFor),8&t&&(De=Object.keys(e[3]),Ae=q(Ae,t,Ge,1,e,De,Ie,H,j,B,Q,D)),1&t&&ee.value!==e[0].otherExcludedKeywords&&k(ee,e[0].otherExcludedKeywords),2&t&&(re.checked=e[1].nearMe),2&t&&(ie.checked=e[1].verifiedOnly),2&t&&(fe.checked=e[1].excludeUnverified),e[4].length>0?Re?Re.p(e,t):((Re=V(e)).c(),Re.m(p,null)):Re&&(Re.d(1),Re=null),32&t&&(Be=e[5],Ke=q(Ke,t,Ve,1,e,Be,He,$e,j,J,null,N))},i:e,o:e,d(e){e&&i(n);for(let e=0;e<Fe.length;e+=1)Fe[e].d();for(let e=0;e<Ae.length;e+=1)Ae[e].d();Re&&Re.d();for(let e=0;e<Ke.length;e+=1)Ke[e].d();je=!1,r(qe)}}}function Q(e,t,n){const r={cities:"",otherAlsoSearchFor:"",otherExcludedKeywords:""},s={nearMe:!1,verifiedOnly:!0,excludeUnverified:!0},o={beds:{keywords:["bed","beds"],checked:!0},ICU:{keywords:["icu"],checked:!0},oxygen:{keywords:["oxygen"],checked:!0},ventilator:{keywords:["ventilator","ventilators"],checked:!0},fabiflu:{keywords:["fabiflu"],checked:!0},remdesivir:{keywords:["remdesivir"],checked:!1},favipiravir:{keywords:["favipiravir"],checked:!1},tocilizumab:{keywords:["tocilizumab"],checked:!1},plasma:{keywords:["plasma"],checked:!1},tiffin:{keywords:["tiffin"],checked:!1}},l={needed:{keywords:["needed"],checked:!0},required:{keywords:["required"],checked:!0}};let c=H.getItem(K.generated_links,[]),i=[];function a(){const e=Object.keys(o).reduce((e,t)=>o[t].checked?e.concat(o[t].keywords):e,[]);return r.otherAlsoSearchFor&&e.push(r.otherAlsoSearchFor),e.length>0?`(${e.join(" OR ")})`:""}function d(){const e=Object.keys(l).reduce((e,t)=>l[t].checked?e.concat(l[t].keywords):e,[]);return r.otherExcludedKeywords&&e.push(r.otherExcludedKeywords),e.map(e=>`-"${e}"`).join(" ")}function u(e){const t=new URLSearchParams,n=[s.verifiedOnly&&"verified",e.trim(),a(),s.excludeUnverified&&'-"not verified"',s.excludeUnverified&&'-"unverified"',d()].filter(Boolean).join(" ");return t.set("q",n),t.set("f","live"),s.nearMe&&t.set("lf","on"),`https://twitter.com/search?${t.toString()}`}return e.$$.update=(()=>{7&e.$$.dirty&&n(5,i=A.map(e=>({city:e,href:u(e)})))}),[r,s,o,l,c,i,function(){if(!r.cities)return void alert("Please enter city name(s)");const e=r.cities.split(",").map(e=>e.trim()).filter(Boolean);n(4,c=e.map(e=>({city:e,href:u(e)}))),(S(),x).then(()=>{const e=document.querySelector("#city-links li");e&&(e.scrollIntoView(),e.focus(),alert("Please check the Links section")),H.setItem(K.generated_links,c)})},function(){n(4,c=[]),H.removeItem(K.generated_links)},function(){r.cities=this.value,n(0,r)},function(e){o[e].checked=this.checked,n(2,o)},function(){r.otherAlsoSearchFor=this.value,n(0,r)},function(e){l[e].checked=this.checked,n(3,l)},function(){r.otherExcludedKeywords=this.value,n(0,r)},function(){s.nearMe=this.checked,n(1,s)},function(){s.verifiedOnly=this.checked,n(1,s)},function(){s.excludeUnverified=this.checked,n(1,s)}]}return new class extends U{constructor(e){super(),F(this,e,Q,Y,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
