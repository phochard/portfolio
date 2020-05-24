"use strict";

function revealContent1() {
    let hiddenContent = document.getElementById("hidden1");
    hiddenContent.classList.toggle("container--invisible");

}
let showContent1 = document.getElementById("button1");
showContent1.addEventListener("click", revealContent1);

function revealContent2() {
    let hiddenContent = document.getElementById("hidden2");
    hiddenContent.classList.toggle("container--invisible");

}
let showContent2 = document.getElementById("button2");
showContent2.addEventListener("click", revealContent2);



function revealContent3() {
    let hiddenContent = document.getElementById("hidden3");
    hiddenContent.classList.toggle("container--invisible");

}
let showContent3 = document.getElementById("button3");
showContent3.addEventListener("click", revealContent3);