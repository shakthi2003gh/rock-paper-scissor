let userPoints = 0,
  computerPoints = 0;
const options = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll("button");
const displayPoints = document.querySelectorAll("output");
const displayimage = document.querySelectorAll(".display img");
const displayDraw = document.querySelector(".display span");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const random = parseInt(Math.random() * options.length);
    const computerValue = options[random];
    const userValue = e.target.value;

    displayimage[0].src = `/assets/${userValue}.webp`;
    displayimage[0].alt = userValue;

    displayimage[1].src = `/assets/${computerValue}.webp`;
    displayimage[1].alt = computerValue;

    if (
      (userValue === options[0] && computerValue === options[2]) ||
      (userValue === options[2] && computerValue === options[1]) ||
      (userValue === options[1] && computerValue === options[0])
    ) {
      userPoints += 1;
      displayPoints[0].innerText = userPoints;
    }

    if (
      (computerValue === options[0] && userValue === options[2]) ||
      (computerValue === options[2] && userValue === options[1]) ||
      (computerValue === options[1] && userValue === options[0])
    ) {
      computerPoints += 1;
      displayPoints[1].innerText = computerPoints;
    }

    if (userValue === computerValue) {
      displayDraw.innerText = "Draw";

      setTimeout(() => {
        displayDraw.innerText = "VS";
      }, 500);
    }
  });
});
