const step1 = document.getElementsByClassName("step1");
const step2 = document.getElementsByClassName("step2");
const marker = document.getElementById("tickmarks").children[1];
const next = document.getElementById("next");
const cancel = document.getElementById("cancel");

Array.from(step2).forEach(el => el.style.display = "none")

change_page = function() {
  Array.from(step1).forEach(el => el.style.display = "none")
  Array.from(step2).forEach(el => el.style.display = "block")
  marker.className = "selected";
};

next.onclick = change_page;
cancel.onclick = change_page;

// COUNTDOWN

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function endFlipclock() {
  flipdown.epoch = flipdown.now + 60 * getRandomInt(4, 15);
}

let minutes = 1000 * 60 * getRandomInt(4, 15); // minutes in miliseconds 
let date = new Date(Date.now() + minutes);
let datetime = Math.floor(date.getTime()/1000);

let flipdown = new FlipDown(datetime, {
    theme: "light"
  })
  .start()
  .ifEnded(endFlipclock);
