exports.ids = [0];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(36);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(33),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "66a2e692"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/theme/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(30)
module.exports.__inject__ = function (context) {
  add("18508a5f", content, false, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Login.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 35:
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
//

// import appService from "../app.service";


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      username: "",
      password: ""
      // profile: {}
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(["isAuthenticated"])),
  // watch: {
  // isAuthenticated: function(val) {
  //   if (val) {
  //     appService.getProfile().then(profile => {
  //       this.profile = profile;
  //     });
  //   } else {
  //     this.profile = {};
  //   }
  //   eventBus.$emit("authStatusUpdate", val);
  // }
  // },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])({
    logout: "logout"
  }), {
    login: function login() {
      var _this = this;

      this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      }).then(function () {
        _this.username = "";
        _this.password = "";
      });
      //   appService
      //     .login({ username: this.username, password: this.password })
      //     .then(data => {
      //       window.localStorage.setItem("token", data.token);
      //       window.localStorage.setItem("tokenExpiration", data.expiration);
      //       this.isAuthenticated = true;
      //       this.username = "";
      //       this.password = "";
      //     })
      //     .catch(() => window.alert("Could not login!"));
      // },
      // logout() {
      // window.localStorage.setItem("token", null);
      // window.localStorage.setItem("tokenExpiration", null);
      // this.isAuthenticated = false;
    }
  })
  // created() {
  // let expiration = window.localStorage.getItem("tokenExpiration");
  // var unixTimestamp = new Date().getTime() / 1000;
  // if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
  // this.isAuthenticated = true;
  // }
  // }
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_vm._ssrNode(((_vm.isAuthenticated) ? ("<div>\n    Hello user!\n    </div>") : "<!---->") + " " + ((_vm.isAuthenticated) ? ("<button>Logout</button>") : ("<div><h2>Login</h2> <div class=\"field is-horizontal\"><div class=\"field-label is-normal\"><label class=\"label\">Username</label></div> <div class=\"field-body\"><div class=\"field\"><div class=\"control\"><input type=\"text\" placeholder=\"Your username\"" + (_vm._ssrAttr("value", (_vm.username))) + " class=\"input\"></div></div></div></div> <div class=\"field is-horizontal\"><div class=\"field-label is-normal\"><label class=\"label\">Password</label></div> <div class=\"field-body\"><div class=\"field\"><div class=\"control\"><input type=\"password\" placeholder=\"Your password\"" + (_vm._ssrAttr("value", (_vm.password))) + " class=\"input\"></div></div></div></div> <div class=\"field is-horizontal\"><div class=\"field-label\"></div> <div class=\"field-body\"><div class=\"field\"><div class=\"control\"><button class=\"button is-primary\">Login</button></div></div></div></div></div>")))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=0.js.map