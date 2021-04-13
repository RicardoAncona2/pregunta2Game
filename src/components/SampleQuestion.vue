<template>
  <div>
    <vue-countdown
      :time="1 * 1 * 1 * seconds * 1000"
      v-slot="{ seconds }"
      :key="contador"
      class="title is-3 has-text-centered"
    >
      Tiempo Restante: {{ seconds }} segundos.
    </vue-countdown>
    <h1 v-if="seconds == 0">TIEMPO AGOTADO {{ seconds }}</h1>
    <div v-for="(element, index) in questionslist" v-bind:key="index">
      <div v-show="index == contador">
        <div
          class="is-family-sans-serif 
            has-text-centered 
            has-text-weight-bold 
            card
            notification is-primary
            "
          allow="autoplay"
        >
          <strong>{{ element.pregunta }}</strong
          ><br />
          <img :src="element.imgPath" style="width:330px;height:190px;" />
        </div>
        <div class="columns">
          <div class="column is-half ">
            <button
              class="button is-info is-large is-fullwidth is-rounded btn3d"
              @click="answerQuestion(element.opcionA, element.correcta)"
            >
              <h1>A) {{ element.opcionA }}</h1>
            </button>
          </div>
          <div class="column  is-half" style="background-color:#red;">
            <button
              class="button is-success is-large is-fullwidth is-rounded btn3d"
              @click="answerQuestion(element.opcionB, element.correcta)"
            >
              <h1>B) {{ element.opcionB }}</h1>
            </button>
          </div>
        </div>
        <br />
        <div class="columns">
          <div class="column is-half">
            <button
              class="button is-warning is-large is-fullwidth is-rounded btn3d"
              @click="answerQuestion(element.opcionC, element.correcta)"
            >
              <h1>C) {{ element.opcionC }}</h1>
            </button>
          </div>

          <div class="column is-half">
            <button
              class="button is-danger is-large is-fullwidth is-rounded btn3d"
              @click="answerQuestion(element.opcionD, element.correcta)"
            >
              <h1>D) {{ element.opcionD }}</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import music from "./tools/Music";
import questions from "./tools/Questions";
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  components: {
    VueCountdown,
  },
  data() {
    return {
      questionslist: [],
      rightAnswer: "Felicidades, respuesta correcta!",
      wrongAnswer: "Oops parece que te equivocaste",
      contador: 0,
      seconds: 15,
      defaultKey: "defaultkey",
      aciertos:0
    };
  },
  props: ["wheel"],
  mounted() {
    music.manageHomeMusic("pause");
    music.manageQuestionMusic("play");

    if (this.wheel.winner == "Matematicas") {
      this.questionslist = questions.Matematicas;
    }
    if (this.wheel.winner == "Geografia") {
      this.questionslist = questions.Geografia;
    }
    if (this.wheel.winner == "Historia") {
      this.questionslist = questions.Geografia;
    }
    if (this.wheel.winner == "Sociales") {
      this.questionslist = questions.Sociales;
    }
    this.countMillis();
  },
  methods: {
    answerQuestion(answer, correct) {
      let message = "";
      let imgUrl = "";
      let validated = this.validateAnswer(answer, correct);
      if (validated) {
        message = this.rightAnswer;
        imgUrl =
          "https://definicion.de/wp-content/uploads/2017/01/Correcto.jpg";
          this.aciertos+=1;
          alert(this.aciertos)
      } else {
        message = this.wrongAnswer;
        imgUrl =
          "https://3.bp.blogspot.com/-aIAdKmDpOyc/XoD0z0nbtoI/AAAAAAAAC8s/SLLrCUKWkb0rm--B7K-5ZBsiHw87x_29ACNcBGAsYHQ/s280/incorrecto.png";
      }

      Swal.fire({
        title: message,
        text: "Siguiente pregunta ",
        imageUrl: imgUrl,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Siguiente pregunta",
        allowOutsideClick: false,
        timeOut: "",
      }).then(() => {
        for (let i = 0; i < this.questionslist.length; i++) {
          if (i != this.questionslist.length - 1) {
            this.questionslist[i] = this.questionslist[i + 1];
          }
        }
        this.seconds = 15;
        this.defaultKey = this.defaultKey + this.contador;
        this.contador++;
        clearTimeout(this.timeOut);
        this.countMillis();
      });
    },

    validateAnswer(answer, correcta) {
      if (answer == correcta) {
        return true;
      } else {
        return false;
      }
    },
    countMillis() {
      this.timeOut = setTimeout(
        () => this.answerQuestion("time over", "not answred"),
        this.seconds * 1000
      );
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
