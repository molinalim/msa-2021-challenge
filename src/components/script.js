let Stars = document.getElementById("stars");
let Moon = document.getElementById("moon");
let Mountains_behind = document.getElementById("mountains_behind");
let Mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  Stars.style.left = value + "px";
});
