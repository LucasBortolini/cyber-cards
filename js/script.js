var step1 = document.getElementsByClassName("step1");
var step2 = document.getElementsByClassName("step2");
var marker = document.getElementById("tickmarks").children[1];
var next = document.getElementById("next");


Array.from(step2).forEach(el => el.style.display = "none")

next.onclick = function() {
  Array.from(step1).forEach(el => el.style.display = "none")
  Array.from(step2).forEach(el => el.style.display = "block")
  marker.className = "selected";
}