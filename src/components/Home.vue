<template>
<div>
<h3 class="title is-3 has-text-centered">BIENVENIDO, DISFRUTA DEL JUEGO DE TRIVIA DEL MOMENTO!</h3>

<div class="buttons are-medium">
  <button class="button is-link">JUGAR!</button>
</div>
    <br>
<!-- before using this component import it in app.vue, just like SpinWheel component--></div>
 
</template>

<script>
export default {
    name: 'Home',

    play(){
      this.playBackgroundM()

    },
    methods:{
      playBackgroundM(){
        console.log("MusicFondo")
        const audio = new Audio(require('../assets/background.mp3'))
        audio.play
      }
    }

}
</script>

<style scoped>
.button {
margin-left: auto;
margin-right: auto;
}



</style>