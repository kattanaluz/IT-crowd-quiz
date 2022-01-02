const button = document.querySelector("#start-button");
const quizWrapper = document.querySelector(".quiz-wrapper");
const h1 = document.querySelector("h1");
const checkAnswerButton = document.querySelector("#check-answer-button");
button.addEventListener("click", startGame);

async function startGame(event) {
  event.preventDefault;
  button.style.display = "none";
  quizWrapper.style.display = "block";
  h1.style.fontWeight = 800;
  h1.style.fontSize = "50px";
  h1.style.textAlign = "center";
  h1.style.margin = "60px 0 0 0";

  checkAnswerButton.style.display = "block";
  checkAnswerButton.style.fontFamily = "Orbitron";
  checkAnswerButton.style.fontWeight = "10px";
  checkAnswerButton.style.fontSize = "14px";
  checkAnswerButton.style.color = "#fb7800";
  checkAnswerButton.style.backgroundColor = "rgba(36, 36, 36, 0.850)";
  checkAnswerButton.style.padding = "10px 10px 10px 10px";
  checkAnswerButton.style.border = "0.1px solid #1f2821";
  checkAnswerButton.style.borderRadius = "5px";
  checkAnswerButton.style.margin = "5px 0px 5px 0px";
}

checkAnswerButton.addEventListener("click", result);

function result(event) {
  event.preventDefault;

  const quizScore = document.querySelector("#score");
  const score = getScore();
  changeColor();

  quizScore.innerHTML = `You have ${score} right answers`;
  quizScore.style.fontFamily = "Orbitron";
  quizScore.style.fontSize = "18px";
  quizScore.style.textAlign = "center";
  quizScore.style.color = "#f8b63b";
}

function getScore() {
  const input = document.querySelectorAll("input:checked");
  console.log(`Print of input 1: ${input}`);
  let score = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].defaultValue === "correct") {
      score++;
    }
  }
  console.log(`Print of score: ${score}`);
  return score;
}

function changeColor() {
  let input = document.querySelectorAll("input:checked");
  let label = document.querySelectorAll(`input:checked + label`);
  console.log(`Print of input 2: ${input}`);
  console.log(`Print of label: ${label}`);
  for (let i = 0; i < input.length; i++) {
    if (input[i].defaultValue === "correct") {
      label[i].style.backgroundColor = "#cff78b";
      label[i].style.color = "black";
    } else {
      label[i].style.backgroundColor = "#FC8E8E";
      label[i].style.color = "black";
    }
  }
}
