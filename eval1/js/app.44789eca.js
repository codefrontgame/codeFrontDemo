(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],l=0,h=[];l<o.length;l++)i=o[l],s[i]&&h.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},s={app:0},a=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-514a6566":"f755af34"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-514a6566":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-514a6566":"5ac6350b"}[e]+".css",s=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){u=h[o],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete i[e],f.parentNode.removeChild(f),n(a)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){i[e]=0}));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e),u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}s[e]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"App"},o=a,c=(n("5c0b"),n("2877")),u=Object(c["a"])(o,i,s,!1,null,null,null),l=u.exports,h=n("2f62"),f=(n("7f7f"),n("28a5"),n("d225")),v=n("b0b4"),d=n("308d"),p=n("6bb5"),b=n("4e2b"),m=n("013f"),y=n("bd86"),g=n("cebc"),w=n("a4bb"),x=n.n(w),j=(n("55dd"),function(){function e(t,n,r,i){Object(f["a"])(this,e),this.x1=t<n?t:n,this.x2=t<n?n:t,this.y1=r<i?r:i,this.y2=r<i?i:r}return Object(v["a"])(e,[{key:"collidesWith",value:function(e){var t=this.constructor.linesCollide(this.x1,this.x2,e.x1,e.x2),n=this.constructor.linesCollide(this.y1,this.y2,e.y1,e.y2);return t&&n}}],[{key:"linesCollide",value:function(e,t,n,r){return e<=r&&n<=t}}]),e}()),O=function(){function e(t,n){Object(f["a"])(this,e),Object(y["a"])(this,"x",0),Object(y["a"])(this,"y",0),Object(y["a"])(this,"size",80),Object(y["a"])(this,"isAttacker",!1),this.x=t,this.y=n}return Object(v["a"])(e,[{key:"update",value:function(e){var t=e.ticks,n=e.board,r=e.level,i=e.obstacles,s=this.constructor.userFunctions(r);for(var a in s)if(s.hasOwnProperty(a)){var o=s[a],c=o.execute({me:this,board:n,entities:null,obstacles:i});o.actuate({me:this,board:n,ticks:t,result:c,obstacles:i})}}},{key:"move",value:function(e,t,n,r){this.x+=e,this.y+=t;var i=this.hitBoxes(),s=n.some(function(e){return e.hitBoxes().some(function(e){return i.some(function(t){return t.collidesWith(e)})})});(this.x<0||this.x>r.xTiles||this.y<0||this.y>r.yTiles)&&(s=!0),s&&(this.x-=e,this.y-=t)}},{key:"willCollide",value:function(e){var t=this,n=.1;return e.some(function(e){return e.hitBoxes().some(function(e){return t.hitBoxes().some(function(t){var r=new j(e.x1-n,e.x2+n,e.y1-n,e.y2+n);return r.collidesWith(t)})})})}}],[{key:"userFunctions",value:function(e){var t={},n=x()(this.userFunctionsMap).sort();for(var r in n)if(this.userFunctionsMap.hasOwnProperty(r)){if(r>e)break;t=Object(g["a"])({},t,this.userFunctionsMap[r])}return t}}]),e}(),k=O,T=n("f2dc"),C=n.n(T),F=n("f499"),z=n.n(F);function S(e,t){return"let "+e+" = "+z()(t)+";\n"}function P(e,t,n){return"let "+e+" = function ("+t.join(", ")+") {\n"+n+"\n};\n"}function _(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e+"("+n.join(", ")+");\n"}function E(e,t,n,r){var i=t.end-t.start,s=r/t.yTiles,a=t.start+s*i,o=e.height-e.height*a,c=t.closeHCover+(t.farHCover-t.closeHCover)*s,u=t.xTiles/2,l=n-u,h=l*c+u,f=h*(e.width/t.xTiles);return{x:f,y:o,perspective:c}}function A(e){var t=e.me,n=e.board,r=e.ticks,i=e.result,s=e.obstacles,a=1*r,o=0,c=0;switch(i){case"rotate":t.x<=0&&t.y>=n.yTiles?o=a:t.x<=0?c=a:t.y>=n.yTiles&&t.x>=n.xTiles?c=-a:t.y>=n.yTiles?o=a:t.y<=0&&t.x>=n.xTiles?o=-a:t.x>=n.xTiles?c=-a:t.y<=0&&(o=-a);break;case"north":c=a;break;case"west":o=-a;break;case"south":c=-a;break;case"east":o=a;break}t.move(o,c,s,n)}var B=A,M=function(e){function t(){var e,n;Object(f["a"])(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=Object(d["a"])(this,(e=Object(p["a"])(t)).call.apply(e,[this].concat(i))),Object(y["a"])(Object(m["a"])(Object(m["a"])(n)),"shadowSize",.27),Object(y["a"])(Object(m["a"])(Object(m["a"])(n)),"isAttacker",!0),n}return Object(b["a"])(t,e),Object(v["a"])(t,[{key:"hitBoxes",value:function(){return[new j(this.x-.2,this.x+.2,this.y-.1,this.y+.1)]}},{key:"draw",value:function(e){var t=e.sketch,n=e.assets,r=e.board,i=n["zombie"],s=E(t,r,this.x,this.y),a=this.size*s.perspective/i.width,o=1-this.shadowSize;t.image(i,s.x-i.width*a/2,s.y-i.height*a*o,i.width*a,i.height*a)}}]),t}(k);Object(y["a"])(M,"image","assets/zombie.png"),Object(y["a"])(M,"userFunctionsMap",{0:{move:{cn:"Gå",name:"move",description:"Få zombien att röra sig ända till slutet av fältet. För att säga åt zombien vilket håll den ska röra sig åt skriver man till exempel return response.north. istället för north kan man skriva east, west eller south",parameters:[],error:null,userCode:"\t  return response.north;",actuate:B,execute:function(e){e.me,e.entities,e.board;var t=S("response",{north:"north",south:"south",west:"west",east:"east",stop:"stop",rotate:"rotate"}),n=t.split("\n").length-1;t+=P(this.name,this.parameters,this.userCode),t+=_(this.name);try{var r=C.a.eval(t);return null==r?"stop":(this.error=null,r)}catch(i){throw i.lineNumber-=n,this.error=i,i}}}},1:{move:{cn:"Gå",name:"move",description:"Få zombien att röra sig ända till slutet av fältet. För att säga åt zombien vilket håll den ska röra sig åt skriver man till exempel return response.north. istället för north kan man skriva east, west eller south",parameters:["willCollide"],error:null,userCode:"\tif (willCollide) {\n\t\treturn response.north;\n\t} else {\n\t\treturn response.north;\n\t}",actuate:B,execute:function(e){var t=e.me,n=(e.entities,e.board,e.obstacles),r=S("response",{north:"north",south:"south",west:"west",east:"east",stop:"stop",rotate:"rotate"}),i=t.willCollide(n),s=r.split("\n").length-1;r+=P(this.name,this.parameters,this.userCode),r+=_(this.name,i);try{var a=C.a.eval(r);return null==a?"stop":(this.error=null,a)}catch(o){throw o.lineNumber-=s,this.error=o,o}}}}});var W=M,N=function e(t,n,r,i,s){Object(f["a"])(this,e),this.id=t,this.hints=n,this.helpTexts=r,this.entities=i,this.obstacles=s},G=new N(0,{move:["The first hint","The second hint"]},["Välkommen till codeFront ...",""],[new W(5,0)],[]),L=function(){function e(t,n,r,i){Object(f["a"])(this,e),Object(y["a"])(this,"x",0),Object(y["a"])(this,"y",0),Object(y["a"])(this,"size",80),Object(y["a"])(this,"width",1),Object(y["a"])(this,"depth",1),this.x=t,this.y=n,this.width=r,this.depth=i}return Object(v["a"])(e,[{key:"hitBoxes",value:function(){return[new j(this.x-this.width/2,this.x+this.width/2,this.y-this.depth/2,this.y+this.depth/2)]}}]),e}(),U=L,H=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(v["a"])(t,[{key:"draw",value:function(e){var t=e.sketch,n=e.assets,r=e.board,i=n["rock"],s=E(t,r,this.x,this.y),a=this.size*s.perspective/i.width;t.image(i,s.x-this.size*s.perspective/2,s.y-i.height*a,i.width*a,i.height*a)}}]),t}(U);Object(y["a"])(H,"image","assets/rock.svg");var $=H,q=new N(1,{move:["The first hint","The second hint"]},["Välkommen till codeFront ...",""],[new W(5,0)],[new $(5,5,1,1)]),D=[G,q],J=n("061b"),R=n.n(J),V=n("4d16"),I=n.n(V),K=n("7618");function Q(e){var t;if(null==e||"object"!==Object(K["a"])(e))return e;if(e instanceof Date)return t=new Date,t.setTime(e.getTime()),t;if(e instanceof Array){t=[];for(var n=0,r=e.length;n<r;n++)t[n]=Q(e[n]);return t}if(e instanceof Object){for(var i in t={},I()(t,R()(e)),e)e.hasOwnProperty(i)&&(t[i]=Q(e[i]));return t}throw new Error("Unable to copy obj! Its type isn't supported.")}var X=Q;r["a"].use(h["a"]);var Y=new h["a"].Store({state:{running:!1,entities:X(D[0].entities),levels:D,level:0,characters:{zombie:W}},getters:{getRunStatus:function(e){return e.running},getUserCode:function(e){return function(t,n){return e.characters[t].userFunctions(e.level)[n]}},getEntities:function(e){return e.entities},getUserFunctions:function(e){return function(t){return e.characters[t].userFunctions(e.level)}},getCharacters:function(e){return e.characters},getObstacles:function(e){return e.levels[e.level].obstacles},getLevel:function(e){return e.level}},mutations:{setUserCode:function(e,t){var n=t.character,i=t.f,s=t.code;r["a"].set(e.characters[n].userFunctions(e.level)[i],"userCode",s)},incLevel:function(e){r["a"].set(e,"running",!1),r["a"].set(e,"level",e.level+1),r["a"].set(e,"entities",X(e.levels[e.level].entities))},setRunStatus:function(e,t){t||r["a"].set(e,"entities",X(e.levels[e.level].entities)),r["a"].set(e,"running",t)}},actions:{}}),Z=n("8c4f"),ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[e._v("\n  Welcome!\n  "),n("router-link",{attrs:{to:"Game"}},[e._v("Start Game!")])],1)},te=[],ne={name:"Welcome"},re=ne,ie=Object(c["a"])(re,ee,te,!1,null,"c3b7006c",null),se=ie.exports,ae=function(){return n.e("chunk-514a6566").then(n.bind(null,"7d36"))};r["a"].use(Z["a"]);var oe=new Z["a"]({routes:[{path:"/welcome",name:"Welcome",component:se},{path:"/game",name:"Game",component:ae},{path:"/",redirect:{name:"Welcome"}}]});r["a"].router=oe;var ce=oe;r["a"].config.productionTip=!1,new r["a"]({store:Y,router:ce,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.44789eca.js.map