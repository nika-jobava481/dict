'use strict';

const list = document.querySelector("ul");
const iterableArr = JSON.parse(localStorage["allWords"]);
const clearBtn = document.querySelector(".clear");

for (let i=0; i<iterableArr.length; i++) {
    const [q, a] = iterableArr[i];
    list.innerHTML += `<li>${q}: ${a}   <button class="del" data-index="${i}">del</button></li>`;
}

clearBtn.addEventListener("click", function(){
    localStorage["allWords"] = JSON.stringify([]);
});

const listItemsArr = document.querySelectorAll(".del");
for (let i = 0; i < listItemsArr.length; i++) {
    listItemsArr[i].addEventListener("click", function (){
        console.log(this, listItemsArr[Number(this.dataset.index)], Number(this.dataset.index), iterableArr);
        iterableArr.pop(Number(this.dataset.index));
        console.log(iterableArr);
        localStorage["allWords"] = JSON.stringify(iterableArr);
        list.innerHTML = "";
        for (let i=0; i<iterableArr.length; i++) {
            const [q, a] = iterableArr[i];
            list.innerHTML += `<li>${q}: ${a}   <button class="del" data-index="${i}">del</button></li>`;
        }
        window.location.reload();
    });
}