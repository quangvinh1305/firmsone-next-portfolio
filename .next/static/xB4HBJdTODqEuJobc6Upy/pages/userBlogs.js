(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{29:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(1),u=n.n(a),c=n(10),i=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.a=function(e){return function(t){return function(n){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),h(this,b(r).apply(this,arguments))}var a,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,u.a.Component),a=r,l=[{key:"renderProtectedPage",value:function(){var n=this.props.auth,r=n.isAuthenticated,o=n.user;console.log("http://localhost:3000");var a=o&&o["".concat("http://localhost:3000","/role")],l=!1;return e?a&&a===e&&(l=!0):l=!0,l=!0,r?l?u.a.createElement(t,this.props):u.a.createElement(c.a,this.props.auth,u.a.createElement(i.a,null,u.a.createElement("h1",null," You are not authorized. You dont have a permission to visit this page "))):u.a.createElement(c.a,this.props.auth,u.a.createElement(i.a,null,u.a.createElement("h1",null," You are not authenticated. Please Login to access this page. ")))}},{key:"render",value:function(){return this.renderProtectedPage()}}],f=[{key:"getInitialProps",value:function(){var e,n=(e=o.a.mark(function e(n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getInitialProps;case 2:if(e.t0=e.sent,!e.t0){e.next=7;break}return e.next=6,t.getInitialProps(n);case 6:e.t0=e.sent;case 7:return r=e.t0,e.abrupt("return",s({},r));case 9:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){p(a,r,o,u,c,"next",e)}function c(e){p(a,r,o,u,c,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}()}],l&&y(a.prototype,l),f&&y(a,f),r}()}}},850:function(e,t,n){__NEXT_REGISTER_PAGE("/userBlogs",function(){return e.exports=n(857),{page:e.exports.default}})},857:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=n(1),u=n.n(a),c=n(10),i=n(12),l=n(862),s=n(802),f=n(863),p=n(864),y=n(860),h=n(861),b=n(8),m=n(0),d=n.n(m),v=n(801),g={children:d.a.node},w=function(e){return u.a.createElement(v.a,Object(b.a)({group:!0},e))};w.propTypes=g;var O=w,E=n(859);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var B=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=_(t).call(this,e))||"object"!==P(o)&&"function"!=typeof o?x(r):o).toggle=n.toggle.bind(x(x(n))),n.state={dropdownOpen:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,u.a.Component),n=t,(r=[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"renderMenu",value:function(e){return u.a.createElement(y.a,null,e.map(function(e,t){return u.a.createElement(h.a,j({key:t},e.handlers),e.text)}))}},{key:"render",value:function(){var e=this.props.items;return u.a.createElement(O,{className:"port-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggle},u.a.createElement(E.a,{caret:!0,size:"sm"}),this.renderMenu(e))}}])&&k(n.prototype,r),o&&k(n,o),t}(),N=n(29),T=n(30),C=n(22);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var z=function(e){function t(){var e,n,r,o,a,u,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return r=this,o=(e=L(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==R(o)&&"function"!=typeof o?Y(r):o,a=Y(Y(n)),c=function(e){var t=n.createStatus(e.status);return[{text:t.view,handlers:{onClick:function(){return n.changeBlogStatus(t.value,e._id)}}},{text:"Delete",handlers:{onClick:function(){return n.deleteBlogWarning(e._id)}}}]},(u="dropdownOptions")in a?Object.defineProperty(a,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[u]=c,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,u.a.Component),n=t,r=[{key:"changeBlogStatus",value:function(e,t){Object(C.l)({status:e},t).then(function(){T.Router.pushRoute("/userBlogs")}).catch(function(e){console.error(e.message)})}},{key:"deleteBlogWarning",value:function(e){confirm("Are you sure you want to delete this blog post?")&&this.deleteBlog(e)}},{key:"deleteBlog",value:function(e){Object(C.c)(e).then(function(e){T.Router.pushRoute("/userBlogs")}).catch(function(e){return console.error(e.message)})}},{key:"separateBlogs",value:function(e){var t=[],n=[];return e.forEach(function(e){"draft"===e.status?n.push(e):t.push(e)}),{published:t,drafts:n}}},{key:"createStatus",value:function(e){return"draft"===e?{view:"Publish Story",value:"published"}:{view:"Make a Draft",value:"draft"}}},{key:"renderBlogs",value:function(e){var t=this;return u.a.createElement("ul",{className:"user-blogs-list"},e.map(function(e,n){return u.a.createElement("li",{key:n},u.a.createElement(T.Link,{route:"/blogs/".concat(e._id,"/edit")},u.a.createElement("a",null,e.title)),u.a.createElement(B,{items:t.dropdownOptions(e)}))}))}},{key:"render",value:function(){var e=this.props.blogs,t=this.separateBlogs(e),n=t.published,r=t.drafts;return u.a.createElement(c.a,D({},this.props.auth,{headerType:"landing"}),u.a.createElement("div",{className:"masthead",style:{backgroundImage:"url('/static/images/home-bg.jpg')"}},u.a.createElement("div",{className:"overlay"}),u.a.createElement(l.a,null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},u.a.createElement("div",{className:"site-heading"},u.a.createElement("h1",null,"Blogs Dashboard"),u.a.createElement("span",{className:"subheading"},"Let's write some nice blog today"," ",u.a.createElement(T.Link,{route:"/blogs/new"},u.a.createElement(s.a,{color:"primary"},"Create a new Blog")))))))),u.a.createElement(i.a,{className:"blog-user-page"},u.a.createElement(f.a,null,u.a.createElement(p.a,{md:"6",className:"mx-auto text-center"},u.a.createElement("h2",{className:"blog-status-title"}," Published Blogs "),this.renderBlogs(n)),u.a.createElement(p.a,{md:"6",className:"mx-auto text-center"},u.a.createElement("h2",{className:"blog-status-title"}," Draft Blogs "),this.renderBlogs(r)))))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,r=[],e.prev=2,e.next=5,Object(C.k)(n);case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:return e.abrupt("return",{blogs:r});case 12:case"end":return e.stop()}},e,this,[[2,8]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){I(a,r,o,u,c,"next",e)}function c(e){I(a,r,o,u,c,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&A(n.prototype,r),a&&A(n,a),t}();t.default=Object(N.a)("siteOwner")(z)}},[[850,1,0]]]);