<template>
  <div class="container">
    <social-sharing
      url="https://tee-talog.github.io/sit-timer/"
      :title="shareText"
      :description="shareText"
      inline-template
    >
      <div class="g_social-sharing-buttons">
        <network network="twitter" class="g_social-sharing-buttons-button-link">
          <span class="g_social-sharing-buttons-button g_social-sharing-buttons-button-twitter">
            Twitter
          </span>
        </network>
        <network network="facebook" class="g_social-sharing-buttons-button-link">
          <span class="g_social-sharing-buttons-button g_social-sharing-buttons-button-facebook">
            Facebook
          </span>
        </network>
        <network network="line" class="g_social-sharing-buttons-button-link">
          <span class="g_social-sharing-buttons-button g_social-sharing-buttons-button-line">
            LINE
          </span>
        </network>
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
  border-radius: 5px;
  height: 2em;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.g_social-sharing-buttons-button-twitter {
  background-color: #1da1f2;
  color: #FFF;
}
.g_social-sharing-buttons-button-facebook {
  background-color: #3b5998;
  color: #FFF;
}
.g_social-sharing-buttons-button-line {
  background-color: #00b900;
  color: #FFF;
}
.g_social-sharing-buttons-button-link {
  vertival-align: middle;
  display: flex;
  align-items: center;
  flex-basis: 5em;
  /*
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  */
}
</style>
