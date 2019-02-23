function VueBus(Vue: any) {
    const bus = new Vue({
        data: {
            default: {}
        }
    })

    Object.defineProperties(bus, {
        on: {
            get() {
                return this.$on
            }
        },
        once: {
            get() {
                return this.$once
            }
        },
        off: {
            get() {
                return this.$off
            }
        },
        emit: {
            get() {
                return this.$emit
            }
        }
    })

    Vue.bus = bus

    Object.defineProperty(Vue.prototype, '$bus', {
        get() {
            return bus
        }
    })
}
export default VueBus
