<template>
  <article class="what-is-sit-section">
    <h1 class="page-title">"SIT"とは？</h1>
    <p class="paragraph">{{ paragraph }}</p>
  </article>
</template>

<script>
const paragraph = `\
　SITトレーニングは「Sprint Interval Training」の略で、日本語では「高強度インターバルトレーニング」といいます。
　スプリント（運動）とインターバル（休憩）を交互に交互に行います。

　SITトレーニングのメリットは、短時間で高い効果が得られることです。

　以下のようなものがスプリントに利用されています。もちろん以下の運動以外でも問題ありません。

　・エアロバイク
　・バーピー
　・短距離ダッシュ

　SITトレーニングを行う上で注意したいのが、単純に「短時間の運動で長時間運動したときと同じ効果が得られる」というわけではなく、「キツイ運動と軽い運動を繰り返し、その差に耐えられる体を作ることで、より自分の体を鍛える」ということです。

　当サイトでは責任を負いかねますので、自分にあった運動量で自己責任の上取り組んでください。
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
.what-is-sit-section {
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

