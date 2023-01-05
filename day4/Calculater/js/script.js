class Calculater {
  constructor(previouseOperandandTextElemenet, currentOperandandTetElement) {
    this.previouseOperandandTextElemenet = previouseOperandandTextElemenet;
    this.currentOperandandTetElement = currentOperandandTetElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previouseOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  choseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previouseOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previouseOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previouseOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previouseOperand = "";
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const intDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = parseFloat(stringNumber.split(".")[1]);

    let integerDisplay;
    if (isNaN(intDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = intDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currentOperandandTetElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );

    if (this.operation != null) {
      this.previouseOperandandTextElemenet.innerText = `${this.getDisplayNumber(
        this.previouseOperand
      )} ${this.operation}`;
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const dataClearButton = document.querySelector("[data-all-clear]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const previouseOperandandTextElemenet = document.querySelector(
  "[data-previouse-operand]"
);
const currentOperandandTetElement = document.querySelector(
  "[data-current-operand]"
);

const calculater = new Calculater(
  previouseOperandandTextElemenet,
  currentOperandandTetElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //console.log("hello");
    calculater.appendNumber(button.innerText);
    calculater.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //console.log('hello numbers');
    calculater.choseOperation(button.innerText);
    calculater.updateDisplay();
  });
});

equalsButtons.addEventListener("click", () => {
  calculater.compute();
  calculater.updateDisplay();
});

dataClearButton.addEventListener("click", () => {
  calculater.clear();
  calculater.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculater.delete();
  calculater.updateDisplay();
});
