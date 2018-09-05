import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { oc } from '@/utils'

Vue.config.productionTip = false

sync(store, router)

Vue.mixin({
    computed: {
        $$from() {
            return oc(this.$store, 'state.route.from', {})
        }
    },
    methods: {
        oc
    }
})

new Vue({
    name: 'Root',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
