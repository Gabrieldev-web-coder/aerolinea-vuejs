<template>
  <v-container style="height: 85vh" class="d-flex align-center justify-center">
    <v-sheet elevation="3" class="pa-7" rounded>
      <v-form class="mx-auto my-auto" elevation="1">
        <h1 class="h1 text-center my-2">Busqueda de tickes</h1>
        <v-divider></v-divider>
        <v-row>
          <v-column cols="2" sm="2" md="2"></v-column>

          <v-text-field
            ref="lugar_origen"
            label="Cuidad de origen"
            placeholder="¿Donde se encuentra?"
            prepend-icon="mdi-map-marker"
            filled
            rounded
            dense
            clearable="true"
            class="mx-5 my-5"
            hint="Ejemplo: Colombia"
            persistent-hint
            v-on:change="validateInputs()"
          ></v-text-field>

          <v-text-field
            ref="lugar_llegada"
            label="Cuidad de destino"
            placeholder="¿A donde desea llegar?"
            prepend-icon="mdi-map-marker-radius-outline"
            filled
            rounded
            dense
            clearable="true"
            class="mx-5 my-5"
            hint="Ejemplo: Ecuador"
            persistent-hint
            v-model="destino"
            v-on:change="validateInputs()"
          >
          </v-text-field>
        </v-row>
        <v-row>
          <v-menu
            ref="menu1"
            v-model="menu_salida"
            :close-on-content-click="false"
            :return-value.sync="date_salida"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date_salida"
                label="Fecha de salida"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="mx-5 my-5"
                clearlable="true"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date_salida" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu_salida = false">
                Cancelar
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu1.save(date_salida)"
              >
                Ok
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-menu
            ref="menu2"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Fecha de llegada"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="mx-5 my-5"
                clearlable="true"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancelar
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu2.save(date)">
                Ok
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-row>
        <v-btn
          ref="searchBtn"
          v-if="validateInputs()"
          color="primary"
          v-on:click="getSearch()"
          >Buscar Vuelos</v-btn
        >
        <v-btn v-else disabled color="primary">Buscar Vuelos</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
import { reactive } from 'vue'
import router from '../router/index'

const {
  fechaSalida,
  menuSalida,
  fecha,
  menu,
  modal,
  val,
  lugarOrigen,
  lugarLlegada
} = reactive({
  fecha_salida: '',
  menu_salida: false,
  fecha: '',
  menu: false,
  modal: false,
  val: false,
  lugarOrigen: '',
  lugarLlegada: ''
})

export default {
  name: 'Search',
  data: () => ({
    origen: lugarOrigen,
    llegada: lugarLlegada,
    date_salida: fechaSalida,
    menu_salida: menuSalida,
    date: fecha,
    menu: menu,
    modal: modal,
    available: val,
    jsonData: ''
  }),
  watch: {
    func (change, lastChange) {
      console.log(change + ' ' + ' Actual val: ' + lastChange)
      this.validateInputs()
    }
  },
  methods: {
    validateInputs () {
      const validation = {
        date_salida: this.date_salida,
        date: this.date,
        lugar_origen:
          this.$refs.lugar_origen?.$el.querySelector('input')?.value,
        lugar_llegada:
          this.$refs.lugar_llegada?.$el.querySelector('input')?.value
      }
      let countErr = 0
      for (const iterator in validation) {
        if (validation[iterator] === '') countErr++
      }
      countErr >= 1 ? (this.available = false) : (this.available = true)
      return this.available
    },
    async getSearch () {
      if (this.validateInputs()) {
        router.push('dashboard')
      }
    }
  }
}
</script>
