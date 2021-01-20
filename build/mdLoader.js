module.exports = function (source) {
  console.log(source, '.. ..')
  return `
    export default {
    render(h) {
      return h('section', { innerHTML: '111' })
    }
  }`
}
