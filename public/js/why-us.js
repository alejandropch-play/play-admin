(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/why-us"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/WhyUs.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/WhyUs.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_ElementsDraggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ElementsDraggable */ "./resources/js/components/ElementsDraggable.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: {},
      element: {
        image: "",
        index: "",
        // name: "",
        description: "",
        title: ""
      },
      startBlock: true,
      elements: [],
      newBlock: false,
      editBlock: false,
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                document.getElementById('id_images').click();
              }
            },
            container: [["bold", "italic", "underline", "strike"], ["blockquote"],
            /*[{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],*/
            [{
              size: [false]
            }],
            ///[{ header: [1, 2, 3, 4, 5, false] }],
            [{
              font: [false]
            }], [{
              color: []
            }, {
              background: []
            }],
            //[{ align: [] }],
            //['clean'],
            ["image"]]
          }
        }
      }
    };
  },
  components: {
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__["quillEditor"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_5___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    ElementsDraggable: _components_ElementsDraggable__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    restoreEl: function restoreEl() {
      this.editBlock = this.requestServer = false;
      this.startBlock = true;
      this.errors = {}, this.element = {
        image: "",
        index: "",
        // name: "",
        description: "",
        title: ""
      };
      this.$refs["modal-delete"].hide();
    },
    getElement: function getElement(id) {
      var _this = this;
      axios.get("json/why-us/" + id).then(function (response) {
        _this.element = response.data;
      })["catch"](function (error) {});
    },
    deleteElementConfirm: function deleteElementConfirm() {
      var _this2 = this;
      this.requestServer = true;
      axios["delete"]("why-us/" + this.element.id).then(function (response) {
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
        _this2.restoreEl();
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
    deleteElement: function deleteElement(id) {
      this.$refs["modal-delete"].show();
      this.getElement(id);
    },
    newElement: function newElement() {
      this.newBlock = true;
      this.startBlock = false;
    },
    editElement: function editElement(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getElement(id);
    },
    restorePage: function restorePage() {
      this.image = [];
      this.startBlock = true;
      this.newBlock = this.editBlock = this.requestServer = false;
      this.errors = {};
      this.elements = [];
      this.getElements();
      this.$refs["modal-delete"].hide();
      this.element = {
        image: "",
        index: "",
        // name: "",
        description: "",
        title: ""
      };
    },
    getElements: function getElements() {
      var _this3 = this;
      axios.get("json/why-us").then(function (response) {
        _this3.elements = response.data;
      })["catch"](function (error) {});
    },
    updateElement: function updateElement() {
      var _this4 = this;
      this.requestServer = true;
      var fd = new FormData();
      fd.append("id", this.element.id);

      // this.element.name
      //   ? fd.append("name", this.element.name)
      //   : fd.append("name", "");
      this.element.title ? fd.append("title", this.element.title) : fd.append("title", "");
      this.element.description ? fd.append("description", this.element.description) : fd.append("description", "");
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("_method", "PUT");
      axios.post("why-us/" + this.element.id, fd).then(function (response) {
        _this4.requestServer = false;
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
        _this4.requestServer = false;
        if (error.response.status === 422) {
          _this4.errors = error.response.data.errors || {};
          return;
        }
        _this4.restorePage();
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
    createElement: function createElement() {
      var _this5 = this;
      this.requestServer = true;
      var fd = new FormData();

      // this.element.name
      //   ? fd.append("name", this.element.name)
      //   : fd.append("name", "");
      this.element.title ? fd.append("title", this.element.title) : fd.append("title", "");
      this.element.description ? fd.append("description", this.element.description) : fd.append("description", "");
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      axios.post("why-us", fd).then(function (response) {
        _this5.requestServer = false;
        _this5.restorePage();
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
    },
    orderElements: function orderElements(elements) {
      var _this6 = this;
      axios.put("why-us/order", elements).then(function (response) {
        _this6.restorePage();
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
    }
  },
  created: function created() {
    this.getElements();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/WhyUs.vue?vue&type=template&id=311377f7":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/WhyUs.vue?vue&type=template&id=311377f7 ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row align-items-center pt-0 pt-md-2 pb-4"
  }, [_c("div", {
    staticClass: "col-6 col-md-7"
  }, [_c("BreadCrumb", {
    attrs: {
      title: "Sobre Nosotros",
      active: "Sobre Nosotros"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-md-5 text-right"
  }, [_vm.startBlock ? _c("a", {
    staticClass: "btn btn-icon btn-neutral",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.newElement.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("span", {
    staticClass: "btn-inner--text"
  }, [_vm._v("Nuevo Información de Nosotros")])]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid mt--6"
  }, [_vm.startBlock ? _c("ElementsDraggable", {
    attrs: {
      type: "why-us",
      object: _vm.elements,
      classes: ["col-12", "col-sm-6", "col-lg-6", "col-xl-3", "mb-4"]
    },
    on: {
      "delete": _vm.deleteElement,
      edit: _vm.editElement,
      drag: _vm.orderElements,
      "update:object": function updateObject($event) {
        _vm.elements = $event;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.newBlock ? _c("div", {
    staticClass: "card shadow mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createElement.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold d-block mb-0"
  }, [_vm._v("Imagen")]), _vm._v(" "), _c("vue-dropzone", {
    ref: "ref_image",
    attrs: {
      id: "id_image",
      options: _vm.dropzoneOptions,
      duplicateCheck: true,
      useCustomSlot: true
    },
    on: {
      "vdropzone-file-added": function vdropzoneFileAdded($event) {
        return _vm.$validateImageDropzone($event, _vm.$refs.ref_image.dropzone, 1, 124000, "100kb");
      }
    }
  }, [_c("div", {
    staticClass: "dropzone-custom-content"
  }, [_c("h5", {
    staticClass: "dropzone-custom-title text-primary"
  }, [_vm._v("Suelte los archivos aquí o haga click para cargarlos.")])])]), _vm._v(" "), _vm.errors && _vm.errors.image ? _c("label", {
    staticClass: "text-danger text-sm mt-2 d-block",
    attrs: {
      "for": "id_image"
    }
  }, [_vm._v(_vm._s(_vm.errors.image[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-9"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_title"
    }
  }, [_vm._v("Titulo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.title,
      expression: "element.title"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_title"
    },
    domProps: {
      value: _vm.element.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.title ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_title"
    }
  }, [_vm._v(_vm._s(_vm.errors.title[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_description"
    }
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.description,
      expression: "element.description"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_description"
    },
    domProps: {
      value: _vm.element.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.description ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_description"
    }
  }, [_vm._v(_vm._s(_vm.errors.description[0]))]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-right"
  }, [_c("Button", {
    attrs: {
      text: "Registrar",
      classes: ["btn-primary"],
      "request-server": _vm.requestServer
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.restorePage.apply(null, arguments);
      }
    }
  }, [_vm._v("Cancelar")])], 1)])])])]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("div", {
    staticClass: "card shadow"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateElement.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_vm.element.image ? _c("img", {
    staticClass: "img-fluid mx-auto d-block",
    attrs: {
      src: "https://storage.googleapis.com/playgroup-web/img/solutions/" + _vm.element.image,
      alt: _vm.element.image
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-9"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold d-block mb-0"
  }, [_vm._v("Imagen")]), _vm._v(" "), _c("vue-dropzone", {
    ref: "ref_image",
    attrs: {
      id: "id_image",
      options: _vm.dropzoneOptions,
      duplicateCheck: true,
      useCustomSlot: true
    },
    on: {
      "vdropzone-file-added": function vdropzoneFileAdded($event) {
        return _vm.$validateImageDropzone($event, _vm.$refs.ref_image.dropzone, 1, 100000, "100kb");
      }
    }
  }, [_c("div", {
    staticClass: "dropzone-custom-content"
  }, [_c("h3", {
    staticClass: "dropzone-custom-title text-primary"
  }, [_vm._v("Suelte el archivo aquí o haga click para cargarlo.")])])]), _vm._v(" "), _vm.errors && _vm.errors.image ? _c("label", {
    staticClass: "text-danger text-sm d-block",
    attrs: {
      "for": "id_image"
    }
  }, [_vm._v(_vm._s(_vm.errors.image[0]))]) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-9"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_title"
    }
  }, [_vm._v("Titulo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.title,
      expression: "element.title"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_title"
    },
    domProps: {
      value: _vm.element.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.title ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_title"
    }
  }, [_vm._v(_vm._s(_vm.errors.title[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_description"
    }
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.description,
      expression: "element.description"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_description"
    },
    domProps: {
      value: _vm.element.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.description ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_description"
    }
  }, [_vm._v(_vm._s(_vm.errors.description[0]))]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-right"
  }, [_c("Button", {
    attrs: {
      text: "Actualizar",
      classes: ["btn-primary"],
      "request-server": _vm.requestServer
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.restorePage.apply(null, arguments);
      }
    }
  }, [_vm._v("Cancelar")])], 1)])])])]) : _vm._e(), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("b-modal", {
    ref: "modal-delete",
    attrs: {
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var ok = _ref.ok,
          cancel = _ref.cancel;
        return [_c("Button", {
          attrs: {
            classes: ["btn-danger"],
            text: "Eliminar",
            "request-server": _vm.requestServer
          },
          on: {
            click: _vm.deleteElementConfirm
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
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Eliminar Sobre Nosotros")])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Esta seguro que desea eliminar este elemento? ")])], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "btn-inner--icon"
  }, [_c("i", {
    staticClass: "fas fa-trophy"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header border-0"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Crear Sobre Nosotros")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Actualizar Sobre Nosotros")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/WhyUs.vue":
/*!**************************************!*\
  !*** ./resources/js/views/WhyUs.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WhyUs_vue_vue_type_template_id_311377f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WhyUs.vue?vue&type=template&id=311377f7 */ "./resources/js/views/WhyUs.vue?vue&type=template&id=311377f7");
/* harmony import */ var _WhyUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhyUs.vue?vue&type=script&lang=js */ "./resources/js/views/WhyUs.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WhyUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WhyUs_vue_vue_type_template_id_311377f7__WEBPACK_IMPORTED_MODULE_0__["render"],
  _WhyUs_vue_vue_type_template_id_311377f7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/WhyUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/WhyUs.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/views/WhyUs.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WhyUs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/WhyUs.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyUs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/WhyUs.vue?vue&type=template&id=311377f7":
/*!********************************************************************!*\
  !*** ./resources/js/views/WhyUs.vue?vue&type=template&id=311377f7 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyUs_vue_vue_type_template_id_311377f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./WhyUs.vue?vue&type=template&id=311377f7 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/WhyUs.vue?vue&type=template&id=311377f7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyUs_vue_vue_type_template_id_311377f7__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WhyUs_vue_vue_type_template_id_311377f7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);