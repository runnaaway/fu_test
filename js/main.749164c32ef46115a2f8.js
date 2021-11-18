(self.webpackChunk=self.webpackChunk||[]).push([[179],{296:function(n,e,t){"use strict";t(958)},672:function(n,e,t){t(115);n.exports=function(n){var e="";return e+='\n<header class="form__head">\n  <h1 class="form__head-title">Donations</h1>\n  <div class="form__head-filter">\n    <div class="form__head-filter__search">\n      <input type="search" placeholder="Search" name="search" autocomplete="off">\n    </div>\n    <div class="form__head-filter__status">\n      <select name="donations_status">\n        <option value="All statuses">All statuses</option>\n        <option value="Success">Success</option>\n        <option value="Pending">Pending</option>\n        <option value="Error">Error</option>\n      </select>\n    </div>\n  </div>\n</header>'}},991:function(n,e,t){var a=t(115);n.exports=function(n){var e,t="",s=n||{};return function(n){t+='<a class="menu-toggle" href="#">Settings menu\n  <ul class="menu">',function(){var s=[["amount","Change Amount"],["payment","Change Payment Method"],["date","Change Date"],["cancel","Cancel Recurring"]];if("number"==typeof s.length)for(var i=0,o=s.length;i<o;i++){var r=s[i];t=t+'\n    <li class="menu__entry"><a class="menu__lnk" href="#"><img'+a.attr("src",n+"icon_"+r[0]+".svg",!0,!0)+' alt="">'+a.escape(null==(e=r[1])?"":e)+"</a></li>"}else{o=0;for(var i in s){o++;r=s[i];t=t+'\n    <li class="menu__entry"><a class="menu__lnk" href="#"><img'+a.attr("src",n+"icon_"+r[0]+".svg",!0,!0)+' alt="">'+a.escape(null==(e=r[1])?"":e)+"</a></li>"}}}.call(this),t+="\n  </ul></a>"}.call(this,"assetsImgPath"in s?s.assetsImgPath:"undefined"!=typeof assetsImgPath?assetsImgPath:void 0),t}},377:function(n,e,t){t(115);n.exports=function(n){var e="";return e+='\n<section class="settings__btn-container">\n  <button class="btn btn_green" type="submit">Save changes</button>\n  <button class="btn btn_white" type="reset">Cancel</button>\n</section>'}},850:function(n,e,t){var a=t(115);n.exports=function(n){var e,t="";return t+='\n<nav class="settings__tabs">\n  <ul class="tabs__list">',function(){var n=[["Behavior","tab-behavior"],["Appearance","tab-appearance"],["Custom Fields","tab-custom-fields"],["Questions","tab-questions"],["URL Control","tab-url-control"]];if("number"==typeof n.length)for(var s=0,i=n.length;s<i;s++){var o=n[s];t=t+"\n    <li"+a.attr("class",a.classes(["tabs__entry",{"tabs__entry--current":!s}],[!1,!0]),!1,!0)+'><a class="tabs__lnk" href="#"'+a.attr("data-tab",o[1],!0,!0)+">"+a.escape(null==(e=o[0])?"":e)+"</a></li>"}else{i=0;for(var s in n){i++;o=n[s];t=t+"\n    <li"+a.attr("class",a.classes(["tabs__entry",{"tabs__entry--current":!s}],[!1,!0]),!1,!0)+'><a class="tabs__lnk" href="#"'+a.attr("data-tab",o[1],!0,!0)+">"+a.escape(null==(e=o[0])?"":e)+"</a></li>"}}}.call(this),t+="\n  </ul>\n</nav>"}},495:function(n,e,t){t(115);n.exports=function(n){var e="";return e+='\n<section class="settings__tabs-container">\n  <article class="settings__tabs-entry" id="tab-behavior">\n    <label class="form-control">\n      <div class="form__caption form__caption--center">Designation</div>\n      <div class="form__field">\n        <div class="form-select">\n          <select name="designation">\n            <option value="Match Checkout Setting">Match Checkout Setting</option>\n            <option value="Other option">Other option</option>\n            <option value="And one more">And one more</option>\n          </select>\n        </div>\n      </div>\n    </label>\n    <div class="form-control">\n      <div class="form__caption form__caption--center">Goal</div>\n      <div class="form__field form__field--goal"><i class="form-currency-val">$</i>\n        <input class="form-input" type="text" value="10.00">\n        <div class="form-select form-select--currency">\n          <select name="currency">\n            <option value="$">$</option>\n            <option value="€">€</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class="form-control">\n      <div class="form__caption">Default Amount</div>\n      <div class="form__field form__field--column">\n        <label class="radio">\n          <input class="radio__input" type="radio" name="default_amount" value="Match Checkout Setting"><span class="radio__title">Match Checkout Setting</span>\n        </label>\n        <label class="radio">\n          <input class="radio__input" type="radio" name="default_amount" value="Customize" checked><span class="radio__title">Customize</span>\n        </label>\n        <label class="checkbox checkbox--allow-change">\n          <input class="checkbox__input" type="checkbox" name="allow_change" value="1" checked><span class="checkbox__title">Allow donor to change default currency</span>\n        </label>\n      </div>\n    </div>\n    <div class="form-control">\n      <div class="form__caption">Border size</div>\n      <div class="form__field">\n        <input type="range" min="0" max="5" value="2" name="border_size"><span class="form-range-val"><i></i>px</span>\n      </div>\n    </div>\n    <div class="form-control">\n      <div class="form__caption">Border radius</div>\n      <div class="form__field">\n        <input type="range" min="0" max="30" value="15" name="border_radius"><span class="form-range-val"><i></i>px</span>\n      </div>\n    </div>\n  </article>\n  <article class="settings__tabs-entry" id="tab-appearance">\n    <p>Appearance content goes here</p>\n  </article>\n  <article class="settings__tabs-entry" id="tab-custom-fields">\n    <p>Custom fields content goes here</p>\n  </article>\n  <article class="settings__tabs-entry" id="tab-questions">\n    <p>Questions content goes here</p>\n  </article>\n  <article class="settings__tabs-entry" id="tab-url-control">\n    <p>URL control content goes here</p>\n  </article>\n</section>'}},958:function(n,e,t){var a=t(115);n.exports=function(n){var e,s="",i=n||{};return function(i){s=s+'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Fundraiseup test</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <meta http-equiv="x-ua-compatible" content="ie=edge">\n    <meta name="format-detection" content="telephone=no">\n    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">\n    <link rel="apple-touch-icon" sizes="57x57"'+a.attr("href",i+"favicon/apple-icon-57x57.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="60x60"'+a.attr("href",i+"favicon/apple-icon-60x60.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="72x72"'+a.attr("href",i+"favicon/apple-icon-72x72.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="76x76"'+a.attr("href",i+"favicon/apple-icon-76x76.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="114x114"'+a.attr("href",i+"favicon/apple-icon-114x114.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="120x120"'+a.attr("href",i+"favicon/apple-icon-120x120.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="144x144"'+a.attr("href",i+"favicon/apple-icon-144x144.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="152x152"'+a.attr("href",i+"favicon/apple-icon-152x152.png",!0,!0)+'>\n    <link rel="apple-touch-icon" sizes="180x180"'+a.attr("href",i+"favicon/apple-icon-180x180.png",!0,!0)+'>\n    <link rel="icon" type="image/png" sizes="192x192"'+a.attr("href",i+"favicon/android-icon-192x192.png",!0,!0)+'>\n    <link rel="icon" type="image/png" sizes="32x32"'+a.attr("href",i+"favicon/favicon-32x32.png",!0,!0)+'>\n    <link rel="icon" type="image/png" sizes="96x96"'+a.attr("href",i+"favicon/favicon-96x96.png",!0,!0)+'>\n    <link rel="icon" type="image/png" sizes="16x16"'+a.attr("href",i+"favicon/favicon-16x16.png",!0,!0)+'>\n  </head>\n  <body>\n    <section class="form">\n      <div class="block">'+(null==(e=t(672).call(this,n))?"":e)+'\n        <div class="colgroup">\n          <section class="col col--body col--left">\n            <section class="settings">'+(null==(e=t(850).call(this,n))?"":e)+(null==(e=t(495).call(this,n))?"":e)+(null==(e=t(377).call(this,n))?"":e)+'\n            </section>\n          </section>\n          <aside class="col col--aside col--right">'+(null==(e=t(991).call(this,n))?"":e)+"\n          </aside>\n        </div>\n      </div>\n    </section>\n  </body>\n</html>"}.call(this,"assetsImgPath"in i?i.assetsImgPath:"undefined"!=typeof assetsImgPath?assetsImgPath:void 0),s}},115:function(n,e,t){"use strict";var a=Object.prototype.hasOwnProperty;function s(n,e){return Array.isArray(n)?function(n,e){for(var t,a="",i="",o=Array.isArray(e),r=0;r<n.length;r++)(t=s(n[r]))&&(o&&e[r]&&(t=l(t)),a=a+i+t,i=" ");return a}(n,e):n&&"object"==typeof n?function(n){var e="",t="";for(var s in n)s&&n[s]&&a.call(n,s)&&(e=e+t+s,t=" ");return e}(n):n||""}function i(n){if(!n)return"";if("object"==typeof n){var e="";for(var t in n)a.call(n,t)&&(e=e+t+":"+n[t]+";");return e}return n+""}function o(n,e,t,a){if(!1===e||null==e||!e&&("class"===n||"style"===n))return"";if(!0===e)return" "+(a?n:n+'="'+n+'"');var s=typeof e;return"object"!==s&&"function"!==s||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),t||-1===e.indexOf('"'))?(t&&(e=l(e))," "+n+'="'+e+'"'):" "+n+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function n(e,t){if(1===arguments.length){for(var a=e[0],s=1;s<e.length;s++)a=n(a,e[s]);return a}for(var o in t)if("class"===o){var r=e[o]||[];e[o]=(Array.isArray(r)?r:[r]).concat(t[o]||[])}else if("style"===o){r=(r=i(e[o]))&&";"!==r[r.length-1]?r+";":r;var l=i(t[o]);l=l&&";"!==l[l.length-1]?l+";":l,e[o]=r+l}else e[o]=t[o];return e},e.classes=s,e.style=i,e.attr=o,e.attrs=function(n,e){var t="";for(var r in n)if(a.call(n,r)){var l=n[r];if("class"===r){l=s(l),t=o(r,l,!1,e)+t;continue}"style"===r&&(l=i(l)),t+=o(r,l,!1,e)}return t};var r=/["&<>]/;function l(n){var e=""+n,t=r.exec(e);if(!t)return n;var a,s,i,o="";for(a=t.index,s=0;a<e.length;a++){switch(e.charCodeAt(a)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}s!==a&&(o+=e.substring(s,a)),s=a+1,o+=i}return s!==a?o+e.substring(s,a):o}e.escape=l,e.rethrow=function n(e,a,s,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&a||i))throw e.message+=" on line "+s,e;var o,r,l,c;try{i=i||t(469).readFileSync(a,{encoding:"utf8"}),o=3,r=i.split("\n"),l=Math.max(s-o,0),c=Math.min(r.length,s+o)}catch(t){return e.message+=" - could not read from "+a+" ("+t.message+")",void n(e,null,s)}o=r.slice(l,c).map((function(n,e){var t=e+l+1;return(t==s?"  > ":"    ")+t+"| "+n})).join("\n"),e.path=a;try{e.message=(a||"Pug")+":"+s+"\n"+o+"\n\n"+e.message}catch(n){}throw e}},469:function(){}},function(n){var e;e=296,n(n.s=e)}]);