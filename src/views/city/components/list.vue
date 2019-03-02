<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area" v-show="city">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div @click="handleCityClick(item.name)" class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div  @click="handleCityClick(city.name)" class="item border-bottom" v-for="city in item" :key="city.id">
            {{city.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  props: ['hotCities', 'cities', 'letter'],
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el, 200)
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (cityName) {
      this.$emit('changeCity', cityName)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow hidden
    position absolute
    left 0
    right 0
    bottom 0
    top 1.58rem
    .area
      .title
        line-height .44rem
        background-color #eee
        padding-left .2rem
        color #666666
        font-size .26rem
      .button-list
        overflow hidden
        display flex
        flex-wrap wrap
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
          flex 0 0 33.3%
          width: 33.3%
          .button
            margin .1rem
            padding .1rem 0
            text-align center
            border .02rem solid #cccccc
            border-radius .06rem
      .item-list
        .item
          line-height .76rem
          padding-left .2rem

</style>
