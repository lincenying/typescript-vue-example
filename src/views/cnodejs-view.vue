<template>
    <div class="router-view cnodejs-view">
        <loading v-if="loading"></loading>
        <template v-else>
            <div class="header">{{ topic.data.title }} <a href="javascript:;" @click="$router.go(-1)">返回列表</a></div>
            <div class="content" v-html="topic.data.content"></div>
            <div class="views">
                <div v-for="(item, index) in topic.data.replies" :key="index" class="view-item">
                    <div class="view-header">
                        <b>{{ item.author.loginname }}</b> <span>{{ item.create_at }}</span>
                    </div>
                    <div class="view-content" v-html="item.content"></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'
import { TopicState } from '@/interface'

import loading from '@/components/loading.vue'

const Topic = namespace('topic')

@Component({
    components: {
        loading
    }
})
export default class CnodejsView extends Vue {
    loading: boolean = false
    // vuex action 的用法 => this.getTopic()
    @Topic.Action('getTopic')
    getTopic!: Function
    // vuex getter 的用法 => this.topic
    @Topic.Getter('getTopic')
    topic!: TopicState
    async mounted() {
        this.loading = true
        await this.getTopic({
            id: this.$route.params.id
        })
        this.loading = false
    }
}
</script>
