
const loaderUtils = require('loader-utils')
var hljs = require('highlight.js')
const linkOpen = require('./link-open')
const cardWrapper = require('./card-wrapper')
const parser = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str, true).value
      } catch (err) {
        console.log(err)
      }
    }
    return ''
  },
})

function wrapper(content) {
  content = cardWrapper(content);
  content = escape(content);

  return `
<template>
  <section v-html="content" v-once />
</template>

<script>
export default {
  created() {
    this.content = unescape(\`${content}\`);
  },

  mounted() {
    const anchors = [].slice.call(this.$el.querySelectorAll('h2, h3, h4, h5'));

    anchors.forEach(anchor => {
      anchor.addEventListener('click', this.scrollToAnchor);
    });
  },

  methods: {
    scrollToAnchor(event) {
      if (event.target.id) {
        this.$router.push({
          path: this.$route.path,
          hash: event.target.id
        })
      }
    }
  }
};
</script>
`;
}

module.exports = function (source) {
  let options = loaderUtils.getOptions(this) || {}
  this.cacheable && this.cacheable()
  options = {
    wrapper,
    linkOpen: true,
    ...options,
  }
  linkOpen(parser)
  return options.wrapper(parser.render(source))
}
