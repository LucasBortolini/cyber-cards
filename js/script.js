var step1 = document.getElementsByClassName("step1");
var step2 = document.getElementsByClassName("step2");
var marker = document.getElementById("tickmarks").children[1];
var next = document.getElementById("next");
var cancel = document.getElementById("cancel");

Array.from(step2).forEach(el => el.style.display = "none")

change_page = function() {
  Array.from(step1).forEach(el => el.style.display = "none")
  Array.from(step2).forEach(el => el.style.display = "block")
  marker.className = "selected";
};

next.onclick = change_page;
cancel.onclick = change_page;