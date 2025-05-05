(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/complaints_book"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/complaints_book/Claim.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/InputSlug */ "./resources/js/components/form/InputSlug.vue");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    appUrl: {
      type: String
    }
  },
  components: {
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_5__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_6___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_9___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__["quillEditor"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_7__["ModelListSelect"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10___default.a
  },
  data: function data() {
    return {
      newBlock: false,
      startBlock: true,
      editBlock: false,
      requestServer: false,
      requestLoading: false,
      image: [],
      posts: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
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
            }], //['clean'],
            ["link", "image", "video"]]
          }
        }
      },
      entries: 20,
      post: {
        id: "",
        name: "",
        email: "",
        document_type_name: "",
        document_number: "",
        address: "",
        district: "",
        phone_number: "",
        well_hired_name: "",
        type_of_service_name: "",
        type_of_claim_name: "",
        description: "",
        created_at: "",
        updated_at: "",
        file_attached: []
      },
      tags: [],
      errors: {},
      categories: []
    };
  },
  methods: {
    getPost: function getPost(id) {
      var _this = this;

      fetch("https://apirestful.playgroup.pe/api/admin/complaints_book/".concat(id), {
        method: "GET",
        headers: {
          "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.post = data;
        _this.requestLoading = false;
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    deletePost: function deletePost(id) {
      this.$refs["modal-delete"].show();
      this.getPost(id);
    },
    deletePostConfirm: function deletePostConfirm() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deletePostConfirm$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.requestServer = true;
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://apirestful.playgroup.pe/api/admin/complaints_book/".concat(this.post.id), {
                method: "DELETE",
                headers: {
                  "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
                }
              }));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 7:
              data = _context.sent;
              this.$refs["modal-delete"].hide();
              this.restoreEl();
              this.restorePage();
              Swal.fire({
                title: data.title,
                text: data.message,
                type: "success",
                confirmButtonText: "OK",
                buttonsStyling: false,
                customClass: {
                  confirmButton: "btn btn-primary"
                }
              });
              _context.next = 19;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              this.$refs["modal-delete"].hide();
              this.restorePage();
              Swal.fire({
                title: error.title,
                text: error.message,
                type: "error",
                confirmButtonText: "OK",
                buttonsStyling: false,
                customClass: {
                  confirmButton: "btn btn-primary"
                }
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 14]]);
    },
    editPost: function editPost(id) {
      this.editBlock = true;
      this.getPost(id);
      this.startBlock = false;
    },
    detailPost: function detailPost(id) {
      this.requestLoading = true;
      this.$refs["modal-detail"].show();
      this.getPost(id);
    },
    getPosts: function getPosts(pagina, desde) {
      var _this2 = this;

      var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "https://apirestful.playgroup.pe/api/admin/complaints_book?page=" + pagina + "&desde=" + desde;

      if (search) {
        url = url + "&search=" + search;
      }

      axios.get(url, {
        headers: {
          "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
        }
      }).then(function (response) {
        _this2.posts = response.data;
      })["catch"](function (error) {});
    },
    newPost: function newPost() {
      this.startBlock = false;
      this.newBlock = true;
    },
    restoreEl: function restoreEl() {
      this.post = {
        id: "",
        name: "",
        email: "",
        document_type_name: "",
        document_number: "",
        address: "",
        district: "",
        phone_number: "",
        well_hired_name: "",
        type_of_service_name: "",
        type_of_claim_name: "",
        description: "",
        created_at: "",
        updated_at: "",
        file_attached: []
      };
      this.tags = [];
      this.errors = {};
      this.requestServer = false;
    },
    restorePage: function restorePage() {
      this.requestServer = false;
      this.newBlock = this.editBlock = false;
      this.startBlock = true;
      this.post = {
        id: "",
        name: "",
        email: "",
        document_type_name: "",
        document_number: "",
        address: "",
        district: "",
        phone_number: "",
        well_hired_name: "",
        type_of_service_name: "",
        type_of_claim_name: "",
        description: "",
        created_at: "",
        updated_at: "",
        file_attached: []
      };
      this.tags = [];
      this.categories = this.image = [];
      this.errors = {};
      this.posts = {};
      this.getPosts(1, this.entries);
    },
    createPost: function createPost() {
      var fd, res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createPost$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.requestServer = true;
              fd = new FormData();
              fd.append("title", this.post.title);
              fd.append("url", this.post.url);

              if (this.$refs.ref_image.dropzone.files[0]) {
                fd.append("image", this.$refs.ref_image.dropzone.files[0]);
              }

              if (this.$refs.ref_thumbnail.dropzone.files[0]) {
                fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
              }

              if (this.post.published) {
                fd.append("published", 1);
              } else {
                fd.append("published", 0);
              }

              console.log(this.post);
              _context2.prev = 8;
              _context2.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://apirestful.playgroup.pe/api/admin/complaints_book", {
                method: "POST",
                headers: {
                  "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
                },
                body: fd
              }));

            case 11:
              res = _context2.sent;
              _context2.next = 14;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 14:
              data = _context2.sent;
              console.log(data);
              console.log(res.status);

              if (res.status >= 200 || res.status <= 202) {
                this.restorePage();
                Swal.fire({
                  title: data.title,
                  text: data.message,
                  type: "success",
                  confirmButtonText: "OK",
                  buttonsStyling: false,
                  customClass: {
                    confirmButton: "btn btn-primary"
                  }
                });
              } else {
                this.restorePage();
                Swal.fire({
                  title: data.title,
                  text: data.message,
                  type: "error",
                  confirmButtonText: "OK",
                  buttonsStyling: false,
                  customClass: {
                    confirmButton: "btn btn-primary"
                  }
                });
              }

              _context2.next = 23;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](8);
              console.error(_context2.t0);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[8, 20]]);
    }
  },
  created: function created() {
    this.getPosts(1, this.entries);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 992px) {\n.modal-lg {\n    max-width: 1140px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "id_title" } },
      [_vm._v("Título")]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.name,
          expression: "name"
        }
      ],
      staticClass: "form-control form-control-alternative",
      attrs: { type: "text", placeholder: "Título", id: "id_title" },
      domProps: { value: _vm.name },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "mt-2" }, [
      _c("small", [
        _vm._v(
          _vm._s(_vm.url) +
            _vm._s(_vm.categorySlug ? _vm.categorySlug + "/" : "")
        )
      ]),
      !_vm.editBlock
        ? _c("small", { staticClass: "bg-primary text-white" }, [
            _vm._v(_vm._s(_vm.slug))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.slug,
                expression: "slug"
              }
            ],
            staticClass: "form-control form-control-sm d-inline w-50",
            attrs: { type: "text" },
            domProps: { value: _vm.slug },
            on: {
              keydown: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.getSlug($event)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.slug = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.editBlock
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  _vm.editBlock = !_vm.editBlock
                }
              }
            },
            [_vm._v("Editar")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              attrs: { type: "button" },
              on: { click: _vm.getSlug }
            },
            [_vm._v("Aceptar")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=template&id=55cacefe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/complaints_book/Claim.vue?vue&type=template&id=55cacefe& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                      title: "Reclamos",
                      parent: "Libro de Reclamaciones",
                      active: "Reclamos"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-6 col-md-5 text-right" },
                [
                  _vm.newBlock
                    ? _c("Button", {
                        attrs: {
                          classes: ["btn-primary"],
                          text: "Registrar",
                          "request-server": _vm.requestServer
                        },
                        on: {
                          click: function($event) {
                            return _vm.createPost()
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.startBlock
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: {
                            type: "button",
                            "request-server": _vm.requestServer
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.restorePage($event)
                            }
                          }
                        },
                        [_vm._v("Cancelar")]
                      )
                    : _vm._e()
                ],
                1
              )
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
        _vm.startBlock
          ? _c("DataTable", {
              attrs: {
                placeholder: "Tipo de Servicio",
                object: _vm.posts,
                buttonRead: true,
                buttonDelete: true,
                buttonUpdate: false
              },
              on: {
                "update:object": function($event) {
                  _vm.posts = $event
                },
                delete: _vm.deletePost,
                read: _vm.detailPost,
                get: _vm.getPosts
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.newBlock
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-xl-8 mb-4 mb-xl-0" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.createPost($event)
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
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "title" }
                                  },
                                  [_vm._v("Titulo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.title,
                                      expression: "post.title"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: {
                                    rows: "2",
                                    id: "title",
                                    placeholder: "Titulo"
                                  },
                                  domProps: { value: _vm.post.title },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "title",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.title
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "title" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.title[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 " }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: "id_checkbox_published",
                                        name: "id_checkbox_published"
                                      },
                                      model: {
                                        value: _vm.post.published,
                                        callback: function($$v) {
                                          _vm.$set(_vm.post, "published", $$v)
                                        },
                                        expression: "post.published"
                                      }
                                    },
                                    [_vm._v("Publicar")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "url" }
                                  },
                                  [_vm._v("URL")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.url,
                                      expression: "post.url"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: {
                                    rows: "2",
                                    id: "url",
                                    placeholder: "URL"
                                  },
                                  domProps: { value: _vm.post.url },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "url",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.url
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "url" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.url[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-xl-4" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "vue-dropzone",
                            {
                              ref: "ref_thumbnail",
                              attrs: {
                                id: "id_thumbnail",
                                options: _vm.dropzoneOptions,
                                duplicateCheck: true,
                                useCustomSlot: true
                              },
                              on: {
                                "vdropzone-file-added": function($event) {
                                  return _vm.$validateImageDropzone(
                                    $event,
                                    _vm.$refs.ref_thumbnail.dropzone,
                                    1,
                                    1000000,
                                    "1000kb"
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
                                        "Suelte el archivo aquí o haga click para cargarlo."
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.thumbnail
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "text-danger text-sm d-block mt-2",
                                  attrs: { for: "file" }
                                },
                                [_vm._v(_vm._s(_vm.errors.thumbnail[0]))]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("file-upload", {
                        ref: "ref_content_images",
                        staticClass: "d-none",
                        attrs: {
                          extensions: "jpg,jpeg,png",
                          accept: "image/png,image/jpeg,image/jpg",
                          drop: false,
                          multiple: true,
                          "input-id": "id_content_images"
                        },
                        on: {
                          "input-filter": function($event) {
                            return _vm.$uploadImageUploadComponent(
                              $event,
                              _vm.$refs.ref_content,
                              100000,
                              "100kb",
                              "posts"
                            )
                          }
                        },
                        model: {
                          value: _vm.post.images,
                          callback: function($$v) {
                            _vm.$set(_vm.post, "images", $$v)
                          },
                          expression: "post.images"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group mb-0" },
                        [
                          _vm._m(1),
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
                                    _vm.$refs.ref_thumbnail.dropzone,
                                    1,
                                    1000000,
                                    "1000kb"
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
                                        "Suelte el archivo aquí o haga click para cargarlo."
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
                                  staticClass:
                                    "text-danger text-sm d-block mt-2",
                                  attrs: { for: "file" }
                                },
                                [_vm._v(_vm._s(_vm.errors.image[0]))]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.editBlock
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-xl-8 mb-4 mb-xl-0" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.createPost($event)
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
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "title" }
                                  },
                                  [_vm._v("Titulo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.title,
                                      expression: "post.title"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: {
                                    rows: "2",
                                    id: "title",
                                    placeholder: "Titulo"
                                  },
                                  domProps: { value: _vm.post.title },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "title",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.title
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "title" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.title[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 " }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: "id_checkbox_published",
                                        name: "id_checkbox_published"
                                      },
                                      model: {
                                        value: _vm.post.published,
                                        callback: function($$v) {
                                          _vm.$set(_vm.post, "published", $$v)
                                        },
                                        expression: "post.published"
                                      }
                                    },
                                    [_vm._v("Publicar")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "url" }
                                  },
                                  [_vm._v("URL")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.url,
                                      expression: "post.url"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: {
                                    rows: "2",
                                    id: "url",
                                    placeholder: "URL"
                                  },
                                  domProps: { value: _vm.post.url },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "url",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.url
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "url" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.url[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-xl" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold d-block",
                            attrs: { for: "thumbnail" }
                          },
                          [_vm._v("Miniatura")]
                        ),
                        _vm._v(" "),
                        _vm.post.thumbnail
                          ? _c("img", {
                              staticClass: "img-fluid mb-2",
                              attrs: {
                                src:
                                  "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                  _vm.post.thumbnail,
                                alt: "Post"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "vue-dropzone",
                          {
                            ref: "ref_thumbnail",
                            attrs: {
                              id: "id_thumbnail",
                              options: _vm.dropzoneOptions,
                              duplicateCheck: true,
                              useCustomSlot: true
                            },
                            on: {
                              "vdropzone-file-added": function($event) {
                                return _vm.$validatethumbnailDropzone(
                                  $event,
                                  _vm.$refs.ref_thumbnail.dropzone,
                                  1,
                                  100000,
                                  "100kb"
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
                                      "Suelte el archivo aquí o haga click para cargarlo."
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.thumbnail
                          ? _c(
                              "label",
                              {
                                staticClass: "text-danger text-sm d-block mt-2",
                                attrs: { for: "file" }
                              },
                              [_vm._v(_vm._s(_vm.errors.thumbnail[0]))]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold d-block",
                            attrs: { for: "image" }
                          },
                          [_vm._v("Imagen")]
                        ),
                        _vm._v(" "),
                        !_vm.image.length && _vm.post.image
                          ? _c("img", {
                              staticClass: "img-fluid mb-2",
                              attrs: {
                                src:
                                  "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                  _vm.post.image,
                                alt: "Post"
                              }
                            })
                          : _vm._e(),
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
                                  _vm.$refs.ref_thumbnail.dropzone,
                                  1,
                                  1000000,
                                  "1000kb"
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
                                      "Suelte el archivo aquí o haga click para cargarlo."
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
                                attrs: { for: "file" }
                              },
                              [_vm._v(_vm._s(_vm.errors.image[0]))]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "modal-delete",
            attrs: { centered: "", size: "xl" },
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
                        text: "Eliminar",
                        "request-server": _vm.requestServer
                      },
                      on: {
                        click: function($event) {
                          return _vm.deletePostConfirm()
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
                            return cancel()
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
                _vm._v("Eliminar Post")
              ])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "my-3" }, [
              _vm._v("Esta seguro que desea eliminar el post?")
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "modal-detail",
            attrs: { size: "lg", centered: "" },
            scopedSlots: _vm._u([
              {
                key: "modal-footer",
                fn: function(ref) {
                  var ok = ref.ok
                  var cancel = ref.cancel
                  return [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return ok()
                          }
                        }
                      },
                      [_vm._v("OK")]
                    )
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "modal-title" }, [
              _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
                _vm._v("Detalle Reclamo")
              ])
            ]),
            _vm._v(" "),
            _vm.requestLoading
              ? _c(
                  "div",
                  [
                    _c("Loader", {
                      attrs: {
                        text: "Cargando...",
                        iconHeight: 20,
                        iconWidth: 20,
                        styles: { height: "300px" }
                      }
                    })
                  ],
                  1
                )
              : _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Nombre")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.name))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Correo electronico")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.email))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Tipo de documento")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.document_type_name))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Numero de documento")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.document_number))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Dirección")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.address))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Distrito")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.district))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Numero de telefono")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.phone_number))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Bien contratado")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.well_hired_name))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Tipo de Servicio")]
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.post.type_of_service_name))
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Reclamo / Queja")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.type_of_claim_name))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Descripción")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.description))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Fecha de reclamo")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.created_at))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8 col-sm-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold font-weight-bold"
                              },
                              [_vm._v("Archivos adjuntos")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.post.file_attached, function(f_a) {
                              return _c("div", [
                                _c(
                                  "a",
                                  {
                                    staticStyle: { display: "block" },
                                    attrs: {
                                      href:
                                        "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                        f_a.file_name,
                                      target: "_blank"
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-file" }),
                                    _vm._v(" " + _vm._s(f_a.file_name))
                                  ]
                                )
                              ])
                            })
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                ])
          ],
          2
        )
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
    return _c("label", { staticClass: "d-block", attrs: { for: "image" } }, [
      _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Miniatura")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "d-block", attrs: { for: "image" } }, [
      _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Imagen")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=template&id=48ad37f5& */ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&");
/* harmony import */ var _InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=script&lang=js& */ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=template&id=48ad37f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/complaints_book/Claim.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/complaints_book/Claim.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Claim_vue_vue_type_template_id_55cacefe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Claim.vue?vue&type=template&id=55cacefe& */ "./resources/js/views/complaints_book/Claim.vue?vue&type=template&id=55cacefe&");
/* harmony import */ var _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Claim.vue?vue&type=script&lang=js& */ "./resources/js/views/complaints_book/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Claim.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Claim_vue_vue_type_template_id_55cacefe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Claim_vue_vue_type_template_id_55cacefe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/complaints_book/Claim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/complaints_book/Claim.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/complaints_book/Claim.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/complaints_book/Claim.vue?vue&type=template&id=55cacefe&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/complaints_book/Claim.vue?vue&type=template&id=55cacefe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_55cacefe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=template&id=55cacefe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/complaints_book/Claim.vue?vue&type=template&id=55cacefe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_55cacefe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_55cacefe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);