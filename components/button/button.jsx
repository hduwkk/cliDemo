export default {
  name: 'WButton',
  inheritAttrs: false,
  data () {
    return {
      name: '小小'
    }
  },
  render () {
    const buttonProps = {
      class: 'wk-button'
    }
    return (<button {...buttonProps}>我是按钮<span>{this.name}</span></button>)
  }
}
