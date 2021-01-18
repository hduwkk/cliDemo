import Vue from 'vue';
import VueRouter from 'vue-router';
import { documents } from 'site-desktop-shared';
// import '../common/iframe-router';
console.log(documents, 'documents')
function decamelize(str, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase();
}

function parseName(name) {
  if (name.indexOf('_') !== -1) {
    const pairs = name.split('_');
    const component = pairs.shift();

    return {
      component: `${decamelize(component)}`,
      lang: pairs.join('-'),
    };
  }

  return {
    component: `${decamelize(name)}`,
    lang: '',
  };
}

function getRoutes() {
  const routes = [];
  const names = Object.keys(documents);

  // routes.push({
  //   path: '*',
  //   redirect: '/',
  // });

  names.forEach(name => {
    const { component, lang } = parseName(name);
    if (lang) {
      routes.push({
        name: `${lang}/${component}`,
        path: `/${lang}/${component}`,
        component: documents[name],
        meta: { lang, name: component }
      });
    } else {
      routes.push({
        name: `${component}`,
        path: `/${component}`,
        component: documents[name],
        meta: { name: component }
      });
    }
  });
  return routes;
}

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'hash',
  routes: getRoutes()
});

router.afterEach(() => {
  Vue.nextTick(() => console.log(`window.syncPath()`));
});
