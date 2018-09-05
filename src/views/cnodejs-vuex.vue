<template>
    <div class="router-cnodejs cnodejs-vuex">
        <loading v-if="loading"></loading>
        <template v-else>
            <ul class="topics">
                <li v-for="(item, index) in topics.data" :key="index">
                    <router-link :to="`/cnodejs/view/${item.id}`">{{ item.title }}</router-link>
                </li>
            </ul>
            <div class="pages">
                <a @click="handleLoadMore" href="javascript:;">加载更多...</a>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'
import { MyMixin } from '@/mixins'
import { TopicsState } from '@/interface'

import loading from '@/components/loading.vue'

const Topics = namespace('topics')

@Component({
    components: {
        loading
    }
})
export default class CnodejsVuex extends Mixins(MyMixin) {
    loading: boolean = false
    @Topics.Action('getTopics')
    getTopics!: Function
    @Topics.Getter('getTopics')
    topics!: TopicsState
    async mounted() {
        this.loading = true
        await this.getTopics({})
        this.loading = false
        await this.$nextTick()
        this.scrollTo()
    }
    handleLoadMore() {
        this.getTopics({ page: this.topics.page + 1 })
    }
}
</script>
