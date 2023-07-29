// define variables for html elements
const countdownEl = document.getElementById("countdown");
const leaderboardEl = document.getElementById("leaderboard");
const startBtnEl = document.getElementById("start-btn");
const startQuizEl = document.getElementById("start-quiz");
const questionEl = document.getElementById("question-section");
const listEl = document.getElementById("question-list");
const chooseAnswerEl = document.getElementById("possible-answers");
const endgameEl = document.getElementById("endgame");

// assemble test questions
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Holographic Test Makeup Linuguistics", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Trophy Mainframe Layout", correct: false },
      { text: "Honor Task Manifest Lament", correct: false },
    ],
  },
  {
    question: "What should HTML values always be enclosed in??",
    answers: [
      { text: "Quatation Marks", correct: true },
      { text: "Commas", correct: false },
      { text: "Parenthesis", correct: false },
      { text: "Curly Brackets", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change the color of a background?",
    answers: [
      { text: "backgroundColorChange", correct: false },
      { text: "bgColor", correct: false },
      { text: "Color", correct: false },
      { text: "background-color", correct: true },
    ],
  },
  {
    question:
      "Which of the below is the correct syntax to underline text in CSS??",
    answers: [
      { text: "text-decoration: underline", correct: true },
      { text: "text-decoration: bottomline", correct: false },
      { text: "text: underline", correct: false },
      { text: "underline-text-please", correct: false },
    ],
  },
  {
    question:
      "Which of the following functions of an Array object returns a string representing the array and its elements??",
    answers: [
      { text: "toJoin()", correct: false },
      { text: "sort()", correct: false },
      { text: "split()", correct: false },
      { text: "toString()", correct: true },
    ],
  },
  {
    question:
      "Which built-in method removes the last element from an array and returns that element?",
    answers: [
      { text: "split()", correct: false },
      { text: "getLast()", correct: false },
      { text: "pop()", correct: true },
      { text: "finalForm()", correct: false },
    ],
  },
];

// define time related variables for use in countdown function
let timeLimit = 90;
let timeCountDescend = true;

// create function for timer to set in a start game function
function countdownStart() {
  const countdownStart = setInterval(() => {
    if (timeCountDescend) {
      timeLimit--;
    }
    countdownEl.innerHTML = timeLimit;
    if (timeLimit <= 0) {
      clearInterval(countdownStart);
    }
  }, 1000);
}

let currentQuestionIndex = 0;

// create function to start the quiz
function quizStart() {
  countdownStart();
  startQuizEl.style.display = "none";
  questionEl.classList.remove("hide");
  questionArray(currentQuestionIndex);
}

startBtnEl.addEventListener("click", quizStart);

// create a function to get and set questions from questions array

function questionArray(questionSelection) {
  while (chooseAnswerEl.firstChild) {
    chooseAnswerEl.removeChild(chooseAnswerEl.firstChild);
  }
  listEl.id = questionSelection;
  listEl.innerText = questions[questionSelection].question;
  let questionCurrent = questions[questionSelection];
  questionCurrent.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("btn-lg");
    button.dataset.correct = answer.correct;
    // button.addEventListener('click', )
    listEl.appendChild(button);
  });
}
