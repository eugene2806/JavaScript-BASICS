'use strict';

document.querySelectorAll('.input').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.panel_text_hidden').classList.remove('panel_text_active');
        document.querySelector('.panel_text_hidden').innerText = '';
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

function calculation(fn) {
    const a = Number(document.querySelector('.input_1').value);
    const b = Number(document.querySelector('.input_2').value);
    if(a && b) {
         document.querySelector('.panel_text_hidden').innerText =  fn(a, b);
    }
    return;
}

function equal() {
    document.querySelector('.input_1').value = '';
    document.querySelector('.input_2').value = '';
    document.querySelector('.panel_text_hidden').classList.add('panel_text_active');
}
