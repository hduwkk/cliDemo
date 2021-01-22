import Vue from 'vue'
import VueRouter from 'vue-router'
import { documents } from 'site-desktop-shared'
// import '../common/iframe-router';
console.log(documents, 'documents')
function decamelize (str, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase()
}

function parseName (name) {
  return {
    component: `${decamelize(name)}`
  }
}

function getRoutes () {
  const routes = []
  const names = Object.keys(documents)
  names.forEach(name => {
    const { component } = parseName(name)
    routes.push({
      name: component,
      path: `/${component}`,
      component: documents[name],
      meta: { name: component }
    })
  })
  console.log(routes, 'routes')
  return routes
}

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'hash',
  routes: getRoutes()
})

router.afterEach(() => {
  Vue.nextTick(() => console.log(`window.syncPath()`))
})
