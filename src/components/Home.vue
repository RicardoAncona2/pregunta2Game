<template>
<div>
  <div id="title">
<h3 class="title is-3 has-text-centered">¡BIENVENIDO, DISFRUTA DEL JUEGO DE TRIVIA DEL MOMENTO!</h3>
  </div>
    <br>
<div class="buttons are-medium">
  <button class="button is-link" @click="wheel.active=true,home.active=false">JUGAR!</button>
</div>
    <br>
<!-- before using this component import it in app.vue, just like SpinWheel component--></div>
 
</template>

<script>
import music from './tools/Music'
export default {
    name: 'Home',
    props: ["wheel","home"],
    mounted(){
      music.manageHomeMusic('play')

    },

}
</script>

<style scoped>
.button {
margin-left: auto;
margin-right: auto;
}

h3.title {
  font-family: Avenir, Arial, sans-serif;
  color: white
}


</style>