<template>
  <article class="sub-container">
    <h1 class="page-title">"SIT"とは？</h1>
    <p class="paragraph">{{ paragraph }}</p>
  </article>
</template>

<script>
const paragraph = `\
　SITトレーニングは「Sprint Interval Training」の略で、日本語では「高強度インターバルトレーニング」といいます。
　キツイ運動と軽い運動を交互に行い、運動量の差を生み出すことで、その差に耐える体を作るトレーニングです。
　SITトレーニングのメリットは、短時間で高い効果が得られることです。

　以下のようなものがスプリントに利用されています。もちろん以下の運動以外でも問題ありません。

　・エアロバイク
　・バーピー
　・短距離ダッシュ

　SITトレーニングを行う上で注意したいのが、単純に「短時間の運動で長時間運動したときと同じ効果が得られる」というわけではない、ということです。
　体にとても負荷をかけて体を鍛えるため、自分にあった運動量で、無理なく、自己責任の上取り組んでください。
`

export default {
  data () {
    return {
      paragraph
    }
  }
}
</script>

<style scoped>
</style>

