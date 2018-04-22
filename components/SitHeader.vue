<template>
  <section class="header-section">
    <h1 class="header-title">
      <nuxt-link class="title-link" to="/">
        <img class="logo" src="~static/Logo.png">
      </nuxt-link>
    </h1>
    <div class="header-right">
      <div class="social">
        <SocialButton/>
      </div>
      <nav class="menu">
        <nuxt-link to="what-is-sit" tag="div" class="menu-item">
          <el-button type="text">"SIT"とは？</el-button>
        </nuxt-link>
        <nuxt-link to="how-to-use" tag="div" class="menu-item">
          <el-button type="text">使い方</el-button>
        </nuxt-link>
        <nuxt-link to="about" tag="div" class="menu-item">
          <el-button type="text">当サイトについて</el-button>
        </nuxt-link>
      </nav>
    </div>
  </section>
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
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header-title {
  height: 90%;
}
.title-link {
  height: 100%;
}
.logo {
  height: 100%;
}
.header-right {
  display: flex;
}
.menu {
  display: flex;
}
.menu-item {
  margin: 0 10px;
}
.social {
  display: flex;
  align-items: stretch;
}
</style>

