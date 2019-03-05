<template>
    <div>
        <img ref="logo" src="./logo.jpg" alt="" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import { Route } from 'vue-router'

const Vuex = namespace('vuex')

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
])

@Component({
    // Components
    components: {},
    // Props
    props: {
        propMessage1: String,
        propMessage2: {
            type: Number,
            default: 0,
            required: true,
            validator: function(value) {
                return value >= 0
            }
        }
    }
})
export default class Template extends Vue {
    // Refs
    $refs!: {
        logo: HTMLElement
    }
    // Props
    @Prop()
    private msg: any
    @Prop([String, Boolean])
    private text!: string | boolean
    @Prop({ default: 'default value' })
    private text2!: string
    // Data
    str: string = '我是字符串'
    // Vuex
    // Vuex -> computed => this.stateFoo (store.state.foo)
    @State('foo') stateFoo!: any
    // Vuex -> computed => this.stateBar (store.state.bar)
    @State(state => state.bar) stateBar!: any
    // Vuex -> mutation => this.mutationFoo()
    @Mutation('foo') mutationFoo!: any
    // Vuex -> actions => this.getAction()
    @Vuex.Action('getAction') getAction!: Function
    // Vuex -> getters => this.getters
    @Vuex.Getter('getGetter') getters!: any

    // Computed
    get computedMsg(): string {
        return 'computed ' + this.msg
    }
    // Watch
    @Watch('msg', { immediate: true, deep: true })
    onTextChanged(val: string, oldVal: string): void {
        console.log(val, oldVal)
    }
    // Emit
    // @click="resetMsg(payload)"
    @Emit('reset-msg')
    resetMsg(msg: string): void {}
    // Created
    created() {
        console.log(`object`)
    }
    // Mounted
    mounted() {
        console.log(`object`)
    }
    // Methods
    handleConsole(): void {
        console.log('console: ' + this.msg)
    }
    // Lifecycle Hooks
    beforeDestroy(): void {
        window.removeEventListener('scroll', this.handleConsole)
    }
    // Route Hooks
    beforeRouteEnter(to: Route, from: Route, next: Function): void {
        console.log('beforeRouteEnter')
        next()
    }
    beforeRouteUpdate(to: Route, from: Route, next: Function): void {
        console.log('beforeRouteUpdate')
        next()
    }
    beforeRouteLeave(to: Route, from: Route, next: Function): void {
        console.log('beforeRouteLeave')
        next()
    }
}
</script>
