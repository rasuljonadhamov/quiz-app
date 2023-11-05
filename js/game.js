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
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("choice-container");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;

    scoreText.innerHTML = `${score}`;
  });

  currentQuestionIndex < questions.length
    ? setTimeout(function () {
        handleNextQuestion();
      }, 2000)
    : startQuiz();
}

function resetHtml() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function showScore() {
  scoreText.innerHTML = `You scored ${score} out of ${questions.length}`;
}

function handleNextQuestion() {
  resetHtml();

  console.log("hello");
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

startQuiz();

// play.addEventListener("click", startQuiz());
