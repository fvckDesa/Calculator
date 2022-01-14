const butt9 = document.querySelector('#num9');
const butt8 = document.querySelector('#num8');
const butt7 = document.querySelector('#num7');
const butt6 = document.querySelector('#num6');
const butt5 = document.querySelector('#num5');
const butt4 = document.querySelector('#num4');
const butt3 = document.querySelector('#num3');
const butt2 = document.querySelector('#num2');
const butt1 = document.querySelector('#num1');
const butt0 = document.querySelector('#num0');

const div = document.querySelector('#div');
const mol = document.querySelector('#mol');
const sot = document.querySelector('#sot');
const add = document.querySelector('#add');
const ugu = document.querySelector('#ugu');
const canc = document.querySelector('#can');

const display = document.getElementById('h1');

let testo = '';

function printDisplay(num) {
    testo += num;
    display.textContent = testo;
}

butt9.addEventListener('click', () => {
    printDisplay('9');
});
butt8.addEventListener('click', () => {
    printDisplay('8');
});
butt7.addEventListener('click', () => {
    printDisplay('7');
});
butt6.addEventListener('click', () => {
    printDisplay('6');
});
butt5.addEventListener('click', () => {
    printDisplay('5');
});
butt4.addEventListener('click', () => {
    printDisplay('4');
});
butt3.addEventListener('click', () => {
    printDisplay('3');
});
butt2.addEventListener('click', () => {
    printDisplay('2');
});
butt1.addEventListener('click', () => {
    printDisplay('1');
});
butt0.addEventListener('click', () => {
    printDisplay('0');
});


let arrNum1 = [];
let arrNum2 = [];

function cancella() {
    display.textContent = '0';
    testo = '';
    arrNum1 = [];
    arrNum2 = [];
}


function operazioni(simbolo) {
    
    let index = testo.indexOf(simbolo);
    for(let i = 0; i !== testo.length; i++) {
        if(i < index && testo[i] !== simbolo){
            arrNum1[i] = testo[i];
        }else if(testo[i] !== simbolo) {
            arrNum2[i] = testo[i];
        }
    }
    arrNum2.shift();
}

let sim;

div.addEventListener('click', () => {
    printDisplay('÷');
    sim = '÷';
});
mol.addEventListener('click', () => {
    printDisplay('x');
    sim = 'x';
});
sot.addEventListener('click', () => {
    printDisplay('-');
    sim = '-';
});
add.addEventListener('click', () => {
    printDisplay('+');
    sim = '+';
});


ugu.addEventListener('click', () => {
    
    let totale;
    let num1;
    let num2;

    switch (sim) {
        case '÷':
            operazioni('÷');
            num1 = Number(arrNum1.join(''));
            num2 = Number(arrNum2.join(''));
            totale = num1 / num2;
            break;
        case 'x':
            operazioni('x');
            num1 = Number(arrNum1.join(''));
            num2 = Number(arrNum2.join(''));
            totale = num1 * num2;
            break;
        case '-':
            operazioni('-');
            num1 = Number(arrNum1.join(''));
            num2 = Number(arrNum2.join(''));
            totale = num1 - num2;
            break;
        
        case '+':
            operazioni('+');
            num1 = Number(arrNum1.join(''));
            num2 = Number(arrNum2.join(''));
            totale = num1 + num2;
            break;
    }
    
    cancella();

    display.textContent = totale;

})

canc.addEventListener('click', () => {
    cancella();
});


////////////

const spawn = document.getElementById('spawn');

spawn.addEventListener('click', () => {
    document.body.children[1].classList.toggle('hidden');
});


