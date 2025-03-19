let body = document.getElementsByTagName("body")[0];
let colors = ["red", "blue", "green", "yellow", "black"];
let index = 0;
let intervalId = setInterval(function () {
  body.style.backgroundColor = colors[index];
  index++;
  if (index === colors.length) {
    clearInterval(intervalId);
  }
}, 3000); 