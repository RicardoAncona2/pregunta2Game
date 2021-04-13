<template>
  <div>
    <div id="title">
      <h3 class="title is-3 has-text-centered">
        ¡HAS PERDIDO!</h3> 
        <figure  width="168" height="168">
          <img src="../assets/gameOver.png" />
        </figure>

        <h3 class="title is-3 has-text-centered">
        TU PUNTAJE ES: {{ aciertos }}
      </h3>
  </div>
  </div>
</template>

<script>
export default {
  props: ["aciertos"],
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
</style>
