import{t as m,a as f}from"../chunks/Cbr0yrfi.js";import"../chunks/B9T89hQT.js";import{m as B,y as q,z as J,q as K,p as M,v as c,x as p,t as g,s as P,w as l}from"../chunks/CV-ZMOzn.js";import{e as U,s as w}from"../chunks/CnNl4DzL.js";import{p as $,i as j}from"../chunks/yd3Sk3RU.js";import{i as D}from"../chunks/Bas6XGJx.js";import{g as F}from"../chunks/_Au4qaCo.js";/* empty css                */function G(e,t,s,r){var a=e.__attributes??(e.__attributes={});if(B){a[t]=e.getAttribute(t);return}a[t]!==(a[t]=s)&&(s==null?e.removeAttribute(t):typeof s!="string"&&H(e).includes(t)?e[t]=s:e.setAttribute(t,s))}var x=new Map;function H(e){var t=x.get(e.nodeName);if(t)return t;x.set(e.nodeName,t=[]);for(var s,r=e,a=Element.prototype;a!==r;){s=J(r);for(var n in s)s[n].set&&t.push(n);r=q(r)}return t}var L=m('<img height="300" alt="ogres 29. vienības logo" class="svelte-1b2cltn">'),O=m("<p> </p>"),Q=m('<div class="side svelte-1b2cltn"><p></p> <p></p></div> <div class="container svelte-1b2cltn"><p><strong>Uzdevums:</strong> </p> <!> <div class="answer svelte-1b2cltn"><label for="answer">Juusu atbilde</label> <input id="answer" type="text" class="svelte-1b2cltn"></div> <p id="feedback" class="svelte-1b2cltn"></p> <button class="svelte-1b2cltn">Pārbaudīt atbildi</button></div>',1);function tt(e,t){K(t,!1);let s=$(t,"data",8),{team:r,task:a,cipher:n,answer:k}=s();function y(){const o=document.getElementById("answer").value,i=document.getElementById("feedback");o===k?a>=5?F("/congrats"):(console.log("test"),window.location.href=`/games/${r}/${a+1}`):i.textContent="Nepareizi, megini velreiz"}D();var _=Q(),v=M(_),u=c(v);u.textContent=`Komanda: ${r??""}`;var z=p(u,2);z.textContent=`${a??""} / 5`,l(v);var b=p(v,2),d=c(b),A=p(c(d));l(d);var h=p(d,2);{var C=o=>{var i=L();g(()=>G(i,"src",n.content)),f(o,i)},E=o=>{var i=O(),N=c(i,!0);l(i),g(()=>w(N,n.content)),f(o,i)};j(h,o=>{n.isImage?o(C):o(E,!1)})}var I=p(h,6);l(b),g(()=>w(A,` ${n.description??""}`)),U("click",I,y),f(e,_),P()}export{tt as component};
