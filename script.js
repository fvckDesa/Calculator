const btnsNumber = document.querySelectorAll(".number");

const btnsOperation = document.querySelectorAll(".operationSimbol");

const ugu = document.querySelector("#ugu");
const canc = document.querySelector("#can");
const back = document.querySelector("#back");

const point = document.querySelector("#point");

const displayOperation = document.getElementById("operation");
const displayNum = document.getElementById("num");

const list = document.querySelector('.list');
const arrow = document.querySelector('.arrow');
const trash = document.querySelector('.trash');

let operationString = "";

btnsNumber.forEach((btn) => {
  btn.param = btn.textContent;
  btn.addEventListener("click", print);
});

btnsOperation.forEach((btn) => {
  btn.param = btn.textContent;
  btn.addEventListener("click", print);
  btn.addEventListener('click', () => {
    if (!!operationString.match(/[^0-9 .]/g)) {
        btnsOperation.forEach((btn) => {
          btn.removeEventListener("click", print);
        });
      }
  });
});

function print(e) {
  operationString += e.target.param;
  displayNum.innerText = operationString;
}

ugu.addEventListener("click", resolve);

function resolve() {
  let num1, num2, resulte, simbol;
  let arround = 100_000_000;

  displayOperation.innerText = operationString;

  simbol = operationString[operationString.search(/[^0-9 .]/g)];

  let tempArr = operationString.split(/[^0-9 .]/g);

  num1 = +tempArr[0];
  num2 = +tempArr[1];

  switch (simbol) {
    case "+":
      resulte = (num1 + num2).toString();
      break;
    case "-":
      resulte = (num1 - num2).toString();
      break;
    case "x":
      resulte = (num1 * num2).toString();
      break;
    case "÷":
      resulte = (Math.floor((num1 / num2) * arround) / arround).toString();
      break;
    default:
      resulte = operationString;
  }

  const listElement = document.createElement('li');
  listElement.classList.add('list-element');
  listElement.innerText = `operation: ${operationString ? operationString : 0} 
  resulte: ${resulte ? resulte : 0}`;
  list.appendChild(listElement);

  clear(resulte);
}

canc.addEventListener("click", clear);

function clear(string = "0") {
  operationString = "";
  if (typeof string === "object") {
    displayNum.innerText = "0";
  } else {
    operationString = string;
    displayNum.innerText = operationString;
  }
  btnsOperation.forEach((btn) => {
    btn.addEventListener("click", print);
  });
}

back.addEventListener("click", () => {
  let shift = operationString.split("");
  shift.pop();
  operationString = shift.join("");
  displayNum.innerText = operationString === "" ? "0" : operationString;
});

point.addEventListener("click", () => {
  let tempArr = operationString.split(/[^0-9 .]/g);;
  if (!tempArr[0].includes(".") || !tempArr[1].includes(".")) {
    operationString === "" ? (operationString += "0.") : (operationString += ".");
    displayNum.innerText = operationString;
  }
});

arrow.addEventListener('click', () => {
  list.classList.toggle('expand');
  arrow.classList.toggle('move');
});

trash.addEventListener('click', () => {
  for(let i = list.children.length - 1; list.children.length > 1; i--){
    list.children[i].remove();
  }
});
