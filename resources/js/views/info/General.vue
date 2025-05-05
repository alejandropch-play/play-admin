<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
              <BreadCrumb title="General" parent="Información" active="General"></BreadCrumb>
              </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="editarInformacion"
                v-if="inicioBloque"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-info"></i>
                </span>
                <span class="btn-inner--text">Editar Informacion</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="card shadow mb-4" v-if="inicioBloque">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Información General</h2>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Descripción</label>
                <p v-if="informacion.description">{{ informacion.description }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <!-- <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Teléfono</label>
                <p v-if="informacion.phone">{{ informacion.phone }}</p>
                <p v-else>No registrado</p>
              </div>
            </div> -->
            <!-- <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Móvil</label>
                <p v-if="informacion.cellphone">{{ informacion.cellphone }}</p>
                <p v-else>No registrado</p>
              </div>
            </div> -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Email</label>
                <p v-if="informacion.email">{{ informacion.email }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <!-- <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Ubicación</label>
                <p v-if="informacion.address_line_1" v-html="informacion.address_line_1">{{ informacion.address_line_1 }}</p>
                <p v-else>No registrado</p>
              </div>
            </div> -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Paises</label>
                <p >Ubicaciones en paises</p>
              </div>
            </div>
            <!--<div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Ubicación Línea 2</label>
                <p v-if="informacion.address_line_2">{{ informacion.address_line_2 }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Distrito</label>
                <p v-if="informacion.district">{{ informacion.district }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>-->
          </div>
        </div>
      </div>
      <div class="card shadow mb-4" v-if="editarBloque">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Información General</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="actualizarInformacion">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_description">Descripción</label>
                  <textarea
                    type="text"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.description"
                    id="id_description"
                    placeholder="Descripción"
                    rows="3"
                  ></textarea>
                  <label
                    v-if="errores && errores.description"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="id_description"
                  >{{ errores.description[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_phone">Teléfono</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.phone"
                    id="id_phone"
                    placeholder="Teléfono"
                  />
                  <label
                    v-if="errores && errores.phone"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="id_phone"
                  >{{ errores.phone[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_cellphone">Móvil</label>
                  <input
                    type="text"
                    placeholder="Móvil"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.cellphone"
                    id="id_cellphone"
                  />
                  <label
                    v-if="errores && errores.cellphone"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="id_cellphone"
                  >{{ errores.cellphone[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_correo_electronico">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.email"
                    id="id_correo_electronico"
                  />
                  <label
                    v-if="errores && errores.email"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="id_correo_electronico"
                  >{{ errores.email[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_address_line_1">Ubicación</label>
                  <!--<input
                    type="text"
                    placeholder="Ubicación Línea 1"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.address_line_1"
                    id="id_address_line_1"
                  />-->
                  <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="informacion.address_line_1"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                  <label
                    v-if="errores && errores.address_line_1"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="id_address_line_1"
                  >{{ errores.address_line_1[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_country_mexico">Mexico</label>
                  <!--<input
                    type="text"
                    placeholder="Ubicación Línea 1"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.address_line_1"
                    id="id_address_line_1"
                  />-->
                  <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="informacion.country_mexico"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                  <label
                    v-if="errores && errores.country_mexico"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="country_mexico"
                  >{{ errores.country_mexico[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_country_ecuador">Ecuador</label>
                  <!--<input
                    type="text"
                    placeholder="Ubicación Línea 1"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.address_line_1"
                    id="id_address_line_1"
                  />-->
                  <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="informacion.country_ecuador"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                  <label
                    v-if="errores && errores.country_ecuador"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="country_ecuador"
                  >{{ errores.country_ecuador[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_country_peru">Peru</label>
                  <!--<input
                    type="text"
                    placeholder="Ubicación Línea 1"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.address_line_1"
                    id="id_address_line_1"
                  />-->
                  <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="informacion.country_peru"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                  <label
                    v-if="errores && errores.country_peru"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="country_peru"
                  >{{ errores.country_peru[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_country_eeuu">EE.UU</label>
                  <!--<input
                    type="text"
                    placeholder="Ubicación Línea 1"
                    class="form-control form-control-alternative mb-2"
                    v-model="informacion.address_line_1"
                    id="id_address_line_1"
                  />-->
                  <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="informacion.country_eeuu"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                  <label
                    v-if="errores && errores.country_eeuu"
                    class="mt-2 mb-2 text-danger text-sm"
                    for="country_eeuu"
                  >{{ errores.country_eeuu[0] }}</label>
                </div>
              </div>

              <div class="col-12 text-right">
                <Boton
                  :text="'Actualizar'"
                  :classes="['btn-primary']"
                  :request-server="requestServer"
                ></Boton>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="restablecerPagina"
                >Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>



      <Partners></Partners>
      <Footer />
    </div>

  </div>
</template>
<script>
//import Footer from "../../componentes/Footer"
import Boton from "../../components/Button";
import Partners from "./Partners"
import BreadCrumb from "../../components/BreadCrumb";
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    Boton,
    BreadCrumb,
    Partners,
    quillEditor,
    //Footer
  },
  data() {
    return {
      informacion: {
        description: "",
        district: "",
        phone: "",
        cellphone: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        country_mexico: "",
        country_ecuador: "",
        country_peru: "",
        country_eeuu: ""
      },
      errores: {},
      requestServer: false,
      inicioBloque: true,
      editarBloque: false,
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
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
              ["link"]
            ]
          }
        }
      },
    };
  },
  methods: {
    actualizarInformacion() {
      this.requestServer = true;

      fetch('https://apirestful.playgroup.pe/api/admin/update_general_info_countries', {
            method: 'PUT',
            headers: {
          "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...this.informacion
        })
          }).then(response => {
            this.restablecerPagina();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
          }).catch(err => console.error(err));

      axios
        .post("/informacion/general", this.informacion)
        .then(response => {
          this.requestServer = false;

          


          
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errores = error.response.data.errors || {};
            return;
          }
          this.restablecerPagina();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        });
    },
    restablecerPagina() {
      this.informacion = {
          description: "",
          district: "",
        phone: "",
        cellphone: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        country_mexico: "",
        country_ecuador: "",
        country_peru: "",
        country_eeuu: ""
      };
      this.errores = {};
      (this.inicioBloque = true), (this.editarBloque = false);
      this.obtenerInformacion();
    },
    editarInformacion() {
      this.inicioBloque = false;
      this.editarBloque = true;
    },
    obtenerInformacion() {
      axios
        .get("json/informacion")
        .then(response => {
          this.informacion = response.data;

          fetch('https://apirestful.playgroup.pe/api/admin/update_general_info_countries', {
            method: 'GET',
            headers: {
          "Authorization": "Bearer $2a$12$sSnRcwximdTC1qC16P5SZefAJEr2XnYfWtP4c8pm1bJyyuXvrDX.S",
          'Content-Type': 'application/json'
        },
          }).then((res) => res.json()).then((data) => {
            this.informacion.country_mexico = data.data[0].location;
            this.informacion.country_ecuador = data.data[1].location;
            this.informacion.country_peru = data.data[2].location;
            this.informacion.country_eeuu = data.data[3].location;
          })

        })
        .catch(error => {});
    }
  },
  created() {
    this.obtenerInformacion();
  }
};
</script>

