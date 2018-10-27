<template>
    <div class="percentage">
        {{ percentage + '%'}}
    </div>
</template>

<script>

export default {
  name: 'valueView',

  data () {
    return {
    }
  },

  props: {
    percentage: {
      type: Number,
      required: false
    }
  }
}

</script>

<style lang="scss">
@import './valueView.scss'
</style>
