console.log("js is work");

var modal = document.getElementById("myModal");
var garantBtn = document.getElementById("garant");
var closeBtn = document.getElementsByClassName("close")[0];

garantBtn.onclick = function () {
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
