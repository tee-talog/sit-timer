<template>
  <article class="sub-container">
    <h1 class="page-title">当サイトについて</h1>
    <h2 class="page-subtitle">免責事項</h2>
    <p class="paragraph disclaimer">{{ disclaimer }}</p>
    <h2 class="page-subtitle">連絡先</h2>
    <address class="address">
      <div>Twitter:<a href="https://twitter.com/tee_talog">@tee-talog</a></div>
    </address>
  </article>
</template>

<script>
const disclaimer = `\
コンテンツの内容について、細心の注意を払っておりますが、内容が正確であるかどうか、最新のものであるかどうか等については保証いたしません。当サイトのご利用により、ご利用者様に何らかの不都合や損害が発生しても、当方は一切の責任を負いません。
`

export default {
  data () {
    return {
      disclaimer
    }
  }
}
</script>

<style scoped>
</style>
