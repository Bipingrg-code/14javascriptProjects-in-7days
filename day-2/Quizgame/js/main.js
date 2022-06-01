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

var questionCount = 0;

const loadQuiz = () => {
  quizDb.map((questList) => {
    questionCount = questList;
    questions.innerText = questionCount.question;
    answer1.innerText = questionCount.a;
    answer2.innerText = questionCount.b;
    answer3.innerText = questionCount.c;
    answer4.innerText = questionCount.d;
  });
};

loadQuiz();
