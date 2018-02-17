<template>
  <div class="error-section">
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 class="error-content" v-else>エラーが発生しました</h1>
    <el-button class="error-content" type="text" @click="handleClickHomeButton">トップ</el-button>
  </div>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    handleClickHomeButton () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.error-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}
.error-content {
  margin: 20px;
}
</style>
