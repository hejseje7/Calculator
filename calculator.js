const intBtn = document.querySelectorAll('#intBtn');
const operaterBtn = document.querySelectorAll('#operater');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const screen = document.querySelector('.screen');
let currentNumber = "";
let secNumber = "";
let operater = "";
let result = "";

function btnPress() {
  if (operater == "") {
    currentNumber+=this.textContent;
    screen.textContent = currentNumber;
  }
  else if (result == "") {
    secNumber += this.textContent;
    screen.textContent += this.textContent;
  }
  else if (result !== "") {
    screen.textContent = "";
    currentNumber = "";
    secNumber = "";
    operater = "";
    result = "";
    currentNumber+=this.textContent;
    screen.textContent = currentNumber;
  }
}

function operaterPress() {
  if (currentNumber == "") {
    return;
  }
  else if (result !== "") {
    currentNumber = result.toString();
    result = "";
    secNumber = "";
    operater = this.textContent;
    screen.textContent = "";
    screen.textContent = currentNumber + " " + this.textContent + " ";
  }
  else {
    operater = this.textContent;
    screen.textContent = "";
    screen.textContent = currentNumber + " " + this.textContent + " ";
  }
}

function operate() {
  if (operater == "/") {
    result = parseFloat(currentNumber) / parseFloat(secNumber);
    screen.textContent += " = " + result;
  }
  else if (operater == "x") {
    result = parseFloat(currentNumber) * parseFloat(secNumber);
    screen.textContent += " = " + result;
  }
  else if (operater == "-") {
    result = parseFloat(currentNumber) - parseFloat(secNumber);
    screen.textContent += " = " + result;
  }
  else if (operater == "+") {
    result = parseFloat(currentNumber) + parseFloat(secNumber);
    screen.textContent += " = " + result;
  }
}

function clear() {
  screen.textContent="";
  currentNumber = "";
  result = "";
  secNumber = "";
  operater = "";
}

function deletef() {
  let equalInString = ""
  for (let i=0; i < screen.textContent.length; i++) {
    if (screen.textContent[i] == "=") {
      equalInString = "=";
    }
    else {
    }
  }
  if (screen.textContent[screen.textContent.length - 1]==" ") {
    screen.textContent = screen.textContent.slice(0, -3);
  }
  else if (equalInString == "=") {
    return;
  }
  else if (secNumber == "") {
    console.log(currentNumber);
    screen.textContent = screen.textContent.slice(0, -1);
    currentNumber = currentNumber.slice(0, -1);
    console.log(currentNumber);
  }
  else {
    console.log(secNumber);
    screen.textContent = screen.textContent.slice(0, -1);
    secNumber = secNumber.slice(0, -1);
    console.log(secNumber);
  }
}

for (let i = 0; i < intBtn.length; i++) {
  intBtn[i].addEventListener('click', btnPress);
};

for (let i = 0; i < operaterBtn.length; i++) {
  operaterBtn[i].addEventListener('click', operaterPress);
}; 

equalBtn.addEventListener('click', operate)

clearBtn.addEventListener('click', clear)

deleteBtn.addEventListener('click', deletef)


