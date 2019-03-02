<template>
  <div class="container" @click="close">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
.container >>> .swiper-container
  overflow: inherit
.container
  position fixed
  display flex
  flex-direction column
  justify-content center
  top 0
  left 0
  right 0
  bottom 0
  background-color #000
  z-index 1999
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
