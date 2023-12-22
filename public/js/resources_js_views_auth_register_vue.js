(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Mixins/Alert */ "./resources/js/lib/Mixins/Alert.js");
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Mixins/ExtendedPromises */ "./resources/js/lib/Mixins/ExtendedPromises.js");
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "register",
  inject: ["authRepository"],
  mixins: [(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default()), (_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default())],
  data: function data() {
    return {
      title: "Welcome back!",
      form: this.buildForm()
    };
  },
  mounted: function mounted() {},
  methods: {
    buildForm: function buildForm(auth) {
      return new vform__WEBPACK_IMPORTED_MODULE_2__.Form({
        name: auth ? auth.name : null,
        gender: auth ? auth.gender : null,
        email: auth ? auth.email : null,
        password: auth ? auth.password : null,
        password_confirmation: auth ? auth.password_confirmation : null,
        interested: auth ? auth.interested : null,
        city: auth ? auth.city : null,
        dobd: auth ? auth.dobd : null,
        dobm: auth ? auth.dobm : null,
        doby: auth ? auth.doby : null
      });
    },
    goToForgetPassword: function goToForgetPassword() {
      this.goToGivenRouteName("forget-password");
    },
    goToSignIn: function goToSignIn() {
      this.goToGivenRouteName("login");
    },
    goToGivenRouteName: function goToGivenRouteName(routeName) {
      this.$router.push({
        name: routeName
      });
    },
    register: function register() {
      var _this = this;

      var process;
      this.form.startProcessing();
      this.$store.dispatch("login");
      process = this.authRepository.register(this.form);
      var operation = this.response(process);
      operation.then(function (data) {
        if (operation.isFulfilled()) {
          _this.form.finishProcessing();

          if (data.status) {
            _this.$router.push("/login");

            _this.$toastr.s("", data.message);
          } else {
            _this.$toastr.e("", data.message);
          }
        }
      })["catch"](function (err) {
        if (operation.isRejected()) {
          if (err.status === 401) {
            _this.form.errors = err.data.body;
          }
        }

        _this.form.finishProcessing();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "join-free-banner banner-section pt-100"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "banner-grid"
};
var _hoisted_4 = {
  "class": "left-box"
};
var _hoisted_5 = {
  "class": "form-box"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-20 white txt-center"
}, " 100% Free To Join. Get Started Today! ", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "form-wrapper"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "I'm a...", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "radio-wrapper grid-3"
};
var _hoisted_10 = {
  "class": "button"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "radio-btn checktoggle",
  "for": "a1",
  "data-class": "setA"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-mars"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Male")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "button"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "radio-btn checktoggle",
  "for": "a2",
  "data-class": "setA"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-venus"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Female")], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "button"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "radio-btn checktoggle",
  "for": "a3",
  "data-class": "setA"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-transgender-alt"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Other")], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "I'm interested in meeting...", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "radio-wrapper grid-3"
};
var _hoisted_18 = {
  "class": "button"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "radio-btn checktoggle",
  "for": "a4",
  "data-class": "setB"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-mars"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Male")], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "button"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "radio-btn checktoggle",
  "for": "a5",
  "data-class": "setB"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-venus"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Female")], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "button"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "radio-btn checktoggle",
  "for": "a6",
  "data-class": "setB"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-transgender-alt"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Other")], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "grid-1"
};
var _hoisted_25 = {
  "class": "input-wrapper"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Your Full Name", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "grid-2"
};
var _hoisted_28 = {
  "class": "input-wrapper"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Your email", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "input-wrapper"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Where are you from?", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Birth Date", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "grid-3"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Day</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option>", 32);

var _hoisted_66 = [_hoisted_34];

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Month</option><option value=\"1\">January</option><option value=\"2\">Febuary</option><option value=\"3\">March</option><option value=\"4\">April</option><option value=\"5\">May</option><option value=\"6\">June</option><option value=\"7\">July</option><option value=\"8\">August</option><option value=\"9\">September</option><option value=\"10\">October</option><option value=\"11\">November</option><option value=\"12\">December</option>", 13);

var _hoisted_80 = [_hoisted_67];

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Year</option><option value=\"2011\">2011</option><option value=\"2010\">2010</option><option value=\"2009\">2009</option><option value=\"2008\">2008</option><option value=\"2007\">2007</option><option value=\"2006\">2006</option><option value=\"2005\">2005</option><option value=\"2004\">2004</option><option value=\"2003\">2003</option><option value=\"2002\">2002</option><option value=\"2001\">2001</option><option value=\"2000\">2000</option><option value=\"1999\">1999</option><option value=\"1998\">1998</option><option value=\"1997\">1997</option><option value=\"1996\">1996</option><option value=\"1995\">1995</option><option value=\"1994\">1994</option><option value=\"1993\">1993</option><option value=\"1992\">1992</option><option value=\"1991\">1991</option><option value=\"1990\">1990</option><option value=\"1989\">1989</option><option value=\"1988\">1988</option><option value=\"1987\">1987</option><option value=\"1986\">1986</option><option value=\"1985\">1985</option><option value=\"1984\">1984</option><option value=\"1983\">1983</option><option value=\"1982\">1982</option><option value=\"1981\">1981</option><option value=\"1980\">1980</option><option value=\"1979\">1979</option><option value=\"1978\">1978</option><option value=\"1977\">1977</option><option value=\"1976\">1976</option><option value=\"1975\">1975</option><option value=\"1974\">1974</option><option value=\"1973\">1973</option><option value=\"1972\">1972</option><option value=\"1971\">1971</option><option value=\"1970\">1970</option><option value=\"1969\">1969</option><option value=\"1968\">1968</option><option value=\"1967\">1967</option><option value=\"1966\">1966</option><option value=\"1965\">1965</option><option value=\"1964\">1964</option><option value=\"1963\">1963</option><option value=\"1962\">1962</option><option value=\"1961\">1961</option><option value=\"1960\">1960</option><option value=\"1959\">1959</option>", 54);

var _hoisted_135 = [_hoisted_81];

var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Password", -1
/* HOISTED */
);

var _hoisted_137 = {
  "class": "grid-2"
};
var _hoisted_138 = {
  "class": "input-wrapper"
};
var _hoisted_139 = {
  "class": "input-wrapper"
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " By continuing you agree to needz's terms and privacy policy. Promoting illegal commercial activities (such as prostitution) is strictly prohibited. Users must be at least 18 years old. ", -1
/* HOISTED */
);

var _hoisted_141 = {
  "class": "btn-wrapper mt-20"
};

var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"right-box\"><div class=\"font-22 txt-right black\"> Millions of Possibilities and Opportunities Await You on Needz.... </div><div class=\"font-20 txt-right primary mt-20\">Date Your Choice!</div><div class=\"img-wrapper\"><img src=\"/needz/assets/images/banner-couple.png\" alt=\"Needz couple\" class=\"banner-img img-responsive\"></div></div>", 1);

var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"first-section pt-100 pb-100\"><div class=\"container\"><div class=\"title-wrapper mt-70 mobile-mt-0\"><h2 class=\"black txt-center\">Why Choose Us?</h2><div class=\"bottom-border bg-gradient\"></div></div><div class=\"choose-wrapper mt-50\"><div class=\"choose-box\"><div class=\"oval\"></div><img src=\"/needz/assets/images/people-svgrepo-com.svg\" alt=\"People icon\" class=\"icon\"><div class=\"title\">ENDLESS POSSIBILITIES</div><p> Whatever NEED is possible at NEEDZ. Be prepared to constantly be surprised and satisfied. </p></div><div class=\"choose-box\"><div class=\"oval\"></div><img src=\"/needz/assets/images/calendar-date-svgrepo-com.svg\" alt=\"People icon\" class=\"icon\"><div class=\"title\">EVOLUTION OF DATING</div><p> Socieity demands new methods of dating preferences and styles. We at NEEDZ look to be a part of this movement and evolution. </p></div><div class=\"choose-box\"><div class=\"oval\"></div><img src=\"/needz/assets/images/relationship-counseling.svg\" alt=\"People icon\" class=\"icon\"><div class=\"title\">REALISTIC RELATIONSHIPS</div><p> Find relationships based on the NEEDZ you have that are understood and align with those you interact with. </p></div><div class=\"choose-box\"><div class=\"oval\"></div><img src=\"/needz/assets/images/find-location-svgrepo-com.svg\" alt=\"People icon\" class=\"icon\"><div class=\"title\">UPGRADE YOUR DATING</div><p> Meet Successful and Attractive individuals who know what they Want and Need. </p></div></div></div></section>", 1);

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"gradient-section pt-100 pb-200\"><div class=\"container\"><div class=\"title-wrapper\"><h2 class=\"white txt-center\">How It Works</h2><div class=\"bottom-border bg-white\"></div><p class=\"white mt-20 txt-center\"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor, sit amet consectetur adipisicing quas! </p></div><div class=\"grid-4 mt-70\"><div class=\"column align-center\"><img src=\"/needz/assets/images/add-with-pen-tool-svgrepo-com.svg\" alt=\"pen icon\" class=\"icon\"><h3 class=\"font-20 mt-20 white txt-center\"> Register on our website </h3></div><div class=\"column align-center\"><img src=\"/needz/assets/images/edit-profile-svgrepo-com.svg\" alt=\"pen icon\" class=\"icon\"><h3 class=\"font-20 mt-20 white txt-center\"> Add information about yourself </h3></div><div class=\"column align-center\"><img src=\"/needz/assets/images/people-svgrepo-com.svg\" alt=\"pen icon\" class=\"icon\"><h3 class=\"font-20 mt-20 white txt-center\"> Analyze the list of people </h3></div><div class=\"column align-center\"><img src=\"/needz/assets/images/heart-svgrepo-com.svg\" alt=\"pen icon\" class=\"icon\"><h3 class=\"font-20 mt-20 white txt-center\">Find your LOVE</h3></div></div><div class=\"title-wrapper mt-100\"><h2 class=\"white txt-center\">Thousands of People</h2><div class=\"bottom-border bg-white\"></div></div><div class=\"profile-wrapper grid-4 mt-70\"><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/girl1.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/boy1.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/girl2.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/boy2.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/girl3.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/boy3.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/girl4.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div><div><a href=\"user.php\" title=\"Person01\"><div class=\"profile-box\"><img src=\"/needz/assets/images/boy4.png\" alt=\"Girl\" class=\"img-responsive\"><div class=\"overlay\"></div><div class=\"details-wrapper\"><div class=\"name white\">Anna 19</div><div class=\"location white\"><i class=\"fas fa-search-location\"></i>University of San Francisco </div><div class=\"distance white\"><i class=\"fas fa-people-arrows\"></i>1 mile away </div></div></div></a></div></div></div></section>", 1);

var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"price-section bg-white pb-100\"><div class=\"container\"><div class=\"title-wrapper\"><h1 class=\"black txt-center\">Our Plans</h1><div class=\"bottom-border bg-gradient\"></div></div><div class=\"price-grid mt-70\"><div class=\"price-module\"><div class=\"title-wrapper\"><div class=\"title txt-center\">Starter</div></div><div class=\"arrow-up\"></div><div><ul><li><div class=\"list-item\">Personal Care</div></li><li><div class=\"list-item\">Food Brands</div></li><li><div class=\"list-item\">Greeting Cards</div></li><li><div class=\"list-item\">Hygienic Services</div></li></ul></div><div class=\"btn-wrapper mt-30\"><a href=\"#\" title=\"Start now\" class=\"btn btn-white flex justify-center hvr-sweep-to-right\">Start now</a></div></div><div class=\"price-module\"><div class=\"title-wrapper\"><div class=\"title txt-center\">Small</div></div><div class=\"arrow-up\"></div><div><ul><li><div class=\"list-item\">People Chain</div></li><li><div class=\"list-item\">Safe Community</div></li><li><div class=\"list-item\">Events Organized</div></li><li><div class=\"list-item\">18+ Allowed</div></li><li><div class=\"list-item\">100% Guarantee</div></li><li><div class=\"list-item\">Lorem Ipsum</div></li><li><div class=\"list-item\">Brands</div></li></ul></div><div class=\"btn-wrapper mt-30\"><a href=\"#\" title=\"Start now\" class=\"btn btn-white flex justify-center hvr-sweep-to-right\">Start now</a></div></div><div class=\"price-module\"><div class=\"title-wrapper\"><div class=\"title txt-center\">Pro</div></div><div class=\"arrow-up\"></div><div><ul><li><div class=\"list-item\">Personal Care</div></li><li><div class=\"list-item\">Food Brands</div></li><li><div class=\"list-item\">Successful Love</div></li></ul></div><div class=\"btn-wrapper mt-30\"><a href=\"#\" title=\"Start now\" class=\"btn btn-white flex justify-center hvr-sweep-to-right\">Start now</a></div></div></div></div></section>", 1);

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"newsletter-section pt-70 pb-70 bg-grey\"><div class=\"container\"><div class=\"title-wrapper\"><h2 class=\"black txt-center\">Subscribe Our Newsletter</h2><p class=\"mt-20 txt-center\"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div><div class=\"input-box\"><div class=\"input-wrapper\"><input type=\"email\" class=\"my-input\" placeholder=\"Enter your email\"></div><div class=\"btn-wrapper\"><a href=\"#\" title=\"Subscribe\" class=\"btn btn-white uppercase hvr-sweep-to-right\">Subscribe</a></div></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BANNER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "a1",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.gender = $event;
    }),
    value: "m"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.gender]]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "a2",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.gender = $event;
    }),
    value: "f"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.gender]]), _hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "a3",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.gender = $event;
    }),
    value: "o"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.gender]]), _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("gender")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('gender')]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "a4",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.interested = $event;
    }),
    value: "m"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.interested]]), _hoisted_19]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "a5",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.interested = $event;
    }),
    value: "f"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.interested]]), _hoisted_21]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "a6",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.interested = $event;
    }),
    value: "o"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.interested]]), _hoisted_23]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("interested")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('interested')]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "my-input",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.name = $event;
    }),
    placeholder: "Enter your name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("name")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('name')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": "my-input",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.email = $event;
    }),
    placeholder: "Enter a valid email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("email")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('email')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "my-input",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.city = $event;
    }),
    placeholder: "Enter your city"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.city]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("city")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('city')]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "minimal my-input",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.dobd = $event;
    })
  }, _hoisted_66, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.dobd]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "minimal my-input",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.dobm = $event;
    })
  }, _hoisted_80, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.dobm]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "minimal my-input",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.doby = $event;
    })
  }, _hoisted_135, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.doby]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("dob")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('dob')]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_136, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.password = $event;
    }),
    "class": "my-input",
    placeholder: "Enter your password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("password")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('password')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.password_confirmation = $event;
    }),
    "class": "my-input",
    placeholder: "Confirm your password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password_confirmation]])])])]), _hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0);",
    onClick: _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.register && $options.register.apply($options, arguments);
    }, ["prevent"])),
    title: "Submit Now",
    "class": "btn gradient-btn hvr-sweep-to-right"
  }, "SUBMIT NOW")])])])])]), _hoisted_142])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FIRST SECTION "), _hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GRADIENT SECTION "), _hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PLANS "), _hoisted_145, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NEWSLETTER "), _hoisted_146], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/lib/Mixins/Alert.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Alert.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = {
  methods: {
    alert: function alert(options) {
      swal.fire(options);
    },
    success: function success() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? "Success!" : _ref$title,
          _ref$text = _ref.text,
          text = _ref$text === void 0 ? "That's all done!" : _ref$text,
          _ref$timer = _ref.timer,
          timer = _ref$timer === void 0 ? 1000 : _ref$timer,
          _ref$showConfirmation = _ref.showConfirmationButton,
          showConfirmationButton = _ref$showConfirmation === void 0 ? false : _ref$showConfirmation;

      this.alert({
        title: title,
        text: text,
        timer: timer,
        showConfirmButton: showConfirmationButton,
        type: 'success'
      });
    },
    error: function error() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? "Error!" : _ref2$title,
          _ref2$text = _ref2.text,
          text = _ref2$text === void 0 ? "Oops...Something went wrong" : _ref2$text;

      this.alert({
        title: title,
        text: text,
        type: 'error'
      });
    },
    confirm: function confirm(callback, options, title, text) {
      options = Object.assign({
        title: title || "Are you sure?",
        text: text || "Are you sure you want to do that?",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes" // closeOnConfirm: false

      }, options);
      this.$swal.fire(options).then(callback);
    }
  }
};

/***/ }),

/***/ "./resources/js/views/auth/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_005be7bb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=005be7bb */ "./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb");
/* harmony import */ var _register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js */ "./resources/js/views/auth/register.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_register_vue_vue_type_template_id_005be7bb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/auth/register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/auth/register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/auth/register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb":
/*!****************************************************************************!*\
  !*** ./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_template_id_005be7bb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_template_id_005be7bb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./register.vue?vue&type=template&id=005be7bb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb");


/***/ })

}]);