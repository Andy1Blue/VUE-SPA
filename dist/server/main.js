module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./server/" + chunkId + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


__WEBPACK_IMPORTED_MODULE_0_axios__["defaults"].baseURL = 'https://api.fullstackweekly.com';

__WEBPACK_IMPORTED_MODULE_0_axios__["interceptors"].request.use(function (config) {
  if (typeof window === 'undefined') {
    return config;
  }
  var token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

var appService = {
  getPosts: function getPosts(categoryId) {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios__["get"]('/wp-json/wp/v2/posts?categories=' + categoryId + '&per_page=6').then(function (response) {
        resolve(response.data);
      });
    });
  },
  login: function login(credentials) {
    // TODO: implement https://jwt.io/
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0_axios__["post"]('/services/auth.php', credentials).then(function (response) {
        resolve(response.data);
      }).catch(function (response) {
        reject(response.status);
      });
    });
  },
  getProfile: function getProfile() {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios__["get"]('/services/profile.php', {
        // headers: {
        //   'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        // }
      }).then(function (response) {
        resolve(response.data);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (appService);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(22);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "4a0c25a0"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/theme/Category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Category.vue: functional components are not supported with templates, they should use render functions.")}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  return __WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */];
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_Layout_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_index__ = __webpack_require__(26);
/* unused harmony reexport router */
/* unused harmony reexport store */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(_extends({
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  linkActiveClass: 'is-active',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      y: 0
    };
  }
}, __WEBPACK_IMPORTED_MODULE_1__theme_Layout_vue__["a" /* default */], {
  store: __WEBPACK_IMPORTED_MODULE_3__vuex_index__["a" /* default */]
}));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a2a069b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__(23);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(8),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "484b284c"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a2a069b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/theme/Layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Layout.vue: functional components are not supported with templates, they should use render functions.")}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Category_vue__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    AppHeader: __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__["a" /* default */],
    AppFooter: __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__["a" /* default */],
    Category: __WEBPACK_IMPORTED_MODULE_2__Category_vue__["default"]
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppHeader_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5272ef2d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__ = __webpack_require__(13);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "97fab848"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5272ef2d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/theme/AppHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(["isAuthenticated"]))
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav has-shadow"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('img', {
    attrs: {
      "src": "http://bit.ly/vue-img",
      "alt": "Vue SPA"
    }
  })]), _vm._ssrNode(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/category/front-end"
    }
  }, [_vm._v("Front-end")]), _vm._ssrNode(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": {
        name: 'category',
        params: {
          id: 'mobile'
        }
      }
    }
  }, [_vm._v("Mobile")]), _vm._ssrNode(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/login"
    }
  }, [(_vm.isAuthenticated) ? _c('span', [_vm._v("Logout")]) : _c('span', [_vm._v("Login")])])], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31408b3b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__ = __webpack_require__(15);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "da5f802c"
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31408b3b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/theme/AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"content has-text-centered\">\n      Follow us on\n      <a href=\"https://twitter.com/bstavroulakis\" target=\"_blank\">Twitter</a></div></div>")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Post: __WEBPACK_IMPORTED_MODULE_0__Post_vue__["a" /* default */]
  },
  data: function data() {
    return {
      id: this.$route.params.id
      // postsFrontEnd: [
      //   {
      //     id: 1,
      //     title: "PWA Stats",
      //     content:
      //       "A community-driven list of stats and news related to Progressive Web Apps",
      //     link: "https://www.pwastats.com/"
      //   },
      //   {
      //     id: 2,
      //     title: "A Comprehensive Guide To HTTP/2 Server Push",
      //     content:
      //       "No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!",
      //     link:
      //       "https://www.smashingmagazine.com/2017/04/guide-http2-server-push/"
      //   },
      //   {
      //     id: 3,
      //     title: "So what’s this GraphQL thing I keep hearing about?",
      //     content:
      //       "Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.",
      //     link:
      //       "https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf"
      //   }
      // ],
      // postsMobile: [
      //   {
      //     id: 4,
      //     title: "State of The Mobile Gap Between Native and Web",
      //     content:
      //       "Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?",
      //     link: "https://remysharp.com/2016/05/28/state-of-the-gap"
      //   },
      //   {
      //     id: 5,
      //     title: "Learning JavaScript Design Patterns",
      //     content:
      //       "Design patterns are reusable solutions to commonly occurring problems in software design.",
      //     link:
      //       "https://addyosmani.com/resources/essentialjsdesignpatterns/book/"
      //   },
      //   {
      //     id: 6,
      //     title: "The Power of Custom Directives in Vue",
      //     content:
      //       "The beautiful thing about Vue is that it's incredibly feature-rich.",
      //     link: "https://css-tricks.com/power-custom-directives-vue/"
      //   }
      // ],
      // posts: []
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])("postsModule", ["posts"])),
  methods: {
    loadPosts: function loadPosts() {
      var categoryId = 2;
      if (this.$route.params.id === "mobile") {
        categoryId = 11;
      }
      this.$store.dispatch("postsModule/updateCategory", categoryId);
      // appService.getPosts(categoryId).then(data => {
      //   this.posts = data;
      // });
    }
  },
  watch: {
    $route: function $route(to, from) {
      // this.id = to.params.id;
      this.loadPosts();
    }
  },
  created: function created() {
    this.loadPosts();
    // console.log(this.$route.query.page);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__(20);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(18),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e458c95e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "68837542"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/theme/Post.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Post.vue: functional components are not supported with templates, they should use render functions.")}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["link"]
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<div class=\"card-content\" data-v-e458c95e>", "</div>", [_vm._t("title"), _vm._ssrNode(" "), _vm._t("content")], 2), _vm._ssrNode(" <footer class=\"card-footer\" data-v-e458c95e><a" + (_vm._ssrAttr("href", _vm.link)) + " target=\"_blank\" class=\"card-footer-item\" data-v-e458c95e>Read More</a></footer>")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns"
  }, _vm._l((_vm.posts), function(post, title) {
    return _vm._ssrNode("<div class=\"column is-one-third\">", "</div>", [_c('Post', {
      attrs: {
        "link": post.rest_api_enabler.Link
      }
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(post.title.rendered)
      },
      slot: "title"
    }), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(post.excerpt.rendered)
      },
      slot: "content"
    })])], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('AppHeader'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main-section section\">", "</section>", [_vm._ssrNode("<div class=\"container content\">", "</div>", [_c('router-view')], 1)]), _vm._ssrNode(" "), _c('AppFooter')], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);


// import Category from './theme/Category.vue'
// import Login from './theme/Login.vue'
// import NotFound from './theme/NotFound.vue'

var Category = function Category() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 4));
};
var Login = function Login() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 31));
};
var NotFound = function NotFound() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 32));
};

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      y: 0
    };
  },
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/category/:id',
    name: 'category',
    component: Category
  }, {
    path: '/',
    redirect: '/category/front-end'
  }, {
    path: '*',
    component: NotFound
  }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posts__ = __webpack_require__(28);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var state = {
  isAuthenticated: false
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  modules: {
    postsModule: __WEBPACK_IMPORTED_MODULE_4__posts__["a" /* default */]
  },
  state: state,
  getters: {
    isAuthenticated: function isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  actions: {
    logout: function logout(context) {
      context.commit('logout');
    },
    login: function login(cintext, credentials) {
      return new Promise(function (resolve) {
        __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* default */].login(credentials).then(function (data) {
          context.commit('login', data);
          resolve();
        }).catch(function () {
          return window.alert("Could not login!");
        });
      });
    }
  },
  mutations: {
    logout: function logout(state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem("token", null);
        window.localStorage.setItem("tokenExpiration", null);
      }
      state.isAuthenticated = false;
    },
    login: function login(state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem("token", token.token);
        window.localStorage.setItem("tokenExpiration", token.expiration);
      }
      state.isAuthenticated = true;
    }
  }
});

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    var expiration = window.localStorage.getItem("tokenExpiration");
    var unixTimestamp = new Date().getTime() / 1000;
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true;
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(3);


var state = {
  posts: [],
  categoryId: 0
};

var getters = {
  posts: function posts(state) {
    return state.posts;
  }
};

var actions = {
  updateCategory: function updateCategory(context, categoryId) {
    __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* default */].getPosts(categoryId).then(function (data) {
      context.commit('updateCategory', {
        categoryId: categoryId,
        posts: data
      });
    });
  }
};

var mutations = {
  updateCategory: function updateCategory(state, category) {
    state.categoryId = category.categoryId;
    state.posts = category.posts;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(9)

module.exports = function (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map