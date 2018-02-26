<template>
  <section class="header-section">
    <h1 class="header-title">
      <nuxt-link to="/">SIT-timer</nuxt-link>
    </h1>
    <div>
      <div>
        <SocialButton/>
      </div>
      <nav class="menu">
        <nuxt-link to="what-is-sit" tag="div" class="menu-item">
          <el-button type="text">"SIT"とは？</el-button>
        </nuxt-link>
        <nuxt-link to="how-to-use" tag="div" class="menu-item">
          <el-button type="text">使い方</el-button>
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
.menu {
  display: flex;
}
.menu-item {
  margin: 0 10px;
}
</style>

