<template>
  <div id="app">
    <jd-modal-provider/>

    <router-link to="/">Go to VMain</router-link>
    ' '
    <router-link to="/page">Go to VPage</router-link>
    <hr>
    <router-view/>
    <hr>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideJdModalService, JdModalProvider } from '@jood/v-modal'

export default defineComponent({
  components: {
    JdModalProvider,
  },
  setup() {
    const modalService = provideJdModalService()

    modalService.init()


    return {}
  },
})
</script>

<style>
@import "@vueform/multiselect/themes/default.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
