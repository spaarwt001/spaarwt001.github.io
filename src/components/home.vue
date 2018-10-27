<template>
  <div class="App">
    <router-link to="/About"> About </router-link>
    <h1>{{ title }}</h1>
    <h3>{{ sub }}</h3>
    <valueView v-bind:percentage="percentage"></valueView>
    <questionForm/>
  </div>
</template>

<script>

import { serverBus } from '../main'

import questionForm from '../components/questionForm'
import valueView from '../components/valueView'

export default {
  name: 'Home',
  components: {
    questionForm,
    valueView
  },

  data () {
    return {
      title: 'Kind veilig thuis',
      sub: 'risico op een maatregel',
      percentage: 0,
      totalArray: ['']
    }
  },
  created () {
    serverBus.$on('questionValue', (value) => {
      this.$data.totalArray.splice(value[1], 1, value[0])
      // formule van FolkertJan, daniel1 & Tim
      var percentage = Number((1 / (1 + Math.exp(-1 * (-8.57219 + (this.$data.totalArray.reduce((a, b) => a + b, 0))))) * 100).toFixed(2))
      this.$data.percentage = percentage
    })
  }
}
</script>

<style lang="scss">
@import './home.scss'
</style>
