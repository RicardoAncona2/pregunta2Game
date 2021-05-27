<template>
  <div>
    <button class="button is-link" @click="reload()">JUGAR DE NUEVO</button>

    <button class="button is-link" @click="redirect()">
      REGRESAR AL INICIO
    </button>
  </div>
</template>



<script>
export default {
  methods: {
    redirect() {
      window.location.href ="https://galaxtivo.online/"
    },
    reload(){
         window.location.reload();
    }
  },
};
</script>


<style scoped>
.button {
  margin-left: auto;
  margin-right: 5%;
}
</style>