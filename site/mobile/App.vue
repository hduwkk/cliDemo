<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
@import '../common/style/var';
@import '../common/style/base';

body {
  min-width: 100vw;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
