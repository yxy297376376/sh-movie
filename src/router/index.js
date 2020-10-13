import Vue from 'vue'
import VueRouter from 'vue-router'

import CenterRouter from './routes/center'
import CinemaRouter from './routes/cinema'
import FilmRouter from './routes/film'
import DetailRouter from './routes/detail'
import CityRouter from './routes/city'
import SearchRouter from './routes/search'
import BuyRouter from './routes/buy'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect:'/film'
  },
  CenterRouter,
  CinemaRouter,
  FilmRouter,
  DetailRouter,
  CityRouter,
  SearchRouter,
  BuyRouter
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
