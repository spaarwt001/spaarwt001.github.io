<template>
  <div class="questions">
    <p> {{ question.question }} </p>
      <select v-model="selected" v-on:change="valueView(selected, question.id)">
        <option disabled value=""> selecteer een antwoord </option>
        <option v-for="option in question.options" v-bind:value="option.value" v-bind:key="option.id"> {{ option.label }} </option>
      </select>
  </div>
</template>

<script>

import { serverBus } from '../main'

export default {
  name: 'questions',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selected: ''
    }
  },

  methods: {
    valueView: function (selected, id) {
      serverBus.$emit('questionValue', [selected, id])
    }
  }
}

</script>

<style lang="scss">
@import './questions.scss'
</style>
