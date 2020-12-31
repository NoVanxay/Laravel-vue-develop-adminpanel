(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('HistoryAdminTeachersSingle', ['entry', 'loading', 'lists'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('HistoryAdminTeachersSingle', ['fetchEditData', 'updateData', 'resetState', 'setTitle', 'insertPhotoFile', 'removePhotoFile', 'setFistName', 'setLastName', 'setGender', 'setEngName', 'setEngLast', 'setDob', 'setTxt', 'setTribes', 'setReligion', 'setPabbajja', 'setIdentificationCard', 'setProvinceBirth', 'setDistrictBirth', 'setVillageBirth', 'setCurrentPro', 'setCurrentDist', 'setCurrentVill', 'setTemple', 'setPhoneNo', 'setPhoneMobile', 'setOfficeNo', 'setCensus', 'setAllowDate', 'setAt'])), {}, {
    updateTitle: function updateTitle(e) {
      this.setTitle(e.target.value);
    },
    updateFistName: function updateFistName(e) {
      this.setFistName(e.target.value);
    },
    updateLastName: function updateLastName(e) {
      this.setLastName(e.target.value);
    },
    updateGender: function updateGender(value) {
      this.setGender(value);
    },
    updateEngName: function updateEngName(e) {
      this.setEngName(e.target.value);
    },
    updateEngLast: function updateEngLast(e) {
      this.setEngLast(e.target.value);
    },
    updateDob: function updateDob(e) {
      this.setDob(e.target.value);
    },
    updateTxt: function updateTxt(e) {
      this.setTxt(e.target.value);
    },
    updateTribes: function updateTribes(e) {
      this.setTribes(e.target.value);
    },
    updateReligion: function updateReligion(e) {
      this.setReligion(e.target.value);
    },
    updatePabbajja: function updatePabbajja(e) {
      this.setPabbajja(e.target.value);
    },
    updateIdentificationCard: function updateIdentificationCard(e) {
      this.setIdentificationCard(e.target.value);
    },
    updateProvinceBirth: function updateProvinceBirth(e) {
      this.setProvinceBirth(e.target.value);
    },
    updateDistrictBirth: function updateDistrictBirth(e) {
      this.setDistrictBirth(e.target.value);
    },
    updateVillageBirth: function updateVillageBirth(e) {
      this.setVillageBirth(e.target.value);
    },
    updateCurrentPro: function updateCurrentPro(e) {
      this.setCurrentPro(e.target.value);
    },
    updateCurrentDist: function updateCurrentDist(e) {
      this.setCurrentDist(e.target.value);
    },
    updateCurrentVill: function updateCurrentVill(e) {
      this.setCurrentVill(e.target.value);
    },
    updateTemple: function updateTemple(e) {
      this.setTemple(e.target.value);
    },
    updatePhoneNo: function updatePhoneNo(e) {
      this.setPhoneNo(e.target.value);
    },
    updatePhoneMobile: function updatePhoneMobile(e) {
      this.setPhoneMobile(e.target.value);
    },
    updateOfficeNo: function updateOfficeNo(e) {
      this.setOfficeNo(e.target.value);
    },
    updateCensus: function updateCensus(e) {
      this.setCensus(e.target.value);
    },
    updateAllowDate: function updateAllowDate(e) {
      this.setAllowDate(e.target.value);
    },
    updateAt: function updateAt(e) {
      this.setAt(e.target.value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.updateData().then(function () {
        _this.$router.push({
          name: 'history_admin_teachers.index'
        });

        _this.$eventHub.$emit('update-success');
      })["catch"](function (error) {
        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=template&id=e7631dfc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=template&id=e7631dfc& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header card-header-primary card-header-icon"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.$t("global.edit")) +
                        "\n              "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm.$t("cruds.historyAdminTeacher.title_singular")
                        )
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [_c("back-button")], 1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("bootstrap-alert"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.title,
                            "is-focused": _vm.activeField == "title"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.title"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.title },
                            on: {
                              input: _vm.updateTitle,
                              focus: function($event) {
                                return _vm.focusField("title")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(
                              _vm._s(
                                _vm.$t("cruds.historyAdminTeacher.fields.photo")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("attachment", {
                            attrs: {
                              route: _vm.getRoute("history-admin-teachers"),
                              "collection-name": "history_admin_teacher_photo",
                              media: _vm.entry.photo,
                              "model-id": _vm.$route.params.id,
                              "max-file-size": 4,
                              component: "pictures",
                              accept: "image/*",
                              "max-files": 1
                            },
                            on: {
                              "file-uploaded": _vm.insertPhotoFile,
                              "file-removed": _vm.removePhotoFile
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.fist_name,
                            "is-focused": _vm.activeField == "fist_name"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.fist_name"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.fist_name },
                            on: {
                              input: _vm.updateFistName,
                              focus: function($event) {
                                return _vm.focusField("fist_name")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.last_name,
                            "is-focused": _vm.activeField == "last_name"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.last_name"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.last_name },
                            on: {
                              input: _vm.updateLastName,
                              focus: function($event) {
                                return _vm.focusField("last_name")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "required" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "cruds.historyAdminTeacher.fields.gender"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-radio", {
                            attrs: {
                              value: _vm.entry.gender,
                              options: _vm.lists.gender
                            },
                            on: { change: _vm.updateGender }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.eng_name,
                            "is-focused": _vm.activeField == "eng_name"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.eng_name"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.eng_name },
                            on: {
                              input: _vm.updateEngName,
                              focus: function($event) {
                                return _vm.focusField("eng_name")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.eng_last,
                            "is-focused": _vm.activeField == "eng_last"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.eng_last"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.eng_last },
                            on: {
                              input: _vm.updateEngLast,
                              focus: function($event) {
                                return _vm.focusField("eng_last")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.dob,
                            "is-focused": _vm.activeField == "dob"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.historyAdminTeacher.fields.dob")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("datetime-picker", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              picker: "date",
                              value: _vm.entry.dob,
                              required: ""
                            },
                            on: {
                              input: _vm.updateDob,
                              focus: function($event) {
                                return _vm.focusField("dob")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.txt,
                            "is-focused": _vm.activeField == "txt"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.historyAdminTeacher.fields.txt")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.txt },
                            on: {
                              input: _vm.updateTxt,
                              focus: function($event) {
                                return _vm.focusField("txt")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.tribes,
                            "is-focused": _vm.activeField == "tribes"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.tribes"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.tribes },
                            on: {
                              input: _vm.updateTribes,
                              focus: function($event) {
                                return _vm.focusField("tribes")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.religion,
                            "is-focused": _vm.activeField == "religion"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.religion"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.religion },
                            on: {
                              input: _vm.updateReligion,
                              focus: function($event) {
                                return _vm.focusField("religion")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.pabbajja,
                            "is-focused": _vm.activeField == "pabbajja"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "cruds.historyAdminTeacher.fields.pabbajja"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("datetime-picker", {
                            staticClass: "form-control",
                            attrs: { type: "text", value: _vm.entry.pabbajja },
                            on: {
                              input: _vm.updatePabbajja,
                              focus: function($event) {
                                return _vm.focusField("pabbajja")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.identification_card,
                            "is-focused":
                              _vm.activeField == "identification_card"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.identification_card"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.identification_card },
                            on: {
                              input: _vm.updateIdentificationCard,
                              focus: function($event) {
                                return _vm.focusField("identification_card")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.province_birth,
                            "is-focused": _vm.activeField == "province_birth"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.province_birth"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.province_birth },
                            on: {
                              input: _vm.updateProvinceBirth,
                              focus: function($event) {
                                return _vm.focusField("province_birth")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.district_birth,
                            "is-focused": _vm.activeField == "district_birth"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.district_birth"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.district_birth },
                            on: {
                              input: _vm.updateDistrictBirth,
                              focus: function($event) {
                                return _vm.focusField("district_birth")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.village_birth,
                            "is-focused": _vm.activeField == "village_birth"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.village_birth"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.village_birth },
                            on: {
                              input: _vm.updateVillageBirth,
                              focus: function($event) {
                                return _vm.focusField("village_birth")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.current_pro,
                            "is-focused": _vm.activeField == "current_pro"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.current_pro"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.current_pro },
                            on: {
                              input: _vm.updateCurrentPro,
                              focus: function($event) {
                                return _vm.focusField("current_pro")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.current_dist,
                            "is-focused": _vm.activeField == "current_dist"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.current_dist"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.current_dist },
                            on: {
                              input: _vm.updateCurrentDist,
                              focus: function($event) {
                                return _vm.focusField("current_dist")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.current_vill,
                            "is-focused": _vm.activeField == "current_vill"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.current_vill"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.current_vill },
                            on: {
                              input: _vm.updateCurrentVill,
                              focus: function($event) {
                                return _vm.focusField("current_vill")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.temple,
                            "is-focused": _vm.activeField == "temple"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.temple"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.temple },
                            on: {
                              input: _vm.updateTemple,
                              focus: function($event) {
                                return _vm.focusField("temple")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.phone_no,
                            "is-focused": _vm.activeField == "phone_no"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.phone_no"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "number", step: "1", required: "" },
                            domProps: { value: _vm.entry.phone_no },
                            on: {
                              input: _vm.updatePhoneNo,
                              focus: function($event) {
                                return _vm.focusField("phone_no")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.phone_mobile,
                            "is-focused": _vm.activeField == "phone_mobile"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "cruds.historyAdminTeacher.fields.phone_mobile"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "number", step: "1" },
                            domProps: { value: _vm.entry.phone_mobile },
                            on: {
                              input: _vm.updatePhoneMobile,
                              focus: function($event) {
                                return _vm.focusField("phone_mobile")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.office_no,
                            "is-focused": _vm.activeField == "office_no"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "cruds.historyAdminTeacher.fields.office_no"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "number", step: "1" },
                            domProps: { value: _vm.entry.office_no },
                            on: {
                              input: _vm.updateOfficeNo,
                              focus: function($event) {
                                return _vm.focusField("office_no")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.census,
                            "is-focused": _vm.activeField == "census"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.historyAdminTeacher.fields.census"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "number", step: "1", required: "" },
                            domProps: { value: _vm.entry.census },
                            on: {
                              input: _vm.updateCensus,
                              focus: function($event) {
                                return _vm.focusField("census")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.allow_date,
                            "is-focused": _vm.activeField == "allow_date"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "cruds.historyAdminTeacher.fields.allow_date"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("datetime-picker", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              picker: "date",
                              value: _vm.entry.allow_date
                            },
                            on: {
                              input: _vm.updateAllowDate,
                              focus: function($event) {
                                return _vm.focusField("allow_date")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.at,
                            "is-focused": _vm.activeField == "at"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.historyAdminTeacher.fields.at")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.at },
                            on: {
                              input: _vm.updateAt,
                              focus: function($event) {
                                return _vm.focusField("at")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _c(
                    "vue-button-spinner",
                    {
                      staticClass: "btn-primary",
                      attrs: {
                        status: _vm.status,
                        isLoading: _vm.loading,
                        disabled: _vm.loading
                      }
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.$t("global.save")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-icon" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("edit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue":
/*!*******************************************************************!*\
  !*** ./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_e7631dfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=e7631dfc& */ "./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=template&id=e7631dfc&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_e7631dfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_e7631dfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=template&id=e7631dfc&":
/*!**************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=template&id=e7631dfc& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_e7631dfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=e7631dfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/HistoryAdminTeachers/Edit.vue?vue&type=template&id=e7631dfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_e7631dfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_e7631dfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);