<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Podcast" active="Podcast"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newPodcast"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-newspaper"></i>
                </span>
                <span class="btn-inner--text">Nuevo Podcast</span>
              </a>

              <Button
                :classes="['btn-primary']"
                :text="'Actualizar'"
                @click="updatePodcast()"
                :request-server="requestServer"
                v-if="editBlock"
              ></Button>

              <Button
                :classes="['btn-primary']"
                :text="'Registrar'"
                @click="createPodcast()"
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
    <!-- Modal de Detalle -->

    <div class="container-fluid mt--6">
      <DataTable
        v-if="startBlock"
        placeholder="URL de Youtube"
        :object.sync="podcasts"
        :buttonRead="false"
        :buttonUpdate="true"
        :buttonDelete="true"
        @update="editPodcast"
        @delete="deletePodcast"
        @get="getPodcasts"
      ></DataTable>
      <div class="row" v-if="newBlock">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <div class="card shadow">
            <div class="card-body">
              <div>
                <form @submit.prevent="createPodcast">
                  <div class="row">
                    <div class="col-12 ">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="podcast.published"
                          name="id_checkbox_published"
                        >¿Activar?</b-form-checkbox>
                      </div>
                    </div>

                    <div class="col-12 ">
                       <div class="form-group">
                         <label class="font-weight-bold" for="id_tags">Tags</label>
                        <vue-tags-input
                          v-model="podcast.tags"
                          :tags="tags"
                          @tags-changed="newTags => tags = newTags"
                          placeholder="Ingresa Tag"
                        />
                        <label
                          v-if="errors && errors.tags"
                          class="mt-2 text-danger text-sm"
                          for="id_tags"
                        >{{ errors.tags[0] }}</label>
                       </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_author">Youtube URL</label>
                        <input
                          v-model="podcast.url"
                          class="form-control form-control-alternative"
                          id="id_youtube_url"
                          placeholder="Ejemplo: https://www.youtube.com/watch?v=example"
                        />
                        <label
                          v-if="errors && errors.url"
                          class="mt-2 text-danger text-sm"
                          for="id_author"
                        >{{ errors.url[0] }}</label>
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
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <div class="card shadow">
            <div class="card-body">
              <div>
                <form @submit.prevent="createPodcast">
                  <div class="row">
                    <div class="col-12 ">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="podcast.published"
                          name="id_checkbox_published"
                        >¿Activar?</b-form-checkbox>
                      </div>
                    </div>
                    <div class="col-12 ">
                       <div class="form-group">
                         <label class="font-weight-bold" for="id_tags">Tags</label>
                        <vue-tags-input
                          v-model="podcast.tags"
                          :tags="tags"
                          @tags-changed="newTags => tags = newTags"
                          placeholder="Ingresa Tag"
                        />
                        <label
                          v-if="errors && errors.tags"
                          class="mt-2 text-danger text-sm"
                          for="id_tags"
                        >{{ errors.tags[0] }}</label>
                       </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_author">Youtube URL</label>
                        <input
                          v-model="podcast.url"
                          class="form-control form-control-alternative"
                          id="id_youtube_url"
                          placeholder="Ejemplo: https://www.youtube.com/watch?v=example"
                        />
                        <label
                          v-if="errors && errors.url"
                          class="mt-2 text-danger text-sm"
                          for="id_author"
                        >{{ errors.url[0] }}</label>
                      </div>
                    </div>
                 </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
      <b-modal centered v-model="showDeleteModal"  size="xl">
        <template slot="modal-title">
          <h2 class="mb-0 text-uppercase text-primary">Eliminar Podcast</h2>
        </template>
        <p class="my-3">Esta seguro que desea eliminar el podcast?</p>
        <template slot="modal-footer" slot-scope="{ ok, cancel }">
          <Button
            :classes="['btn-primary']"
            :text="'Eliminar'"
            @click="deletePodcastConfirm(podcast.id)"
            :request-server="requestServer"
          ></Button>
          <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
        </template>
      </b-modal>
    <!-- Modal de Confirmación -->
  </div>
 </div>
</template>


<script>
import BreadCrumb from "../components/BreadCrumb";
import Loader from "../components/Loader";
import DataTable from "../components/DataTable";
import Button from "../components/Button";
import InputSlug from "../components/form/InputSlug";
import FileUpload from "vue-upload-component";
import { ModelListSelect } from "vue-search-select";
import { quillEditor } from "vue-quill-editor";
import VueTagsInput from '@johmun/vue-tags-input';
export default {
  components: {
    InputSlug,
    Button,
    FileUpload,
    DataTable,
    Loader,
    BreadCrumb,
    ModelListSelect,
    VueTagsInput
  },
  data() {
    return {
      showDeleteModal:false,
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
      podcast: {
        id: "",
        url:"",
        published: true,
        tags: '',
      },
      tags:[],
      errors: {},
    };
  },
  methods: {
    getPodcast(id) {
      return axios
        .get("json/podcast/" + id)
        .then(response => {
          this.podcast = response.data.podcast;
          this.tags = response.data.tags;
          this.requestLoading = false;
        })
        .catch(error => {});
    },
    deletePodcast(id) {
        this.getPodcast(id).then(()=>{

            this.showDeleteModal = true;
        });
    },
    deletePodcastConfirm(id) {

      this.requestServer = true;
      axios
        .delete("podcast/" + this.podcast.id)
        .then(response => {
            this.getPodcasts(1, this.entries);
              this.showDeleteModal=false;
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
            console.log(error);
          this.restorePage();
          this.showDeleteModal=false;
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
    editPodcast(id) {
      this.editBlock = true;
      this.getPodcast(id);
      this.startBlock = false;
    },
    getPodcasts(pagina, desde, search = null) {
      let url = "json/podcasts?page=" + pagina + "&desde=" + desde;
      if (search) {
        url = url + "&search=" + search;
      }
      axios
        .get(url)
        .then(response => {
          this.podcasts = response.data;
        })
        .catch(error => {
            console.error(error.message)});
    },

    newPodcast() {
      this.startBlock = false;
      this.newBlock = true;
    },
    restoreEl() {
      this.podcast= {
        id: "",
        url: "",
        author: "",
        content: "",
        published: true,
        tags: '',
      };
      this.tags = [];
      this.errors = {};
      this.requestServer = false;
    },
    restorePage() {
      this.requestServer = false;
      this.newBlock = this.editBlock = false;
      this.startBlock = true;
      this.podcast= {
        published: true,
        tags: '',
        url: "",
      };
      this.tags = [];
      this.errors = {};
      this.podcasts = {};
      this.getPodcasts(1, this.entries);
    },
    updatePodcast(){
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.podcast.id);
      (this.podcast.url? fd.append("url", this.podcast.url) :  fd.append("url", ""));

      if (this.podcast.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      if(this.tags.length > 0){
        fd.append("tags",  JSON.stringify(this.tags));
      }

      axios
        .post("podcast/" + this.podcast.id, fd)
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
    createPodcast() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("url", this.podcast.url);
      if (this.podcast.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      if(this.tags.length > 0){
        fd.append("tags",  JSON.stringify(this.tags));
      }
      axios
        .post("podcast", fd)
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
        });
    }
  },
  created() {
    this.getPodcasts(1, this.entries);
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
