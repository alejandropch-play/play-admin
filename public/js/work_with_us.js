(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/work_with_us"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/work_with_us/Job.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/InputSlug */ "./resources/js/components/form/InputSlug.vue");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    appUrl: {
      type: String
    }
  },
  components: {
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_5___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_8___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__["quillEditor"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_6__["ModelListSelect"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  data: function data() {
    return {
      newBlock: false,
      startBlock: true,
      editBlock: false,
      requestServer: false,
      requestLoading: false,
      image: [],
      jobs: {},
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
            }],
            //['clean'],
            ["link", "image", "video"]]
          }
        }
      },
      entries: 20,
      job: {
        id: "",
        name: "",
        job_url: "",
        department_id: "",
        published: "",
        created_at: "",
        updated_at: "",
        published_bool: ""
      },
      errors: {},
      departments: []
    };
  },
  methods: {
    getJob: function getJob(id) {
      var _this = this;
      fetch("https://apirestful.playgroup.pe/api/admin/work_with_us/".concat(id), {
        method: "GET",
        headers: {
          "contentType": "application/json"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.job = data;
        _this.requestLoading = false;
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    deleteJob: function deleteJob(id) {
      this.$refs["modal-delete"].show();
      this.getJob(id);
    },
    deleteJobConfirm: function deleteJobConfirm() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.requestServer = true;
              _context.prev = 1;
              _context.next = 4;
              return fetch("https://apirestful.playgroup.pe/api/admin/work_with_us/".concat(_this2.job.id), {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();
            case 7:
              data = _context.sent;
              _this2.$refs["modal-delete"].hide();
              _this2.restoreEl();
              _this2.restorePage();
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
              _this2.$refs["modal-delete"].hide();
              _this2.restorePage();
              Swal.fire({
                title: _context.t0.title,
                text: _context.t0.message,
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
        }, _callee, null, [[1, 14]]);
      }))();
    },
    editJob: function editJob(id) {
      this.getDepartments();
      this.editBlock = true;
      this.getJob(id);
      this.startBlock = false;
    },
    detailJob: function detailJob(id) {
      this.requestLoading = true;
      this.$refs["modal-detail"].show();
      this.getJob(id);
    },
    getJobs: function getJobs(pagina, desde) {
      var _this3 = this;
      var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "https://apirestful.playgroup.pe/api/admin/work_with_us?page=" + pagina + "&desde=" + desde;
      if (search) {
        url = url + "&search=" + search;
      }
      fetch(url, {
        headers: {
          "contentType": "application/json"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.jobs = data;
      })["catch"](function (error) {});
    },
    getDepartments: function getDepartments() {
      var _this4 = this;
      axios.get("/json/select/departments").then(function (response) {
        _this4.departments = response.data;
      })["catch"](function (err) {});
    },
    newJob: function newJob() {
      this.startBlock = false;
      this.newBlock = true;
      this.getDepartments();
    },
    restoreEl: function restoreEl() {
      this.job = {
        name: "",
        job_url: "",
        department_name: "",
        published: "",
        created_at: "",
        updated_at: "",
        department_id: "",
        published_bool: ""
      };
      this.tags = [];
      this.errors = {};
      this.requestServer = false;
    },
    restorePage: function restorePage() {
      this.requestServer = false;
      this.newBlock = this.editBlock = false;
      this.startBlock = true;
      this.job = {
        name: "",
        job_url: "",
        department_name: "",
        published: "",
        created_at: "",
        updated_at: "",
        department_id: "",
        published_bool: ""
      };
      this.errors = {};
      this.jobs = {};
      this.getJobs(1, this.entries);
    },
    updateJob: function updateJob() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var fd, res, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this5.requestServer = true;
              fd = new FormData();
              _this5.job.name ? fd.append("name", _this5.job.name) : fd.append("name", "");
              _this5.job.job_url ? fd.append("job_url", _this5.job.job_url) : fd.append("job_url", "");
              _this5.job.department_id ? fd.append("department_id", _this5.job.department_id) : fd.append("department_id", "");
              if (_this5.job.published_bool) {
                fd.append("published", 1);
              } else {
                fd.append("published", 0);
              }
              _context2.prev = 6;
              _context2.next = 9;
              return fetch("https://apirestful.playgroup.pe/api/admin/work_with_us/".concat(_this5.job.id), {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  "name": fd.get("name"),
                  "job_url": fd.get("job_url"),
                  "department_id": fd.get("department_id"),
                  "published": fd.get("published")
                })
              });
            case 9:
              res = _context2.sent;
              _context2.next = 12;
              return res.json();
            case 12:
              data = _context2.sent;
              _this5.requestServer = false;
              _this5.restorePage();
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
              _context2.next = 27;
              break;
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](6);
              console.error(_context2.t0);
              _this5.requestServer = false;
              if (!(_context2.t0.response.status === 422)) {
                _context2.next = 25;
                break;
              }
              _this5.e = _context2.t0.response.data.errors || {};
              return _context2.abrupt("return");
            case 25:
              _this5.restorePage();
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
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[6, 18]]);
      }))();
    },
    createJob: function createJob() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var fd, res, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this6.requestServer = true;
              fd = new FormData();
              fd.append("name", _this6.job.name);
              fd.append("job_url", _this6.job.job_url);
              fd.append("department_id", _this6.job.department_id);
              if (_this6.job.published) {
                fd.append("published", 1);
              } else {
                fd.append("published", 0);
              }
              console.log(_this6.job);
              _context3.prev = 7;
              _context3.next = 10;
              return fetch("https://apirestful.playgroup.pe/api/admin/work_with_us", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  "name": fd.get("name"),
                  "job_url": fd.get("job_url"),
                  "department_id": fd.get("department_id"),
                  "published": fd.get("published")
                })
              });
            case 10:
              res = _context3.sent;
              _context3.next = 13;
              return res.json();
            case 13:
              data = _context3.sent;
              console.log(data);
              console.log(res.status);
              if (res.status >= 200 || res.status <= 202) {
                _this6.restorePage();
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
                _this6.restorePage();
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
              _context3.next = 22;
              break;
            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](7);
              console.error(_context3.t0);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[7, 19]]);
      }))();
    }
  },
  created: function created() {
    this.getJobs(1, this.entries);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=template&id=2d78c8d4":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/work_with_us/Job.vue?vue&type=template&id=2d78c8d4 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      title: "Puestos",
      parent: "Trabaja con Nosotros",
      active: "Puestos"
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
        return _vm.newJob.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("span", {
    staticClass: "btn-inner--text"
  }, [_vm._v("Nueva vacante")])]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("Button", {
    attrs: {
      classes: ["btn-primary"],
      text: "Actualizar",
      "request-server": _vm.requestServer
    },
    on: {
      click: function click($event) {
        return _vm.updateJob();
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
        return _vm.createJob();
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
      placeholder: "Nombre de Vacante",
      object: _vm.jobs,
      buttonRead: true,
      buttonUpdate: true,
      buttonDelete: true
    },
    on: {
      "update:object": function updateObject($event) {
        _vm.jobs = $event;
      },
      update: _vm.editJob,
      "delete": _vm.deleteJob,
      read: _vm.detailJob,
      get: _vm.getJobs
    }
  }) : _vm._e(), _vm._v(" "), _vm.newBlock ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-xl-12 mb-4 mb-xl-0"
  }, [_c("div", {
    staticClass: "card shadow"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createJob.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.job.name,
      expression: "job.name"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      rows: "2",
      id: "name",
      placeholder: "Nombre"
    },
    domProps: {
      value: _vm.job.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.job, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.errors.name))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "job_url"
    }
  }, [_vm._v("URL de la vacante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.job.job_url,
      expression: "job.job_url"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      rows: "2",
      id: "job_url",
      placeholder: "URL de la vacante"
    },
    domProps: {
      value: _vm.job.job_url
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.job, "job_url", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.job_url ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "job_url"
    }
  }, [_vm._v(_vm._s(_vm.errors.job_url))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_department"
    }
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("model-list-select", {
    staticClass: "form-control",
    attrs: {
      list: _vm.departments,
      id: "id_department",
      "option-value": "id",
      "option-text": "name",
      placeholder: "Selecciona el departamento"
    },
    model: {
      value: _vm.job.department_id,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "department_id", $$v);
      },
      expression: "job.department_id"
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.department_id ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v(_vm._s(_vm.errors.department_id))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("b-form-checkbox", {
    attrs: {
      id: "id_checkbox_published",
      name: "id_checkbox_published"
    },
    model: {
      value: _vm.job.published,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "published", $$v);
      },
      expression: "job.published"
    }
  }, [_vm._v("Publicar")])], 1)])])])])])])])]) : _vm._e(), _vm._v(" "), _vm.editBlock ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-xl-12 mb-4 mb-xl-0"
  }, [_c("div", {
    staticClass: "card shadow"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createJob.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.job.name,
      expression: "job.name"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      rows: "2",
      id: "name",
      placeholder: "Nombre"
    },
    domProps: {
      value: _vm.job.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.job, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.errors.name))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "job_url"
    }
  }, [_vm._v("URL de la vacante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.job.job_url,
      expression: "job.job_url"
    }],
    staticClass: "form-control form-control-alternative",
    attrs: {
      rows: "2",
      id: "job_url",
      placeholder: "URL de la vacante"
    },
    domProps: {
      value: _vm.job.job_url
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.job, "job_url", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.job_url ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "job_url"
    }
  }, [_vm._v(_vm._s(_vm.errors.job_url))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "id_department"
    }
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("model-list-select", {
    staticClass: "form-control",
    attrs: {
      list: _vm.departments,
      id: "id_department",
      "option-value": "id",
      "option-text": "name",
      placeholder: "Selecciona el departamento"
    },
    model: {
      value: _vm.job.department_id,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "department_id", $$v);
      },
      expression: "job.department_id"
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.department_id ? _c("label", {
    staticClass: "mt-2 text-danger text-sm",
    attrs: {
      "for": "id_category"
    }
  }, [_vm._v(_vm._s(_vm.errors.department_id))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("b-form-checkbox", {
    attrs: {
      id: "id_checkbox_published",
      name: "id_checkbox_published"
    },
    model: {
      value: _vm.job.published_bool,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "published_bool", $$v);
      },
      expression: "job.published_bool"
    }
  }, [_vm._v("Publicar")])], 1)])])])])])])])]) : _vm._e(), _vm._v(" "), _c("b-modal", {
    ref: "modal-delete",
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
              return _vm.deleteJobConfirm();
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
    }])
  }, [_c("template", {
    slot: "modal-title"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Eliminar vacante")])]), _vm._v(" "), _c("p", {
    staticClass: "my-3"
  }, [_vm._v("Esta seguro que desea eliminar la vacante?")])], 2), _vm._v(" "), _c("b-modal", {
    ref: "modal-detail",
    attrs: {
      size: "lg",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref2) {
        var ok = _ref2.ok,
          cancel = _ref2.cancel;
        return [_c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return ok();
            }
          }
        }, [_vm._v("OK")])];
      }
    }])
  }, [_c("template", {
    slot: "modal-title"
  }, [_c("h2", {
    staticClass: "mb-0 text-uppercase text-primary"
  }, [_vm._v("Detalle de la vacante")])]), _vm._v(" "), _vm.requestLoading ? _c("div", [_c("Loader", {
    attrs: {
      text: "Cargando...",
      iconHeight: 20,
      iconWidth: 20,
      styles: {
        height: "300px"
      }
    }
  })], 1) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold font-weight-bold"
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.job.name))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold font-weight-bold"
  }, [_vm._v("URL")]), _vm._v(" "), _c("p", [_c("a", {
    attrs: {
      target: "_blank",
      href: _vm.job.job_url
    }
  }, [_vm._v(_vm._s(_vm.job.job_url))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold font-weight-bold"
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.job.department_name)
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold font-weight-bold"
  }, [_vm._v("Estado")]), _vm._v(" "), _c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.job.published)
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold font-weight-bold"
  }, [_vm._v("Registrado el")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.job.created_at))])])])])], 2)], 1)]);
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 992px) {\n.modal-lg {\n    max-width: 1140px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css");

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

/***/ "./resources/js/views/work_with_us/Job.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/work_with_us/Job.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Job_vue_vue_type_template_id_2d78c8d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Job.vue?vue&type=template&id=2d78c8d4 */ "./resources/js/views/work_with_us/Job.vue?vue&type=template&id=2d78c8d4");
/* harmony import */ var _Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Job.vue?vue&type=script&lang=js */ "./resources/js/views/work_with_us/Job.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Job_vue_vue_type_style_index_0_id_2d78c8d4_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css */ "./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Job_vue_vue_type_template_id_2d78c8d4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Job_vue_vue_type_template_id_2d78c8d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/work_with_us/Job.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/work_with_us/Job.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/work_with_us/Job.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Job.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_2d78c8d4_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=style&index=0&id=2d78c8d4&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_2d78c8d4_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_2d78c8d4_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_2d78c8d4_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_2d78c8d4_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/work_with_us/Job.vue?vue&type=template&id=2d78c8d4":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/work_with_us/Job.vue?vue&type=template&id=2d78c8d4 ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_template_id_2d78c8d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Job.vue?vue&type=template&id=2d78c8d4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/work_with_us/Job.vue?vue&type=template&id=2d78c8d4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_template_id_2d78c8d4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Job_vue_vue_type_template_id_2d78c8d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);