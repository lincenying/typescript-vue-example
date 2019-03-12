import { Button, Spin, message } from 'ant-design-vue'

const install = (Vue: any) => {
    if ((<any>install).installed) {
        return
    }
    ;(<any>install).installed = true

    Vue.component(Button.name, Button)
    Vue.component(Spin.name, Spin)

    Vue.prototype.$message = message
}
export default {
    install
}
