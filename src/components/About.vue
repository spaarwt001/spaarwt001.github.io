<template>
    <div>
        <router-link to="/"> Home </router-link>
        <h1> {{ title }} </h1>
        <p> {{ p }} </p>
    </div>
</template>

<script>

export default{
  name: 'About',
  data () {
    return {
      title: 'About',
      p: 'Dit is een test'
    }
  }
}

</script>

<style lang="scss">
</style>
