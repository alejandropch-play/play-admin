<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Historia" active="Historia"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newElement"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-trophy"></i>
                </span>
                <span class="btn-inner--text">Nueva Historia</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <ElementsDraggable
        v-if="startBlock && elements.length"
        type="history"
        @delete="deleteElement"
        @edit="editElement"
        @drag="orderElements"
        :object.sync="elements"
        :classes="['col-12','col-sm-6','col-lg-6','col-xl-3','mb-4']"
      ></ElementsDraggable>
      <div class="card shadow mb-4" v-if="newBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Historia</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createElement">
            <div class="row">
              <div class="col-12 col-lg-3">
                <div class="form-group">
                  <label class="font-weight-bold d-block mb-0">Imagen</label>
                  <vue-dropzone
                    ref="ref_image"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,124000,'100kb')"
                    id="id_image"
                    :options="dropzoneOptions"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h5
                        class="dropzone-custom-title text-primary"
                      >Suelte los archivos aquí o haga click para cargarlos.</h5>
                    </div>
                  </vue-dropzone>
                  <label
                    v-if="errors && errors.image"
                    class="text-danger text-sm mt-2 d-block"
                    for="id_image"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_title">Titulo</label>
                      <input
                        type="text"
                        class="form-control form-control-alternative"
                        v-model="element.title"
                        id="id_title"
                      />
                      <label
                        v-if="errors && errors.title"
                        class="mt-2 text-danger text-sm"
                        for="id_title"
                      >{{ errors.title[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_description">Descripción</label>
                      <input
                        type="text"
                        class="form-control form-control-alternative"
                        v-model="element.description"
                        id="id_description"
                      />
                      <label
                        v-if="errors && errors.description"
                        class="mt-2 text-danger text-sm"
                        for="id_description"
                      >{{ errors.description[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-right">
                <Button
                  :text="'Registrar'"
                  :classes="['btn-primary']"
                  :request-server="requestServer"
                ></Button>
                <button type="button" class="btn btn-danger" @click.prevent="restorePage">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card shadow" v-if="editBlock">
        <div class="card-header bg-white border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Historia</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateElement">
            <div class="row">
              <div class="col-12 col-lg-3">
                <div class="row">
                  <div class="col-3">
                    <img
                      class="img-fluid mx-auto d-block"
                      v-if="element.image"
                      :src="'https://storage.googleapis.com/playgroup-web/img/history/'+element.image"
                      :alt="element.image"
                    />
                  </div>
                  <div class="col-9">
                    <div class="form-group">
                      <label class="font-weight-bold d-block mb-0">Imagen</label>
                      <vue-dropzone
                        ref="ref_image"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                        id="id_image"
                        :options="dropzoneOptions"
                        :duplicateCheck="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <h3
                            class="dropzone-custom-title text-primary"
                          >Suelte el archivo aquí o haga click para cargarlo.</h3>
                        </div>
                      </vue-dropzone>
                      <label
                        v-if="errors && errors.image"
                        class="text-danger text-sm d-block"
                        for="id_image"
                      >{{ errors.image[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_title">Titulo</label>
                      <input
                        type="text"
                        class="form-control form-control-alternative"
                        v-model="element.title"
                        id="id_title"
                      />
                      <label
                        v-if="errors && errors.title"
                        class="mt-2 text-danger text-sm"
                        for="id_title"
                      >{{ errors.title[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_description">Descripción</label>
                      <input
                        type="text"
                        class="form-control form-control-alternative"
                        v-model="element.description"
                        id="id_description"
                      />
                      <label
                        v-if="errors && errors.description"
                        class="mt-2 text-danger text-sm"
                        for="id_description"
                      >{{ errors.description[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-primary']"
                  :request-server="requestServer"
                ></Button>
                <button type="button" class="btn btn-danger" @click.prevent="restorePage">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Historia</h2>
      </template>
      <p class="mb-0">¿Está seguro que desea eliminar este elemento?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteElementConfirm"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import FileUpload from "vue-upload-component";
import { quillEditor } from "vue-quill-editor";
import Button from "../components/Button";
import BreadCrumb from "../components/BreadCrumb";
import ElementsDraggable from "../components/ElementsDraggable";
import vue2Dropzone from "vue2-dropzone";
export default {
  data() {
    return {
      errors: {},
      element: {
        image: "",
        index: "",
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
              image: function(value) {
                document.getElementById('id_images').click();
              }
            },
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ size: [false] }],
              [{ font: [false] }],
              [{ color: [] }, { background: [] }],
              ["image"]
            ]
          }
        }
      },
    };
  },
  components: {
    FileUpload,
    quillEditor,
    vueDropzone: vue2Dropzone,
    BreadCrumb,
    Button,
    ElementsDraggable
  },
  methods: {
    restoreEl() {
      this.editBlock = this.requestServer = false;
      this.startBlock = true;
      this.errors = {};
      this.element = {
        image: "",
        index: "",
        description: "",
        title: ""
      };
      this.$refs["modal-delete"].hide();
    },
    getElement(id) {
      axios
        .get("json/history/" + id)
        .then(response => {
          this.element = response.data;
        })
        .catch(error => {});
    },
    deleteElementConfirm() {
      this.requestServer = true;
      axios
        .delete("history/" + this.element.id)
        .then(response => {
          this.restorePage();
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
        })
        .catch(error => {
          this.restoreEl();
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
    deleteElement(id) {
      this.$refs["modal-delete"].show();
      this.getElement(id);
    },
    newElement() {
      this.newBlock = true;
      this.startBlock = false;
    },
    editElement(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getElement(id);
    },
    restorePage() {
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
        description: "",
        title: ""
      };
    },
    getElements() {
      axios
        .get("json/history")
        .then(response => {
          this.elements = response.data;
        })
        .catch(error => {});
    },
    updateElement() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.element.id);
      this.element.title
        ? fd.append("title", this.element.title)
        : fd.append("title", "");
      this.element.description
        ? fd.append("description", this.element.description)
        : fd.append("description", "");
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("_method", "PUT");
      axios
        .post("history/" + this.element.id, fd)
        .then(response => {
          this.requestServer = false;
          this.restorePage();
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
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restorePage();
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
    createElement() {
      this.requestServer = true;
      const fd = new FormData();
      this.element.title
        ? fd.append("title", this.element.title)
        : fd.append("title", "");
      this.element.description
        ? fd.append("description", this.element.description)
        : fd.append("description", "");
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      axios
        .post("history", fd)
        .then(response => {
          this.requestServer = false;
          this.restorePage();
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
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restorePage();
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
    orderElements(elements) {
      axios
        .put("history/order", elements)
        .then(response => {
          this.restorePage();
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
        })
        .catch(error => {
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
  created() {
    this.getElements();
  },
 updated() {
  console.log("Element updated on render:");
  console.log("updated:", this.elements);
  console.log("updated bloc:", this.startBlock);
},
mounted() {
  console.log('Elements:', this.elements); // Should not be an empty array
  console.log("mounted block:", this.startBlock);
}


};
</script>
