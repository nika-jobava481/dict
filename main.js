'use strict';

const addWordBtn = document.querySelector(".add");
const removeWordBtn = document.querySelector(".remove");
const highscore = document.querySelector(".highscore");
localStorage["percent"] = localStorage["percent"] || 0;
highscore.textContent = `Highscore: ${localStorage["percent"]}%`

const wordsArr = [];
localStorage["allWords"] = localStorage["allWords"] ? localStorage["allWords"] : JSON.stringify([]); 

addWordBtn.addEventListener("click", function () {
    const test = JSON.parse(localStorage["allWords"]);
    let addedWord = prompt("add word");
    addedWord = addedWord.split(" ")
    wordsArr.push(addedWord);
    console.log(wordsArr);
    test.push(addedWord);
    localStorage["allWords"] = JSON.stringify(test);
});