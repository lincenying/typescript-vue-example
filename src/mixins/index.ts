import { Component, Vue } from 'vue-property-decorator'
import ls from 'store2'

// Register the router hooks with their names
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
])

// You can declare a mixin as the same style as components.
@Component
export class MyMixin extends Vue {
    scrollTo() {
        const path: string = this.$route.path
        const scrollTop: number = ls.get(path) || 0
        ls.remove(path)
        window.scrollTo(0, scrollTop)
    }
    beforeRouteLeave(to: any, from: any, next: Function): void {
        const scrollTop: number = Math.max(window.pageYOffset, document.documentElement!.scrollTop, document.body.scrollTop)
        const path: string = from.path
        if (scrollTop) ls.set(path, scrollTop)
        else ls.remove(path)
        next()
    }
}
