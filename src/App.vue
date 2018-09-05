<template>
    <div id="app">
        <nav-component></nav-component>
        <router-view class="body"></router-view>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import navComponent from '@/components/nav-component.vue'

import '@/assets/less/style.less'

@Component({
    components: {
        navComponent
    }
})
export default class App extends Vue {}
</script>
