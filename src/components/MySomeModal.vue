<template>
  <div>
    <h1>Leave page?</h1>

    <button @click="onModalClose(true)">Yes</button>
    <button @click="onModalClose(false)">No</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useJdModalRef } from '@jood/v-modal'


export default defineComponent({
  setup() {
    const modalRef = useJdModalRef()

    const onModalClose = (result: boolean) => {
      modalRef.close(result)
    }

    return {
      onModalClose,
    }
  },
})
</script>
