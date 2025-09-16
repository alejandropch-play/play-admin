<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-4 col-md-4">
              <BreadCrumb title="Tooling" active="Tooling"></BreadCrumb>
            </div>
            <div class="col-8 col-md-8 text-right">
              <a
                href="#"
                class="btn btn-primary"
                @click.prevent="restoreDepartments"
                v-if="showBlock"
              >
                Ver Departamentos
              </a>

              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newTool"
                v-if="showBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-info"></i>
                </span>
                <span class="btn-inner--text">Nuevo Herramienta</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="startBlock">
        <div class="col-12">
          <p class="mb-4 font-weight-bold">Seleccione el departamento.</p>
        </div>
        <div
          class="col-12 col-md-6 col-lg-3 mb-4"
          v-for="department in departments"
          :key="department.id"
        >
          <a href="#" @click.prevent="getTooling(department.id)">
            <div class="card shadow">
              <div class="card-body" v-if="department.logo">
                <div class="text-center">
                  <img
                    height="90"
                    width="90"
                    :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ department.logo"
                    :alt="department.name"
                  />
                </div>
              </div>
              <div class="card-footer border-0" :class="{'pt-0' : department.logo }">
                <h2 class="mb-0 text-center">{{ department.title }}</h2>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div v-if="showBlock">

        <div class="row">
          <div class="col-12 text-center mb-4">

                  <img
                    height="60"
                    width="60"
                    :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ department.logo"
                    :alt="department.name" v-if="department.logo"
                  />
                   <h2 class="mb-0 text-center" v-else>{{ department.title }}</h2>

            
          </div>
        </div>
        <ElementsDraggable
          type="tooling"
          @delete="deleteTooling"
          @edit="editTooling"
          @drag="orderTooling"
          :object.sync="tooling"
          :classes="['col-6','col-lg-3','mb-4']"
        ></ElementsDraggable>
      </div>

      <div class="card shadow mb-4" v-if="editBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Herramienta</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateTool">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_title">Nombre</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.title"
                    id="id_title"
                  />
                  <label
                    v-if="errors && errors.title"
                    class="mt-2 text-danger text-sm"
                    for="id_title"
                  >{{ errors.title[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_logo">Logo</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <div class="row">
                    <div class="col-3">
                      <img
                        class="img-fluid shadow mx-auto d-block"
                        v-if="service.logo"
                        :src="'https://storage.googleapis.com/playgroup-web/img/tooling/'+service.logo"
                        :alt="service.logo"
                      />
                    </div>
                    <div class="col-9">
                      <vue-dropzone
                        ref="ref_logo"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_logo.dropzone,1,300000,'300kb')"
                        id="id_logo"
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
                    </div>
                  </div>
                  <label
                    v-if="errors && errors.logo"
                    class="text-danger text-sm d-block mt-2"
                    for="id_logo"
                  >{{ errors.logo[0] }}</label>
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

      <div class="card shadow mb-4" v-if="newBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Herramienta</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createTool">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_title">Nombre:</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.title"
                    placeholder="Nombre"
                    id="id_title"
                  />
                  <label
                    v-if="errors && errors.title"
                    class="mt-2 text-danger text-sm"
                    for="id_title"
                  >{{ errors.title[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_logo">Logo Herramienta:</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <vue-dropzone
                    ref="ref_logo"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_logo.dropzone,1,300000,'300kb')"
                    id="id_logo"
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
                    v-if="errors && errors.logo"
                    class="text-danger text-sm d-block mt-2"
                    for="id_logo"
                  >{{ errors.logo[0] }}</label>
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
    </div>
    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Herramienta</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar la herramienta?</p>
      <template slot="modal-footer" slot-scope="{ cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteStoryConfirm()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Button from "../components/Button";
import ElementsDraggable from "../components/ElementsDraggable";
import draggable from "vuedraggable";
import vue2Dropzone from "vue2-dropzone";
import Departments from "../components/form/Departments";
import BreadCrumb from "../components/BreadCrumb";
export default {
  data() {
    return {
      startBlock: true,
      showBlock: false,
      newBlock: false,
      requestServer: false,
      detailBlock: false,
      editBlock: false,
      department:{},
      service: {
        title: "",
        logo: "",
        department_id: "",
      },
      errors: {},
      departments: [],
      tooling: [],
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 250,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      }
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
    Button,
    BreadCrumb,
    ElementsDraggable,
    Departments,
    draggable
  },
  methods: {
    updateTool() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.service.id);
      if (this.service.title) {
        fd.append("title", this.service.title);
      }
      fd.append("department_id", this.department.id);
      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      }
      fd.append("_method", "PUT");
      axios
        .post("tooling/" + this.service.id, fd)
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
    editTooling(id) {
      this.editBlock = true;
      this.startBlock = this.showBlock = false;
      this.getTool(id);
    },
    newTool() {
      this.newBlock = true;
      this.startBlock = this.showBlock = false;
    },
    restoreDepartments(){
      this.showBlock = false;
      this.startBlock = true;
      this.tooling = [];
    },
    restorePage() {
      this.errors = {};
      this.requestServer = false;
      this.newBlock = this.editBlock = this.editBlock = false;
      this.showBlock = true;
      this.service = {
        title: "",
        logo: "",
        department_id: "",
      };

      this.tooling = [];
      this.getTooling(this.department.id);
    },
    createTool() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.service.title) {
        fd.append("title", this.service.title);
      }
      fd.append("department_id", this.department.id);
      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      } else {
        fd.append("logo", "");
      }
      
      axios
        .post("tooling", fd)
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
    getTooling(id) {
      this.showBlock = true;
      this.startBlock = false;
      this.department = this.departments.find(x => x.id === id);
      axios
        .get("json/tooling",{
          params:{
            department: id
          }
        })
        .then(response => {
          this.tooling = response.data;
        })
        .catch(error => {});
    },
    setDepartment(id) {
      this.service.department_id = id;
    },
    orderTooling(elements) {
      axios
        .put("tooling/order", elements)
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
    },
    deleteStoryConfirm() {
      this.requestServer = true;
      axios
        .delete("tooling/" + this.service.id)
        .then(response => {
          this.$refs["modal-delete"].hide();
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
          this.$refs["modal-delete"].hide();
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
    getTool(id) {
      axios
        .get("json/tooling/" + id)
        .then(response => {
          this.service = response.data;
        })
        .catch(error => {});
    },
    deleteTooling(id) {
      this.$refs["modal-delete"].show();
      //console.log(id);
      this.getTool(id);
    },
    getDepartments() {
      axios
        .get("/json/select/departments-no-main")
        .then(response => {
          this.departments = response.data;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getDepartments();
  }
};
</script>
