<template>
  <div class="Pll">
    <h1>Pll Algorithms</h1>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('edge')" href="#" class="pure-menu-link">Edge Only</a></li>
        <li class="pure-menu-item"><a @click="select('corner')" href="#" class="pure-menu-link">Corner Only</a></li>
      </ul>
      <br/>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('swap')" href="#" class="pure-menu-link">Corner and Edge Swap</a></li>
      </ul>
      <br/>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('cycle')" href="#" class="pure-menu-link">Corner and Edge Cycle</a></li>
      </ul>
  </div>
    <PllList :algorithms="algorithms" />
  </div>
</template>

<script>
  import PllList from '../components/PllList.vue';
  export default {
    name: "Pll",
    components: {
      PllList
    },
    data() {
      return {
        selection: '',
      }
    },
    computed: {
      algorithms() {
        return this.$root.$data.PllAlgorithms.filter(algorithm => algorithm.category === this.selection)
      }
    },
    methods: {
      select(selection) {
        this.selection = selection;
      }
    }
  }
</script>
