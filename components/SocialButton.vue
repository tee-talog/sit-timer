<template>
  <div class="container">
    <social-sharing
      url="https://tee-talog.github.io/sit-timer/"
      :title="shareText"
      :description="shareText"
      inline-template
    >
      <div class="g_social-sharing-buttons">
        <network network="twitter">
          <span class="g_social-sharing-buttons-button g_social-sharing-buttons-button-twitter">
            Twitter
          </span>
        </network>
        <network network="facebook">
          <span class="g_social-sharing-buttons-button g_social-sharing-buttons-button-facebook">
            Facebook
          </span>
        </network>
        <network network="line">
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
</style>

<style>
.g_social-sharing-buttons {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.g_social-sharing-buttons-button {
  margin: 5px;
  border-radius: 5px;
  border: solid 3px #0002;
  height: 2.5em;
  width: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
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
</style>
