'use strict';

const progEl = document.querySelector(".prog");
const questionNumberEl = document.querySelector(".questionnumber");
const wordEl = document.querySelector(".word");
const userInputEl = document.querySelector("input");
const btn = document.querySelector("button");

const questions = JSON.parse(localStorage["allWords"]);
const availableQuestions = [...questions];
console.log(questions, availableQuestions);

let currentQuestionNumber = 0;
let correctAnswer;
const questionsQuantity = questions.length;
let score = 0;
let percent = 0;

const generateQuestion = function(x){
    const [word, answer] = x;
    progEl.style.width = `${currentQuestionNumber/questionsQuantity*100}%`;
    questionNumberEl.textContent = currentQuestionNumber;
    wordEl.textContent = word;
    correctAnswer = answer;
}

const newQuestion = function(){
    userInputEl.value = "";
    const currentQuestion = availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
    currentQuestionNumber++;
    availableQuestions.pop(availableQuestions.indexOf(currentQuestion));
    generateQuestion(currentQuestion);

}

newQuestion();

btn.addEventListener("click", function(){
    userInputEl.value === correctAnswer && score++;
    localStorage["score"] = JSON.stringify(score);
    console.log(score, localStorage["score"]);
    localStorage["percent"] = localStorage["percent"] < score/questionsQuantity*100 ? score/questionsQuantity*100 : localStorage["percent"];
    availableQuestions.length === 0 && window.location.assign("../../index.html");
    userInputEl.value && newQuestion();
});