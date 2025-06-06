const display = document.getElementById("display");
const buttons = document.querySelectorAll(".keys button");
const clear = document.getElementById("clear");
const calculate = document.getElementById("calculate");

buttons.forEach(button => {
  if (button.id !== "calculate" && button.id !== "clear") {
    button.addEventListener('click', function () {
      display.value += this.value;
    });
  }
});


clear.addEventListener('click', function () {
  display.value = "";
});

calculate.addEventListener('click', function () {
  display.value = eval(display.value);
})