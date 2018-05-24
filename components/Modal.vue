<template>
  <transition name="share">
    <div
      class="modal-section"
      v-if="modal"
      @click="handleClickBackground"
    >
      <SocialButton/>
    </div>
  </transition>
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000077;
}
</style>

<style>
/* transition */
.share-enter-active, .share-leave-active {
  transition: opacity .1s;
}
/* appear */
/* 0 to 1 */
.share-enter {
  opacity: 0;
}
.share-enter-to {
  opacity: 1;
}
/* disappear */
/* 1 to 0 */
.share-leave {
  opacity: 1;
}
.share-leave-to {
  opacity: 0;
}
</style>

