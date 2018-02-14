<template>
  <section class="container" :class="bgColorClass">
    <article>
      <div class="state-display">
        <p>残り時間：{{ remainingTime }}秒</p>
        <p>{{ type }}</p>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="progressOfSchedule"
          :status="(progressOfSchedule === 100) ? 'success' : ''"
        ></el-progress>
      </div>
      <div>
        <el-button
          type="primary"
          class="start-button"
          @click="handleStartClick"
          v-if="standby"
        >start</el-button>
        <el-button
          type="primary"
          class="restart-button"
          @click="handleRestartClick"
          v-else-if="paused"
        >restart</el-button>
        <el-button
          type="warning"
          class="pause-button"
          @click="handlePauseClick"
          v-else
        >pause</el-button>
        <el-button
          type="danger"
          class="stop-button"
          @click="handleStopClick"
        >stop</el-button>
      </div>
    </article>
  </section>
</template>

<script>
const Type = {
  STANDBY: "Standby",

  ACTION: "Action",
  COOL_DOWN: "Cool-Down",
  BREAKTIME: "Break Time",
  STRETCH: "Stretch"
}

const bgColorClassDefinition = {
  [Type.ACTION]: "bg_action",
  [Type.COOL_DOWN]: "bg_cool-down",
  [Type.STRETCH]: "bg_stretch",
  [Type.BREAKTIME]: "bg_breaktime"
}

// ミリ秒スリープする関数
const sleep = async (milliseconds) => new Promise((resolve, reject) => setTimeout(() => resolve(), milliseconds))

export default {
  data () {
    const schedule = [
      { time:   3, type: Type.STRETCH },
      { time:   2, type: Type.ACTION },
      { time:   5, type: Type.BREAKTIME },
      { time:   2, type: Type.ACTION },
      { time:   5, type: Type.BREAKTIME },
      { time:   2, type: Type.ACTION },
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
      // 初期化
      this.remainingTime = 0
      this.type = Type.STANDBY
      this.paused = false
      this.progress = 0
    }
  },
  computed: {
    standby () {
      return this.type === Type.STANDBY
    },
    bgColorClass () {
      return bgColorClassDefinition[this.type] || ""
    },
    progressOfSchedule () {
      return Math.round(this.progress / (this.schedule.length - 1) * 100)
    }
  },
  filters: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

.state-display {
  background-color: rgba(255, 255, 255, .8);
  padding: 10px;
  border-radius: 10px;
}
.bg_action {
  background-color: #F00;
}
.bg_cool-down {
  background-color: #00F;
}
.bg_stretch {
  background-color: #FF0;
}
.bg_breaktime {
  background-color: #0F0;
}

</style>
