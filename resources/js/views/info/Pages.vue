<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-12">
              <BreadCrumb title="Páginas" active="Páginas"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12 mb-4">
          <div class="row" v-show="startBlock">
            <div v-if="loading" class="col-12">
                <Loader texto="Cargando..." :iconClasses="['ml-1']" :iconWidth="20" :iconHeight="20" :styles="{ height: '500px' }"/>
            </div>
            <div class="col-12" v-else>
              <div class="row">
              <div class="col-12" v-for="item in pages" :key="item.id">
                <h3
                  class="font-weight-bold mb-4 text-dark"
                >{{ item.name }} ({{ item.sections_count }} secciones)</h3>
                <div class="row">
                  <div
                    class="col-12 col-lg-6 col-xl-3"
                    v-for="section in item.sections"
                    :key="section.id"
                  >
                    <div class="card shadow mb-4">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col">
                            <small class="text-dark mb-0">Sección</small>
                            <h4
                              class="font-weight-bold mb-0 text-uppercase text-dark"
                            >{{ section.name }}</h4>
                          </div>
                          <div class="col-auto">
                            <button
                              type="button"
                              class="btn btn-sm btn-secondary"
                              @click.prevent="getSection(section.id,section.name,item.id)"
                            >
                              <i class="fas fa-pen-alt text-warning mr-1"></i>
                              Editar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              </div>
            </div>

          </div>
          <div class="row" v-if="elementBlock">
            <div class="col-12">
              <div class="card shadow">
                <div class="card-header border-0">
                  <h2
                    class="mb-0 text-uppercase text-primary"
                  >Página {{ page.name }} - Sección: {{ section.name }}</h2>
                </div>
                <div class="card-body">
                  <form @submit.prevent="updateSection">
                    <file-upload
                      extensions="jpg,jpeg,png"
                      accept="image/png, image/jpeg, image/jpg"
                      class="d-none"
                      :drop="false"
                      :multiple="true"
                      v-model="section.images"
                      @input-filter="$uploadImageUploadComponent($event,$refs.ref_content[0],250000,'500kb','pages')"
                      ref="ref_content_images"
                      input-id="id_content_images"
                    ></file-upload>
                    <div v-for="(field,index) in fields" :key="field.id">
                      <div class="col-12 p-0">
                        <div class="form-group">
                          <label class="font-weight-bold">{{ field.name }}</label>
                          <div v-if="field.type == 'input'">
                            <input
                              type="text"
                              class="form-control form-control-alternative"
                              v-model="fields[index].value"
                            />
                          </div>
                          <div v-if="field.type == 'editor_small'">
                            <quill-editor
                              class="ql-height-8"
                              @keydown.enter.prevent
                              v-model="fields[index].value"
                              ref="ref_content"
                              :placeholder="''"
                              :options="quillEditorOptions"
                            ></quill-editor>
                          </div>
                          <div v-if="field.type == 'editor_large'">
                            <quill-editor
                              class="ql-height-25"
                              @keydown.enter.prevent
                              v-model="fields[index].value"
                              ref="ref_content"
                              :placeholder="''"
                              :options="quillEditorOptions"
                            ></quill-editor>
                          </div>
                          <div v-if="field.type == 'image'">
                            <div class="row">
                              <div class="col-12 col-lg-4" v-if="field.value">
                                <img
                                  class="img-fluid d-block mb-3"
                                  :src="'https://storage.googleapis.com/playgroup-web/img/pages/'+field.value"
                                  :alt="field.name"
                                />
                              </div>
                              <div class="col-12" :class="{'col-lg-8': field.value }">
                                <vue-dropzone
                                  :ref="`ref_${field.variable}`"
                                  @vdropzone-file-added="$validateImageDropzone($event,$refs['ref_'+field.variable][0].dropzone,1,250000,'250kb')"
                                  :id="'id_'+field.variable"
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
                              </div>
                            </div>
                          </div>

                          <div v-if="field.type == 'video'">
                            <div class="row">
                              <div class="col-12 mb-3" v-if="field.value">
                                <a
                                  target="_blank"
                                  :href="'https://storage.googleapis.com/playgroup-web/videos/pages/'+field.value"
                                  class="btn btn-primary"
                                >
                                  <i class="fas fa-play mr-1"></i>
                                  Ver Video
                                </a>
                              </div>
                              <div class="col-12">
                                <vue-dropzone
                                  :ref="`ref_video`"
                                  @vdropzone-file-added="$validateVideoDropzone($event,$refs.ref_video[0].dropzone,1,8388608,'8mb')"
                                  :id="'id_'+field.variable"
                                  :options="dropzoneVideoOptions"
                                  :duplicateCheck="true"
                                  :useCustomSlot="true"
                                >
                                  <div class="dropzone-custom-content">
                                    <h5
                                      class="dropzone-custom-title text-primary"
                                    >Suelte el archivo aquí o haga click para cargarlo.</h5>
                                  </div>
                                </vue-dropzone>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 p-0 text-right">
                        <!-- Botón "Agregar más" visible solo para ciertos IDs -->
                        <button
                          v-if="[QUALITY_PROCESS_ID].includes(section.id)"
                          type="button"
                          class="btn btn-success ml-2"
                          @click.prevent="agregarMas(section.id,section.name,page.id)"
                        >Agregar más
                        </button>
                          <Button
                            :text="'Actualizar'"
                            :classes="['btn-primary']"
                            :request-server="requestServer"
                          ></Button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click.prevent="restorePage"
                          >Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import Button from "../../components/Button";
import { quillEditor } from "vue-quill-editor";
import FileUpload from "vue-upload-component";
import BreadCrumb from "../../components/BreadCrumb";
import Loader from "../../components/Loader";
export default {
  components: {
    FileUpload,
    quillEditor,
    Button,
    vueDropzone: vue2Dropzone,
    BreadCrumb,
    Loader
  },
  data() {
    return {
      loading: true,
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },

      dropzoneVideoOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "video/mp4",
        autoProcessQueue: false,
        //thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Video"
      },

      quillEditorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function(value) {
                document.getElementById("id_content_images").click();
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
      startBlock: true,
      elementBlock: false,
      pages: {
        sections: []
      },
      page: {},
      section: {
        id: "",
        name: "",
        image: "",
        title: "",
        description: ""
      },
      fields: {},
      image: [],
      image_responsive: [],
      video: [],
      QUALITY_PROCESS_ID: 42
    };
  },
  methods: {
    updateSection() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("section_id", this.section.id);
      fd.append("content", JSON.stringify(this.fields));

      this.fields.forEach((field) => {
        const refName = `ref_${field.variable}`;
        const ref = this.$refs[refName];

        if (
          field.type === 'image' &&
          ref &&
          ref.length > 0 &&
          ref[0].dropzone.files.length > 0
        ) {
          fd.append(field.variable, ref[0].dropzone.files[0]);
        }
      });

      // if (
      //   this.$refs.ref_image &&
      //   this.$refs.ref_image.length > 0 &&
      //   this.$refs.ref_image[0].dropzone.files[0]
      // ) {
      //   fd.append("image", this.$refs.ref_image[0].dropzone.files[0]);
      // }

      if (
        this.$refs.ref_image_responsive &&
        this.$refs.ref_image_responsive.length > 0 &&
        this.$refs.ref_image_responsive[0].dropzone.files[0]
      ) {
        fd.append(
          "image_responsive",
          this.$refs.ref_image_responsive[0].dropzone.files[0]
        );
      }

      if (
        this.$refs.ref_background &&
        this.$refs.ref_background.length > 0 &&
        this.$refs.ref_background[0].dropzone.files[0]
      ) {
        fd.append("background", this.$refs.ref_background[0].dropzone.files[0]);
      }

      if (
        this.$refs.ref_video &&
        this.$refs.ref_video.length > 0 &&
        this.$refs.ref_video[0].dropzone.files[0]
      ) {
        fd.append("video", this.$refs.ref_video[0].dropzone.files[0]);
      }

      axios
        .post("pages", fd)
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
            this.errores = error.response.data.errors || {};
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
    agregarMas(id,name,idPage) {
     axios
        .post("json/pages/agregar/" + id)
      .then(response => {
          this.getSection(id,name,idPage);
        })
        .catch(error => {
          console.error(error);
        });
    },
    restorePage() {
      if (this.elementBlock) {
        this.elementBlock = false;
        this.startBlock = true;
        this.section = {
          id: "",
          name: "",
          title: "",
          description: "",
          images: []
        };
        this.fields = {};
      }
    },
    getSection(id, name, idPage) {

      this.page = this.pages.find(x => x.id === idPage);

      axios
        .get("json/pages/section/" + id)
        .then(response => {
          this.fields = response.data;
          this.section.id = id;
          this.section.name = name;
          this.startBlock = false;
          this.elementBlock = true;
        })
        .catch(error => {});
    },
    getPage(id) {
      axios
        .get("json/pages/" + id)
        .then(response => {
          this.page = response.data;
        })
        .catch(error => {});
    },
    getPages() {
      axios
        .get("json/pages")
        .then(response => {
          this.pages = response.data;
          this.loading = false;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getPages();
  }
};
</script>
