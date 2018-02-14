<template>
  <section class="container" :class="bgColorClass">
    <article>
      <div class="state-display">
        <p>残り時間：{{ remainingTime }}秒</p>
        <p>{{ type }}</p>
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
  PAUSE: "Pause",

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

export default {
  data () {
    const schedule = [
      { time:  6, type: Type.STRETCH },
      { time:  2, type: Type.ACTION },
      { time: 12, type: Type.BREAKTIME },
      { time:  2, type: Type.ACTION },
      { time: 12, type: Type.BREAKTIME },
      { time:  2, type: Type.ACTION },
      { time: 12, type: Type.COOL_DOWN },
    ]
    return {
      schedule,
      remainingTime: schedule[0].time,
      type: Type.STANDBY,
      paused: false,
      stop: false
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
            await new Promise((resolve, reject) => setTimeout(() => resolve(), 100))
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
      }
      // 初期化
      this.remainingTime = this.schedule[0].time
      this.type = Type.STANDBY
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
      this.remainingTime = this.schedule[0].time
      this.type = Type.STANDBY
      this.paused = false
    }
  },
  computed: {
    standby () {
      return this.type === Type.STANDBY
    },
    bgColorClass () {
      return bgColorClassDefinition[this.type] || ""
    }
  },
  filters: {
    typeToStateInJapanese () {
    }
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
