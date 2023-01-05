const quizDb = [
  {
    question: "What is the full form of Html.?",
    a: "Hyper text markup language",
    b: "Hyper text transfor making language",
    c: "Hyper text making length",
    d: "None of them",
    corretAns: "ans1",
  },
  {
    question: "CEO of googl.?",
    a: "MarkZuker Burg",
    b: "Bill gates",
    c: "Sunder Pichai",
    d: "ELon Musk",
    corretAns: "ans3",
  },
  {
    question: "Php framwork.?",
    a: "Django",
    b: "React",
    c: "Node",
    d: "Laravel",
    corretAns: "ans4",
  },
  {
    question: "Founder of Facebook.?",
    a: "Elon musk",
    b: "Bill gates",
    c: "Jack Maa",
    d: "Markzuker Burg",
    corretAns: "ans4",
  },
  {
    question: "Populer programming language in 2021.?",
    a: "Javascript",
    b: "Python",
    c: "C++",
    d: "Php",
    corretAns: "ans2",
  },
];
//grab the value
const questions = document.querySelector(".questions");
const answer1 = document.querySelector("#option1");
const answer2 = document.querySelector("#option2");
const answer3 = document.querySelector("#option3");
const answer4 = document.querySelector("#option4");
const button = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

var questionCount = 0;
var score = 0;
/*const loadQuiz = () => {
  quizDb.map((questList) => {
    questionCount = questList;
    questions.innerText = questionCount.question;
    answer1.innerText = questionCount.a;
    answer2.innerText = questionCount.b;
    answer3.innerText = questionCount.c;
    answer4.innerText = questionCount.d;
  });
};*/

const loadQuiz = () => {
  const questionList = quizDb[questionCount];
  questions.textContent = questionList.question;
  answer1.textContent = questionList.a;
  answer2.textContent = questionList.b;
  answer3.textContent = questionList.c;
  answer4.textContent = questionList.d;
};

loadQuiz();

//cheacking radio button
const getCheckAns = () => {
  let ans;
  answers.forEach((currentAnsElement) => {
    if (currentAnsElement.checked) {
      ans = currentAnsElement.id;
    }
  });
  return ans;
};
//deSelect the input section
const deSelectAll = () => {
  answers.forEach((currentEle) => {
    return (currentEle.checked = false);
  });
};

button.addEventListener("click", () => {
  const checkedAns = getCheckAns();
  console.log(getCheckAns());
  //answer checking
  if (checkedAns === quizDb[questionCount].corretAns) {
    score++;
  }
  questionCount++;
  //deselecting auto input
  deSelectAll();
  if (questionCount < quizDb.length) {
    loadQuiz();
  } else {
    showScore.innerHTML = `
      <h3>You scored  &#129419;${score}/${quizDb.length}&#129419;</h3>
      <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove("scoreArea");
  }
});
