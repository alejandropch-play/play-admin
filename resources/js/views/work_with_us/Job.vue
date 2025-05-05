<template>
    <div>
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb title="Puestos" parent="Trabaja con Nosotros" active="Puestos"></BreadCrumb>
              </div>
              <div class="col-6 col-md-5 text-right">
                <a
                  href="#"
                  class="btn btn-icon btn-neutral"
                  @click.prevent="newJob"
                  v-if="startBlock"
                >
                  <span class="btn-inner--icon">
                    <i class="fas fa-newspaper"></i>
                  </span>
                  <span class="btn-inner--text">Nueva vacante</span>
                </a>
  
                <Button
                  :classes="['btn-primary']"
                  :text="'Actualizar'"
                  @click="updateJob()"
                  :request-server="requestServer"
                  v-if="editBlock"
                ></Button>
  
                <Button
                  :classes="['btn-primary']"
                  :text="'Registrar'"
                  @click="createJob()"
                  :request-server="requestServer"
                  v-if="newBlock"
                ></Button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click.prevent="restorePage"
                  :request-server="requestServer"
                  v-if="!startBlock"
                >Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <DataTable
          v-if="startBlock"
          placeholder="Nombre de Vacante"
          :object.sync="jobs"
          :buttonRead="true"
          :buttonUpdate="true"
          :buttonDelete="true"
          @update="editJob"
          @delete="deleteJob"
          @read="detailJob"
          @get="getJobs"
        ></DataTable>
        <div class="row" v-if="newBlock">
          <div class="col-12 col-xl-12 mb-4 mb-xl-0">
            <div class="card shadow">
              <div class="card-body">
                <div>
                  <form @submit.prevent="createJob">
                  <div class="row">

                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="name">Nombre</label>
                        <input
                          v-model="job.name"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="name"
                          placeholder="Nombre"
                        ></input>
                        <label
                          v-if="errors && errors.name"
                          class="mt-2 text-danger text-sm"
                          for="name"
                        >{{ errors.name }}</label>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="job_url">URL de la vacante</label>
                        <input
                          v-model="job.job_url"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="job_url"
                          placeholder="URL de la vacante"
                        ></input>
                        <label
                          v-if="errors && errors.job_url"
                          class="mt-2 text-danger text-sm"
                          for="job_url"
                        >{{ errors.job_url }}</label>
                      </div>
                    </div>

                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_department">Departamento</label>

                        <model-list-select
                          :list="departments"
                          id="id_department"
                          class="form-control"
                          v-model="job.department_id"
                          option-value="id"
                          option-text="name"
                          placeholder="Selecciona el departamento"
                        ></model-list-select>

                        <label
                          v-if="errors && errors.department_id"
                          class="mt-2 text-danger text-sm"
                          for="id_category"
                        >{{ errors.department_id }}</label>
                      </div>
                    </div>

                    <div class="col-md-12 col-sm-12">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="job.published"
                          name="id_checkbox_published"
                        >Publicar</b-form-checkbox>
                      </div>
                    </div>

                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
          
        </div>
  
        <div class="row" v-if="editBlock">
        <div class="col-12 col-xl-12 mb-4 mb-xl-0">
          <div class="card shadow">
            <div class="card-body">
              <div>
                <form @submit.prevent="createJob">
                  <div class="row">

<div class="col-md-4 col-sm-12">
  <div class="form-group">
    <label class="font-weight-bold" for="name">Nombre</label>
    <input
      v-model="job.name"
      rows="2"
      class="form-control form-control-alternative"
      id="name"
      placeholder="Nombre"
    ></input>
    <label
      v-if="errors && errors.name"
      class="mt-2 text-danger text-sm"
      for="name"
    >{{ errors.name }}</label>
  </div>
</div>
<div class="col-md-4 col-sm-12">
  <div class="form-group">
    <label class="font-weight-bold" for="job_url">URL de la vacante</label>
    <input
      v-model="job.job_url"
      rows="2"
      class="form-control form-control-alternative"
      id="job_url"
      placeholder="URL de la vacante"
    ></input>
    <label
      v-if="errors && errors.job_url"
      class="mt-2 text-danger text-sm"
      for="job_url"
    >{{ errors.job_url }}</label>
  </div>
</div>

<div class="col-md-4 col-sm-12">
  <div class="form-group">
    <label class="font-weight-bold" for="id_department">Departamento</label>

    <model-list-select
      :list="departments"
      id="id_department"
      class="form-control"
      v-model="job.department_id"
      option-value="id"
      option-text="name"
      placeholder="Selecciona el departamento"
    ></model-list-select>

    <label
      v-if="errors && errors.department_id"
      class="mt-2 text-danger text-sm"
      for="id_category"
    >{{ errors.department_id }}</label>
  </div>
</div>

<div class="col-md-12 col-sm-12">
  <div class="form-group">
    <b-form-checkbox
      id="id_checkbox_published"
      v-model="job.published_bool"
      name="id_checkbox_published"
    >Publicar</b-form-checkbox>
  </div>
</div>

</div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        <b-modal centered ref="modal-delete" size="xl">
          <template slot="modal-title">
            <h2 class="mb-0 text-uppercase text-primary">Eliminar vacante</h2>
          </template>
          <p class="my-3">Esta seguro que desea eliminar la vacante?</p>
          <template slot="modal-footer" slot-scope="{ ok, cancel }">
            <Button
              :classes="['btn-primary']"
              :text="'Eliminar'"
              @click="deleteJobConfirm()"
              :request-server="requestServer"
            ></Button>
            <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
          </template>
        </b-modal>
        <b-modal size="lg" centered ref="modal-detail">
          <template slot="modal-title">
            <h2 class="mb-0 text-uppercase text-primary">Detalle de la vacante</h2>
          </template>
          <div v-if="requestLoading">
            <Loader
              text="Cargando..."
              :iconHeight="20"
              :iconWidth="20"
              :styles="{ height: '300px' }"
            />
          </div>

          <div class="row" v-else>
            <div class="col-sm-12 col-md-4">
    <div class="form-group">
                    <label class="font-weight-bold font-weight-bold">Nombre</label>
                    <p>{{ job.name }}</p>
                  </div>
</div>
<div class="col-sm-12 col-md-4">
    <div class="form-group">
                <label class="font-weight-bold font-weight-bold">URL</label>
                <p>
                  <a
                    target="_blank"
                    :href="job.job_url"
                  >{{ job.job_url }}</a>
                </p>
              </div>
</div>
<div class="col-sm-12 col-md-4">
        <div class="form-group">
                    <label class="font-weight-bold font-weight-bold">Departamento</label>
                    <p v-html="job.department_name"></p>
                  </div>
</div>
<div class="col-sm-12 col-md-4">
        <div class="form-group">
                    <label class="font-weight-bold font-weight-bold">Estado</label>
                    <p v-html="job.published"></p>
                  </div>
</div>
<div class="col-sm-12 col-md-4">
    <div class="form-group">
                    <label class="font-weight-bold font-weight-bold">Registrado el</label>
                    <p>{{ job.created_at }}</p>
                  </div>
</div>

          </div>
          <template slot="modal-footer" slot-scope="{ ok, cancel }">
            <button type="button" class="btn btn-primary" @click="ok()">OK</button>
            <!--<button
              type="button"
              class="btn btn-danger"
              @click="() => { restoreEl();cancel(); }"
            >Cancelar</button>-->
          </template>
        </b-modal>
      </div>
    </div>
  </template>
  <script>
  import BreadCrumb from "../../components/BreadCrumb";
  import Loader from "../../components/Loader";
  import DataTable from "../../components/DataTable";
  import Button from "../../components/Button";
  import InputSlug from "../../components/form/InputSlug";
  import FileUpload from "vue-upload-component";
  import { ModelListSelect } from "vue-search-select";
  import { quillEditor } from "vue-quill-editor";
  import vue2Dropzone from "vue2-dropzone";
  import VueTagsInput from '@johmun/vue-tags-input';
  export default {
    props: {
      appUrl: { type: String }
    },
    components: {
      InputSlug,
      Button,
      FileUpload,
      vueDropzone: vue2Dropzone,
      quillEditor,
      DataTable,
      Loader,
      BreadCrumb,
      ModelListSelect,
      VueTagsInput
    },
    data() {
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
                              image: function(value) {
                                console.log(document.getElementById('id_content_images'));
                                  document.getElementById('id_content_images').click();
                              }
                          },
                          
              container: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ size: [false] }],
                [{ header: [1, 2, 3, 4, 5, false] }],
                [{ font: [false] }],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                //['clean'],
                ["link", "image", "video"]
              ]
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
      getJob(id) {
          fetch(`https://apirestful.playgroup.pe/api/admin/work_with_us/${id}`, {
            method: "GET",
            headers: {
              "contentType": "application/json"
            },
          }).then(res => res.json())
          .then(data => {
            this.job = data;
            this.requestLoading = false;
          })
          .catch(error => console.error(error));

      },
      deleteJob(id) {
        this.$refs["modal-delete"].show();
        this.getJob(id);
      },
      async deleteJobConfirm() {
        this.requestServer = true;

        try {
          const res = await fetch(`https://apirestful.playgroup.pe/api/admin/work_with_us/${this.job.id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
            },
        });
        const data = await res.json();

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

        } catch (e) {
          this.$refs["modal-delete"].hide();
            this.restorePage();
            Swal.fire({
              title: e.title,
              text: e.message,
              type: "error",
              confirmButtonText: "OK",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-primary"
              }
            });
        }

        /*
        axios
          .delete("posts/" + this.job.id)
          .then(response => {
            this.$refs["modal-delete"].hide();
            this.restoreEl();
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
          */
      },
      editJob(id) {
        this.getDepartments();
        this.editBlock = true;
        this.getJob(id);
        this.startBlock = false;
      },
      detailJob(id) {
        this.requestLoading = true;
        this.$refs["modal-detail"].show();
        this.getJob(id);
      },
      getJobs(pagina, desde, search = null) {
        let url = "https://apirestful.playgroup.pe/api/admin/work_with_us?page=" + pagina + "&desde=" + desde;
        if (search) {
          url = url + "&search=" + search;
        }
        fetch(url, {
            headers: {
              "contentType": "application/json"
            },
          })
          .then(res => res.json())
          .then(data => {
            this.jobs = data;
          })
          .catch(error => {});
      },
      getDepartments() {
      axios
        .get("/json/select/departments")
        .then(response => {
          this.departments = response.data;
        })
        .catch(err => {});
    },
      newJob() {
        this.startBlock = false;
        this.newBlock = true;
        this.getDepartments();
      },
      restoreEl() {
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
      restorePage() {
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
      async updateJob(){
        this.requestServer = true;
        const fd = new FormData();

        (this.job.name ? fd.append("name", this.job.name) :  fd.append("name", ""));
        (this.job.job_url ? fd.append("job_url", this.job.job_url) :  fd.append("job_url", ""));
        (this.job.department_id ? fd.append("department_id", this.job.department_id) :  fd.append("department_id", ""));

        if (this.job.published_bool) {
          fd.append("published", 1);
        } else {
          fd.append("published", 0);
        }

        try {
          
          const res = await fetch(`https://apirestful.playgroup.pe/api/admin/work_with_us/${this.job.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
            },
          body: JSON.stringify({
            "name": fd.get("name"),
            "job_url": fd.get("job_url"),
            "department_id": fd.get("department_id"),
            "published": fd.get("published"),
          })
        });
        const data = await res.json();

        this.requestServer = false;
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

        } catch (e) {
          console.error(e);
          this.requestServer = false;
            if (e.response.status === 422) {
              this.e = e.response.data.errors || {};
              return;
            }
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

        }

/*
        axios
          .post("posts/" + this.job.id, fd)
          .then(response => {
            
          })
          .catch(error => {
            
          });

          */
      },
      async createJob() {
        this.requestServer = true;
        const fd = new FormData();
        fd.append("name", this.job.name);
        fd.append("job_url", this.job.job_url);
        fd.append("department_id", this.job.department_id);
        
        if (this.job.published) {
          fd.append("published", 1);
        } else {
          fd.append("published", 0);
        }

        console.log(this.job);

        try {
          const res = await fetch(`https://apirestful.playgroup.pe/api/admin/work_with_us`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
            },
          body: JSON.stringify({
            "name": fd.get("name"),
            "job_url": fd.get("job_url"),
            "department_id": fd.get("department_id"),
            "published": fd.get("published"),
          })
        });
        const data = await res.json();

        console.log(data);
        console.log(res.status);

        if(res.status >=200 || res.status <=202){
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
        }else{
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

        

        } catch (e) {
          console.error(e);
        }

        /*
        
        axios
          .post("posts", fd)
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
          });*/
      }
    },
    created() {
      this.getJobs(1, this.entries);
    }
  };
  </script>
  <style>
  @media (min-width: 992px) {
    .modal-lg {
      max-width: 1140px !important;
    }
  }
  </style>