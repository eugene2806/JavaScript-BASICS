'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

/* Page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar') 
    },
    content: {
        daysContainer: document.getElementById('days'),
        nextDay: document.querySelector('.habbit__day')
    }
}

/* Utils */
function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);
    if(Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* Render */
function rerenderMenu(activeHabbit) {
    if(!activeHabbit) {
        return;
    }
    for(const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            //create
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id));
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
            if (activeHabbit.id === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }
        //Find and set active class
        if(activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function renderHead(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    page.header.h1.innerText = activeHabbit.name;
    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPercent.innerText = (`${progress.toFixed(0)}%`);    
    page.header.progressCoverBar.setAttribute('style', `width:${progress}%`);
}

function renderContent(activeHabbit) {
    page.content.daysContainer.innerHTML = '';
    activeHabbit.days.forEach((day, index) =>{
        const Day = document.createElement('div');
        Day.classList.add('habbit')
        Day.innerHTML = `
        <div class="habbit__day">День ${index+1}</div>
        <div class="habbit__comment">${day.comment}</div>
        <button class="habbit__delete"><img src="./images/delete.svg" alt=""></button>`
        page.content.daysContainer.appendChild(Day);
        
    });
    page.content.nextDay.innerText = `День ${activeHabbit.days.length+1}`;
}

function rerender(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    if(!activeHabbit) {
        return;
    }
    rerenderMenu(activeHabbit);
    renderHead(activeHabbit);
    renderContent(activeHabbit);
}
/* Init */
(() => {
    loadData();
    rerender(habbits[0].id);
})();