import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/home',
        component:()=>import("@/views/Home")
    },
    {
        path:'/categroy',
        component:()=>import("@/views/Categroy")
    },
    {
        path:'/shopCart',
        component:()=>import("@/views/ShopCart")
    },
    {
        path:'/mine',
        component:()=>import("@/views/Mine")
    }
]

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
