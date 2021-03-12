<template>
  <div :style="myStyle">
    <SpinWheel />
    <sample-question />
  </div>
</template>

<script>
import SpinWheel from './components/SpinWheel.vue'
import SampleQuestion from './components/SampleQuestion.vue'

export default {
  
  name: 'App',
  components: {
    SpinWheel,
    SampleQuestion
  },
  data(){
    return{
             myStyle:{
            backgroundColor:"#6957D5" 
            }
  
  }}}

</script>

<style>


</style>
