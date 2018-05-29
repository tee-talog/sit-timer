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

const warmUp = { time: 3, type: Type.WARM_UP }

const oneSprint = [
  { time: 20, type: Type.SPRINT },
  { time: 120, type: Type.INTERVAL }
]

const cooldown = { time: 120, type: Type.COOL_DOWN }

export const state = () => ({
  Type,
  modal: false,
  customize: {
    willWarmUp: true,
    sprintTimes: 3
  }
})

export const mutations = {
  changeWillWarmUp (state) {
    state.customize.willWarmUp = !state.customize.willWarmUp
  },
  changeSprintTimes (state, value) {
    state.customize.sprintTimes = value
  },
  changeModalState (state) {
    state.modal = !state.modal
  }
}

export const getters = {
  schedule: (state) => {
    let sprints = []

    if (state.customize.willWarmUp) {
      sprints = [warmUp]
    }

    for (let i = 0; i < state.customize.sprintTimes; i++) {
      sprints = [...sprints, ...oneSprint]
    }

    sprints[sprints.length - 1] = cooldown
    return sprints
  }
}

