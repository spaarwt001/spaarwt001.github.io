<template>
    <ul class="form" >
        <li v-for="question in questionList" v-bind:key="question.question" >
            {{ question.question }}
            <questions v-bind:questionList="questionList">{{ questions.options }}</questions>
        </li>
    </ul>
</template>

<script>

import questions from '../components/Questions'
import questionList from '../questions/questionList'

export default {
  name: 'questionForm',

  components: {
    questions
  },

  data () {
    return {
      questions,
      questionList
    }
  }
}

</script>

<style lang="scss">
@import './questions.scss'
</style>
