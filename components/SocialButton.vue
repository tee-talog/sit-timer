<template>
  <div class="container">
    <div class="twitter">
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-text="トレーニング中！"
        data-url="https://tee-talog.github.io/sit-timer/"
        data-lang="ja"
        data-show-count="false"
      >Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <div class="facebook">
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ftee-talog.github.io%2Fsit-timer%2F&width=88&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId"
        width="88"
        height="65"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
      ></iframe>
    </div>

    <div class="line">
      <div
        class="line-it-button"
        data-lang="ja"
        data-type="share-e"
        data-url="https://tee-talog.github.io/sit-timer/"
        style="display: none;"
      ></div>
      <script
        src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js"
        async="async"
        defer="defer"
      ></script>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>

