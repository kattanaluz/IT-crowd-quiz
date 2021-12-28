async function makeGetRequest() {
  const response = await fetch(`http://localhost:3000/questions`, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

/* function getHTML () 
for(let i = 0; i <= 2; i++){
const question = document.querySelector("#question[i]");
const answer1 = document.querySelector("#q[i]-answer1");
const answer2 = document.querySelector("#q[i]-answer2");
const answer3 = document.querySelector("#q[i]-answer3");
const answer4 = document.querySelector("#q[i]-answer4");
} */
/* 
//GET QUESTION 1

const question1 = document.querySelector("#question1");
const q1Answer1 = document.querySelector("#q1-answer1");
const q1Answer2 = document.querySelector("#q1-answer2");
const q1Answer3 = document.querySelector("#q1-answer3");
const q1Answer4 = document.querySelector("#q1-answer4");
//GET QUESTION2
const question2 = document.querySelector("#question2");
const q2Answer1 = document.querySelector("#q2-answer1");
const q2Answer2 = document.querySelector("#q2-answer2");
const q2Answer3 = document.querySelector("#q2-answer3");
const q2Answer4 = document.querySelector("#q2-answer4");
//GET QUESTION 3
const question3 = document.querySelector("#question3");
const q2Answer1 = document.querySelector("#q3-answer1");
const q3Answer2 = document.querySelector("#q3-answer2");
const q3Answer3 = document.querySelector("#q3-answer3");
const q3Answer4 = document.querySelector("#q3-answer4");
//GET QUESTION 4
const question4 = document.querySelector("#question4");
const q4Answer1 = document.querySelector("#q4-answer1");
const q4Answer2 = document.querySelector("#q4-answer2");
const q4Answer3 = document.querySelector("#q4-answer3");
const q4Answer4 = document.querySelector("#q4-answer4");
//GET QUESTION 1
const question5 = document.querySelector("#question5");
const q5Answer1 = document.querySelector("#q5-answer1");
const q5Answer2 = document.querySelector("#q5-answer2");
const q5Answer3 = document.querySelector("#q5-answer3");
const q5Answer4 = document.querySelector("#q5-answer4");
//GET QUESTION2
const question6 = document.querySelector("#question6");
const q6Answer1 = document.querySelector("#q6-answer1");
const q6Answer2 = document.querySelector("#q6-answer2");
const q6Answer3 = document.querySelector("#q6-answer3");
const q6Answer4 = document.querySelector("#q6-answer4");
//GET QUESTION 3
const question7 = document.querySelector("#question7");
const q7Answer1 = document.querySelector("#q7-answer1");
const q7Answer2 = document.querySelector("#q7-answer2");
const q7Answer3 = document.querySelector("#q7-answer3");
const q7Answer4 = document.querySelector("#q7-answer4");
//GET QUESTION 4
const question8 = document.querySelector("#question8");
const q8Answer1 = document.querySelector("#q8-answer1");
const q8Answer2 = document.querySelector("#q8-answer2");
const q8Answer3 = document.querySelector("#q8-answer3");
const q8Answer4 = document.querySelector("#q8-answer4"); */
const button = document.querySelector("button");
const quizWrapper = document.querySelector(".quiz-wrapper");
const h1 = document.querySelector("h1");
/* const startGame = makeGetRequest(); */

button.addEventListener("click", async function (event) {
  event.preventDefault;
  button.style.display = "none";
  quizWrapper.style.display = "block";
  h1.style.fontWeight = 450;
  h1.style.fontSize = "40px";
  h1.style.textAlign = "center";
  h1.style.margin = "60px 0 0 0";

  const result = await makeGetRequest();

  for (let i = 0; i < 12; i++) {
    let question = document.querySelector(`#question${i + 1}`);
    let answer1 = document.querySelector(`#q${i + 1}-answer1`);
    let answer2 = document.querySelector(`#q${i + 1}-answer2`);
    let answer3 = document.querySelector(`#q${i + 1}-answer3`);
    let answer4 = document.querySelector(`#q${i + 1}-answer4`);
    question.innerHTML = result.content[i].question;
    answer1.innerHTML = result.content[i].answer1;
    answer2.innerHTML = result.content[i].answer2;
    answer3.innerHTML = result.content[i].answer3;
    answer4.innerHTML = result.content[i].answer4;
  }
});
