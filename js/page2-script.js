const body = document.getElementsByTagName("body")[0];
const myModal = document.getElementById("myModal");

console.log(myModal);

body.addEventListener('mouseleave', e => {
  myModal.style.display = "block";  
});

myModal.onclick = function() {
  myModal.style.display = "none"
}