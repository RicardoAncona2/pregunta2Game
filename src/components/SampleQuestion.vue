<template>
  <div>
    <div v-if="questionslist.length == contador">
      <you-won v-if="winner" :aciertos="aciertos"></you-won>
      <you-lost v-else :aciertos="aciertos"></you-lost>
    </div>
    <div v-else>
      <vue-countdown
        :time="1 * 1 * 1 * seconds * 1000"
        v-slot="{ seconds }"
        :key="contador"
        v-show="showTimer"
        ><h1 class="title is-3 has-text-centered">
          Tiempo Restante: {{ seconds }} segundos.
        </h1>
      </vue-countdown>
      <br />
      <div v-for="(element, index) in questionslist" v-bind:key="index">
        <div v-show="index == contador">
          <div
            class="is-family-sans-serif has-text-centered has-text-weight-bold card notification is-primary"
            allow="autoplay"
          >
            <h3 class="title is-3 has-text-centered">
              {{ element.pregunta }}
            </h3>
  
  
            <img
              :src="require(`${element.imgPath}`)"
              style="width: 330px; height: 190px"
            />
          </div>
          <div class="columns">
            <div class="column is-half">
              <button
                class="button is-info is-large is-fullwidth is-rounded btn3d"
                @click="answerQuestion(element.opcionA, element.correcta)"
              >
                <h3 class="fontTitle">A) {{ element.opcionA }}</h3>
              </button>
            </div>
            <div class="column is-half" style="background-color: #red">
              <button
                class="button is-success is-large is-fullwidth is-rounded btn3d"
                @click="answerQuestion(element.opcionB, element.correcta)"
              >
                <h3 class="fontTitle">B) {{ element.opcionB }}</h3>
              </button>
            </div>
          </div>
          <br />
          <div class="columns">
            <div class="column is-half" v-if="element.opcionC">
              <button
                class="button is-warning is-large is-fullwidth is-rounded btn3d"
                @click="answerQuestion(element.opcionC, element.correcta)"
              >
                <h3 class="fontTitle">C) {{ element.opcionC }}</h3>
              </button>
            </div>

            <div class="column is-half" v-if="element.opcionD">
              <button
                class="button is-danger is-large is-fullwidth is-rounded btn3d"
                @click="answerQuestion(element.opcionD, element.correcta)"
              >
                <h3 v-if="element.opcionD" class="fontTitle">
                  D) {{ element.opcionD }}
                </h3>
              </button>
            </div>
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
import YouLost from "./YouLost";
import YouWon from "./YouWon";
export default {
  components: {
    VueCountdown,
    YouWon,
    YouLost,
  },
  data() {
    return {
      questionslist: [],
      rightAnswer: "Felicidades, respuesta correcta!",
      wrongAnswer: "Oops parece que te equivocaste",
      contador: 0,
      seconds: 15,
      defaultKey: "defaultkey",
      aciertos: 0,
      winner: false,
      showTimer: true,
    };
  },
  props: ["wheel"],
  mounted() {
    music.manageHomeMusic("pause");
    music.manageQuestionMusic("play");

    if (this.wheel.winner == "Diseño Grafico") {
      this.questionslist = questions.DisenoGrafico;
    }
    if (this.wheel.winner == "Fotografia") {
      this.questionslist = questions.Fotografia;
    }
    if (this.wheel.winner == "Arte") {
      this.questionslist = questions.Arte;
    }
    if (this.wheel.winner == "Mix") {
      this.questionslist = questions.Mix;
    }
    this.startTimer();
  },
  methods: {
    answerQuestion(answer, correct) {
      this.showTimer = false;
      this.stopTimer();
      let message = "";
      let imgUrl = "";
      let validated = this.validateAnswer(answer, correct);
      if (validated) {
        message = this.rightAnswer;
        imgUrl =
          "https://definicion.de/wp-content/uploads/2017/01/Correcto.jpg";
        this.aciertos += 1;
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
        this.showTimer = true;
        this.seconds = 15;
        this.defaultKey = this.defaultKey + this.contador; //redfine key to re-render countDown
        this.contador++;
        if (this.contador == this.questionslist.length) {
          music.manageQuestionMusic("pause");
          if (this.aciertos > 6) {
            this.winner = true;
          } else {
            this.winner = false;
          }
        } else {
          this.startTimer();
        }
      });
    },

    validateAnswer(answer, correcta) {
      if (answer == correcta) {
        return true;
      } else {
        return false;
      }
    },
    startTimer() {
      this.timeOut = setTimeout(
        () => this.answerQuestion("time over", "not answred"),
        this.seconds * 1000
      );
    },
    stopTimer() {
      clearTimeout(this.timeOut);
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
.fontTitle {
  font-size: 79%;
}
</style>
