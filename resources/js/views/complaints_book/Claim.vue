<template>
    <div>
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb title="Reclamos" parent="Libro de Reclamaciones" active="Reclamos"></BreadCrumb>
              </div>
              <div class="col-6 col-md-5 text-right">
  
                <Button
                  :classes="['btn-primary']"
                  :text="'Registrar'"
                  @click="createPost()"
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
          placeholder="Tipo de Servicio"
          :object.sync="posts"
          :buttonRead="true"
          :buttonDelete="true"
          :buttonUpdate="false"
          @delete="deletePost"
          @read="detailPost"
          @get="getPosts"
        ></DataTable>
        <div class="row" v-if="newBlock">
          <div class="col-12 col-xl-8 mb-4 mb-xl-0">
            <div class="card shadow">
              <div class="card-body">
                <div>
                  <form @submit.prevent="createPost">
                  <div class="row">

                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="title">Titulo</label>
                        <input
                          v-model="post.title"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="title"
                          placeholder="Titulo"
                        ></input>
                        <label
                          v-if="errors && errors.title"
                          class="mt-2 text-danger text-sm"
                          for="title"
                        >{{ errors.title[0] }}</label>
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="post.published"
                          name="id_checkbox_published"
                        >Publicar</b-form-checkbox>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="url">URL</label>
                        <input
                          v-model="post.url"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="url"
                          placeholder="URL"
                        ></input>
                        <label
                          v-if="errors && errors.url"
                          class="mt-2 text-danger text-sm"
                          for="url"
                        >{{ errors.url[0] }}</label>
                      </div>
                    </div>

                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">
            <div class="card shadow">
              <div class="card-body">
                <div class="form-group">
                  <label for="image" class="d-block">
                    <label class="font-weight-bold">Miniatura</label>
                    
                  </label>

                  <vue-dropzone
                    ref="ref_thumbnail"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_thumbnail.dropzone,1,1000000,'1000kb')"
                    id="id_thumbnail"
                    :options="dropzoneOptions"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h5
                        class="dropzone-custom-title text-primary"
                      >Suelte el archivo aquí o haga click para cargarlo.</h5>
                    </div>
                  </vue-dropzone>
                  <label
                    v-if="errors && errors.thumbnail"
                    class="text-danger text-sm d-block mt-2"
                    for="file"
                  >{{ errors.thumbnail[0] }}</label>
                </div>
  
  <file-upload
                                                  extensions="jpg,jpeg,png"
                                                  accept="image/png,image/jpeg,image/jpg"
                                                  class="d-none"
                                                  :drop="false"
                                                  :multiple="true"
                                                  v-model="post.images"
                                                  @input-filter="$uploadImageUploadComponent($event,$refs.ref_content,100000,'100kb','posts')"
                                                  ref="ref_content_images"
                                                  input-id="id_content_images">
                                              </file-upload>
  
                <div class="form-group mb-0">
                  <label for="image" class="d-block">
                    <label class="font-weight-bold">Imagen</label>
                    
                  </label>
                  
  
                  <vue-dropzone
                    ref="ref_image"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_thumbnail.dropzone,1,1000000,'1000kb')"
                    id="id_image"
                    :options="dropzoneOptions"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h5
                        class="dropzone-custom-title text-primary"
                      >Suelte el archivo aquí o haga click para cargarlo.</h5>
                    </div>
                  </vue-dropzone>
                  <label
                    v-if="errors && errors.image"
                    class="text-danger text-sm d-block mt-2"
                    for="file"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row" v-if="editBlock">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <div class="card shadow">
            <div class="card-body">
              <div>
                <form @submit.prevent="createPost">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="title">Titulo</label>
                        <input
                          v-model="post.title"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="title"
                          placeholder="Titulo"
                        ></input>
                        <label
                          v-if="errors && errors.title"
                          class="mt-2 text-danger text-sm"
                          for="title"
                        >{{ errors.title[0] }}</label>
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="post.published"
                          name="id_checkbox_published"
                        >Publicar</b-form-checkbox>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="url">URL</label>
                        <input
                          v-model="post.url"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="url"
                          placeholder="URL"
                        ></input>
                        <label
                          v-if="errors && errors.url"
                          class="mt-2 text-danger text-sm"
                          for="url"
                        >{{ errors.url[0] }}</label>
                      </div>
                    </div>

                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl">
          <div class="card shadow">
            <div class="card-body">

              <div class="form-group">
                <!--<label for="image" class="d-block">-->
                  <label class="font-weight-bold d-block"  for="thumbnail">Miniatura</label>

                  <img
                    class="img-fluid mb-2"
                    v-if="post.thumbnail"
                    :src="'https://storage.googleapis.com/playgroup-web/img/posts/'+post.thumbnail"
                    alt="Post"
                  />

                 <vue-dropzone
                  ref="ref_thumbnail"
                  @vdropzone-file-added="$validatethumbnailDropzone($event,$refs.ref_thumbnail.dropzone,1,100000,'100kb')"
                  id="id_thumbnail"
                  :options="dropzoneOptions"
                  :duplicateCheck="true"
                  :useCustomSlot="true"
                >
                  <div class="dropzone-custom-content">
                    <h5
                      class="dropzone-custom-title text-primary"
                    >Suelte el archivo aquí o haga click para cargarlo.</h5>
                  </div>
                </vue-dropzone>
                
                <label
                  v-if="errors && errors.thumbnail"
                  class="text-danger text-sm d-block mt-2"
                  for="file"
                >{{ errors.thumbnail[0] }}</label>
              </div>


              <div class="form-group mb-0">
                <!--<label for="image" class="d-block">-->
                  <label class="font-weight-bold d-block"  for="image">Imagen</label>

                  <img
                    class="img-fluid mb-2"
                    v-if="!image.length && post.image"
                    :src="'https://storage.googleapis.com/playgroup-web/img/posts/'+post.image"
                    alt="Post"
                  />

                 <vue-dropzone
                  ref="ref_image"
                  @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_thumbnail.dropzone,1,1000000,'1000kb')"
                  id="id_image"
                  :options="dropzoneOptions"
                  :duplicateCheck="true"
                  :useCustomSlot="true"
                >
                  <div class="dropzone-custom-content">
                    <h5
                      class="dropzone-custom-title text-primary"
                    >Suelte el archivo aquí o haga click para cargarlo.</h5>
                  </div>
                </vue-dropzone>
                
                <label
                  v-if="errors && errors.image"
                  class="text-danger text-sm d-block mt-2"
                  for="file"
                >{{ errors.image[0] }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
        <b-modal centered ref="modal-delete" size="xl">
          <template slot="modal-title">
            <h2 class="mb-0 text-uppercase text-primary">Eliminar Post</h2>
          </template>
          <p class="my-3">Esta seguro que desea eliminar el post?</p>
          <template slot="modal-footer" slot-scope="{ ok, cancel }">
            <Button
              :classes="['btn-primary']"
              :text="'Eliminar'"
              @click="deletePostConfirm()"
              :request-server="requestServer"
            ></Button>
            <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
          </template>
        </b-modal>
        <b-modal size="lg" centered ref="modal-detail">
          <template slot="modal-title">
            <h2 class="mb-0 text-uppercase text-primary">Detalle Reclamo</h2>
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
            <div class="col-12">
              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                    <label class="font-weight-bold font-weight-bold">Nombre</label>
                    <p>{{ post.name }}</p>
                  </div>
                  
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Correo electronico</label>
                    <p>{{ post.email }}</p>
              </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Tipo de documento</label>
                    <p>{{ post.document_type_name }}</p>
              </div>
                </div>
              </div>
  
              

              <div class="row">
                
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Numero de documento</label>
                    <p>{{ post.document_number }}</p>
              </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                    <label class="font-weight-bold font-weight-bold">Dirección</label>
                    <p>{{ post.address }}</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Distrito</label>
                    <p>{{ post.district }}</p>
              </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Numero de telefono</label>
                    <p>{{ post.phone_number }}</p>
              </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Bien contratado</label>
                    <p>{{ post.well_hired_name }}</p>
              </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Tipo de Servicio</label>
                    <p>{{ post.type_of_service_name }}</p>
              </div>
                </div>
              </div>
              <div class="row">
                
                <div class="col-md-6 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Reclamo / Queja</label>
                    <p>{{ post.type_of_claim_name }}</p>
              </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Descripción</label>
                    <p>{{ post.description }}</p>
              </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="form-group">
                <label class="font-weight-bold font-weight-bold">Fecha de reclamo</label>
                    <p>{{ post.created_at }}</p>
              </div>
                </div>
                <div class="col-md-8 col-sm-12">
              <div class="form-group" >
                <label class="font-weight-bold font-weight-bold" >Archivos adjuntos</label>
                <div v-for="f_a in post.file_attached">
                  <a :href="'https://storage.googleapis.com/playgroup-web/img/posts/' + f_a.file_name" style="display: block;" target="_blank" ><i class="fas fa-file"></i> {{ f_a.file_name }}</a>
                </div>
              </div>
  
            </div>
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
          file_attached: [],
        },
        tags:[],
        errors: {},
        categories: []
      };
    },
    methods: {
      getPost(id) {
          fetch(`https://apirestful.playgroup.pe/api/admin/complaints_book/${id}`, {
            method: "GET",
            headers: {
              "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
            },
          }).then(res => res.json())
          .then(data => {
            this.post = data;
            this.requestLoading = false;
          })
          .catch(error => console.error(error));

      },
      deletePost(id) {
        this.$refs["modal-delete"].show();
        this.getPost(id);
      },
      async deletePostConfirm() {
        this.requestServer = true;

        try {
          const res = await fetch(`https://apirestful.playgroup.pe/api/admin/complaints_book/${this.post.id}`, {
          method: "DELETE",
          headers: {
              "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
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
          .delete("posts/" + this.post.id)
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
      editPost(id) {
        this.editBlock = true;
        this.getPost(id);
        this.startBlock = false;
      },
      detailPost(id) {
        this.requestLoading = true;
        this.$refs["modal-detail"].show();
        this.getPost(id);
      },
      getPosts(pagina, desde, search = null) {
        let url = "https://apirestful.playgroup.pe/api/admin/complaints_book?page=" + pagina + "&desde=" + desde;
        if (search) {
          url = url + "&search=" + search;
        }
        axios
          .get(url, {
            headers: {
              "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
            },
          })
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {});
      },
      newPost() {
        this.startBlock = false;
        this.newBlock = true;
      },
      restoreEl() {
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
          file_attached: [],
        };
        this.tags = [];
        this.errors = {};
        this.requestServer = false;
      },
      restorePage() {
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
          file_attached: [],
        };
        this.tags = [];
        this.categories = this.image = [];
        this.errors = {};
        this.posts = {};
        this.getPosts(1, this.entries);
      },
      async createPost() {
        this.requestServer = true;
        const fd = new FormData();
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

        try {
          const res = await fetch(`https://apirestful.playgroup.pe/api/admin/complaints_book`, {
          method: "POST",
          headers: {
              "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S"
            },
          body: fd
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
      this.getPosts(1, this.entries);
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

