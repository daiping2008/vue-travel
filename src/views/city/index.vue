<template>
  <div>
    <city-header></city-header>
    <city-search @changeCity="changeCity" :cities="cities"></city-search>
    <city-list @changeCity="changeCity" :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <alphabet @change="change" :cities="cities"></alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import Alphabet from './components/alphabet'
import { getCity } from '@/api/index'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  async mounted () {
    const res = await getCity()
    const data = res.data
    this.cities = data.cities
    this.hotCities = data.hotCities
  },
  methods: {
    change (letter) {
      console.log(letter)
      this.letter = letter
    },
    changeCity (cityName) {
      this.changeCityAction(cityName)
      this.$router.push('/')
    },
    ...mapActions(['changeCityAction'])
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
