(self.webpackChunk=self.webpackChunk||[]).push([[826],{885:function(){window.onload=function(){var e=function(){try{return!!!!document.documentMode||navigator.userAgent.indexOf("MSIE")>0}catch(t){var e=t.toString();console.log(e)}};e()?document.querySelector("body").classList.add("is-ie"):console.log(123);var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};if(window.innerWidth<840){var n=document.querySelector(".menu-toggle");n.addEventListener("click",(function(e){e.preventDefault(),n.classList.toggle("menu-toggle--opened"),document.querySelector(".menu").classList.toggle("menu--visible")}))}function r(){if(window.innerWidth>840&&!t.any()){var e=document.querySelector(".menu"),n=e.offsetTop;window.addEventListener("scroll",(function(t){window.pageYOffset>=n+30?e.classList.add("fixed"):e.classList.remove("fixed")}))}}r(),window.addEventListener("resize",r);var o,i=document.querySelector(".donation__id-copy"),a=document.querySelector(".donation__id-copy-tooltip"),c=document.querySelector(".donation__id-val").textContent;function d(e){e.nextSibling.firstChild.textContent=e.value}if(i.addEventListener("click",(function(e){var t;e.preventDefault(),this.classList.add("copied"),t=c,void 0!==navigator.clipboard?navigator.clipboard.writeText(t):window.clipboardData&&window.clipboardData.setData("Text",t),a.textContent="Copied!"})),i.addEventListener("mouseout",(function(){var e=this;setTimeout((function(){e.classList.remove("copied"),a.textContent="Copy to clipboard"}),1e3)})),!e){var u=document.querySelector("[name=border_size]"),l=document.querySelector("[name=border_radius]");d(u),d(l),u.addEventListener("input",(function(){return d(u)})),l.addEventListener("input",(function(){return d(l)}))}document.querySelector("select[name=currency]").addEventListener("change",(function(){document.querySelector(".form-currency-val").textContent=this.value})),o=function(e){e.preventDefault(),function(){for(var e=document.querySelectorAll("[data-tab]"),t=0;t<e.length;t++){e[t].parentNode.classList.remove("tabs__entry--current");var n=e[t].getAttribute("data-tab");document.getElementById(n).style.display="none"}}(),e.target.parentNode.classList.add("tabs__entry--current");var t=e.currentTarget.getAttribute("data-tab");document.getElementById(t).style.display="block"},function(){for(var e=document.querySelectorAll("[data-tab]"),t=0;t<e.length;t++)e[t].addEventListener("click",o,!1)}()}}},function(e){var t;t=885,e(e.s=t)}]);