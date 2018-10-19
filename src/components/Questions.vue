<template>
  <div class="questions">
      <!-- {{ question.question}} -->
      <select  v-on:change="onChange()">
        <option value="" disabled selected hidden> Maak uw keuze </option>
        <option v-for="options in questionList.options" v-bind:questions="questions" v-bind:key="options.id" > {{ options.label }} </option>
      </select>
  </div>
</template>

<script>

import questionList from '../questions/questionList'

export default {
  name: 'questions',
  props: questionList,

  data () {
    console.log(questionList)
    return {
      questionList
    }
  },

  methods: {
    onChange () {
      console.log(this.selected)
    }
  }
}

</script>

<style lang="scss">
@import './questions.scss'
</style>
