<template>
  <div class="demo-container">
    <h3 id="abc">this is demo .. .. ..</h3>
    <w-button @click.native="clickHandle">你点我呀</w-button>
  </div>
</template>
<script>
export default {
  methods: {
    clickHandle () {
      console.log('点击事件。。')
    }
  }
}
</script>
<style lang="less" scoped>
.demo-container {
  color: #efefef;
}
#abc {
  color: orange;
}
</style>
