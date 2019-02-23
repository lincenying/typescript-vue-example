import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { oc } from '@/utils'
import VueBus from '@/event-bus'

Vue.config.productionTip = false

Vue.use(VueBus)

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
