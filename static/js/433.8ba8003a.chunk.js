"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{2383:function(t,e,r){r.d(e,{ds:function(){return h},fh:function(){return v},kE:function(){return f},oU:function(){return o},z1:function(){return p}});var n=r(5861),a=r(4687),c=r.n(a),s=r(1243),i="0601e4a9420751bc295ed610d98ae8f9",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTUzNzI2ZjljNWNlYzJiN2Y2OTJjYWU4OTU5ZDU4YyIsInN1YiI6IjY0ZmM2Y2ZmZWZlYTdhMDExYWI2MmM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYiSEEFRJdB_Upus9JnQTZN7wyZg5kxTiQPVbc7tqyY";s.Z.defaults.params={api_key:i};var o=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:i,access_token:u}});case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i,access_token:u,query:e}});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat("https://api.themoviedb.org/3/movie/").concat(e),t.prev=1,t.next=4,s.Z.get(r,{params:{api_key:i,access_token:u}});case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),t.prev=1,t.next=4,s.Z.get(r,{params:{api_key:i,access_token:u}});case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,s.Z.get(r,{params:{api_key:i,access_token:u}});case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},433:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(5861),a=r(9439),c=r(4687),s=r.n(c),i=r(2791),u=r(4414),o=r(2383),p="Home_title__XLxL1",v=r(4254),h=r(184);function f(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.oU)();case 3:e=t.sent,c(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),r?(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:p,children:"Trending Today"}),(0,h.jsx)(v.Z,{data:r})]}):(0,h.jsx)(u.Z,{})}},4254:function(t,e,r){r.d(e,{Z:function(){return p}});r(2791);var n=r(1087),a=r(4563),c="MovieCard_movies__list__zyUH7",s="MovieCard_movie__card__E0Bcq",i="MovieCard_movie__name__3YpRL",u="MovieCard_movie__image__pbjvn",o=r(184);function p(t){var e=t.data;return(0,o.jsx)("ul",{className:c,children:e.map((function(t){return(0,o.jsx)("li",{className:s,children:(0,o.jsxs)(n.rU,{to:"/movies/".concat(t.id),children:[(0,o.jsx)("img",{src:t.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path):a,alt:t.title,width:"400px",className:u}),(0,o.jsxs)("p",{className:i,children:[t.name," ",t.title]})]})},t.id)}))})}},4563:function(t,e,r){t.exports=r.p+"static/media/movie.c1a10aece069091eb9a6.png"}}]);
//# sourceMappingURL=433.8ba8003a.chunk.js.map