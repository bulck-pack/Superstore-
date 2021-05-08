import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Cat = () => import('../views/category/Category')
const Porfile = () => import('../views/porfile/Porfile')
const Shoppingcat = () => import('../views/shoppingcat/Shoppingcat')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cat',
    component: Cat
  },
  {
    path: '/porfile',
    component: Porfile
  },
  {
    path: '/shoppingcat',
    component: Shoppingcat
  },

]
const router = new VueRouter({
  routes,
  mode: 'hash'
})
export default router
