'use strict';

const textPanel = document.querySelector('.panel_text_hidden');

document.querySelectorAll('.input').forEach(el => {
    el.addEventListener('click', () => {
        textPanel.classList.remove('panel_text_active');
        textPanel.innerText = '';
    });
});

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

document.querySelector('.buttons').addEventListener('click', event => {
    if(event.target.className === 'button') {
        switch(event.target.id) {
            case 'addition': calculation(addition);
                break;
            case 'subtraction': calculation(subtraction);
                break;
            case 'multiply': calculation(multiply);
                break;
            case 'divide': calculation(divide);
                break;
            case 'equal': equal();
                break;
            default: console.log('Что-то пошло не так');
        }
    }
});

function calculation(fn) {
    const a = Number(document.querySelector('.input_1').value);
    const b = Number(document.querySelector('.input_2').value);
    if(a && b) {
        textPanel.innerText =  (fn(a, b)).toFixed(6);
    }
    return;
}

function equal() {
    document.querySelector('.input_1').value = '';
    document.querySelector('.input_2').value = '';
    textPanel.classList.add('panel_text_active');
}
