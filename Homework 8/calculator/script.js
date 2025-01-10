let currentInput = "0";
let previousInput = "";
let operator = "";

function updateDisplay() {
  document.querySelector(".div1").textContent = currentInput;
}

document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    let value = this.textContent;

    let isNumber = "0123456789".indexOf(value) >= 0;
    let isDecimal = value === ".";
    let isOperator = "+-x÷".indexOf(value) >= 0;

    if (isNumber) {
      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    if (isDecimal) {
      if (!currentInput.includes(".")) {
        currentInput += value;
      }
    }

    if (isOperator) {
      previousInput = currentInput;
      operator = value;
      currentInput = "0";
    }
    if (value === "=") {
      calculateResult();
    }
    if (value === "C") {
      resetCalculator();
    }
    if (value === "←") {
      backspace();
    }
    updateDisplay();
  });
});

function calculateResult() {
  let result;
  if (operator === "+") {
    result = parseFloat(previousInput) + parseFloat(currentInput);
  } else if (operator === "-") {
    result = parseFloat(previousInput) - parseFloat(currentInput);
  } else if (operator === "x") {
    result = parseFloat(previousInput) * parseFloat(currentInput);
  } else if (operator === "÷") {
    result =
      parseFloat(currentInput) === 0
        ? "Error"
        : parseFloat(previousInput) / parseFloat(currentInput);
  }
  currentInput = result.toString();
  operator = "";
  previousInput = "";
}

function resetCalculator() {
  currentInput = "0";
  previousInput = "";
  operator = "0";
}

function backspace() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
}
