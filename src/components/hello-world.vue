<template>
    <div class="comp-hello-world">
        <h1>{{ msg }}</h1>
        <h4>{{ text }}</h4>
        <h6>{{ text2 }}</h6>
        <p>{{ computedMsg }}</p>
        <p><a @click="handleConsole" href="javascript:;">点我打印</a></p>
        <p><a @click="resetMsg('msg变化了')" href="javascript:;">点我Emit</a></p>
        <p>
            For guide and recipes on how to configure / customize this project,<br />
            check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
    // data
    str: string = '我是字符串'
    // prop
    @Prop()
    private msg: any
    @Prop([String, Boolean])
    private text!: string | boolean
    @Prop({ default: 'default value' })
    private text2!: string
    // watch
    @Watch('msg')
    onTextChanged(val: string, oldVal: string): void {
        console.log(val, oldVal)
    }
    // computed
    get computedMsg(): string {
        return 'computed ' + this.msg
    }
    // method
    handleConsole(): void {
        console.log('console: ' + this.msg)
    }
    // emit
    @Emit('reset-msg')
    resetMsg(msg: string): void {}

    // lifecycle hook
}
</script>
