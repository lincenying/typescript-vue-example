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
                <a-spin v-if="spinning" />
                <a v-else @click="handleLoadMore" href="javascript:;">加载更多...</a>
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
    spinning: boolean = false
    // vuex action 的用法 => this.getTopics()
    @Topics.Action('getTopics')
    getTopics!: Function
    // vuex getter 的用法 => this.topics
    @Topics.Getter('getTopics')
    topics!: TopicsState
    async mounted() {
        this.loading = true
        await this.getTopics({})
        this.loading = false
        await this.$nextTick()
        this.scrollTo()
    }
    async handleLoadMore() {
        this.spinning = true
        await this.getTopics({ page: this.topics.page + 1 })
        this.spinning = false
    }
}
</script>
