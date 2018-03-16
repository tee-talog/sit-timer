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

const _schedule = [
  { time:   2, type: Type.SPRINT },
  { time:   5, type: Type.INTERVAL },
  { time:   2, type: Type.SPRINT },
  { time:   5, type: Type.INTERVAL },
  { time:   2, type: Type.SPRINT },
  { time:   5, type: Type.COOL_DOWN },
]

export const state = () => ({
  Type,
  _schedule,
  customize: {
    willWarmUp: true
  }
})

export const mutations = {
  changeWillWarmUp (state) {
    state.customize.willWarmUp = !state.customize.willWarmUp
  }
}

export const getters = {
  schedule: (state) => {
    if (state.customize.willWarmUp) {
      return [
        { time: 3, type: Type.WARM_UP },
        ...state._schedule
      ]
    } else {
      return state._schedule
    }
  }
}

