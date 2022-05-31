import { createRouter, createWebHistory } from 'vue-router'
import CountriesList from '@/views/CountriesList.vue'
import CountryDetails from '@/views/CountryDetails.vue'

const routes = [
  {
    path: '/',
    name: 'CountriesList',
    component: CountriesList,
  },
  {
    path: '/alpha/:id',
    name: 'CountryDetails',
    props: true,
    component: CountryDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
