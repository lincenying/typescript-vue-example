import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class tsxDemo extends Vue {
    @Prop()
    private msg: any
    text: string = `这个是jsx组件`
    total: number = 0
    handleAdd(): void {
        this.total += 1
    }
    handleSubtract(): void {
        this.total -= 1
    }
    busInteraction(): void {
        this.$bus.emit('reset-bus', '这是新的bus文本(来自tsx) - ' + new Date().getTime())
    }
    // eslint-disable-next-line
    render(h: any) {
        return (
            <div class="tsx-demo">
                <p>{this.text}</p>
                <p>这个是来自Prop: {this.msg}</p>
                <p>当前计数: {this.total}</p>
                <a-button onClick={this.busInteraction} type="primary">
                    点我进行事件总线交互
                </a-button>{' '}
                <a-button onClick={this.handleAdd} type="primary">
                    点我加1
                </a-button>{' '}
                <a-button onClick={this.handleSubtract} type="primary">
                    点我减1
                </a-button>
            </div>
        )
    }
}
