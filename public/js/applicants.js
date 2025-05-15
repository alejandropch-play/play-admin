(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/applicants"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Applicants.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_form_InputArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/InputArray */ "./resources/js/components/form/InputArray.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    InputArray: _components_form_InputArray__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      applicants: {},
      applicant: {},
      information: {
        email_destination_job: [],
        email_destination_job_formatted: [""]
      },
      editEmailBlock: false,
      requestServer: false,
      errors: {},
      elPerPage: 20
    };
  },
  methods: _defineProperty(_defineProperty({
    restorePage: function restorePage() {
      this.applicant = this.applicants = {};
      this.requestServer = false;
      this.getApplicants(1, this.elPerPage);
      this.$refs["modal-show"].hide();
      this.$refs["modal-delete"].hide();
      this.errors = {};
    },
    restoreEl: function restoreEl() {
      this.applicant = {};
      this.$refs["modal-show"].hide();
      this.$refs["modal-delete"].hide();
      this.errors = {};
    },
    deleteApplicant: function deleteApplicant(id) {
      this.getApplicant(id);
      this.$refs["modal-delete"].show();
    },
    showApplicant: function showApplicant(id) {
      this.$refs["modal-show"].show();
      this.getApplicant(id);
    },
    getApplicant: function getApplicant(id) {
      var _this = this;
      axios.get("json/applicants/" + id).then(function (response) {
        _this.applicant = response.data;
      })["catch"](function (error) {});
    },
    getApplicants: function getApplicants(pagina, desde) {
      var _this2 = this;
      var buscar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "json/applicants?page=" + pagina + "&desde=" + desde;
      if (buscar) {
        url = url + "&buscar=" + buscar;
      }
      axios.get(url).then(function (response) {
        _this2.applicants = response.data;
      })["catch"](function (error) {});
    },
    deleteApplicantConfirm: function deleteApplicantConfirm() {
      var _this3 = this;
      this.requestServer = true;
      axios["delete"]("applicants/" + this.applicant.id).then(function (response) {
        _this3.restorePage();
        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      })["catch"](function (error) {
        _this3.restoreEl();
        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    restoreEmail: function restoreEmail() {
      this.information = {
        email_destination_job: [],
        email_destination_job_formatted: [""]
      };
      this.editEmailBlock = false;
      this.getContactEmailDestination();
    },
    getContactEmailDestination: function getContactEmailDestination() {
      var _this4 = this;
      axios.get("applicants/json/contact-email-destination").then(function (response) {
        if (response.data.id) {
          _this4.information = response.data;
        }
      })["catch"](function (error) {});
    },
    editEmailDestination: function editEmailDestination() {
      this.editEmailBlock = true;
    }
  }, "restoreEmail", function restoreEmail() {
    this.requestServer = this.editEmailBlock = false;
    this.errors = {};
    this.information = {
      email_destination_job: [],
      email_destination_job_formatted: [""]
    };
    this.getContactEmailDestination();
  }), "updateEmail", function updateEmail() {
    var _this5 = this;
    this.requestServer = true;
    axios.put("applicants", this.information).then(function (response) {
      _this5.requestServer = false;
      _this5.restoreEmail();
      Swal.fire({
        title: response.data.title,
        text: response.data.message,
        type: "success",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-primary"
        }
      });
    })["catch"](function (error) {
      _this5.requestServer = false;
      if (error.response.status === 422) {
        _this5.errors = error.response.data.errors || {};
        return;
      }
      _this5.restorePage();
      Swal.fire({
        title: error.response.data.title,
        text: error.response.data.message,
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-primary"
        }
      });
    });
  }),
  created: function created() {
    this.getApplicants(1, this.elPerPage);
    this.getContactEmailDestination();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0 ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "header pb-6"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "header-body"
  }, [_c("div", {
    staticClass: "row align-items-center py-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("BreadCrumb", {
    attrs: {
      title: "Postulantes",
      active: "Postulantes"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid mt--6"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mb-4"
  }, [_c("DataTable", {
    attrs: {
      placeholder: "Nombre Completo, Puesto",
      object: _vm.applicants,
      buttonRead: true,
      entradasProp: _vm.elPerPage,
      buttonUpdate: false,
      buttonDelete: true
    },
    on: {
      "update:object": function updateObject($event) {
        _vm.applicants = $event;
      },
      "delete": _vm.deleteApplicant,
      read: _vm.showApplicant,
      get: _vm.getApplicants
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card shadow"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateEmail.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Correos")]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.editEmailBlock,
      expression: "editEmailBlock"
    }]
  }, [_c("InputArray", {
    attrs: {
      arreglo: _vm.information.email_destination_job,
      "arreglo-editar": _vm.information.email_destination_job_formatted
    },
    on: {
      "update:arreglo": function updateArreglo($event) {
        return _vm.$set(_vm.information, "email_destination_job", $event);
      }
    }
  }), _vm._v(" "), _vm.errors && Object.keys(_vm.errors).length ? _c("label", {
    staticClass: "mt-2 mb-0 text-danger text-sm",
    attrs: {
      "for": "id_email_destination_job"
    }
  }, [_vm._v("\n                            Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida.\n                          ")]) : _vm._e()], 1), _vm._v(" "), !_vm.editEmailBlock ? _c("div", [_vm.information.email_destination_job && _vm.information.email_destination_job.length > 0 ? _c("div", _vm._l(_vm.information.email_destination_job_formatted, function (element, index) {
    return _c("p", {
      key: index,
      staticClass: "d-block mb-1"
    }, [_vm._v(_vm._s(element))]);
  }), 0) : _c("p", [_vm._v("No registrado")])]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [!_vm.editEmailBlock ? _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.editEmailDestination.apply(null, arguments);
      }
    }
  }, [_vm._v("Editar")]) : _vm._e(), _vm._v(" "), _vm.editEmailBlock ? _c("Button", {
    attrs: {
      text: "Actualizar",
      classes: ["btn-primary", "mr-2"],
      "request-server": _vm.requestServer,
      º: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.editEmailBlock ? _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.restoreEmail.apply(null, arguments);
      }
    }
  }, [_vm._v("Cancelar")]) : _vm._e()], 1)])])])])])])])]), _vm._v(" "), _c("b-modal", {
    ref: "modal-show",
    attrs: {
      centered: "",
      size: "lg"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var ok = _ref.ok,
          cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button"
          },
          on: {
            click: _vm.restoreEl
          }
        }, [_vm._v("Cerrar")])];
      }
    }])
  }, [_c("template", {
    slot: "modal-title"
  }, [_c("h2", {
    staticClass: "mb-0 mb-0 text-uppercase text-primary"
  }, [_vm._v("Detalle Postulante")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label d-block"
  }, [_vm._v("Nombre Completo")]), _vm._v(" "), _vm.applicant.full_name ? _c("p", [_vm._v(_vm._s(_vm.applicant.full_name))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label d-block"
  }, [_vm._v("Teléfono")]), _vm._v(" "), _vm.applicant.phone ? _c("p", [_vm._v(_vm._s(_vm.applicant.phone))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label d-block"
  }, [_vm._v("Correo Electrónico")]), _vm._v(" "), _vm.applicant.email ? _c("p", [_vm._v(_vm._s(_vm.applicant.email))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label d-block"
  }, [_vm._v("Puesto")]), _vm._v(" "), _vm.applicant.job ? _c("p", [_vm._v(_vm._s(_vm.applicant.job))]) : _c("p", [_vm._v("No registrado")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label d-block"
  }, [_vm._v("PDF")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.applicant.pdf_formatted)
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label d-block"
  }, [_vm._v("Registrado el")]), _vm._v(" "), _vm.applicant.created_at ? _c("p", [_vm._v(_vm._s(_vm.applicant.created_at))]) : _vm._e()])])])], 2), _vm._v(" "), _c("b-modal", {
    ref: "modal-delete",
    attrs: {
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref2) {
        var ok = _ref2.ok,
          cancel = _ref2.cancel;
        return [_c("Button", {
          attrs: {
            classes: ["btn-danger"],
            text: "Eliminar",
            "request-server": _vm.requestServer
          },
          on: {
            click: _vm.deleteApplicantConfirm
          }
        }), _vm._v(" "), _c("button", {
          staticClass: "btn btn-secondary",
          attrs: {
            type: "button"
          },
          on: {
            click: _vm.restoreEl
          }
        }, [_vm._v("Cancelar")])];
      }
    }])
  }, [_c("template", {
    slot: "modal-title"
  }, [_c("h2", {
    staticClass: "mb-0 mb-0 text-uppercase text-primary"
  }, [_vm._v("Eliminar Postulante")])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Esta seguro que desea eliminar el postulante?")])], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header border-0"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Correos Destino")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/Applicants.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Applicants.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applicants_vue_vue_type_template_id_a24380e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Applicants.vue?vue&type=template&id=a24380e0 */ "./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0");
/* harmony import */ var _Applicants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Applicants.vue?vue&type=script&lang=js */ "./resources/js/views/Applicants.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Applicants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Applicants_vue_vue_type_template_id_a24380e0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Applicants_vue_vue_type_template_id_a24380e0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Applicants.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Applicants.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Applicants.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Applicants.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0 ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_template_id_a24380e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Applicants.vue?vue&type=template&id=a24380e0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_template_id_a24380e0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_template_id_a24380e0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);