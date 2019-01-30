import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
    },
    {
        path: '/cnodejs',
        name: 'cnodejs',
        component: () => import(/* webpackChunkName: "cnodejs" */ '@/views/cnodejs.vue')
    },
    {
        path: '/cnodejs-vuex',
        name: 'cnodejs-vuex',
        component: () => import(/* webpackChunkName: "cnodejs-vuex" */ '@/views/cnodejs-vuex.vue')
    },
    {
        path: '/cnodejs/view/:id',
        name: 'cnodejs-view',
        component: () => import(/* webpackChunkName: "cnodejs-view" */ '@/views/cnodejs-view.vue')
    }
]

export default new Router({
    mode: 'history',
    routes
})
