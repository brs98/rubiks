<template>
<div class="wrapper">
  <div class="algorithms">
    <div class="algorithm" v-for="algorithm in algorithms" :key="algorithm.id">
      <div class="info">
        <h1>{{algorithm.algorithm}}</h1>
        <h2>Number: {{algorithm.number}}</h2>
        <img :src="'/images/oll/'+algorithm.image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "OllList",
    props: {
      algorithms: Array
    }
  }
</script>

<style scoped>
  .info {
    border-style: solid;
    border-width: 5px;
    border-radius: 12px;
    border-color: red;
    margin: 20px;
  }
</style>
