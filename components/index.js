import {default as Button} from './button'

const components = [
  Button
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
