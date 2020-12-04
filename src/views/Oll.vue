<template>
  <div class="oll">
    <h1>OLL Algorithms</h1>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('C')" href="#" class="pure-menu-link">C</a></li>
        <li class="pure-menu-item"><a @click="select('I')" href="#" class="pure-menu-link">I</a></li>
        <li class="pure-menu-item"><a @click="select('L')" href="#" class="pure-menu-link">L</a></li>
        <li class="pure-menu-item"><a @click="select('P')" href="#" class="pure-menu-link">P</a></li>
        <li class="pure-menu-item"><a @click="select('T')" href="#" class="pure-menu-link">T</a></li>
        <li class="pure-menu-item"><a @click="select('W')" href="#" class="pure-menu-link">W</a></li>
      </ul>
      <br/>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('all')" href="#" class="pure-menu-link">All Edges Oriented</a></li>
        <li class="pure-menu-item"><a @click="select('none')" href="#" class="pure-menu-link">No Edges Oriented</a></li>
      </ul>
      <br/>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('big')" href="#" class="pure-menu-link">Big Lightning</a></li>
        <li class="pure-menu-item"><a @click="select('small')" href="#" class="pure-menu-link">Small Lightning</a></li>
      </ul>
      <br/>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('awkward')" href="#" class="pure-menu-link">Awkward</a></li>
        <li class="pure-menu-item"><a @click="select('fish')" href="#" class="pure-menu-link">Fish</a></li>
        <li class="pure-menu-item"><a @click="select('knight')" href="#" class="pure-menu-link">Knight</a></li>
      </ul>
      <br/>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('square')" href="#" class="pure-menu-link">Square</a></li>
        <li class="pure-menu-item"><a @click="select('arrow and h')" href="#" class="pure-menu-link">Arrow and H</a></li>
      </ul>
  </div>
    <OllList :algorithms="algorithms" />
  </div>
</template>

<script>
  import OllList from '../components/OllList.vue';
  export default {
    name: "Oll",
    components: {
      OllList
    },
    data() {
      return {
        selection: '',
      }
    },
    computed: {
      algorithms() {
        return this.$root.$data.OllAlgorithms.filter(algorithm => algorithm.category === this.selection)
      }
    },
    methods: {
      select(selection) {
        this.selection = selection;
      }
    }
  }
</script>
