<template>
  <div class="modal-section">
    <SocialButton/>
  </div>
</template>

<script>
import SocialButton from '~/components/SocialButton.vue'

export default {
  components: {
    SocialButton
  }
}
</script>

<style scoped>
.modal-section {
  position: fixed;
}
</style>

