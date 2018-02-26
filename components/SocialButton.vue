<template>
  <div class="container">
    <social-sharing
      url="https://tee-talog.github.io/sit-timer/"
      :title="shareText"
      :description="shareText"
      inline-template
    >
      <div class="g_social-sharing-buttons">
        <div class="g_social-sharing-buttons-button">
          <network network="twitter">Twitter</network>
        </div>
        <div class="g_social-sharing-buttons-button">
          <network network="facebook">Facebook</network>
        </div>
        <div class="g_social-sharing-buttons-button">
          <network network="line">LINE</network>
        </div>
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
  margin-right: 20px;
}
</style>

<style>
.g_social-sharing-buttons {
  display: flex;
  align-items: center;
}
.g_social-sharing-buttons-button {
  margin: 0 5px;
}
</style>
