import {default as Button} from './button'
import {default as Loading} from './loading'

const components = [
  Button,
  Loading
]

const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install
}

export default {
  install
}
