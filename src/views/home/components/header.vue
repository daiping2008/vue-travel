<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-icon">&#xe6bc;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe819;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市<i class="iconfont">&#xe64a;</i>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    height .86rem
    line-height .86rem
    display flex
    background-color #00bcd4
    color #ffffff
    .header-left
      flex 0 0 .64rem
      width .64rem
      text-align center
      .back-icon
        font-size .4rem
        margin-left .1rem
    .header-input
      flex 1
      background-color #fff
      height .64rem
      line-height .64rem
      margin-top .15rem
      margin-left .2rem
      padding-left .2rem
      border-radius  .1rem
      color #ccc
    .header-right
      flex 0 0 1.04rem
      width 1.04rem
      text-align center
      .iconfont
        margin-left .04rem
        font-size .2rem
</style>
