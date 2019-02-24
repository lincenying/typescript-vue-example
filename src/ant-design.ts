import { Button, message } from 'ant-design-vue'

const install = (Vue: any) => {
    // if (install.installed) {
    //     return
    // }

    Vue.component(Button.name, Button)

    Vue.prototype.$message = message
}
export default install
