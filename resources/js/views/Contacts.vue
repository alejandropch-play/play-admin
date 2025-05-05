<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-12">
              <BreadCrumb title="Leads" active="Leads"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col mb-4" v-for="(item,i) in leadsByDepartment" :key="i">
              <div class="card card-stats shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-warning mb-0">{{ item.name }} - Landing</h5>
                      <span class="h2 font-weight-bold mb-0">{{ item.count }}</span>
                    </div>
                    <div class="col-auto">
                      <img
                        v-if="item.logo"
                        height="45"
                        width="auto"
                        :src="'https://storage.googleapis.com/playgroup-web/img/departments/'+item.logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">

          <div class="row">
            <div class="col mb-4" v-for="(item,i) in leadsBySource" :key="i">
              <div class="card card-stats shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-success mb-0">{{ item.name }}</h5>
                      <span class="h2 font-weight-bold mb-0">{{ item.count }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mb-4">
          <div class="text-right mb-4">
            <button
                type="button"
                class="btn btn-icon btn-primary"
                @click="openModalExport"
              :disabled="contactos.total == 0 ? true : false"
                :style="contactos.total == 0 ? 'opacity: 0.50' : ''"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-file-excel"></i>
                </span>
                <span class="btn-inner--text">Exportar {{ contactos.total == 0 ? '(0 Leads)' : '' }}</span>
              </button>
          </div>
          <DataTable
            :entradasProp="entries"
            titulo="Leads"
            placeholder="Nombre, Mensaje"
            :object.sync="contactos"
            :buttonRead="true"
            :buttonUpdate="false"
            :buttonDelete="true"
            @delete="deleteLead"
            @read="showContact"
            @get="getContacts"
          />
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <div class="card shadow">
                <div class="card-header border-0">
                  <h2 class="mb-0 text-uppercase text-primary">Correos Destino</h2>
                </div>
                <div class="card-body">
                  <form @submit.prevent="updateEmail">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <div v-if="editEmailBlock">
                            <label class="font-weight-bold">Correos</label>
                            <InputArray
                              :arreglo.sync="information.email_destination_leads"
                              :arreglo-editar="information.email_destination_leads_formatted"
                            ></InputArray>
                            <label for="id_email_destination_leads" v-if="errors && Object.keys(errors).length" class="mt-2 mb-0 text-danger text-sm">
                              Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida.
                            </label>

                            <div class="row mt-3">
                              <div class="col-12">
                                <div class="form-group">
                                  <label class="font-weight-bold" for="id_department">Especialidad:</label>
                                  <Departments
                                    @click="setDepartment"
                                    v-if="departments && departments.length > 0"
                                    :object.sync="departments"
                                  ></Departments>
                                  <label
                                    v-if="errors && errors.department_id"
                                    class="mt-2 text-danger text-sm"
                                    for="id_department"
                                  >{{ errors.department_id[0] }}</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-if="!editEmailBlock">
                            <div
                              v-if="email_destination_by_deparment.length > 0"
                            >
                              <div v-for="(item,i) in email_destination_by_deparment" :key="'e'+i" class="mb-4">
                                <img
                                  v-if="item.rel_department.logo"
                                  height="40"
                                  width="40"
                                  :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ item.rel_department.logo"
                                  :alt="item.rel_department.name"
                                />
                                <h4 class="mb-1">{{ item.rel_department.name }}</h4>
                                <p
                                  class="d-block mb-0"
                                  v-for="(element,index) in item.email_destination_leads_formatted"
                                  :key="index"
                                >{{ element }}</p>
                              </div>
                            </div>
                            <p v-else>No registrado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-right">
                      <button
                        type="button"
                        class="btn btn-primary"
                        v-if="!editEmailBlock"
                        @click.prevent="editEmailDestination"
                      >Editar</button>

                      <Button
                        v-if="editEmailBlock"
                        :text="'Actualizar'"
                        :classes="['btn-primary','mr-2']"
                        :request-server="requestServer"
                        º
                      ></Button>
                      <button
                        v-if="editEmailBlock"
                        type="button"
                        class="btn btn-danger"
                        @click.prevent="restoreEmail"
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

    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 mb-0 text-uppercase text-primary">Eliminar Lead</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el lead?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteLeadConfirm"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>

    <b-modal centered size="lg" ref="modal-show">
      <template slot="modal-title">
        <h2 class="mb-0 mb-0 text-uppercase text-primary">Detalle Lead</h2>
      </template>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label class="form-control-label d-block">Nombre Completo</label>
            <p v-if="contacto.full_name">{{ contacto.full_name }}</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Teléfono</label>
            <p v-if="contacto.phone">{{ contacto.phone }}</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Correo Electrónico</label>
            <p v-if="contacto.email">{{ contacto.email }}</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Procedencia</label>
            <p v-if="contacto.department_rel">{{ contacto.department_rel.title }}</p>
            <p v-else>No registrado</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Empresa</label>
            <p v-if="contacto.company">{{ contacto.company }}</p>
            <p v-else>No registrado</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Contactar por</label>
            <p v-if="contacto.lead_medium_rel">{{ contacto.lead_medium_rel.name }}</p>
            <p v-else>No registrado</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Enviado el</label>
            <p v-if="contacto.created_at">{{ contacto.created_at }}</p>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Fuente</label>
            <p v-if="contacto.lead_source_rel">{{ contacto.lead_source_rel.name }}</p>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label class="form-control-label d-block">Mensaje</label>
            <p v-if="contacto.message">{{ contacto.message }}</p>
            <p v-else>No registrado</p>
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <label class="form-control-label d-block">Pais</label>
            <p v-if="contacto.country_rel">{{ contacto.country_rel.name }}</p>
            <p v-else>No registrado</p>
          </div>
        </div>

      </div>

      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <button type="button" class="btn btn-primary" @click="restoreEl">Cerrar</button>
      </template>
    </b-modal>

    <b-modal
      ref="modal-export"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="md"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Exportar Leads</div>
      </template>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label class="font-weight-bold" for="from">Desde</label>
            <date-picker
              :input-attr="{ id: 'from' }"
              value-type="format"
              v-model="element_form.from"
              format="HH:mm DD-MM-YYYY"
              type="datetime"
              :time-picker-options="{
                start: '06:00',
                step: '00:05',
                end: '24:00',
              }"
              :first-day-of-week="1"
              lang="es"
              input-class="form-control"
              width="100%"
            >
              <jam-calendar></jam-calendar>
            </date-picker>
            <label
              v-if="errors_form && errors_form.from"
              class="mt-2 text-danger text-sm"
              for="from"
              >{{ errors_form.from[0] }}</label
            >
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <label class="font-weight-bold" for="to">Hasta</label>
            <date-picker
              :input-attr="{ id: 'to' }"
              value-type="format"
              v-model="element_form.to"
              format="HH:mm DD-MM-YYYY"
              type="datetime"
              :time-picker-options="{
                start: '06:00',
                step: '00:05',
                end: '24:00',
              }"
              :first-day-of-week="1"
              lang="es"
              input-class="form-control"
              width="100%"
            >
              <jam-calendar></jam-calendar>
            </date-picker>
            <label
              v-if="errors_form && errors_form.to"
              class="mt-2 text-danger text-sm"
              for="to"
              >{{ errors_form.to[0] }}</label
            >
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button
          type="button"
          class="btn btn-primary"
          @click="allExportFunction"
          :disabled="request_todo"
        >
          <span v-if="request_todo">
            Cargando
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              class="ml-1 loading-svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                  <circle stroke-opacity="1" cx="0" cy="0" r="0" />
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    transform="rotate(83.9974 18 18)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </span>
          <span v-else>Todo</span>
        </button>

        <button
          type="button"
          class="btn btn-info"
          @click="filterExportFunction"
          :disabled="request_filter"
        >
          <span v-if="request_filter">
            Cargando
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              class="ml-1 loading-svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                  <circle stroke-opacity="1" cx="0" cy="0" r="0" />
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    transform="rotate(83.9974 18 18)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </span>
          <span v-else>Con Filtros</span>
        </button>

        <button type="button" class="btn btn-light" @click="restoreEl">
          Cerrar
        </button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Button from "../components/Button";
import InputArray from "../components/form/InputArray";
import DataTable from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";
import Departments from "../components/form/Departments";
import DatePicker from "vue2-datepicker";
export default {
  props: {
    leadsByDepartment: Array,
    leadsBySource: Array,

    allExport: String,
    filterExport: String,
  },
  components: {
    DataTable,
    Button,
    BreadCrumb,
    InputArray,
    Departments,
    DatePicker,
  },
  data() {
    return {
      contactos: {},
      contacto: {},
      departments: [],
      email_destination_by_deparment: [],
      information: {
        department_id: '',
        email_destination_leads: [],
        email_destination_leads_formatted: [""]
      },
      requestServer: false,
      editEmailBlock: false,
      errors: {},

      request_todo: false,
      request_filter: false,
      errors_form: {},
      modalExport: false,
      element_form: {},
      entries: 20
    };
  },
  methods: {
    openModalExport() {
      this.$refs["modal-export"].show();
      this.modalExport = true;
    },
    allExportFunction() {
      this.request_todo = true;
      axios
        .get(this.allExport, {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx", //no es tan necesario, lo quité y siguio funcionando
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //no es tan necesario, lo quité y siguio funcionando
          },
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "PLAY Group Leads.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.request_todo = false;
        })
        .catch((error) => {
          this.request_todo = false;
          if (error.response.status === 422) {
            this.errors_form = error.response.data.errors || {};
            return;
          }
        });
    },
    filterExportFunction() {
      this.request_filter = true;
      const fd = new FormData();
      if (this.element_form.from) {
        fd.append("from", this.element_form.from);
      }
      if (this.element_form.to) {
        fd.append("to", this.element_form.to);
      }
      axios
        .post(this.filterExport, fd, {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx", //no es tan necesario, lo quité y siguio funcionando
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //no es tan necesario, lo quité y siguio funcionando
          },
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "PLAY Group Leads.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.request_filter = false;
        })
        .catch((error) => {
          this.request_filter = false;
          if (error.response.status === 422) {
            this.errors_form = {
              from: [],
              to: [],
            };
            if (
              this.element_form.from == "" ||
              this.element_form.from == null
            ) {
              this.errors_form.from = ["El campo desde es requerido"];
            }

            if (this.element_form.to == "" || this.element_form.to == null) {
              this.errors_form.to = ["El campo hasta es requerido"];
            }
            console.log(this.errors_form);
            return;
          }
        });
    },
    getDepartments() {
      axios
        .get("/json/select/departments")
        .then(response => {
          this.departments = response.data;
        })
        .catch(error => {});
    },
    setDepartment(id) {
      this.information.department_id = id;
    },
    restoreEmail() {
      this.information = {
        email_destination_leads: [],
        department_id: '',
        email_destination_leads_formatted: [""]
      };
      this.editEmailBlock = false;
      this.getContactEmailDestination();
    },
    getContactEmailDestination() {
      axios
        .get("leads/json/contact-email-destination")
        .then(response => {
          this.email_destination_by_deparment = response.data;
        })
        .catch(error => {});
    },
    editEmailDestination() {
      this.editEmailBlock = true;
    },
    restoreEl() {
      this.$refs["modal-show"].hide();
      this.$refs["modal-delete"].hide();
      this.modalExport = false;
      this.element_form = {};
      this.errors_form = {};
      this.contacto = {};
      this.errors = {};
      this.$refs["modal-export"].hide();
    },
    deleteLead(id) {
      this.$refs["modal-delete"].show();
      this.getContact(id);
    },
    restorePage() {
      this.contactos = {};
      this.getContacts(1, this.entries);
      this.$refs["modal-show"].hide();
      this.$refs["modal-delete"].hide();
      this.requestServer = false;
      this.contacto = {};
    },
    deleteLeadConfirm() {
      this.requestServer = true;
      axios
        .delete("leads/" + this.contacto.id)
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
    showContact(id) {
      this.$refs["modal-show"].show();
      this.getContact(id);
    },
    getContact(id) {
      axios
        .get("json/contactos/" + id)
        .then(response => {
          this.contacto = response.data;
        })
        .catch(error => {});
    },
    getContacts(pagina, desde, buscar = null) {
      let url = "json/contactos?page=" + pagina + "&desde=" + desde;
      if (buscar) {
        url = url + "&buscar=" + buscar;
      }
      axios
        .get(url)
        .then(response => {
          this.contactos = response.data;
        })
        .catch(error => {});
    },
    restoreEmail() {
      this.requestServer = this.editEmailBlock = false;
      this.errors = {};
      this.information = {
        department_id: '',
        email_destination_leads: [],
        email_destination_leads_formatted: [""]
      };
      this.getContactEmailDestination();
    },
    updateEmail() {
      this.requestServer = true;
      axios
        .put("leads", this.information)
        .then(response => {
          this.requestServer = false;
          this.restoreEmail();
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
    this.getContacts(1, this.entries);
    this.getContactEmailDestination();
    this.getDepartments();
  }
};
</script>
