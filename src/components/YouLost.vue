<template>
  <div>
    <div id="title">
      <h3 class="title is-3 has-text-centered">¡HAS PERDIDO!</h3>
      <figure width="168" height="168">
        <img src="../assets/gameOver.png" />
      </figure>

      <h3 class="title is-3 has-text-centered">
        TU PUNTAJE ES: {{ aciertos }}
      </h3>
      <buttons></buttons>
    </div>
  </div>
</template>

<script>
import buttons from "./EndFooter";
export default {
  props: ["aciertos"],
  components: {
    buttons,
  },
};
</script>

<style scoped>
h3.title {
  font-family: Avenir, Arial, sans-serif;
  color: white;
}

figure.is-128x128 {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h3.title {
  color: white;
}
</style>
