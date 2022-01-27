export const state = () => ({
  text: '',
  variant: '',
  timeout: 3500,
})

export const actions = {
  showSnack({ commit }, payload) {
    commit('SHOW_MESSAGE', payload)
  },
}

export const mutations = {
  SHOW_MESSAGE(state, payload) {
    state.text = payload.text
    state.variant = payload.variant
    state.timeout = payload.timeout
  },
}
