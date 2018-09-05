<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/images/logo.png">
        <HelloWorld :msg="msg" text="12345" @reset-msg="resetMsg" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/hello-world.vue' // @ is an alias to /src

// Register the router hooks with their names
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
])

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    msg: string = '123'
    mounted() {
        setTimeout(() => {
            this.msg = '234'
        }, 3000)
    }
    resetMsg(msg: string) {
        this.msg = msg
    }
    // lifecycle hook
    beforeRouteEnter(to: any, from: any, next: Function): void {
        console.log('beforeRouteEnter')
        next()
    }

    beforeRouteLeave(to: any, from: any, next: Function): void {
        console.log('beforeRouteLeave')
        next()
    }
}
</script>
