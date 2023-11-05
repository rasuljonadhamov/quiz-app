const questionEl = document.querySelector("#question");
// const play = document.querySelector("#play");
const choices = document.querySelectorAll(".choice-text");
const answerButton = document.querySelector("#game");
const scoreText = document.querySelector("#score");

let questions = [
  {
    question: "Ozbekiston Poytaxti ?",
    answers: [
      { text: "Toshkent", correct: true },
      { text: "Buhoro", correct: false },
      { text: "Andijon", correct: false },
      { text: "Namangan", correct: false },
    ],
  },
  {
    question: "Nechta viloyat bor ?",
    answers: [
      { text: "12 ta", correct: true },
      { text: "11 ta", correct: false },
      { text: "9 ta", correct: false },
      { text: "14 ta", correct: false },
    ],
  },
  {
    question: "Prizident Kim ?",
    answers: [
      { text: "Karimov", correct: false },
      { text: "Mirziyoyev", correct: true },
      { text: "Erdogan", correct: false },
      { text: "Bayden", correct: false },
    ],
  },
  {
    question: "Necta odam prezident boligan ozbekistonda ?",
    answers: [
      { text: "4 ta", correct: false },
      { text: "1 ta", correct: false },
      { text: "3 ta", correct: false },
      { text: "2 ta", correct: true },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("choice-container");
    answerButton.appendChild(button);
  });
}

function resetState() {
  //   while (answerButton.firstChild) {
  //     answerButton.removeChild(answerButton.firstChild);
  //   }
}

startQuiz();

// play.addEventListener("click", startQuiz());
