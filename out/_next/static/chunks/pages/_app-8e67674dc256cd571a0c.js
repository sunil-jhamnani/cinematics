_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery;return r||o&&(void 0!==a&&a)}},0:function(t,e,r){r("GcxT"),t.exports=r("nOHt")},"1TCz":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),o=r.n(n),a=r("rePB"),i=r("HaE+"),u=r("1OyB"),c=r("vuIU"),s=r("Ji7U"),p=r("md7G"),f=r("foSv"),l=r("q1tI"),d=r.n(l),h=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),y=function(){return(y=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},v=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{c(n.next(t))}catch(e){a(e)}}function u(t){try{c(n.throw(t))}catch(e){a(e)}}function c(t){t.done?o(t.value):new r((function(e){e(t.value)})).then(i,u)}c((n=n.apply(t,e||[])).next())}))},b=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},g=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},m={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},w=r("/MKj"),O=r("8Kt/"),P=r.n(O),_=r("8Bbg"),j=r.n(_),S=r("ANjH"),x=r("ZQjy");function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M={languages:[],movies:{}},C=Object(S.b)({movieData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x.a:return k(k({},t),{},{languages:e.payload.languages});case x.b:return k(k({},t),{},{movies:e.payload.movies});case x.c:return k(k({},t),{},{movieId:e.payload.movieId});case x.d:return k(k({},t),{},{filter:e.payload.filter,type:e.payload.type});default:return t}}}),A=function(t){return Object(S.c)(C,t)},E=d.a.createElement;function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(p.a)(this,r)}}var T=function(t){Object(s.a)(r,t);var e=H(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var t=this.props,e=t.Component,r=t.pageProps,n=t.store;return E(_.Container,null,E(P.a,null,E("title",null,"BMS assignment App")),E(w.a,{store:n},E(e,r)))}}],[{key:"getInitialProps",value:function(){var t=Object(i.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.Component,n=e.ctx,t.t0=D,t.t1={},!r.getInitialProps){t.next=9;break}return t.next=6,r.getInitialProps(n);case 6:t.t2=t.sent,t.next=10;break;case 9:t.t2={};case 10:return t.t3=t.t2,t.t4=(0,t.t0)(t.t1,t.t3),t.abrupt("return",{pageProps:t.t4});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),r}(j.a);e.default=function(t,e){e=y({},m,e);var r="undefined"===typeof window,n=function(n){var o=n.initialState,a=n.ctx,i=e.storeKey,u=function(){return t(e.deserializeState(o),y({},a,e,{isServer:r}))};return r?u():(window.hasOwnProperty(i)||(window[i]=u()),window[i])};return function(t){var o;return(o=function(r){function o(t,o){var a=r.call(this,t,o)||this,i=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",i),a.store=n({initialState:i}),a}return h(o,r),o.prototype.render=function(){var e=this.props,r=e.initialProps,n=(e.initialState,g(e,["initialProps","initialState"]));return d.a.createElement(t,y({},n,r,{store:this.store}))},o}(l.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",o.getInitialProps=function(o){return v(void 0,void 0,void 0,(function(){var a,i;return b(this,(function(u){switch(u.label){case 0:if(!o)throw new Error("No app context");if(!o.ctx)throw new Error("No page context");return a=n({ctx:o.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),o.ctx.store=a,o.ctx.isServer=r,i={},"getInitialProps"in t?[4,t.getInitialProps.call(t,o)]:[3,2];case 1:i=u.sent(),u.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:r,initialState:e.serializeState(a.getState()),initialProps:i}]}}))}))},o}}(A)(T)},"5fIB":function(t,e,r){var n=r("7eYB");t.exports=function(t){if(Array.isArray(t))return n(t)}},"8Bbg":function(t,e,r){t.exports=r("B5Ud")},"8Kt/":function(t,e,r){"use strict";r("oI91");e.__esModule=!0,e.defaultHead=p,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),u=r("FYa8"),c=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function p(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(f,[]).reverse().concat(p(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var s=l[u];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var p=o.props[s],f=n[s]||new Set;f.has(p)?a=!1:(f.add(p),n[s]=f)}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function h(t){var e=t.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},e)}h.rewind=function(){};var y=h;e.default=y},B5Ud:function(t,e,r){"use strict";var n=r("vJKn"),o=r("/GRZ"),a=r("i2R6"),i=r("48fX"),u=r("tCBg"),c=r("T0f4"),s=r("qVT1");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}var f=r("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=b,e.default=void 0;var l=f(r("q1tI")),d=r("g/15");function h(t){return y.apply(this,arguments)}function y(){return(y=s(n.mark((function t(e){var r,o,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(r,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var v=function(t){i(r,t);var e=p(r);function r(){return o(this,r),e.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,r=t.Component,n=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return(l.default.createElement(r,Object.assign({},n,o||a?{}:{url:b(e)})))}}]),r}(l.default.Component);function b(t){var e=t.pathname,r=t.asPath,n=t.query;return{get query(){return n},get pathname(){return e},get asPath(){return r},back:function(){t.back()},push:function(e,r){return t.push(e,r)},pushTo:function(e,r){var n=r?e:"",o=r||e;return t.push(n,o)},replace:function(e,r){return t.replace(e,r)},replaceTo:function(e,r){var n=r?e:"",o=r||e;return t.replace(n,o)}}}e.default=v,v.origGetInitialProps=h,v.getInitialProps=h},GcxT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},Xuae:function(t,e,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),i=r("qXWd"),u=r("48fX"),c=r("tCBg"),s=r("T0f4");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}e.__esModule=!0,e.default=void 0;var f=r("q1tI"),l=!1,d=function(t){u(r,t);var e=p(r);function r(t){var a;return o(this,r),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,l&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);e.default=d},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),i=r("kG2m");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},oI91:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}}},[[0,1,2,0,3]]]);