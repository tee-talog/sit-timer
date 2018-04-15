<template>
  <el-container class="app-container">
    <el-header>
      <sit-header/>
    </el-header>
    <el-main class="app-main">
      <nuxt/>
    </el-main>
  </el-container>
</template>

<script>
import SitHeader from '~/components/SitHeader'

export default {
  components: {
    SitHeader
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.sub-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  max-width: 800px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.paragraph {
  white-space: pre-wrap;
  margin: 10px 0;
}
</style>

<style scoped>
.app-container {
  height: 100vh;
}
.app-main {
  padding: 0;
  flex: 0 1 100%;
}
</style>
