<template>
  <div class="home">
    <home-header></home-header>
    <swiper :list="swiperList"></swiper>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import Swiper from './components/swiper'
import { getIndex } from '@/api/index'
export default {
  name: 'home',
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  async mounted () {
    const res = await getIndex()
    const data = res.data
    this.iconList = data.iconList
    this.swiperList = data.swiperList
    this.recommendList = data.recommendList
    this.weekendList = data.weekendList
  },
  components: {
    HomeHeader,
    Swiper
  }
}
</script>
