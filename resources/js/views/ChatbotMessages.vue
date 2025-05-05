<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-12">
              <BreadCrumb title="Chatbot conversaciones" active="Chatbot conversaciones"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12 mb-4">
          <DataTable
            titulo="Chatbot conversaciones"
            placeholder="Nombre que ingresa el usuario"
            :cargandoProp="requestServer"
            :object.sync="els"
            :buttonRead="true"
            :buttonUpdate="false"
            :buttonDelete="false"
            :entradasProp="entries"
            @read="showEl"
            @get="getEls"
          >
          <template slot="filters">
            <div class="row mb-3">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <div class="d-inline-block mb-2 mb-sm-0 mr-2">
                <FilterDateRange  :active.sync="filterDate.active" :range.sync="filterDate.range" @get="getEls(1, entries, q)"/>
                </div>
              </div>
            </div>
          </template>
          </DataTable>
        </div>
      </div>
    </div>



    <div class="">
        <div class="overlay" @click="restoreEl" v-if="modalView" style="
          position: fixed;
          width: 100%;
          height: 100%;
          background: black;
          opacity: 0.5;
          opacity: 0.5;
          top: 0;
          left: 0;
          z-index: 1;
        "></div>
        <div class="d-block" style="
          position: fixed;
          overflow: auto;
          background: white;
          top: 0;
          right: 0;
          height: 100%;
          width: 550px;
          z-index: 2;
          -webkit-transition: all 0.7s ease;
          -moz-transition: all 0.7s ease;
          -o-transition: all 0.7s ease;
          transition: all 0.7s ease;
        " :style="modalView ? { right: 0 } : { right: '-550px' }">

        <div class="px-4 py-4">
                <button type="button" class="btn btn-primary btn-small" @click.prevent="restoreEl">
                    <span class="btn-inner--icon">
                        <i class="ri-arrow-left-line mr-1"></i>
                    </span>
                    Regresar
                </button>
                <h1 class="mt-2">Detalle conversación</h1>
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                       <label class="font-weight-bold" for="to">Identificador</label>
                       <p> {{ el.data._id }}</p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                       <label class="font-weight-bold" for="to">Iniciado</label>
                       <p>{{ el.date_format }}</p>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="to">Conversación</label>
                       <ChatbotConversation :entradasProp="entries" :id="el.data._id" :data="el.data.messages" v-if="el.data.messages.length">
                       </ChatbotConversation>
                       <p v-else>
                        No hay conversación registrada
                       </p>
                    </div>
                  </div>
                </div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button";
import DataTable from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";
import ChatbotConversation from "../components/chatbot/Wrapper";
import DatePicker from "vue2-datepicker";
import FilterDateRange from "../components/filters/DateRange"
export default {
  props: {
    routeAll: String,
    routeBy: String,
  },
  components: {
    DataTable,
    Button,
    BreadCrumb,
    DatePicker,
    ChatbotConversation,
    FilterDateRange
  },
  data() {
    return {
      q: null,
      entries: 20,
      requestServer: false,
      requestShow: false,
      modalView: false,
      errors: {},
      el: {
        data: {
          _id: '',
          identifier: '',
          messages: []
        },
        date_format: ''
      },
      els: [],
      filterDate: {
        active: {},
        range: null
      },
    };
  },
  methods: {
    restoreEl(){
      this.el = {
        data: {
          _id: '',
          identifier: '',
          messages: []
        },
        date_format: ''
      };
      document.body.style.overflow = "auto";
      this.modalView = false;
    },
    getEls(page, perPage, q) {
      this.requestServer = true;
      let url = this.routeAll + "?page=" + page + "&perPage=" + perPage;
      if (q) {
        this.q = q;
      }
      else{
        this.q = null;
      }
      axios
        .get(url, {
          params: {
            date: this.filterDate.active.value,
            ...(this.q ? { q: this.q } : {}),
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
          },
        })
        .then(response => {
          //console.log(response)
          this.els = response.data;
          this.requestServer = false;
        })
        .catch(error => {});
    },
    showEl(id){
      this.requestShow = true;
      axios
        .get(this.routeBy + "?id=" + id)
        .then(response => {
          this.el = response.data;
          this.requestShow = false;
          this.modalView = true;
        document.body.style.overflow = "hidden";
        })
        .catch(error => {});
    }
  },
  created() {
    this.getEls(1, this.entries);
  }
};
</script>
