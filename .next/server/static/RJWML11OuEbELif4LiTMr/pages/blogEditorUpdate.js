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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var BasePage = function BasePage(props) {
  var className = props.className,
      title = props.title,
      containerClass = props.containerClass; // const className = props.className || '';

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "base-page ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: containerClass
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-header-title"
  }, title)), props.children));
};

BasePage.defaultProps = {
  className: '',
  containerClass: ''
};
/* harmony default export */ __webpack_exports__["a"] = (BasePage);

/***/ }),
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getSecretData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPortfolioById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updatePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deletePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBlogBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getUserBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getBlogById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteBlog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "".concat("http://localhost:3000", "/api/v1"),
  timeout: 3000
});

var setAuthHeader = function setAuthHeader(req) {
  var token = req ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[/* getCookieFromReq */ "a"])(req, 'jwt') : js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwt');

  if (token) {
    return {
      headers: {
        'authorization': "Bearer ".concat(token)
      }
    };
  }

  return undefined;
};

var rejectPromise = function rejectPromise(resError) {
  var error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
};

var getSecretData =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '/secret';
            _context.next = 3;
            return axiosInstance.get(url, setAuthHeader(req)).then(function (response) {
              return response.data;
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSecretData(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getPortfolios =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axiosInstance.get('/portfolios').then(function (response) {
              return response.data;
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getPortfolios() {
    return _ref2.apply(this, arguments);
  };
}();
var getPortfolioById =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axiosInstance.get("/portfolios/".concat(id)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getPortfolioById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var createPortfolio =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(portfolioData) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axiosInstance.post('/portfolios', portfolioData, setAuthHeader()).then(function (response) {
              return response.data;
            }).catch(function (error) {
              return rejectPromise(error);
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function createPortfolio(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
var updatePortfolio =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(portfolioData) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axiosInstance.patch("/portfolios/".concat(portfolioData._id), portfolioData, setAuthHeader()).then(function (response) {
              return response.data;
            }).catch(function (error) {
              return rejectPromise(error);
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function updatePortfolio(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var deletePortfolio = function deletePortfolio(portfolioId) {
  return axiosInstance.delete("/portfolios/".concat(portfolioId), setAuthHeader()).then(function (response) {
    return response.data;
  });
}; // ------------ BLOG ACTIONS --------------

var getBlogs =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(req) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axiosInstance.get('/blogs').then(function (response) {
              return response.data;
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getBlogs(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
var getBlogBySlug =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axiosInstance.get("/blogs/s/".concat(slug)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getBlogBySlug(_x6) {
    return _ref7.apply(this, arguments);
  };
}();
var getUserBlogs =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(req) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axiosInstance.get('/blogs/me', setAuthHeader(req)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getUserBlogs(_x7) {
    return _ref8.apply(this, arguments);
  };
}();
var createBlog = function createBlog(blogData, lockId) {
  return axiosInstance.post("/blogs?lockId=".concat(lockId), blogData, setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};
var updateBlog = function updateBlog(blogData, blogId) {
  return axiosInstance.patch("/blogs/".concat(blogId), blogData, setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};
var getBlogById = function getBlogById(blogId) {
  return axiosInstance.get("/blogs/".concat(blogId)).then(function (response) {
    return response.data;
  });
};
var deleteBlog = function deleteBlog(blogId) {
  return axiosInstance.delete("/blogs/".concat(blogId), setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/* harmony default export */ __webpack_exports__["a"] = (function (role) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(withAuth, _React$Component);

        function withAuth() {
          _classCallCheck(this, withAuth);

          return _possibleConstructorReturn(this, _getPrototypeOf(withAuth).apply(this, arguments));
        }

        _createClass(withAuth, [{
          key: "renderProtectedPage",
          value: function renderProtectedPage() {
            var _this$props$auth = this.props.auth,
                isAuthenticated = _this$props$auth.isAuthenticated,
                user = _this$props$auth.user;
            console.log("http://localhost:3000");
            var userRole = user && user["".concat("http://localhost:3000", "/role")];
            var isAuthorized = false;

            if (role) {
              if (userRole && userRole === role) {
                isAuthorized = true;
              }

              ;
            } else {
              isAuthorized = true;
            }

            isAuthorized = true;

            if (!isAuthenticated) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, " You are not authenticated. Please Login to access this page. ")));
            } else if (!isAuthorized) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, " You are not authorized. You dont have a permission to visit this page ")));
            } else {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props);
            }
          }
        }, {
          key: "render",
          value: function render() {
            return this.renderProtectedPage();
          }
        }], [{
          key: "getInitialProps",
          value: function () {
            var _getInitialProps = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(args) {
              var pageProps;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Component.getInitialProps;

                    case 2:
                      _context.t0 = _context.sent;

                      if (!_context.t0) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return Component.getInitialProps(args);

                    case 6:
                      _context.t0 = _context.sent;

                    case 7:
                      pageProps = _context.t0;
                      return _context.abrupt("return", _objectSpread({}, pageProps));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getInitialProps(_x) {
              return _getInitialProps.apply(this, arguments);
            }

            return getInitialProps;
          }()
        }]);

        return withAuth;
      }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
    );
  };
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("slate");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("slate-react");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("slate-html-serializer");

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(24);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(25);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(22);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// CONCATENATED MODULE: ./components/slate-editor/components/index.js
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 7px 6px;\n  position: absolute;\n  z-index: 1;\n  top: -10000px;\n  left: -10000px;\n  margin-top: -6px;\n  opacity: 0;\n  background-color: #222;\n  border-radius: 4px;\n  transition: opacity 0.75s;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  & > * {\n    display: inline-block;\n  }\n  & > * + * {\n    margin-left: 15px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  vertical-align: text-bottom;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // import styled from 'react-emotion';



function assignColor(props) {
  var color = props.reversed ? props.active ? 'white' : '#aaa' : props.active ? 'black' : '#ccc';
  return color;
}

var Button = styled_default()('span')(_templateObject(), assignColor);
var Icon = styled_default()(function (_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement("span", _extends({
    className: "material-icons ".concat(className)
  }, rest));
})(_templateObject2());
var Menu = styled_default()('div')(_templateObject3());
var Toolbar = styled_default()(Menu)(_templateObject4());
var StyledMenu = styled_default()(Menu)(_templateObject5());
// CONCATENATED MODULE: ./components/slate-editor/renderers/index.js


var DEFAULT_NODE = 'paragraph';

function onClickMark(event, type, editor) {
  event.preventDefault();
  editor.toggleMark(type);
}

function renderers_renderMarkButton(type, icon, editor) {
  var value = editor.value;
  var isActive = value.activeMarks.some(function (mark) {
    return mark.type == type;
  });
  return external_react_default.a.createElement(Button, {
    reversed: true,
    active: isActive,
    onMouseDown: function onMouseDown(event) {
      return onClickMark(event, type, editor);
    }
  }, external_react_default.a.createElement(Icon, null, icon));
}

var hasBlock = function hasBlock(type, value) {
  return value.blocks.some(function (node) {
    return node.type == type;
  });
};

var onClickBlock = function onClickBlock(event, type, editor) {
  event.preventDefault();
  var value = editor.value;
  var document = value.document; // Handle everything but list buttons.

  if (type != 'bulleted-list' && type != 'numbered-list') {
    var isActive = hasBlock(type, value);
    var isList = hasBlock('list-item', value);

    if (isList) {
      editor.setBlocks(isActive ? DEFAULT_NODE : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else {
      editor.setBlocks(isActive ? DEFAULT_NODE : type);
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    var _isList = hasBlock('list-item', value);

    var isType = value.blocks.some(function (block) {
      return !!document.getClosest(block.key, function (parent) {
        return parent.type == type;
      });
    });

    if (_isList && isType) {
      editor.setBlocks(DEFAULT_NODE).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else if (_isList) {
      editor.unwrapBlock(type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list').wrapBlock(type);
    } else {
      editor.setBlocks('list-item').wrapBlock(type);
    }
  }
};

var renderers_renderBlockButton = function renderBlockButton(type, icon, editor) {
  var value = editor.value;
  var isActive = hasBlock(type, value);

  if (['numbered-list', 'bulleted-list'].includes(type)) {
    var document = value.document,
        blocks = value.blocks;

    if (blocks.size > 0) {
      var parent = document.getParent(blocks.first().key);
      isActive = hasBlock('list-item', value) && parent && parent.type === type;
    }
  }

  return external_react_default.a.createElement(Button, {
    active: isActive,
    reversed: true,
    onMouseDown: function onMouseDown(event) {
      return onClickBlock(event, type, editor);
    }
  }, external_react_default.a.createElement(Icon, null, icon));
};
var renderers_renderNode = function renderNode(props, editor, next) {
  var attributes = props.attributes,
      children = props.children,
      node = props.node;

  switch (node.type) {
    case 'paragraph':
      return external_react_default.a.createElement("p", attributes, children);

    case 'block-quote':
      return external_react_default.a.createElement("blockquote", attributes, children);

    case 'bulleted-list':
      return external_react_default.a.createElement("ul", attributes, children);

    case 'heading-one':
      return external_react_default.a.createElement("h1", attributes, children);

    case 'heading-two':
      return external_react_default.a.createElement("h2", attributes, children);

    case 'list-item':
      return external_react_default.a.createElement("li", attributes, children);

    case 'numbered-list':
      return external_react_default.a.createElement("ol", attributes, children);

    default:
      return next();
  }
};
var renderers_renderMark = function renderMark(props, editor, next) {
  var children = props.children,
      mark = props.mark,
      attributes = props.attributes;

  switch (mark.type) {
    case 'bold':
      return external_react_default.a.createElement("strong", attributes, children);

    case 'code':
      return external_react_default.a.createElement("code", attributes, children);

    case 'italic':
      return external_react_default.a.createElement("em", attributes, children);

    case 'underlined':
      return external_react_default.a.createElement("u", attributes, children);

    default:
      return next();
  }
};
// CONCATENATED MODULE: ./components/slate-editor/HoverMenu.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HoverMenu_HoverMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HoverMenu, _React$Component);

  function HoverMenu() {
    _classCallCheck(this, HoverMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(HoverMenu).apply(this, arguments));
  }

  _createClass(HoverMenu, [{
    key: "renderMarkButton",
    value: function renderMarkButton(type, icon) {
      var editor = this.props.editor;
      return renderers_renderMarkButton(type, icon, editor);
    }
  }, {
    key: "renderBlockButton",
    value: function renderBlockButton(type, icon) {
      var editor = this.props.editor;
      return renderers_renderBlockButton(type, icon, editor);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          editor = _this$props.editor;
      var root = window.document.getElementById('__next');
      return external_react_dom_default.a.createPortal(external_react_default.a.createElement(StyledMenu, {
        className: className,
        innerRef: innerRef
      }, this.renderMarkButton('bold', 'format_bold'), this.renderMarkButton('italic', 'format_italic'), this.renderMarkButton('underlined', 'format_underlined'), this.renderMarkButton('code', 'code'), this.renderBlockButton('heading-one', 'looks_one'), this.renderBlockButton('heading-two', 'looks_two'), this.renderBlockButton('block-quote', 'format_quote'), this.renderBlockButton('numbered-list', 'format_list_numbered'), this.renderBlockButton('bulleted-list', 'format_list_bulleted')), root);
    }
  }]);

  return HoverMenu;
}(external_react_default.a.Component);

/* harmony default export */ var slate_editor_HoverMenu = (HoverMenu_HoverMenu);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/slate-editor/ControllMenu.js



var ControllMenu_ControllMenu = function ControllMenu(props) {
  return external_react_default.a.createElement("div", {
    className: "controll-menu"
  }, external_react_default.a.createElement("h1", {
    className: "title"
  }, " Write Your Story... "), external_react_default.a.createElement("div", {
    className: "status-box"
  }, props.isLoading ? 'Saving...' : 'Saved'), external_react_default.a.createElement(external_reactstrap_["Button"], {
    disabled: props.isLoading,
    onClick: props.save,
    color: "success"
  }, "Save"));
};

/* harmony default export */ var slate_editor_ControllMenu = (ControllMenu_ControllMenu);
// EXTERNAL MODULE: external "slate-react"
var external_slate_react_ = __webpack_require__(26);

// EXTERNAL MODULE: external "slate"
var external_slate_ = __webpack_require__(21);

// CONCATENATED MODULE: ./components/slate-editor/initial-value.js
// Create our initial value...

var initialValue = external_slate_["Value"].fromJSON({
  document: {
    nodes: [{
      object: 'block',
      type: 'paragraph',
      nodes: [{
        object: 'text',
        leaves: [{
          text: 'A line of text in a paragraph.'
        }]
      }]
    }]
  }
});
// EXTERNAL MODULE: external "slate-html-serializer"
var external_slate_html_serializer_ = __webpack_require__(27);
var external_slate_html_serializer_default = /*#__PURE__*/__webpack_require__.n(external_slate_html_serializer_);

// CONCATENATED MODULE: ./components/slate-editor/rules.js

var BLOCK_TAGS = {
  blockquote: 'block-quote',
  p: 'paragraph',
  ul: 'bulleted-list',
  li: 'list-item',
  ol: 'numbered-list',
  h1: 'heading-one',
  h2: 'heading-two' // Add a dictionary of mark tags.

};
var MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underlined',
  code: 'code'
};
var rules = [{
  deserialize: function deserialize(el, next) {
    var type = BLOCK_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'block',
        type: type,
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'block') {
      switch (obj.type) {
        case 'paragraph':
          return external_react_default.a.createElement("p", null, children);

        case 'block-quote':
          return external_react_default.a.createElement("blockquote", null, children);

        case 'bulleted-list':
          return external_react_default.a.createElement("ul", null, children);

        case 'heading-one':
          return external_react_default.a.createElement("h1", null, children);

        case 'heading-two':
          return external_react_default.a.createElement("h2", null, children);

        case 'list-item':
          return external_react_default.a.createElement("li", null, children);

        case 'numbered-list':
          return external_react_default.a.createElement("ol", null, children);
      }
    }
  }
}, // Add a new rule that handles marks...
{
  deserialize: function deserialize(el, next) {
    var type = MARK_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'mark',
        type: type,
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'mark') {
      switch (obj.type) {
        case 'bold':
          return external_react_default.a.createElement("strong", null, children);

        case 'italic':
          return external_react_default.a.createElement("em", null, children);

        case 'underlined':
          return external_react_default.a.createElement("u", null, children);

        case 'code':
          return external_react_default.a.createElement("code", null, children);
      }
    }
  }
}];
// CONCATENATED MODULE: ./components/slate-editor/Editor.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editor_SlateEditor; });


function Editor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Editor_typeof = function _typeof(obj) { return typeof obj; }; } else { Editor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Editor_typeof(obj); }

function Editor_extends() { Editor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Editor_extends.apply(this, arguments); }

function Editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Editor_defineProperties(Constructor, staticProps); return Constructor; }

function Editor_possibleConstructorReturn(self, call) { if (call && (Editor_typeof(call) === "object" || typeof call === "function")) { return call; } return Editor_assertThisInitialized(self); }

function Editor_getPrototypeOf(o) { Editor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Editor_getPrototypeOf(o); }

function Editor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Editor_setPrototypeOf(subClass, superClass); }

function Editor_setPrototypeOf(o, p) { Editor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Editor_setPrototypeOf(o, p); }

function Editor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var html = new external_slate_html_serializer_default.a({
  rules: rules
});

var Editor_SlateEditor =
/*#__PURE__*/
function (_React$Component) {
  Editor_inherits(SlateEditor, _React$Component);

  function SlateEditor() {
    var _getPrototypeOf2;

    var _this;

    Editor_classCallCheck(this, SlateEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Editor_possibleConstructorReturn(this, (_getPrototypeOf2 = Editor_getPrototypeOf(SlateEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "state", {
      value: external_slate_["Value"].create(),
      isLoaded: false
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "componentDidUpdate", function () {
      _this.updateMenu();
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "onChange", function (_ref) {
      var value = _ref.value;

      _this.setState({
        value: value
      });
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "onKeyDown", function (event, change, next) {
      var isLoading = _this.props.isLoading;

      if (!isLoading && event.which === 83 && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        _this.save();

        return;
      }

      next();
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "updateMenu", function () {
      var menu = _this.menu;
      if (!menu) return;
      var value = _this.state.value;
      var fragment = value.fragment,
          selection = value.selection;

      if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
        menu.removeAttribute('style');
        return;
      }

      var native = window.getSelection();
      var range = native.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      menu.style.opacity = 1;
      menu.style.top = "".concat(rect.top + window.pageYOffset - menu.offsetHeight, "px");
      menu.style.left = "".concat(rect.left + window.pageXOffset - menu.offsetWidth / 2 + rect.width / 2, "px");
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "renderEditor", function (props, editor, next) {
      var children = next();
      var isLoading = props.isLoading;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(slate_editor_ControllMenu, {
        isLoading: isLoading,
        save: function save() {
          return _this.save();
        }
      }), children, external_react_default.a.createElement(slate_editor_HoverMenu, {
        innerRef: function innerRef(menu) {
          return _this.menu = menu;
        },
        editor: editor
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "2495955566",
        css: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");"]
      }));
    });

    return _this;
  }

  Editor_createClass(SlateEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var valueFromProps = this.props.initialValue;
      var value = valueFromProps ? external_slate_["Value"].fromJSON(html.deserialize(valueFromProps)) : external_slate_["Value"].fromJSON(initialValue);
      this.updateMenu();
      this.setState({
        isLoaded: true,
        value: value
      });
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var value = this.state.value;
      var firstBlock = value.document.getBlocks().get(0);
      var secondBlock = value.document.getBlocks().get(1);
      var title = firstBlock && firstBlock.text ? firstBlock.text : 'No Title';
      var subtitle = secondBlock && secondBlock.text ? secondBlock.text : 'No Subtitle';
      return {
        title: title,
        subtitle: subtitle
      };
    }
  }, {
    key: "save",
    value: function save() {
      var value = this.state.value;
      var _this$props = this.props,
          save = _this$props.save,
          isLoading = _this$props.isLoading;
      var headingValues = this.getTitle();
      var text = html.serialize(value);
      !isLoading && save(text, headingValues);
    } // Render the editor.

  }, {
    key: "render",
    value: function render() {
      var isLoaded = this.state.isLoaded;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, isLoaded && external_react_default.a.createElement(external_slate_react_["Editor"], Editor_extends({}, this.props, {
        placeholder: "Enter some text...",
        value: this.state.value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        renderMark: renderers_renderMark,
        renderNode: renderers_renderNode,
        renderEditor: this.renderEditor
      })));
    }
  }]);

  return SlateEditor;
}(external_react_default.a.Component);



/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _components_slate_editor_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var BlogEditorUpdate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogEditorUpdate, _React$Component);

  _createClass(BlogEditorUpdate, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, blogId, blog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                blogId = query.id;
                blog = {};
                _context.prev = 3;
                _context.next = 6;
                return Object(_actions__WEBPACK_IMPORTED_MODULE_7__[/* getBlogById */ "e"])(blogId);

              case 6:
                blog = _context.sent;
                return _context.abrupt("return", {
                  blog: blog
                });

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                console.error(_context.t0);

              case 13:
                return _context.abrupt("return", {
                  blog: blog
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function BlogEditorUpdate(props) {
    var _this;

    _classCallCheck(this, BlogEditorUpdate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogEditorUpdate).call(this, props));
    _this.state = {
      isSaving: false
    };
    _this.updateBlog = _this.updateBlog.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BlogEditorUpdate, [{
    key: "updateBlog",
    value: function updateBlog(story, heading) {
      var _this2 = this;

      var blog = this.props.blog;
      var updatedBlog = {};
      updatedBlog.title = heading.title;
      updatedBlog.subTitle = heading.subtitle;
      updatedBlog.story = story;
      this.setState({
        isSaving: true
      });

      Object(_actions__WEBPACK_IMPORTED_MODULE_7__[/* updateBlog */ "l"])(updatedBlog, blog._id).then(function (updatedBlog) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success('Blog Saved Succesfuly!');

        _this2.setState({
          isSaving: false
        });
      }).catch(function (err) {
        _this2.setState({
          isSaving: false
        });

        var message = err.message || 'Server Error!';
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error('Unexpected Error, Copy your progress and refresh browser please.');
        console.error(message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var blog = this.props.blog;
      var isSaving = this.state.isSaving;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        containerClass: "editor-wrapper",
        className: "blog-editor-page"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_slate_editor_Editor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        initialValue: blog.story,
        isLoading: isSaving,
        save: this.updateBlog
      })));
    }
  }]);

  return BlogEditorUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('siteOwner')(BlogEditorUpdate));

/***/ })
/******/ ]);