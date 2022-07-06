<template>
  <v-container class="d-flex flex-wrap">
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
      :key="index"
      v-for="(ticket, index) in hardcode"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <img height="250" v-bind:src="ticket.dummyImg" />
      <v-card-title>{{ ticket.airline }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>
        <div class="my-4 text-subtitle-1">
          <strong> Destino {{ ticket.country }} </strong>
        </div>
        <div class="my-4 text-subtitle-1">
          <strong>$ {{ ticket.price }} </strong> | {{ ticket.airline }}
        </div>

        <div class="my-4 text-subtitle-1">
          <small>
            {{ ticket.scales }} Escalas,
            <strong>{{ ticket.duration }} horas de duración</strong>
          </small>
        </div>

        <div>{{ ticket.description }}</div>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Disponibilidad</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            Reservar
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'DashBoard',
  data: () => ({
    dataVuelos: '',
    hardcode: [
      {
        id: 1,
        price: 347,
        airline: 'American travels 1',
        country: 'Alemania',
        scales: 1,
        duration: 10,
        dummyImg:
          'https://static.india.com/wp-content/uploads/2021/08/flight-emirates-feature-1.png?impolicy=Medium_Resize&w=1200&h=800',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Morbi leo urna molestie at elementum eu facilisis. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam quisque id diam vel quam elementum pulvinar etiam non. Pretium lectus quam id leo in vitae turpis massa sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet est placerat in. Ut sem viverra aliquet eget sit amet tellus. A scelerisque purus semper eget duis at tellus at urna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Arcu non sodales neque sodales ut.'
      },
      {
        id: 2,
        price: 147,
        airline: 'American travels 2',
        country: 'Canada',
        scales: 6,
        duration: 5,
        dummyImg:
          'https://static.india.com/wp-content/uploads/2021/08/flight-emirates-feature-1.png?impolicy=Medium_Resize&w=1200&h=800',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Morbi leo urna molestie at elementum eu facilisis. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam quisque id diam vel quam elementum pulvinar etiam non. Pretium lectus quam id leo in vitae turpis massa sed. Odio eu'
      },
      {
        id: 3,
        price: 200,
        airline: 'American travels 3',
        country: 'Irlanda',
        scales: 2,
        duration: 8,
        dummyImg:
          'https://static.india.com/wp-content/uploads/2021/08/flight-emirates-feature-1.png?impolicy=Medium_Resize&w=1200&h=800',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Morbi leo urna molestie at elementum eu facilisis. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam quisque id diam vel quam elementum pulvinar etiam non. Pretium lectus quam id leo in vitae tur'
      },
      {
        id: 4,
        price: 301,
        airline: 'American travels 4',
        country: 'Uganda',
        scales: 3,
        duration: 6,
        dummyImg:
          'https://static.india.com/wp-content/uploads/2021/08/flight-emirates-feature-1.png?impolicy=Medium_Resize&w=1200&h=800',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Morbi leo urna molestie at elementum eu facilisis. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam quisque id diam vel quam elementum pulvinar etiam non. Pretium lectus'
      },
      {
        id: 5,
        price: 506,
        airline: 'American travels 5',
        country: 'Pakistan',
        scales: 7,
        duration: 6,
        dummyImg:
          'https://static.india.com/wp-content/uploads/2021/08/flight-emirates-feature-1.png?impolicy=Medium_Resize&w=1200&h=800',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Morbi leo urna molestie at elementum eu facilisis. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam quisque id diam vel quam elementum pulvinar etiam non. Pretium lectus quam id leo in vitae turpis massa sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet est placerat in. Ut sem viverra aliquet eget sit amet tellus. A scelerisque purus semper eget duis at tellus at urna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Arcu non sodales neque sodales ut.'
      },
      {
        id: 6,
        price: 401,
        airline: 'American travels 6',
        country: 'Venezuela',
        scales: 4,
        duration: 9,
        dummyImg:
          'https://static.india.com/wp-content/uploads/2021/08/flight-emirates-feature-1.png?impolicy=Medium_Resize&w=1200&h=800',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Morbi leo urna molestie at elementum eu facilisis. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Quam quisque id diam vel quam elementum pulvinar etiam non. Pretium lectus quam id leo in vitae turpis massa sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet est placerat in. Ut sem viverra aliquet eget sit amet tellus. A scelerisque purus semper eget duis at tellus at urna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Arcu non sodales neque sodales ut.'
      }
    ]
  }),
  mounted () {
  },
  watch: {}
}
</script>
