(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/awards"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    url: {
      type: String,
      required: true
    },
    nameProp: {
      type: String,
      required: false
    },
    slugProp: {
      type: String,
      required: false
    },
    categorySlug: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      name: '',
      slug: '',
      editBlock: false,
      slugEdited: false
    };
  },
  methods: {
    getSlug: function getSlug() {
      this.editBlock = !this.editBlock;
      this.slugEdited = true;
    }
  },
  watch: {
    nameProp: function nameProp(newVal, oldVal) {
      this.name = newVal;
    },
    slugProp: function slugProp(newVal, oldVal) {
      this.slug = newVal;
    },
    name: function name(newVal, oldVal) {
      //console.log(newVal)
      if (!this.slugEdited) {
        this.slug = newVal;
      }
      this.$emit('update:name', newVal);
    },
    slug: function slug(newVal, oldVal) {
      this.slug = Slug(newVal);
      this.$emit('update:slug', this.slug);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Awards.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Awards.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
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
        name: "",
        linkedIn: "",
        position: "",
        category: ""
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
        name: "",
        linkedIn: "",
        category: ""
      };
      this.$refs["modal-delete"].hide();
    },
    getElement: function getElement(id) {
      var _this = this;
      axios.get("json/awards/" + id).then(function (response) {
        _this.element = response.data;
      })["catch"](function (error) {});
    },
    deleteElementConfirm: function deleteElementConfirm() {
      var _this2 = this;
      this.requestServer = true;
      axios["delete"]("awards/" + this.element.id).then(function (response) {
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
        name: "",
        position: "",
        linkedIn: "",
        category: ""
      };
    },
    getElements: function getElements() {
      var _this3 = this;
      axios.get("json/awards").then(function (response) {
        _this3.elements = response.data;
      })["catch"](function (error) {});
    },
    updateElement: function updateElement() {
      var _this4 = this;
      this.requestServer = true;
      var fd = new FormData();
      fd.append("id", this.element.id);
      this.element.name ? fd.append("name", this.element.name) : fd.append("name", "");
      this.element.category ? fd.append("category", this.element.category) : fd.append("category", "");
      this.element.linkedIn ? fd.append("linkedIn", this.element.linkedIn) : fd.append("linekdIn", "");
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("_method", "PUT");
      axios.post("awards/" + this.element.id, fd).then(function (response) {
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
      this.element.name ? fd.append("name", this.element.name) : fd.append("name", "");
      this.element.category ? fd.append("category", this.element.category) : fd.append("category", "");
      this.element.linkedIn ? fd.append("linkedIn", this.element.linkedIn) : fd.append("linekdIn", "");
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      axios.post("awards", fd).then(function (response) {
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
      axios.put("awards/order", elements).then(function (response) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Hiplay.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/InputSlug */ "./resources/js/components/form/InputSlug.vue");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_5___default.a,
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_6__["ModelListSelect"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  data: function data() {
    return {
      showDeleteModal: false,
      newBlock: false,
      startBlock: true,
      editBlock: false,
      requestServer: false,
      requestLoading: false,
      image: [],
      podcasts: {},
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                console.log(document.getElementById('id_content_images'));
                document.getElementById('id_content_images').click();
              }
            },
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
            }],
            //['clean'],
            ["link", "image", "video"]]
          }
        }
      },
      entries: 20,
      podcast: {
        id: "",
        url: "",
        published: true,
        tags: ''
      },
      tags: [],
      errors: {}
    };
  },
  methods: {
    getPodcast: function getPodcast(id) {
      var _this = this;
      return axios.get("json/podcast/" + id).then(function (response) {
        _this.podcast = response.data.podcast;
        _this.tags = response.data.tags;
        _this.requestLoading = false;
      })["catch"](function (error) {});
    },
    deletePodcast: function deletePodcast(id) {
      var _this2 = this;
      this.getPodcast(id).then(function () {
        _this2.showDeleteModal = true;
      });
    },
    deletePodcastConfirm: function deletePodcastConfirm(id) {
      var _this3 = this;
      this.requestServer = true;
      axios["delete"]("podcast/" + this.podcast.id).then(function (response) {
        _this3.getPodcasts(1, _this3.entries);
        _this3.showDeleteModal = false;
        _this3.restoreEl();
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
        console.log(error);
        _this3.restorePage();
        _this3.showDeleteModal = false;
        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    editPodcast: function editPodcast(id) {
      this.editBlock = true;
      this.getPodcast(id);
      this.startBlock = false;
    },
    getPodcasts: function getPodcasts(pagina, desde) {
      var _this4 = this;
      var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "json/podcasts?page=" + pagina + "&desde=" + desde;
      if (search) {
        url = url + "&search=" + search;
      }
      axios.get(url).then(function (response) {
        _this4.podcasts = response.data;
      })["catch"](function (error) {
        console.error(error.message);
      });
    },
    newPodcast: function newPodcast() {
      this.startBlock = false;
      this.newBlock = true;
    },
    restoreEl: function restoreEl() {
      this.podcast = {
        id: "",
        url: "",
        author: "",
        content: "",
        published: true,
        tags: ''
      };
      this.tags = [];
      this.errors = {};
      this.requestServer = false;
    },
    restorePage: function restorePage() {
      this.requestServer = false;
      this.newBlock = this.editBlock = false;
      this.startBlock = true;
      this.podcast = {
        published: true,
        tags: '',
        url: ""
      };
      this.tags = [];
      this.errors = {};
      this.podcasts = {};
      this.getPodcasts(1, this.entries);
    },
    updatePodcast: function updatePodcast() {
      var _this5 = this;
      this.requestServer = true;
      var fd = new FormData();
      fd.append("id", this.podcast.id);
      this.podcast.url ? fd.append("url", this.podcast.url) : fd.append("url", "");
      if (this.podcast.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      if (this.tags.length > 0) {
        fd.append("tags", JSON.stringify(this.tags));
      }
      axios.post("podcast/" + this.podcast.id, fd).then(function (response) {
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
    createPodcast: function createPodcast() {
      var _this6 = this;
      this.requestServer = true;
      var fd = new FormData();
      fd.append("url", this.podcast.url);
      if (this.podcast.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      if (this.tags.length > 0) {
        fd.append("tags", JSON.stringify(this.tags));
      }
      axios.post("podcast", fd).then(function (response) {
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
        _this6.requestServer = false;
        if (error.response.status === 422) {
          _this6.errors = error.response.data.errors || {};
          return;
        }
        _this6.restorePage();
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
    this.getPodcasts(1, this.entries);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5 ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_title"
    }
  }, [_vm._v("Título")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      placeholder: "Título",
      id: "id_title"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("small", [_vm._v(_vm._s(_vm.url) + _vm._s(_vm.categorySlug ? _vm.categorySlug + "/" : ""))]), !_vm.editBlock ? _c("small", {
    staticClass: "bg-primary text-white"
  }, [_vm._v(_vm._s(_vm.slug))]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slug,
      expression: "slug"
    }],
    staticClass: "form-control form-control-sm d-inline w-50",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.slug
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        return _vm.getSlug.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.slug = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), !_vm.editBlock ? _c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.editBlock = !_vm.editBlock;
      }
    }
  }, [_vm._v("Editar")]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.getSlug
    }
  }, [_vm._v("Aceptar")]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Awards.vue?vue&type=template&id=63cc7ed6":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Awards.vue?vue&type=template&id=63cc7ed6 ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      title: "Premios",
      active: "Premios"
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
  }, [_vm._v("Nuevo Premio")])]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid mt--6"
  }, [_vm.startBlock ? _c("ElementsDraggable", {
    attrs: {
      type: "awards",
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
        return _vm.$validateImageDropzone($event, _vm.$refs.ref_image.dropzone, 1, 102400, "100kb");
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
    staticClass: "font-weight-bold mb-0",
    attrs: {
      "for": "id_name"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("file-upload", {
    ref: "ref_images",
    staticClass: "d-none",
    attrs: {
      extensions: "jpg,jpeg,png",
      accept: "image/png,image/jpeg,image/jpg",
      drop: false,
      multiple: true,
      "input-id": "id_images"
    },
    on: {
      "input-filter": function inputFilter($event) {
        return _vm.$uploadImageUploadComponent($event, _vm.$refs.ref_content, 100000, "100kb", "awards");
      }
    },
    model: {
      value: _vm.element.images,
      callback: function callback($$v) {
        _vm.$set(_vm.element, "images", $$v);
      },
      expression: "element.images"
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.name,
      expression: "element.name"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_category"
    },
    domProps: {
      value: _vm.element.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_name"
    }
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v("Categoría")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.category,
      expression: "element.category"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_category"
    },
    domProps: {
      value: _vm.element.category
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "category", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.category ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v(_vm._s(_vm.errors.category[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v("LinkedIn")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.linkedIn,
      expression: "element.linkedIn"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_linkedIn"
    },
    domProps: {
      value: _vm.element.linkedIn
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "linkedIn", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.linkedIn ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v(_vm._s(_vm.errors.category[0]))]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
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
      src: "https://storage.googleapis.com/playgroup-web/img/awards/" + _vm.element.image,
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
    staticClass: "font-weight-bold mb-0",
    attrs: {
      "for": "id_name"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("file-upload", {
    ref: "ref_images",
    staticClass: "d-none",
    attrs: {
      extensions: "jpg,jpeg,png",
      accept: "image/png,image/jpeg,image/jpg",
      drop: false,
      multiple: true,
      "input-id": "id_images"
    },
    on: {
      "input-filter": function inputFilter($event) {
        return _vm.$uploadImageUploadComponent($event, _vm.$refs.ref_content, 100000, "100kb", "awards");
      }
    },
    model: {
      value: _vm.element.images,
      callback: function callback($$v) {
        _vm.$set(_vm.element, "images", $$v);
      },
      expression: "element.images"
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.name,
      expression: "element.name"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_name"
    },
    domProps: {
      value: _vm.element.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_name"
    }
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v("Categoría")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.category,
      expression: "element.category"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_category"
    },
    domProps: {
      value: _vm.element.category
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "category", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.category ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v(_vm._s(_vm.errors.category[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_linkedIn"
    }
  }, [_vm._v("LinkedIn")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.linkedIn,
      expression: "element.linkedIn"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      type: "text",
      id: "id_linkedIn"
    },
    domProps: {
      value: _vm.element.linkedIn
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "linkedIn", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.linkedIn ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_position"
    }
  }, [_vm._v(_vm._s(_vm.errors.linkedIn[0]))]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Eliminar Premio")])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Esta seguro que desea eliminar el premio?")])], 2)], 1);
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
  }, [_vm._v("Crear Premio")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Actualizar Premio")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=template&id=34600714":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Hiplay.vue?vue&type=template&id=34600714 ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      title: "Podcast",
      active: "Podcast"
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
        return _vm.newPodcast.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("span", {
    staticClass: "btn-inner--text"
  }, [_vm._v("Nuevo Podcast")])]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("Button", {
    attrs: {
      classes: ["btn-primary"],
      text: "Actualizar",
      "request-server": _vm.requestServer
    },
    on: {
      click: function click($event) {
        return _vm.updatePodcast();
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.newBlock ? _c("Button", {
    attrs: {
      classes: ["btn-primary"],
      text: "Registrar",
      "request-server": _vm.requestServer
    },
    on: {
      click: function click($event) {
        return _vm.createPodcast();
      }
    }
  }) : _vm._e(), _vm._v(" "), !_vm.startBlock ? _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button",
      "request-server": _vm.requestServer
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.restorePage.apply(null, arguments);
      }
    }
  }, [_vm._v("Cancelar")]) : _vm._e()], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid mt--6"
  }, [_vm.startBlock ? _c("DataTable", {
    attrs: {
      placeholder: "URL de Youtube",
      object: _vm.podcasts,
      buttonRead: false,
      buttonUpdate: true,
      buttonDelete: true
    },
    on: {
      "update:object": function updateObject($event) {
        _vm.podcasts = $event;
      },
      update: _vm.editPodcast,
      "delete": _vm.deletePodcast,
      get: _vm.getPodcasts
    }
  }) : _vm._e(), _vm._v(" "), _vm.newBlock ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-xl-8 mb-4 mb-xl-0"
  }, [_c("div", {
    staticClass: "card shadow"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createPodcast.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("b-form-checkbox", {
    attrs: {
      id: "id_checkbox_published",
      name: "id_checkbox_published"
    },
    model: {
      value: _vm.podcast.published,
      callback: function callback($$v) {
        _vm.$set(_vm.podcast, "published", $$v);
      },
      expression: "podcast.published"
    }
  }, [_vm._v("¿Activar?")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_tags"
    }
  }, [_vm._v("Tags")]), _vm._v(" "), _c("vue-tags-input", {
    attrs: {
      tags: _vm.tags,
      placeholder: "Ingresa Tag"
    },
    on: {
      "tags-changed": function tagsChanged(newTags) {
        return _vm.tags = newTags;
      }
    },
    model: {
      value: _vm.podcast.tags,
      callback: function callback($$v) {
        _vm.$set(_vm.podcast, "tags", $$v);
      },
      expression: "podcast.tags"
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.tags ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_tags"
    }
  }, [_vm._v(_vm._s(_vm.errors.tags[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_author"
    }
  }, [_vm._v("Youtube URL")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.podcast.url,
      expression: "podcast.url"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      id: "id_youtube_url",
      placeholder: "Ejemplo: https://www.youtube.com/watch?v=example"
    },
    domProps: {
      value: _vm.podcast.url
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.podcast, "url", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.url ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_author"
    }
  }, [_vm._v(_vm._s(_vm.errors.url[0]))]) : _vm._e()])])])])])])])])]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-xl-8 mb-4 mb-xl-0"
  }, [_c("div", {
    staticClass: "card shadow"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createPodcast.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("b-form-checkbox", {
    attrs: {
      id: "id_checkbox_published",
      name: "id_checkbox_published"
    },
    model: {
      value: _vm.podcast.published,
      callback: function callback($$v) {
        _vm.$set(_vm.podcast, "published", $$v);
      },
      expression: "podcast.published"
    }
  }, [_vm._v("¿Activar?")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_tags"
    }
  }, [_vm._v("Tags")]), _vm._v(" "), _c("vue-tags-input", {
    attrs: {
      tags: _vm.tags,
      placeholder: "Ingresa Tag"
    },
    on: {
      "tags-changed": function tagsChanged(newTags) {
        return _vm.tags = newTags;
      }
    },
    model: {
      value: _vm.podcast.tags,
      callback: function callback($$v) {
        _vm.$set(_vm.podcast, "tags", $$v);
      },
      expression: "podcast.tags"
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.tags ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_tags"
    }
  }, [_vm._v(_vm._s(_vm.errors.tags[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_author"
    }
  }, [_vm._v("Youtube URL")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.podcast.url,
      expression: "podcast.url"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      id: "id_youtube_url",
      placeholder: "Ejemplo: https://www.youtube.com/watch?v=example"
    },
    domProps: {
      value: _vm.podcast.url
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.podcast, "url", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.url ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_author"
    }
  }, [_vm._v(_vm._s(_vm.errors.url[0]))]) : _vm._e()])])])])])])])])]) : _vm._e(), _vm._v(" "), _c("b-modal", {
    attrs: {
      centered: "",
      size: "xl"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var ok = _ref.ok,
          cancel = _ref.cancel;
        return [_c("Button", {
          attrs: {
            classes: ["btn-primary"],
            text: "Eliminar",
            "request-server": _vm.requestServer
          },
          on: {
            click: function click($event) {
              return _vm.deletePodcastConfirm(_vm.podcast.id);
            }
          }
        }), _vm._v(" "), _c("button", {
          staticClass: "btn btn-secondary",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return cancel();
            }
          }
        }, [_vm._v("Cancelar")])];
      }
    }]),
    model: {
      value: _vm.showDeleteModal,
      callback: function callback($$v) {
        _vm.showDeleteModal = $$v;
      },
      expression: "showDeleteModal"
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Eliminar Podcast")])]), _vm._v(" "), _c("p", {
    staticClass: "my-3"
  }, [_vm._v("Esta seguro que desea eliminar el podcast?")])], 2)], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "btn-inner--icon"
  }, [_c("i", {
    staticClass: "fas fa-newspaper"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 992px) {\n.modal-lg {\r\n    max-width: 1140px !important;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputSlug_vue_vue_type_template_id_48ad37f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=template&id=48ad37f5 */ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5");
/* harmony import */ var _InputSlug_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=script&lang=js */ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputSlug_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputSlug_vue_vue_type_template_id_48ad37f5__WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputSlug_vue_vue_type_template_id_48ad37f5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/InputSlug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5 ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=template&id=48ad37f5 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Awards.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Awards.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Awards_vue_vue_type_template_id_63cc7ed6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Awards.vue?vue&type=template&id=63cc7ed6 */ "./resources/js/views/Awards.vue?vue&type=template&id=63cc7ed6");
/* harmony import */ var _Awards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Awards.vue?vue&type=script&lang=js */ "./resources/js/views/Awards.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Awards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Awards_vue_vue_type_template_id_63cc7ed6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Awards_vue_vue_type_template_id_63cc7ed6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Awards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Awards.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/views/Awards.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Awards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Awards.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Awards.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Awards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Awards.vue?vue&type=template&id=63cc7ed6":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Awards.vue?vue&type=template&id=63cc7ed6 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Awards_vue_vue_type_template_id_63cc7ed6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Awards.vue?vue&type=template&id=63cc7ed6 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Awards.vue?vue&type=template&id=63cc7ed6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Awards_vue_vue_type_template_id_63cc7ed6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Awards_vue_vue_type_template_id_63cc7ed6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Hiplay.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Hiplay.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hiplay_vue_vue_type_template_id_34600714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hiplay.vue?vue&type=template&id=34600714 */ "./resources/js/views/Hiplay.vue?vue&type=template&id=34600714");
/* harmony import */ var _Hiplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hiplay.vue?vue&type=script&lang=js */ "./resources/js/views/Hiplay.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Hiplay_vue_vue_type_style_index_0_id_34600714_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css */ "./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Hiplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hiplay_vue_vue_type_template_id_34600714__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hiplay_vue_vue_type_template_id_34600714__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Hiplay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Hiplay.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/views/Hiplay.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Hiplay.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_style_index_0_id_34600714_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=style&index=0&id=34600714&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_style_index_0_id_34600714_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_style_index_0_id_34600714_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_style_index_0_id_34600714_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_style_index_0_id_34600714_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Hiplay.vue?vue&type=template&id=34600714":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Hiplay.vue?vue&type=template&id=34600714 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_template_id_34600714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Hiplay.vue?vue&type=template&id=34600714 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Hiplay.vue?vue&type=template&id=34600714");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_template_id_34600714__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Hiplay_vue_vue_type_template_id_34600714__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);