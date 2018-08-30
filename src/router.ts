import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
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
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/cnodejs',
            name: 'cnodejs',
            component: () => import(/* webpackChunkName: "about" */ './views/Cnodejs.vue')
        },
        {
            path: '/cnodejs-vuex',
            name: 'cnodejs-vuex',
            component: () => import(/* webpackChunkName: "about" */ './views/Cnodejs-vuex.vue')
        },
        {
            path: '/cnodejs/view/:id',
            name: 'cnodejs-view',
            component: () => import(/* webpackChunkName: "about" */ './views/Cnodejs-view.vue')
        }
    ]
})
