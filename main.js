'use strict';

const addWordBtn = document.querySelector(".add");
const removeWordBtn = document.querySelector(".remove");

const wordsArr = [];

addWordBtn.addEventListener("click", function () {
    let addedWord = prompt("add word");
    addedWord = addedWord.split(" ")
    wordsArr.push(addedWord);
    console.log(wordsArr);
    localStorage["allWords"] = JSON.stringify([...wordsArr]);
    console.log(JSON.parse(localStorage["allWords"]));
});