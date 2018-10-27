<template>
    <div class="about">
        <router-link to="/"> Home </router-link>
        <h1> {{ title }} </h1>
        <p> {{ text }} </p>
    </div>
</template>

<script>

export default{
  name: 'About',
  data () {
    return {
      title: 'About',
      text: 'Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.'
    }
  }
}

</script>

<style lang="scss">
@import './about.scss'
</style>
