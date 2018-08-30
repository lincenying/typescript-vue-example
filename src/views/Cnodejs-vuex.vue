<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="lists">
            <ul>
                <li v-for="(item, index) in topics.data" :key="index">
                    <router-link :to="`/cnodejs/view/${item.id}`">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
        <div class="page"><a @click="handleLoadMore" href="javascript:;">加载更多...</a></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'
import { MyMixin } from '@/mixins'

const Topics = namespace('topics')

@Component({
    components: {}
})
export default class CnodejsVuex extends Mixins(MyMixin) {
    @Topics.Action('getTopics')
    getTopics!: Function
    @Topics.Getter('getTopics')
    topics!: any
    async mounted() {
        await this.getTopics({})
        await this.$nextTick()
        this.scrollTo()
    }
    handleLoadMore() {
        this.getTopics({ page: this.topics.page + 1 })
    }
}
</script>
<style lang="less">
.lists {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
}
.page {
    text-align: center;
}
</style>
