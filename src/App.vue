<template>
  <div style="background-color:#7856D4;">

    <SpinWheel msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SpinWheel from './components/SpinWheel.vue'

export default {
  name: 'App',
  components: {
    SpinWheel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
