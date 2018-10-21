import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class tsxDemo extends Vue {
    // eslint-disable-next-line
    render(h: any, context: any) {
        return <div>这个是jsx组件</div>
    }
}
