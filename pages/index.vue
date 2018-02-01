<template>
  <section class="container">
    <div>
      <p>Remaining Time: {{ remainingTime }}</p>
      <p>Type: {{ this.type }}</p>
    </div>
    <button @click="handleStartClick">start</button>
  </section>
</template>

<script>
const Type = {
  ACTIVE: "active",
  COOL_DOWN: "cool down",
  STRETCH: "stretch",
  INACTIVE: "inactive"
}

export default {
  data () {
    const schedule = [
      { time:  20, type: Type.ACTIVE },
      { time: 120, type: Type.COOL_DOWN },
      { time:  20, type: Type.ACTIVE },
      { time: 120, type: Type.COOL_DOWN },
      { time:  20, type: Type.ACTIVE },
    ]
    return {
      schedule,
      started: false,
      remainingTime: schedule[0].time,
      type: Type.INACTIVE,
      pause: false
    }
  },
  methods: {
    async handleStartClick () {
      // すでに開始している場合は無視
      if (this.started) {
        return
      }
      // 開始フラグを立てる
      this.started = true
      for (let { time, type } of this.schedule) {
        this.type = type
        for (let i of Array(time + 1).keys()) {
          this.remainingTime = time - i
          // 1秒待つ
          await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
        }
      }
      // 初期化
      this.started = false
      this.remainingTime = schedule[0].time
      this.type = Type.INACTIVE
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
</style>
