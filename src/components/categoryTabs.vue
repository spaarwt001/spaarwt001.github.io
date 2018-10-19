<template>
    <div class="tabContainer">
        <ul>
            <!-- <a v-on:click="toggleState()" v-bind:class="[ activeTab === 1 ? 'active' : '' ]">1</a>
            <a v-on:click="toggleState()" v-bind:class="[ activeTab === 2 ? 'active' : '' ]">2</a>
            <a v-on:click="toggleState()" v-bind:class="[ activeTab === 3 ? 'active' : '' ]">3</a>
            <a v-on:click="toggleState()" v-bind:class="[ activeTab === 4 ? 'active' : '' ]">4</a> -->
        </ul>

        <!-- <div class="content">
            <div v-if="activetab === 1" class="tabcontent">
                Content for tab one
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                Content for tab two
            </div>
            <div v-if="activetab === 3" class="tabcontent">
                Content for tab three
            </div>
        </div> -->
    </div>
</template>

<script>

export default{
  name: 'tabs',
  data () {
    return {
      activeTab: 1,
      toggle: false
    }
  },

  methods: {
    toggleState () {
      console.log(this.toggle)
      this.toggle = !this.toggle
    }
  }
}

</script>

<style lang="scss">
    ul{
        a{
            background: lightgray;
            padding: 0.5em 1em;
        }
    }
    .tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
}
</style>
