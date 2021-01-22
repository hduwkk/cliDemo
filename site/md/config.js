module.exports = {
  name: 'vant',
  build: {
    skipInstall: ['lazyload'],
    site: {
      publicPath: 'https://b.yzcdn.cn/vant/',
    },
    vetur: {
      tagPrefix: 'van-',
    },
  },
  site: {
    locales: {
      title: 'Vant',
      description: '轻量、可靠的移动端 Vue 组件库',
      logo: 'https://img.yzcdn.cn/vant/logo.png',
      langLabel: '中文',
      nav: [
        {
          title: '基础组件',
          items: [
            {
              path: 'button',
              title: 'Button 按钮',
            },
            {
              path: 'loading',
              title: 'loading 组件',
            }
          ],
        }
      ]
    },
  },
}
