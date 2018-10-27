<template>
      <div class="form">
          <questions v-for="question in questionList" v-bind:key="question.question" v-bind:question="question" />
      </div>
</template>

<script>

import questionList from '../questions/questionList'
import questions from '../components/questions'

export default {
  name: 'questionForm',

  components: {
    questions
  },

  data () {
    console.log(questionList)
    return {
      questionList
    }
  }
}

</script>

<style lang="scss">
    @import './questions.scss';
</style>
