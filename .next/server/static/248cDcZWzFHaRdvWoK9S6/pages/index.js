module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookieFromReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shortenText; });
var getCookieFromReq = function getCookieFromReq(req, cookieKey) {
  var cookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(cookieKey, "="));
  });

  if (!cookie) {
    return undefined;
  }

  ;
  return cookie.split('=')[1];
};
var shortenText = function shortenText(text) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 124;

  if (text && text.length > maxLength) {
    return "".concat(text.substring(0, maxLength), " ...");
  }

  return text;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(15);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(9);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);

// CONCATENATED MODULE: ./components/ActiveLink.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ActiveLink_ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      props = _objectWithoutProperties(_ref, ["children", "router"]);

  var child = external_react_["Children"].only(children);
  var className = child.props.className || "";

  if (router.asPath === props.route && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName);
  }

  delete props.activeClassName;
  return external_react_default.a.createElement(routes["Link"], props, external_react_default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ var components_ActiveLink = (Object(router_["withRouter"])(ActiveLink_ActiveLink));
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: ./services/auth0.js
var auth0 = __webpack_require__(7);

// CONCATENATED MODULE: ./components/shared/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Header_BsNavLink = function BsNavLink(props) {
  var route = props.route,
      title = props.title;
  var className = props.className || "";
  return external_react_default.a.createElement(components_ActiveLink, {
    activeClassName: "active",
    route: route
  }, external_react_default.a.createElement("a", {
    className: "nav-link port-navbar-link ".concat(className)
  }, " ", title, " "));
};

var Header_Login = function Login() {
  return external_react_default.a.createElement("span", {
    onClick: auth0["a" /* default */].login,
    className: "nav-link port-navbar-link clickable"
  }, " Login ");
};

var Header_Logout = function Logout() {
  return external_react_default.a.createElement("span", {
    onClick: auth0["a" /* default */].logout,
    className: "nav-link port-navbar-link clickable"
  }, " Logout ");
};

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleDropdown = _this.toggleDropdown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "renderBlogMenu",
    value: function renderBlogMenu() {
      var isSiteOwner = this.props.isSiteOwner;
      isSiteOwner = true;

      if (isSiteOwner) {
        return external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
          className: "port-navbar-link port-dropdown-menu",
          nav: true,
          isOpen: this.state.dropdownOpen,
          toggle: this.toggleDropdown
        }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
          className: "port-dropdown-toggle",
          nav: true,
          caret: true
        }, "Blog"), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], null, external_react_default.a.createElement(external_reactstrap_["DropdownItem"], null, external_react_default.a.createElement(Header_BsNavLink, {
          className: "port-dropdown-item",
          route: "/blogs",
          title: "Blogs"
        })), external_react_default.a.createElement(external_reactstrap_["DropdownItem"], null, external_react_default.a.createElement(Header_BsNavLink, {
          className: "port-dropdown-item",
          route: "/blogs/new",
          title: "Create a Blog"
        })), external_react_default.a.createElement(external_reactstrap_["DropdownItem"], null, external_react_default.a.createElement(Header_BsNavLink, {
          className: "port-dropdown-item",
          route: "/blogs/dashboard",
          title: "Blogs Dashboard"
        }))));
      }

      return external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_BsNavLink, {
        route: "/blogs",
        title: "Blog"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isAuthenticated = _this$props.isAuthenticated,
          user = _this$props.user,
          className = _this$props.className;
      var isOpen = this.state.isOpen;
      var menuOpenClass = isOpen ? 'menu-open' : 'menu-close';
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        className: "port-navbar port-nav-base absolute ".concat(className, " ").concat(menuOpenClass),
        color: "transparent",
        dark: true,
        expand: "md"
      }, external_react_default.a.createElement(external_reactstrap_["NavbarBrand"], {
        className: "port-navbar-brand",
        href: "/"
      }, "Nguyen Vinh"), external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: this.toggle
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto",
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_BsNavLink, {
        route: "/",
        title: "Home"
      })), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_BsNavLink, {
        route: "/about",
        title: "About"
      })), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_BsNavLink, {
        route: "/portfolios",
        title: "Portfolio"
      })), this.renderBlogMenu(), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_BsNavLink, {
        route: "/cv",
        title: "Cv"
      })), !isAuthenticated && external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_Login, null)), isAuthenticated && external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(Header_Logout, null))))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(13);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/BaseLayout.js




var BaseLayout_BaseLayout = function BaseLayout(props) {
  var className = props.className,
      children = props.children,
      isAuthenticated = props.isAuthenticated,
      user = props.user,
      isSiteOwner = props.isSiteOwner,
      cannonical = props.cannonical;
  var headerType = props.headerType || 'default';
  var title = props.title || 'Nguyen Vinh Portfolio';
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title), external_react_default.a.createElement("meta", {
    name: "description",
    content: "My name is Nguyen Vinh and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way."
  }), external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "Vinh portfolio, Vinh developer, Vinh freelancig, Vinh programming"
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Nguyen Vinh - programmer, developer, bloger"
  }), external_react_default.a.createElement("meta", {
    property: "og:locale",
    content: "en_EU"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "".concat("http://localhost:3000")
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "My name is Nguyen Vinh and I am an experienced software engineer and freelance developer."
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
    rel: "stylesheet"
  }), cannonical && external_react_default.a.createElement("link", {
    rel: "cannonical",
    href: "".concat("http://localhost:3000").concat(cannonical)
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/ico",
    href: "/static/favicon.ico"
  })), external_react_default.a.createElement("div", {
    className: "layout-container"
  }, external_react_default.a.createElement(Header_Header, {
    className: "port-nav-".concat(headerType),
    isAuthenticated: isAuthenticated,
    user: user,
    isSiteOwner: isSiteOwner
  }), external_react_default.a.createElement("main", {
    className: "cover ".concat(className)
  }, external_react_default.a.createElement("div", {
    className: "wrapper"
  }, children))));
};

/* harmony default export */ var layouts_BaseLayout = __webpack_exports__["a"] = (BaseLayout_BaseLayout);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var CLIENT_ID = "Oj7RP4wNrc12nSVsjAER0HiK0jh0bsfp";

var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    _classCallCheck(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_1___default.a.WebAuth({
      domain: 'quangvinh.auth0.com',
      clientID: CLIENT_ID,
      redirectUri: "".concat("http://localhost:3000", "/callback"),
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  _createClass(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            reject(err);
            console.log(err);
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwt', authResult.idToken);
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwt');
      this.auth0.logout({
        returnTo: "http://localhost:3000",
        clientID: CLIENT_ID
      });
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "getJWKS",
    value: function () {
      var _getJWKS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, jwks;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://quangvinh.auth0.com/.well-known/jwks.json');

              case 2:
                res = _context.sent;
                jwks = res.data;
                return _context.abrupt("return", jwks);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getJWKS() {
        return _getJWKS.apply(this, arguments);
      }

      return getJWKS;
    }()
  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
        var decodedToken, jwks, jwk, cert, verifiedToken, expiresAt;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!token) {
                  _context2.next = 21;
                  break;
                }

                decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token, {
                  complete: true
                });

                if (decodedToken) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", undefined);

              case 4:
                _context2.next = 6;
                return this.getJWKS();

              case 6:
                jwks = _context2.sent;
                jwk = jwks.keys[0]; // BUILD CERTIFICATE

                cert = jwk.x5c[0];
                cert = cert.match(/.{1,64}/g).join('\n');
                cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

                if (!(jwk.kid === decodedToken.header.kid)) {
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 12;
                verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(token, cert);
                expiresAt = verifiedToken.exp * 1000;
                return _context2.abrupt("return", verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined);

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](12);
                return _context2.abrupt("return", undefined);

              case 21:
                return _context2.abrupt("return", undefined);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 18]]);
      }));

      function verifyToken(_x) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
  }, {
    key: "clientAuth",
    value: function () {
      var _clientAuth = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var token, verifiedToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwt');
                _context3.next = 3;
                return this.verifyToken(token);

              case 3:
                verifiedToken = _context3.sent;
                return _context3.abrupt("return", verifiedToken);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clientAuth() {
        return _clientAuth.apply(this, arguments);
      }

      return clientAuth;
    }()
  }, {
    key: "serverAuth",
    value: function () {
      var _serverAuth = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req) {
        var token, verifiedToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!req.headers.cookie) {
                  _context4.next = 6;
                  break;
                }

                token = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[/* getCookieFromReq */ "a"])(req, 'jwt');
                _context4.next = 4;
                return this.verifyToken(token);

              case 4:
                verifiedToken = _context4.sent;
                return _context4.abrupt("return", verifiedToken);

              case 6:
                return _context4.abrupt("return", undefined);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function serverAuth(_x2) {
        return _serverAuth.apply(this, arguments);
      }

      return serverAuth;
    }()
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["a"] = (auth0Client);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(16);

module.exports = routes().add('portfolioNew', '/portfolios/new').add('portfolio', '/portfolio/:id').add('portfolioEdit', '/portfolios/:id/edit').add('userBlogs', '/blogs/dashboard').add('blogEditor', '/blogs/new').add('blogDetail', '/blogs/:slug').add('blogEditorUpdate', '/blogs/:id/edit');

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      isFlipping: false
    };
    _this.roles = ['Developer', 'Tech Lover', 'Team Player', 'Course Creator', 'React.js', 'Angular'];
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateCard();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }
  }, {
    key: "animateCard",
    value: function animateCard() {
      var _this2 = this;

      this.cardAnimationInterval = setInterval(function () {
        _this2.setState({
          isFlipping: !_this2.state.isFlipping
        });
      }, 60000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var isFlipping = this.state.isFlipping;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extends({
        className: "cover ".concat(isFlipping ? 'cover-1' : 'cover-0')
      }, this.props.auth, {
        headerType: "index",
        title: "Vinh Nguyen - Portfolio"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "background-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/background-index.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flipper ".concat(isFlipping ? 'isFlipping' : '')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "front"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-section-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Full Stack Web Developer "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-section-content-intro"
      }, "Have a look at my portfolio and job history.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "Guy programming welcome picture",
        className: "image",
        src: "/static/images/section-1.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shadow-custom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shadow-inner"
      }, " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "back"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-section-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Get Your Projects Done "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-section-content-intro"
      }, "Profesional and top quality service in web development.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "Guy programming welcome picture",
        className: "image",
        src: "/static/images/section-2.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shadow-custom shadow-custom-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shadow-inner"
      }, " ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: "6",
        className: "hero-welcome-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-welcome-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " ", user.name, " "), " "), "Welcome to the portfolio website of Vinh Nguyen. Get informed, collaborate and discover projects I was working on through the years!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_1___default.a, {
        loop: true,
        typeSpeed: 60,
        backSpeed: 60,
        strings: this.roles,
        backDelay: 1000,
        loopCount: 0,
        showCursor: true,
        className: "self-typed",
        cursorChar: "|"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-welcome-bio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Let's take a look on my work."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "service-link"
      }, "Vector illustration credit:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.Vecteezy.com/"
      }, "vecteezy.com"))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })
/******/ ]);