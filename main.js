"use strict";

const display = document.querySelector(".calculator__display");

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const pressedButton = button.textContent;

    if (display.textContent === "0") {
      display.textContent = pressedButton;
    } else {
      display.textContent += pressedButton;
    }
  });
});
