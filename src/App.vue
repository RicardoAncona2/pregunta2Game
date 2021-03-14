<template>
  <div>
    <Home :home="home" :wheel="wheel" v-if="home.active"></Home>
    <div :style="myStyle">
      <SpinWheel v-if="wheel.active" :wheel="wheel" :question="question"/>
      <sample-question v-if="question.active"/>
    </div>
  </div>
</template>

<script>
import SpinWheel from "./components/SpinWheel.vue";
import Home from "./components/Home.vue";
import SampleQuestion from "./components/SampleQuestion.vue";

export default {
  name: "App",
  components: {
    SpinWheel,
    Home,
    SampleQuestion,
  },
  data() {
    return {
      myStyle: {
        backgroundColor: "#6957D5",
      },
      wheel:{active:false},
      home:{active:true},
      question:{active:false}
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #7856d4;
}
</style>
