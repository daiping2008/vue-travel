<template>
  <div class="header">
    <router-link to="/">
      <i class="iconfont back-icon">&#xe6bc;</i>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    overflow hidden
    position relative
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .32rem
    background-color $bgColor
    .back-icon
      position absolute
      top 0
      left 0
      color #ffffff
      font-size .4rem
      width .64rem
</style>
