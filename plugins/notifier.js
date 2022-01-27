export default ({ store }, inject) => {
  inject('notifier', {
    show({ text = '', variant = '', timeout = 3500 }) {
      store.commit('snackbar/SHOW_MESSAGE', { text, variant, timeout })
    },
  })
}
