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

const button = document.querySelector("button");
const paragraph = document.querySelector("#question");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const quizWrapper = document.querySelector(".quiz-wrapper");
/* const startGame = makeGetRequest(); */

button.addEventListener("click", async function (event) {
  event.preventDefault;
  quizWrapper.style.display = "block";
  const result = await makeGetRequest();
  paragraph.innerHTML = result.content[0].question;
  answer1.innerHTML = result.content[0].answer1;
  answer2.innerHTML = result.content[0].answer2;
  answer3.innerHTML = result.content[0].answer3;
  answer4.innerHTML = result.content[0].answer4;
});
