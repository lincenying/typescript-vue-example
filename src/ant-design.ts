import { Button, Spin, message } from 'ant-design-vue'

const install = (Vue: any) => {
    // if (install.installed) {
    //     return
    // }

    Vue.component(Button.name, Button)
    Vue.component(Spin.name, Spin)

    Vue.prototype.$message = message
}
export default install
