<template>
  <article class="main-container" :style="bgColor">
    <div class="state-display">
      <p class="paragraph">残り{{ remainingTime | spacePadding }}秒</p>
      <p class="paragraph">{{ type.message }}</p>
      <el-progress
        class="progress-bar"
        :text-inside="true"
        :stroke-width="20"
        :percentage="progressOfSchedule"
        :status="(progressOfSchedule === 100) ? 'success' : ''"
      ></el-progress>

      <div>
        <el-button
          type="primary"
          class="button start-button"
          @click="handleStartClick"
          v-if="standby"
        >START</el-button>
        <el-button
          type="primary"
          class="button restart-button"
          @click="handleRestartClick"
          v-else-if="paused"
        >RESTART</el-button>
        <el-button
          type="warning"
          class="button pause-button"
          @click="handlePauseClick"
          v-else
        >PAUSE</el-button>
        <el-button
          type="danger"
          class="button stop-button"
          @click="handleStopClick"
        >STOP</el-button>
      </div>
    </div>
  </article>
</template>

<script>
// ミリ秒スリープする関数
const sleep = async (milliseconds) => new Promise((resolve, reject) => setTimeout(() => resolve(), milliseconds))

export default {
  data () {
    return {
      schedule: this.$store.state.schedule,
      remainingTime: 0,
      type: this.$store.state.Type.STANDBY,
      paused: false,
      stop: false,
      progress: 0
    }
  },
  methods: {
    async handleStartClick () {
      // 一番最初しか呼ばれない
      for (let { time, type } of this.schedule) {
        this.type = type
        for (let i of Array(time + 1).keys()) {
          this.remainingTime = time - i
          // 1秒待つ
          // 無限ループで、ポーズ時以外はカウンタをインクリメントすることで、復帰ができる
          for (let i = 0; i < 10;) {
            await sleep(100)
            if (!this.paused) {
              i++
            }
            // 途中でstopが押された場合
            if (this.stop) {
              this.stop = false
                return
            }
          }
        }
        this.progress++
      }
      // 初期化
      this.reset()
    },
    handlePauseClick () {
      this.paused = true
    },
    handleRestartClick () {
      this.paused = false
    },
    handleStopClick () {
      // 残り時間カウントのループを止める
      this.stop = true
      // 初期化
      this.reset()
    },
    reset () {
      this.remainingTime = 0
      this.type = this.$store.state.Type.STANDBY
      this.paused = false
      this.progress = 0
    }
  },
  computed: {
    standby () {
      return this.type.message === this.$store.state.Type.STANDBY.message
    },
    bgColor () {
      return {
        backgroundColor: `#${this.type.color}`
      }
    },
    progressOfSchedule () {
      return Math.round(this.progress / (this.schedule.length - 1) * 100)
    }
  },
  filters: {
    spacePadding (str) {
      // スペースパディングする
      // 固定長文字列じゃないとあまり意味がない
      return ("   " + str).slice(-3)
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.state-display {
  width: 85%;
  max-width: 800px;
  background-color: rgba(255, 255, 255, .6);
  padding: 10px;
  border-radius: 10px;
  font-size: 1.3em;
}

.progress-bar {
  margin: 10px 0;
}

.button {
  margin: 10px;
  letter-spacing: 3px;
}
</style>
