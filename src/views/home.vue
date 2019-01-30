<template>
    <div class="home">
        <img ref="logo" alt="Vue logo" src="../assets/images/logo.png" />
        <HelloWorld ref="helloword" :msg="msg" text="12345" @reset-msg="resetMsg" />
        <tsx-demo :msg="msg"></tsx-demo>
        <div class="red blue">red blue</div>
        <div class="blue red">blue red</div>
        <pre>
.red {
    color: red;
}
.blue {
    color: blue;
}
.red.blue {
    color: yellow
}
.blue.red {
    color: green;
}
&lt;div class="red blue"&gt;red blue&lt;/div&gt;
&lt;div class="blue red"&gt;blue red&lt;/div&gt;
        </pre>
        <div>为什么上面两个div都绿色字体?</div>
    </div>
</template>

<script lang="ts">
import { Route } from 'vue-router'
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/hello-world.vue' // @ is an alias to /src
import tsxDemo from '@/components/tsx-demo.tsx' // @ is an alias to /src

// Register the router hooks with their names
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
])

@Component({
    components: {
        HelloWorld,
        tsxDemo
    }
})
export default class Home extends Vue {
    // refs 的用法
    $refs!: {
        logo: HTMLElement
        helloword: HelloWorld
    }
    msg: string = '123'
    mounted() {
        setTimeout(() => {
            this.msg = '234'
        }, 3000)
        console.log(this.$refs.logo.getAttribute('src'))
        console.log(this.$refs.helloword)
    }
    resetMsg(msg: string) {
        this.msg = msg
    }
    // lifecycle hook
    beforeRouteEnter(to: Route, from: Route, next: Function): void {
        console.log('beforeRouteEnter')
        next()
    }

    beforeRouteLeave(to: Route, from: Route, next: Function): void {
        console.log('beforeRouteLeave')
        next()
    }
}
</script>
