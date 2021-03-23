import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    //middleware p/rota
    BeforeEnter: (to, from, next) => {

      if (localStorage.getItem('token') != undefined) {

        var req = {
          headers: {
            authorization: "Bearer " + localStorage.getItem('token')
          }
        }
        //se passar pelo middleware entao user está autenticado
        axios.post("http://ba1fa980b5ae.ngrok.io/validate",{},req).then(response => {

          console.log(response)
          next()
        }).catch(() => {

          next("/login")

        })

      } else {

        next("/login")
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
