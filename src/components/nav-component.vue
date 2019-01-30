<template>
    <div class="nav-wrap">
        <ul class="nav-block">
            <li class="logo"><img src="http://img.daliangju.com/upload/20180603/1528019409246zkdt80.png" alt="" /></li>
            <li>
                <router-link to="/"><i></i>Home</router-link>
            </li>
            <li>
                <router-link to="/about"><i></i>About</router-link>
            </li>
            <li>
                <router-link to="/cnodejs"><i></i>Cnodejs</router-link>
            </li>
            <li>
                <router-link to="/cnodejs-vuex"><i></i>Cnodejs-vuex</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class navComponent extends Vue {}
</script>
