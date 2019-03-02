<template>
  <div class="detail">
    <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import { getDetail } from '@/api/index'
export default {
  name: 'detail',
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: []
    }
  },
  async mounted () {
    console.log(this.$route.params.id)
    const res = await getDetail({
      id: this.$route.params.id
    })
    const data = res.data
    this.bannerImg = data.bannerImg
    this.categoryList = data.categoryList
    this.gallaryImgs = data.gallaryImgs
    this.sightName = data.sightName
  },
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
