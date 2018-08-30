<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="lists">
            <ul>
                <li v-for="(item, index) in lists" :key="index">
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
import api from '@/api'

@Component({
    components: {}
})
export default class Cnodejs extends Mixins(MyMixin) {
    lists: any[] = []
    page: number = 1
    async mounted() {
        await this.getTopics()
        await this.$nextTick()
        this.scrollTo()
    }
    async getTopics() {
        const { success, data } = await api.get(`topics`, { page: this.page })
        if (success === true) {
            this.page++
            this.lists = this.lists.concat(data)
        }
    }
    handleLoadMore() {
        this.getTopics()
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
