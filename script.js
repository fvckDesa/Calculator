const btnsNumber = document.querySelectorAll('.number');

const btnsOperation = document.querySelectorAll('.operationSimbol');

const ugu = document.querySelector("#ugu");
const canc = document.querySelector("#can");
const back = document.querySelector("#back");

const displayOperation = document.getElementById("operation");
const displayNum = document.getElementById("num");

let operationString = '';

btnsNumber.forEach(btn => {
    btn.param = btn.textContent;
    btn.addEventListener('click', print);
});

btnsOperation.forEach(btn => {
    btn.param = btn.textContent;
    btn.addEventListener('click', print);
});

function print(e) {
    if(checkThereIsOperator(operationString)){
        btnsOperation.forEach(btn => {
            btn.removeEventListener('click', print);
        });
    }
    operationString += e.target.param;
    displayNum.innerText = operationString;
}

function checkThereIsOperator(string) {
    return /[^0-9]/g.test(string);
}

ugu.addEventListener('click', resolve);

function resolve() {
    let num1, num2, resulte, simbol;

    displayOperation.innerText = operationString;

    simbol = operationString[operationString.search(/[^0-9]/g)];

    let tempArr = operationString.split(/[^0-9]/g);

    num1 = +tempArr[0];
    num2 = +tempArr[1];

    switch (simbol) {
        case '+':
            resulte = (num1 + num2).toString();
            break;
        case '-':
            resulte = (num1 - num2).toString();
        case 'x':
            resulte = (num1 * num2).toString();
            break;
        case '÷':
            resulte = (num1 / num2).toString();
            break;
        default:
            resulte = operationString;
    }
    clear(resulte);
}

canc.addEventListener('click', clear);

function clear(string = '0') {
    operationString = '';
    if(typeof string === 'object'){
        displayNum.innerText = '0';
    }else {
        operationString = string;
        displayNum.innerText = operationString;
    }
    btnsOperation.forEach(btn => {
        btn.addEventListener('click', print);
    });
}

back.addEventListener('click', () => {
    let shift = operationString.split('');
    shift.pop();
    operationString = shift.join('');
    displayNum.innerText = operationString === '' ? '0' : operationString;
});




