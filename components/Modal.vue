<template>
  <div
    class="modal-section"
    v-if="modal"
    @click="handleClickBackground"
  >
    <SocialButton/>
  </div>
</template>

<script>
import SocialButton from '~/components/SocialButton.vue'

export default {
  components: {
    SocialButton
  },
  methods: {
    handleClickBackground () {
      this.$store.commit('changeModalState')
    }
  },
  computed: {
    modal () {
      return this.$store.state.modal
    }
  }
}
</script>

<style scoped>
.modal-section {
  position: fixed;
}
</style>

