<template>
  <div class="App">
    <router-link to="/About"> About </router-link>
    <h1>{{ msg }}</h1>
    <questionForm/>
    <!-- <p>{{selected}}</p> -->

  </div>
</template>

<script>

import questionForm from '../components/questionForm'

export default {
  name: 'Home',
  components: {
    questionForm
    // tabs
  },
  data () {
    return {
      msg: 'Risico-indicator App'
    }
  },

  computed: {
  },

  methods: {
    /* toggleState () {
    console.log(this.toggle)
    this.toggle = !this.toggle
    } */
  }
}
</script>

<style lang="scss">
@import './home.scss'
</style>
