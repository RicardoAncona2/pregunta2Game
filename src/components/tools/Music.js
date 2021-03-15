const homeAudio = new Audio(require("../../assets/background.mp3"));
const questionAudio = new Audio(require("../../assets/questionMusic.mp3"));
const wheelSound = new Audio(require("../../assets/wheelSound.wav"));
function manageHomeMusic(action) {
  if (action == "play") {
    homeAudio.play();
  } else if (action == "pause") {
    homeAudio.pause();
  }
}

function manageQuestionMusic(action) {
  if (action == "play") {
    questionAudio.play();
  } else if (action == "pause") {
    questionAudio.pause();
  }
}
function manageWheel(action) {
    if (action == "play") {
        wheelSound.play();
    } else if (action == "pause") {
        wheelSound.pause();
    }
  }
export default {
    manageHomeMusic,
    manageQuestionMusic,
    manageWheel
}