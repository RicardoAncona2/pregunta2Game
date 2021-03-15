<template>
  <div>
    <div
      class="is-family-sans-serif 
            has-text-centered 
            has-text-weight-bold 
            card
            notification is-primary
            "
      allow="autoplay"
    >
      <strong>¿Cuantas vidas tiene un gato?</strong><br />
      <img
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg"
        style="width:330px;height:190px;"
      />
    </div>
    <div class="columns">
      <div class="column is-half ">
        <button class="button is-info is-large is-fullwidth is-rounded btn3d">
          <h1>A) 4 Vidas</h1>
        </button>
      </div>
      <div class="column  is-half" style="background-color:#red;">
        <button
          class="button is-success is-large is-fullwidth is-rounded btn3d"
        >
          <h1>B) 1 Vida</h1>
        </button>
      </div>
    </div>
    <br />
    <div class="columns">
      <div class="column is-half">
        <button
          class="button is-warning is-large is-fullwidth is-rounded btn3d"
        >
          <h1>C) 3 Vidas</h1>
        </button>
      </div>

      <div class="column is-half">
        <button class="button is-danger is-large is-fullwidth is-rounded btn3d">
          <h1>D) 7 Vidas</h1>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import music from './tools/Music'
export default {
  mounted() {
    music.manageHomeMusic('pause')
    music.manageQuestionMusic('play')
  },
  methods: {
    playBackgroundMusic() {
      const audio = new Audio(require("../assets/questionMusic.mp3"))
      audio.play();
    },
  },
};
</script>

<style>
.btn3d {
  transition: all 0.08s linear;
  position: relative;
  outline: medium none;
  -moz-outline-style: none;
  border: 0px;
  margin-right: 10px;
  margin-top: 15px;
  outline: medium none;
  -moz-outline-style: none;
  top: 9px;
  box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #adadad, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}
</style>
