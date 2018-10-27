<template>
<div class="aboutForm">
    <router-link to="/"> Home </router-link>
    <div class="about">
        <h1> {{ title }} </h1>
        <p> {{ text }} </p>
    </div>
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
@import './about.scss';
@import './home.scss';
</style>
