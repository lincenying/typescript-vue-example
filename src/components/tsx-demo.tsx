import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class tsxDemo extends Vue {
    @Prop()
    private msg: any
    text: string = `这个是jsx组件`
    total: number = 0
    handleAdd() {
        this.total += 1
    }
    handleSubtract() {
        this.total -= 1
    }
    // eslint-disable-next-line
    render(h: any) {
        return (
            <div class="tsx-demo">
                <p>{this.text}</p>
                <p>这个是来自Prop: {this.msg}</p>
                <p>当前计数: {this.total}</p>
                <button onClick={this.handleAdd}>点我加1</button>
                <button onClick={this.handleSubtract}>点我减1</button>
            </div>
        )
    }
}
