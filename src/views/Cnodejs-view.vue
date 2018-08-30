<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="views" v-html="topic.data.content"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'

const Topic = namespace('topic')

@Component({
    components: {}
})
export default class CnodejsView extends Vue {
    @Topic.Action('getTopic')
    getTopic!: Function
    @Topic.Getter('getTopic')
    topic!: Object
    async mounted() {
        this.getTopic({
            id: this.$route.params.id
        })
    }
}
</script>
<style lang="less">
.views {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    img {
        max-width: 100%;
    }
}
</style>
