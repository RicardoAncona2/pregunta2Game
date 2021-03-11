<template>
  <div :style="myStyle" id="wrapper">
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
            backgroundColor:"#7957D5" 
            }
  
  }}}

</script>

<style>
#wrapper{
   

}

</style>
