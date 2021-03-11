<template>
  <div>
    <div
      class="is-family-sans-serif 
            has-text-centered 
            has-text-weight-bold 
            card
            notification is-primary
            "
    >
      <strong>¿Cuantas vidas tiene un gato?</strong><br />
      <img
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg"
        style="width:330px;height:190px;"
      />
    </div>
    <div class="columns">
      <div class="card cardGreen column is-half ">
        <h1>A) 4 Vidas</h1>
      </div>
      <div class="card cardRed column  is-half" style="background-color:#red;">
        <h1>B) 1 Vida</h1>
      </div>

    </div>
    <br>
          <div class="columns">
        <div class="card cardBlue column is-half">
          <h1>C) 3 Vidas</h1>
        </div>

        <div class="card cardYellow column is-half">
          <h1>D) 7 Vidas</h1>
        </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cardGreen {
    background-color: #26890C;
}
.cardRed {
    background-color: #E21B3C;
}
.cardBlue {
    background-color: #1368CE;
}
.cardYellow {
    background-color: #D89E00;
}

</style>
