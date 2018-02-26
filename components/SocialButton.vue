<template>
  <div class="container">
    <social-sharing
      url="https://tee-talog.github.io/sit-timer/"
      :title="shareText"
      :description="shareText"
      inline-template
    >
      <div>
        <network network="twitter">Twitter</network>
        <network network="facebook">Facebook</network>
        <network network="line">LINE</network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  computed: {
    shareText () {
      return "トレーニング中！"
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>

