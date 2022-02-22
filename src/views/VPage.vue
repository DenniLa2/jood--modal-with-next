<template>
  <div>
    ///// VPage /////
  </div>
</template>

<script lang="ts">
/**
 * Created by Denis Abramyan (dennila2@ya.ru, dennila2@gmail.com)
 * on 22.02.2022
 */
import { defineComponent } from 'vue'
import { useAskAboutLeaveRoute } from '../composible/askAboutLeaveRoute'

const name = 'VPage'

export default defineComponent({
  name,
  setup() {
    useAskAboutLeaveRoute()

    return {}
  },
})

</script>

<style scoped lang="scss">

</style>
