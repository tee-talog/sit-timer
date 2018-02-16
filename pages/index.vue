<template>
  <section class="container" :style="bgColor">
    <article class="content">
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
          >start</el-button>
          <el-button
            type="primary"
            class="button restart-button"
            @click="handleRestartClick"
            v-else-if="paused"
          >restart</el-button>
          <el-button
            type="warning"
            class="button pause-button"
            @click="handlePauseClick"
            v-else
          >pause</el-button>
          <el-button
            type="danger"
            class="button stop-button"
            @click="handleStopClick"
          >stop</el-button>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
const Type = {
  STANDBY: {
    message: "Standby",
    color: "ffffff"
  },

  SPRINT: {
    message: "Sprint",
    color: "e57272"
  },
  COOL_DOWN: {
    message: "Cool-Down",
    color: "72e5e5"
  },
  INTERVAL: {
    message: "Interval",
    color: "727de5"
  },
  WARM_UP: {
    message: "Warm-up",
    color: "72e57d"
  }
}

// ミリ秒スリープする関数
const sleep = async (milliseconds) => new Promise((resolve, reject) => setTimeout(() => resolve(), milliseconds))

export default {
  data () {
    const schedule = [
      { time:   3, type: Type.WARM_UP },
      { time:   2, type: Type.SPRINT },
      { time:   5, type: Type.INTERVAL },
      { time:   2, type: Type.SPRINT },
      { time:   5, type: Type.INTERVAL },
      { time:   2, type: Type.SPRINT },
      { time:   5, type: Type.COOL_DOWN },
    ]
    return {
      schedule,
      remainingTime: 0,
      type: Type.STANDBY,
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
      this.type = Type.STANDBY
      this.paused = false
      this.progress = 0
    }
  },
  computed: {
    standby () {
      return this.type.message === Type.STANDBY.message
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.content {
  width: 85%;
  max-width: 800px;
}

.state-display {
  width: 100%;
  background-color: rgba(255, 255, 255, .6);
  padding: 10px;
  border-radius: 10px;
  font-size: 1.3em;
}

.paragraph {
  margin: 5px;
}

.progress-bar {
  margin: 10px 0;
}

.button {
  margin: 10px 10px 10px 10px;
  letter-spacing: 3px;
}
</style>
