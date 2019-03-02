<template>
  <div class="home">
    <home-header></home-header>
    <swiper :list="swiperList"></swiper>
    <home-icons :list="iconList"></home-icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import Swiper from './components/swiper'
import HomeIcons from './components/homeIcons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import { getIndex } from '@/api/index'
import { loadFromLocal } from '@/common/js/localStorage'
import * as keyTypes from '@/common/js/localStorageKey'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  async mounted () {
    const cityname = loadFromLocal(123456, keyTypes.CURR_CITY)
    if (cityname) {
      this.changeCityAction(cityname)
      this.lastCity = cityname
    }
    this.getHomeData()
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    async getHomeData () {
      const res = await getIndex()
      const data = res.data
      this.iconList = data.iconList
      this.swiperList = data.swiperList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    },
    ...mapActions(['changeCityAction'])
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  },
  components: {
    HomeHeader,
    Swiper,
    HomeIcons,
    Recommend,
    Weekend
  }
}
</script>
