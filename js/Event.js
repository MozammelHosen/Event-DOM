function makeYello() {
  document.body.style.backgroundColor = "yellow";
}
const blues = document.getElementById("blueColor");
blues.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const greenBtn = document.getElementById("greenColor");
greenBtn.onclick = function () {
  document.body.style.backgroundColor = "green";
};
const purpleBtn = document.getElementById("purpleColor");
purpleBtn.addEventListener("click", purpleColor);

function purpleColor() {
  document.body.style.backgroundColor = "purple";
}
