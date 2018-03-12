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
    message: "Warm-Up",
    color: "72e57d"
  }
}

const schedule = [
  { time:   3, type: Type.WARM_UP },
  { time:   2, type: Type.SPRINT },
  { time:   5, type: Type.INTERVAL },
  { time:   2, type: Type.SPRINT },
  { time:   5, type: Type.INTERVAL },
  { time:   2, type: Type.SPRINT },
  { time:   5, type: Type.COOL_DOWN },
]

export const state = () => ({
  Type,
  schedule
})

export const mutations = {
}

