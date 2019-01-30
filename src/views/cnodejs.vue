<template>
    <div class="router-cnodejs cnodejs-vuex">
        <loading v-if="loading && page === 1"></loading>
        <template v-else>
            <ul class="topics">
                <li v-for="(item, index) in lists" :key="index">
                    <router-link :to="`/cnodejs/view/${item.id}`">{{ item.title }}</router-link>
                </li>
            </ul>
            <div class="pages"><a @click="handleLoadMore" href="javascript:;">加载更多...</a></div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'
import ls from 'store2'
import { MyMixin } from '@/mixins'
import api from '@/api'

import loading from '@/components/loading.vue'

@Component({
    components: {
        loading
    }
})
export default class Cnodejs extends Mixins(MyMixin) {
    lists: any[] = []
    page: number = 1
    loading: boolean = false
    async mounted() {
        await this.getTopics()
        await this.$nextTick()
        this.scrollTo()
    }
    async getTopics() {
        const topics: Array<any> | undefined = ls.get('topics')
        const page: number = ls.get('page')
        if (topics && this.page === 1 && this.$$from.name === 'cnodejs-view') {
            this.lists = topics
            this.page = page || 1
        } else {
            this.loading = true
            const { success, data } = await api.get(`topics`, { page: this.page })
            this.loading = false
            if (success === true) {
                this.page++
                this.lists = this.lists.concat(data)
                ls.set('topics', this.lists)
                ls.set('page', this.page)
            }
        }
    }
    handleLoadMore() {
        this.getTopics()
    }
}
</script>
