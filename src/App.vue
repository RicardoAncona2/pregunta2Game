<template>
  <div>
    <div :style="myStyle">
      <div>
        <Home :home="home" :wheel="wheel" v-if="home.active"></Home>
        <SpinWheel v-if="wheel.active" :wheel="wheel" :question="question" />
        <sample-question :wheel="wheel" v-if="question.active" />
      </div>
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
        backgroundColor: "#653778",
          color: "#653778"
      },
      wheel: { active: false, winner: "old winner" },
      home: { active: true },
      question: { active: false },
    };
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #653778;
  background-color: #653778;
  min-height: 100vh;
}
</style>
