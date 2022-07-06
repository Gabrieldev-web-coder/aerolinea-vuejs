import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../components/DashBoard.vue'
import Search from '../components/Search.vue'
Vue.use(VueRouter)
const eventBus = new Vue()
Vue.component('DashBoard', DashBoard)
Vue.component('Search', Search)

const routes = [
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    props: true
  },
  {
    path: '/',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
export { eventBus, routes }
