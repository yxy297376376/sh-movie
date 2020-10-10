import Vue from 'vue'
import VueRouter from 'vue-router'

import CenterRouter from './routes/center'
import CinemaRouter from './routes/cinema'
import FilmRouter from './routes/film'
import DetailRouter from './routes/detail'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect:'/film'
  },
  CenterRouter,
  CinemaRouter,
  FilmRouter,
  DetailRouter
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
