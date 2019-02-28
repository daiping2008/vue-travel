<template>
  <swiper v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(list, index) in pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item in list" :key="item.id">
            <div class='icon-img'>
              <img :src="item.imgUrl" />
            </div>
            <div class="icon-desc">{{item.desc}}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
</template>
<script>
export default {
  props: ['list'],
  computed: {
    showSwiper () {
      return this.list.length
    },
    pages () {
      let pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })

      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons
    display block
    height 0
    width 100%
    padding-bottom 50%
    .icon
      overflow hidden
      display inline-block
      position relative
      width 25%
      height 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        img
          height 100%
          margin 0 auto
          display block
      .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
