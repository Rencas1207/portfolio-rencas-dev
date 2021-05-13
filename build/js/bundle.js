document.addEventListener("DOMContentLoaded",e=>{maquinaDeEscribir(),scrollTopButton(".scroll-top-btn")});const sr=ScrollReveal();sr.reveal(".show",{delay:500,easing:"ease-out"}),sr.reveal(".animate-left",{origin:"left",distance:"300px",easing:"ease-out",delay:200}),sr.reveal(".animate-right",{origin:"right",distance:"300px",easing:"ease-out",delay:200}),sr.reveal(".animate-top",{origin:"bottom",distance:"80px",delay:500});const $hamburger=document.querySelector(".hamburger"),$navegacion=document.querySelector(".navegacion-principal");function maquinaDeEscribir(){const e=document.querySelector(".text-title-1"),t=document.querySelector(".text-title-2"),n=document.querySelector(".text-title-3");((o,a,i)=>{e.innerHTML="",t.innerHTML="",n.innerHTML="";let s=o.split(""),r=a.split(""),l=i.split(""),c=0;setTimeout(()=>{let o=setInterval(()=>{if(e.innerHTML+=s[c],c++,c===s.length){clearInterval(o),c=0;let e=setInterval(()=>{if(t.innerHTML+=r[c],c++,c===r.length){clearInterval(e),c=0;let t=setInterval(()=>{n.innerHTML+=l[c],c++,c===l.length&&clearInterval(t)},80)}},80)}},80)},800)})(e.textContent,t.textContent,n.textContent)}function scrollTopButton(e){const t=document.querySelector(e);window.addEventListener("scroll",e=>{(window.pageYOffset||document.documentElement.scrollTop)>600?t.classList.remove("hidden"):t.classList.add("hidden")}),document.addEventListener("click",t=>{t.target.matches(e)&&window.scrollTo({behavior:"smooth",top:0})})}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/$hamburger.addEventListener("click",e=>{$hamburger.classList.toggle("is-active"),$navegacion.classList.toggle("is-active")}),document.addEventListener("click",e=>{if(!e.target.matches(".navegacion-principal a"))return!1;$hamburger.classList.remove("is-active"),$navegacion.classList.remove("is-active")}),window.addEventListener("scroll",(function(){document.querySelector("header").classList.toggle("sticky",window.scrollY>0)})),(e=>{const t=e.querySelector(".formulario"),n=e.querySelector(".contact-form-loader"),o=e.querySelector(".contact-form-responsive");t.addEventListener("submit",e=>{e.preventDefault(),n.classList.remove("none"),fetch("https://formsubmit.co/ajax/rencasdag.12@gmail.com",{method:"POST",body:new FormData(e.target)}).then(e=>e.ok?e.json():Promise.reject(e)).then(e=>{console.log(e),n.classList.add("none"),location.hash="#gracias",t.reset()}).catch(e=>{console.log(e);let t=e.statusText||"Ocurrió un error al enviar, intenta nuevamente";o.querySelector("h3").innerHTML=`Error ${e.status}:${t}`,n.classList.add("none")}).finally(()=>{n.classList.add("none"),setTimeout(()=>{location.hash="#close"},5e3)})})})(document),function(e,t,n){function o(e){var t=u.className,n=c._config.classPrefix||"";if(d&&(t=t.baseVal),c._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}c._config.enableClasses&&(t+=" "+n+e.join(" "+n),d?u.className.baseVal=t:u.className=t)}function a(e,t){return typeof e===t}function i(e,t){if("object"==typeof e)for(var n in e)A(e,n)&&i(n,e[n]);else{var a=(e=e.toLowerCase()).split("."),s=c[a[0]];if(2==a.length&&(s=s[a[1]]),void 0!==s)return c;t="function"==typeof t?t():t,1==a.length?c[a[0]]=t:(!c[a[0]]||c[a[0]]instanceof Boolean||(c[a[0]]=new Boolean(c[a[0]])),c[a[0]][a[1]]=t),o([(t&&0!=t?"":"no-")+a.join("-")]),c._trigger(e,t)}return c}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var A,u=t.documentElement,d="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;A=a(e,"undefined")||a(e.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),l._l={},l.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),c.hasOwnProperty(e)&&setTimeout((function(){c._trigger(e,c[e])}),0)},l._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},c._q.push((function(){l.addTest=i})),c.addAsyncTest((function(){function e(e,t,n){function o(t){var o=!(!t||"load"!==t.type)&&1==a.width;i(e,"webp"===e&&o?new Boolean(o):o),n&&n(t)}var a=new Image;a.onerror=o,a.onload=o,a.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<t.length;o++)e(t[o].name,t[o].uri)}))})),function(){var e,t,n,o,i,l;for(var A in r)if(r.hasOwnProperty(A)){if(e=[],(t=r[A]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(l=e[i].split(".")).length?c[l[0]]=o:(!c[l[0]]||c[l[0]]instanceof Boolean||(c[l[0]]=new Boolean(c[l[0]])),c[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}(),o(s),delete l.addTest,delete l.addAsyncTest;for(var f=0;f<c._q.length;f++)c._q[f]();e.Modernizr=c}(window,document);
//# sourceMappingURL=bundle.js.map