(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/general"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/General.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/General.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partners */ "./resources/js/views/info/Partners.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
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
//import Footer from "../../componentes/Footer"




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Boton: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    Partners: _Partners__WEBPACK_IMPORTED_MODULE_1__["default"],
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"] //Footer

  },
  data: function data() {
    return {
      informacion: {
        description: "",
        district: "",
        phone: "",
        cellphone: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        country_mexico: "",
        country_ecuador: "",
        country_peru: "",
        country_eeuu: ""
      },
      errores: {},
      requestServer: false,
      inicioBloque: true,
      editarBloque: false,
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], [{
              indent: "-1"
            }, {
              indent: "+1"
            }], [{
              size: [false]
            }], [{
              header: [1, 2, 3, 4, 5, false]
            }], [{
              font: [false]
            }], [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], ["link"]]
          }
        }
      }
    };
  },
  methods: {
    actualizarInformacion: function actualizarInformacion() {
      var _this = this;

      this.requestServer = true;
      fetch('https://apirestful.playgroup.pe/api/admin/update_general_info_countries', {
        method: 'PUT',
        headers: {
          "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_objectSpread({}, this.informacion))
      }).then(function (response) {
        _this.restablecerPagina();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      })["catch"](function (err) {
        return console.error(err);
      });
      axios.post("/informacion/general", this.informacion).then(function (response) {
        _this.requestServer = false;
      })["catch"](function (error) {
        _this.requestServer = false;

        if (error.response.status === 422) {
          _this.errores = error.response.data.errors || {};
          return;
        }

        _this.restablecerPagina();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    restablecerPagina: function restablecerPagina() {
      this.informacion = {
        description: "",
        district: "",
        phone: "",
        cellphone: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        country_mexico: "",
        country_ecuador: "",
        country_peru: "",
        country_eeuu: ""
      };
      this.errores = {};
      this.inicioBloque = true, this.editarBloque = false;
      this.obtenerInformacion();
    },
    editarInformacion: function editarInformacion() {
      this.inicioBloque = false;
      this.editarBloque = true;
    },
    obtenerInformacion: function obtenerInformacion() {
      var _this2 = this;

      axios.get("json/informacion").then(function (response) {
        _this2.informacion = response.data;
        fetch('https://apirestful.playgroup.pe/api/admin/update_general_info_countries', {
          method: 'GET',
          headers: {
            "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S",
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this2.informacion.country_mexico = data.data[0].location;
          _this2.informacion.country_ecuador = data.data[1].location;
          _this2.informacion.country_peru = data.data[2].location;
          _this2.informacion.country_eeuu = data.data[3].location;
        });
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.obtenerInformacion();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Partners.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Partners.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      elements: {},
      element: {
        name: "",
        image: ""
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },
      errors: {},
      startBlock: true,
      requestServer: false
    };
  },
  methods: {
    closeModal: function closeModal() {
      this.errors = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.element = {
        name: "",
        image: ""
      };
    },
    restorePage: function restorePage() {
      this.errors = {};
      this.elements = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.element = {
        name: "",
        image: ""
      };
      this.getElements();
    },
    createElement: function createElement() {
      var _this = this;

      this.requestServer = true;
      var fd = new FormData();

      if (this.element.name) {
        fd.append("name", this.element.name);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      axios.post("partners", fd).then(function (response) {
        _this.restorePage();

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
        _this.requestServer = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
          return;
        }

        _this.closeModal();

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
    orderElements: function orderElements(elements) {
      var _this2 = this;

      axios.put("partners/order", elements).then(function (response) {
        _this2.restorePage();

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
    editElement: function editElement(id) {
      this.$refs["modal-edit"].show();
      this.getElement(id);
    },
    updateElement: function updateElement() {
      var _this3 = this;

      this.requestServer = true;
      var fd = new FormData();

      if (this.element.name) {
        fd.append("name", this.element.name);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios.post("partners/" + this.element.id, fd).then(function (response) {
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
        _this3.requestServer = false;

        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors || {};
          return;
        }

        _this3.closeModal();

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
    deleteElementConfirm: function deleteElementConfirm() {
      var _this4 = this;

      this.requestServer = true;
      axios["delete"]("partners/" + this.element.id).then(function (response) {
        _this4.restorePage();

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
        _this4.closeModal();

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
    deteleElement: function deteleElement(id) {
      this.$refs["modal-delete"].show();
      this.getElement(id);
    },
    getElement: function getElement(id) {
      var _this5 = this;

      axios.get("json/partners/" + id).then(function (response) {
        _this5.element = response.data;
      })["catch"](function (error) {});
    },
    newElement: function newElement() {
      this.$refs["modal-create"].show();
    },
    getElements: function getElements() {
      var _this6 = this;

      axios.get("json/partners").then(function (response) {
        _this6.elements = response.data;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getElements();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/General.vue?vue&type=template&id=6d366534&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/General.vue?vue&type=template&id=6d366534& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "header pb-6" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "header-body" }, [
          _c(
            "div",
            { staticClass: "row align-items-center pt-0 pt-md-2 pb-4" },
            [
              _c(
                "div",
                { staticClass: "col-6 col-md-7" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: "General",
                      parent: "Información",
                      active: "General"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
                _vm.inicioBloque
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-icon btn-neutral",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.editarInformacion($event)
                          }
                        }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v("Editar Informacion")
                        ])
                      ]
                    )
                  : _vm._e()
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container-fluid mt--6" },
      [
        _vm.inicioBloque
          ? _c("div", { staticClass: "card shadow mb-4" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Descripción")
                      ]),
                      _vm._v(" "),
                      _vm.informacion.description
                        ? _c("p", [_vm._v(_vm._s(_vm.informacion.description))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _vm.informacion.email
                        ? _c("p", [_vm._v(_vm._s(_vm.informacion.email))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.editarBloque
          ? _c("div", { staticClass: "card shadow mb-4" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.actualizarInformacion($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_description" }
                            },
                            [_vm._v("Descripción")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.informacion.description,
                                expression: "informacion.description"
                              }
                            ],
                            staticClass:
                              "form-control form-control-alternative mb-2",
                            attrs: {
                              type: "text",
                              id: "id_description",
                              placeholder: "Descripción",
                              rows: "3"
                            },
                            domProps: { value: _vm.informacion.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.informacion,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errores && _vm.errores.description
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 mb-2 text-danger text-sm",
                                  attrs: { for: "id_description" }
                                },
                                [_vm._v(_vm._s(_vm.errores.description[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_phone" }
                            },
                            [_vm._v("Teléfono")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.informacion.phone,
                                expression: "informacion.phone"
                              }
                            ],
                            staticClass:
                              "form-control form-control-alternative mb-2",
                            attrs: {
                              type: "text",
                              id: "id_phone",
                              placeholder: "Teléfono"
                            },
                            domProps: { value: _vm.informacion.phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.informacion,
                                  "phone",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errores && _vm.errores.phone
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 mb-2 text-danger text-sm",
                                  attrs: { for: "id_phone" }
                                },
                                [_vm._v(_vm._s(_vm.errores.phone[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_cellphone" }
                            },
                            [_vm._v("Móvil")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.informacion.cellphone,
                                expression: "informacion.cellphone"
                              }
                            ],
                            staticClass:
                              "form-control form-control-alternative mb-2",
                            attrs: {
                              type: "text",
                              placeholder: "Móvil",
                              id: "id_cellphone"
                            },
                            domProps: { value: _vm.informacion.cellphone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.informacion,
                                  "cellphone",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errores && _vm.errores.cellphone
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 mb-2 text-danger text-sm",
                                  attrs: { for: "id_cellphone" }
                                },
                                [_vm._v(_vm._s(_vm.errores.cellphone[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_correo_electronico" }
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.informacion.email,
                                expression: "informacion.email"
                              }
                            ],
                            staticClass:
                              "form-control form-control-alternative mb-2",
                            attrs: {
                              type: "text",
                              placeholder: "Email",
                              id: "id_correo_electronico"
                            },
                            domProps: { value: _vm.informacion.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.informacion,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errores && _vm.errores.email
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 mb-2 text-danger text-sm",
                                  attrs: { for: "id_correo_electronico" }
                                },
                                [_vm._v(_vm._s(_vm.errores.email[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_address_line_1" }
                              },
                              [_vm._v("Ubicación")]
                            ),
                            _vm._v(" "),
                            _c("quill-Editor", {
                              ref: "ref_content",
                              staticClass: "ql-height-25",
                              attrs: {
                                placeholder: "Contenido",
                                options: _vm.editorOptions
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.informacion.address_line_1,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.informacion,
                                    "address_line_1",
                                    $$v
                                  )
                                },
                                expression: "informacion.address_line_1"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.address_line_1
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "mt-2 mb-2 text-danger text-sm",
                                    attrs: { for: "id_address_line_1" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.errores.address_line_1[0])
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_country_mexico" }
                              },
                              [_vm._v("Mexico")]
                            ),
                            _vm._v(" "),
                            _c("quill-Editor", {
                              ref: "ref_content",
                              staticClass: "ql-height-25",
                              attrs: {
                                placeholder: "Contenido",
                                options: _vm.editorOptions
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.informacion.country_mexico,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.informacion,
                                    "country_mexico",
                                    $$v
                                  )
                                },
                                expression: "informacion.country_mexico"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.country_mexico
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "mt-2 mb-2 text-danger text-sm",
                                    attrs: { for: "country_mexico" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.errores.country_mexico[0])
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_country_ecuador" }
                              },
                              [_vm._v("Ecuador")]
                            ),
                            _vm._v(" "),
                            _c("quill-Editor", {
                              ref: "ref_content",
                              staticClass: "ql-height-25",
                              attrs: {
                                placeholder: "Contenido",
                                options: _vm.editorOptions
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.informacion.country_ecuador,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.informacion,
                                    "country_ecuador",
                                    $$v
                                  )
                                },
                                expression: "informacion.country_ecuador"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.country_ecuador
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "mt-2 mb-2 text-danger text-sm",
                                    attrs: { for: "country_ecuador" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.errores.country_ecuador[0])
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_country_peru" }
                              },
                              [_vm._v("Peru")]
                            ),
                            _vm._v(" "),
                            _c("quill-Editor", {
                              ref: "ref_content",
                              staticClass: "ql-height-25",
                              attrs: {
                                placeholder: "Contenido",
                                options: _vm.editorOptions
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.informacion.country_peru,
                                callback: function($$v) {
                                  _vm.$set(_vm.informacion, "country_peru", $$v)
                                },
                                expression: "informacion.country_peru"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.country_peru
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "mt-2 mb-2 text-danger text-sm",
                                    attrs: { for: "country_peru" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.country_peru[0]))]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_country_eeuu" }
                              },
                              [_vm._v("EE.UU")]
                            ),
                            _vm._v(" "),
                            _c("quill-Editor", {
                              ref: "ref_content",
                              staticClass: "ql-height-25",
                              attrs: {
                                placeholder: "Contenido",
                                options: _vm.editorOptions
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.informacion.country_eeuu,
                                callback: function($$v) {
                                  _vm.$set(_vm.informacion, "country_eeuu", $$v)
                                },
                                expression: "informacion.country_eeuu"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.country_eeuu
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "mt-2 mb-2 text-danger text-sm",
                                    attrs: { for: "country_eeuu" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.country_eeuu[0]))]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 text-right" },
                        [
                          _c("Boton", {
                            attrs: {
                              text: "Actualizar",
                              classes: ["btn-primary"],
                              "request-server": _vm.requestServer
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.restablecerPagina($event)
                                }
                              }
                            },
                            [_vm._v("Cancelar")]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("Partners"),
        _vm._v(" "),
        _c("Footer")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "fas fa-info" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Información General")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Paises")]),
        _vm._v(" "),
        _c("p", [_vm._v("Ubicaciones en paises")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Actualizar Información General")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Partners.vue?vue&type=template&id=1806189d&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Partners.vue?vue&type=template&id=1806189d& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c("div", { staticClass: "col-12 text-right mb-4" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-icon btn-neutral",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.newElement($event)
              }
            }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [
              _vm._v("Nuevo Socio")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 mb-4" },
        [
          _c("DataTableDraggable", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.startBlock,
                expression: "startBlock"
              }
            ],
            attrs: {
              object: _vm.elements,
              buttonUpdate: true,
              buttonDelete: true,
              botonDetail: false,
              title: "Partners"
            },
            on: {
              "update:object": function($event) {
                _vm.elements = $event
              },
              drag: _vm.orderElements,
              edit: _vm.editElement,
              delete: _vm.deteleElement
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-create",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-primary"],
                      text: "Registrar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.createElement()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
              }
            }
          ])
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
              _vm._v("Crear Socio")
            ])
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.createElement($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label d-block",
                        attrs: { for: "id_name" }
                      },
                      [_vm._v("Nombre")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.element.name,
                          expression: "element.name"
                        }
                      ],
                      staticClass: "form-control form-control-alternative",
                      attrs: {
                        type: "text",
                        placeholder: "Nombre",
                        id: "id_name"
                      },
                      domProps: { value: _vm.element.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.element, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c(
                          "label",
                          {
                            staticClass: "mt-2 text-danger text-sm",
                            attrs: { for: "id_name" }
                          },
                          [_vm._v(_vm._s(_vm.errors.name[0]))]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-bold mb-0",
                          attrs: { for: "id_image" }
                        },
                        [_vm._v("Imagen:")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vue-dropzone",
                        {
                          ref: "ref_image",
                          attrs: {
                            id: "id_image",
                            options: _vm.dropzoneOptions,
                            duplicateCheck: true,
                            useCustomSlot: true
                          },
                          on: {
                            "vdropzone-file-added": function($event) {
                              return _vm.$validateImageDropzone(
                                $event,
                                _vm.$refs.ref_image.dropzone,
                                1,
                                512000,
                                "500kb"
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "dropzone-custom-content" },
                            [
                              _c(
                                "h5",
                                {
                                  staticClass:
                                    "dropzone-custom-title text-primary"
                                },
                                [
                                  _vm._v(
                                    "Suelte los archivos aquí o haga click para cargarlos."
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.image
                        ? _c(
                            "label",
                            {
                              staticClass: "text-danger text-sm d-block mt-2",
                              attrs: { for: "id_image" }
                            },
                            [_vm._v(_vm._s(_vm.errors.image[0]))]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-delete",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-danger"],
                      text: "Eliminar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.deleteElementConfirm()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
              }
            }
          ])
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
              _vm._v("Eliminar Socio")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v("Esta seguro que desea eliminar el socio?")
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-edit",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-primary"],
                      text: "Actualizar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.updateElement()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
              }
            }
          ])
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
              _vm._v("Actualizar Socio")
            ])
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.updateElement($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label d-block",
                        attrs: { for: "id_name" }
                      },
                      [_vm._v("Nombre")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.element.name,
                          expression: "element.name"
                        }
                      ],
                      staticClass: "form-control form-control-alternative",
                      attrs: { type: "text", id: "id_name" },
                      domProps: { value: _vm.element.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.element, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c(
                          "label",
                          {
                            staticClass: "mt-2 text-danger text-sm",
                            attrs: { for: "id_name" }
                          },
                          [_vm._v(_vm._s(_vm.errors.name[0]))]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "font-weight-bold mb-0",
                        attrs: { for: "id_image" }
                      },
                      [_vm._v("Imagen")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3" }, [
                        _vm.element.image
                          ? _c("img", {
                              staticClass: "img-fluid",
                              attrs: {
                                src:
                                  "https://storage.googleapis.com/playgroup-web/img/partners/" +
                                  _vm.element.image,
                                alt: _vm.element.image
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-9" },
                        [
                          _c(
                            "vue-dropzone",
                            {
                              ref: "ref_image",
                              attrs: {
                                id: "id_image",
                                options: _vm.dropzoneOptions,
                                duplicateCheck: true,
                                useCustomSlot: true
                              },
                              on: {
                                "vdropzone-file-added": function($event) {
                                  return _vm.$validateImageDropzone(
                                    $event,
                                    _vm.$refs.ref_image.dropzone,
                                    1,
                                    512000,
                                    "500kb"
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "dropzone-custom-content" },
                                [
                                  _c(
                                    "h5",
                                    {
                                      staticClass:
                                        "dropzone-custom-title text-primary"
                                    },
                                    [
                                      _vm._v(
                                        "Suelte los archivos aquí o haga click para cargarlos."
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.image
                      ? _c(
                          "label",
                          {
                            staticClass: "text-danger text-sm d-block mt-2",
                            attrs: { for: "id_image" }
                          },
                          [_vm._v(_vm._s(_vm.errors.image[0]))]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "fas fa-info" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/info/General.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/info/General.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue_vue_type_template_id_6d366534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=6d366534& */ "./resources/js/views/info/General.vue?vue&type=template&id=6d366534&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/views/info/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_6d366534___WEBPACK_IMPORTED_MODULE_0__["render"],
  _General_vue_vue_type_template_id_6d366534___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/info/General.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/info/General.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/info/General.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/info/General.vue?vue&type=template&id=6d366534&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/info/General.vue?vue&type=template&id=6d366534& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_6d366534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=template&id=6d366534& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/General.vue?vue&type=template&id=6d366534&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_6d366534___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_6d366534___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/info/Partners.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/info/Partners.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partners_vue_vue_type_template_id_1806189d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partners.vue?vue&type=template&id=1806189d& */ "./resources/js/views/info/Partners.vue?vue&type=template&id=1806189d&");
/* harmony import */ var _Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partners.vue?vue&type=script&lang=js& */ "./resources/js/views/info/Partners.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Partners_vue_vue_type_template_id_1806189d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Partners_vue_vue_type_template_id_1806189d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/info/Partners.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/info/Partners.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/info/Partners.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Partners.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/info/Partners.vue?vue&type=template&id=1806189d&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/info/Partners.vue?vue&type=template&id=1806189d& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_1806189d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=template&id=1806189d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Partners.vue?vue&type=template&id=1806189d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_1806189d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_1806189d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);