'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbit;

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
    },
    popup: {
        index: document.getElementById('add-habbit_popup'),
        iconField: document.querySelector('.popup__form input[name="icon"]')
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
            existed.innerHTML =
                `<img src = "./images/${habbit.icon}.svg" alt = "${habbit.name}"/>
                <div class="menu__item-close" onclick="removeHabbit()"><img src="./images/delete.svg" alt=""></div>`;
        } else {
            existed.classList.remove('menu__item_active');
            existed.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
        }
    }
}

function renderHead(activeHabbit) {
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
        <div day-id="${index}" class="habbit__day">День ${index+1}</div>
        <div class="habbit__comment">${day.comment}</div>
        <button class="habbit__delete" onclick="removeDays(${index})"><img src="./images/delete.svg" alt=""></button>`
        page.content.daysContainer.appendChild(Day);
        
    });
    page.content.nextDay.innerText = `День ${activeHabbit.days.length+1}`;
}

function rerender(activeHabbitId) {
    globalActiveHabbit = activeHabbitId;
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    if(!activeHabbit) {
        return;
    }
    rerenderMenu(activeHabbit);
    renderHead(activeHabbit);
    renderContent(activeHabbit);
}

/* Work width days*/
function addDays(event) {
    event.preventDefault();
    const res = validationForm(event.target);
    habbits = habbits.map(habbit => {
        if(habbit.id === globalActiveHabbit) {
            return {
                ...habbit,
                days:habbit.days.concat([{comment: res.comment}])
            }
        }
        return habbit;
    })
    
    rerender(globalActiveHabbit);
    saveData();
    resetForm(event.target);
}

function removeDays(index) {
    habbits = habbits.map(habbit => {
        if(habbit.id === globalActiveHabbit) {
            habbit.days.splice(index, 1);
            return {
                ...habbit,
                days: habbit.days
            }
        }
        return habbit;
    });
    rerender(globalActiveHabbit);
    saveData();
}

function removeHabbit() {
    const removeId = Number(document.querySelector('.menu__item_active').getAttribute('menu-habbit-id'));
    const removeIndex = habbits.findIndex(el => el.id === removeId);
    if(removeIndex === -1) {
        return;
    }
    habbits.splice(removeIndex, 1);
    console.log(habbits);
    document.querySelector('.menu__list').innerHTML = '';
    saveData();
    console.log(habbits.length)
    if(habbits.length !== 0) {
        rerender(habbits[0].id);
    } else {
        rerender(0);
    }
    
}

// function togglePopup() {
//     const hidden = document.querySelector('.cover_hidden');
//     if(!hidden) {
//         document.querySelector('.cover').classList.add('cover_hidden');
//     } else {
//         document.querySelector('.cover').classList.remove('cover_hidden');
//     }
// }

function togglePopup() {
    if (page.popup.index.classList.contains('cover_hidden')) {
        page.popup.index.classList.remove('cover_hidden');
        const context = document.querySelector('.icon');
        selectIcon(context, 'sport');
        page.popup.iconField.value = 'sport';
    } else {
        page.popup.index.classList.add('cover_hidden');
    }
}

function selectIcon(context, icon) {
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector('.icon.icon_active');
    activeIcon.classList.remove('icon_active'); 
    context.classList.add('icon_active');
}

function addHabbit(event) {
    event.preventDefault();
    const res = validationForm(event.target);
    if(!res) {
        return;
    }
    const maxId = habbits.reduce((acc, habbit) => { return acc > habbit.id ? acc : habbit.id }, 0)
    habbits.push({
        "id": maxId + 1,
        "icon": res.icon,
        "name": res.name,
        "target": Number(res.target),
        "days": []
    });
    saveData();
    resetForm(event.target);
    rerender(maxId + 1);
    togglePopup();
}

function validationForm(event) {
    const form = event
    let arrayfields = 
    [...form.querySelectorAll('input')].map(el => el.name);
    const data = new FormData(form);
    let res = {};
    for (const field of arrayfields) {
        const fieldElement = data.get(field)
        form[field].classList.remove('error');
        if (!fieldElement){
            form[field].classList.add('error');
        }
        res[field] = fieldElement;
    }
    let isValid = true;
    for(const field of arrayfields) {
        if(!res[field]) {
            isValid = false;
        }
    }
    if(!isValid) {
        return;
    }
    return res;
}

function resetForm(event) {
    const form = event
    let arrayfields =
        [...form.querySelectorAll('input')].map(el => el.name);
    for(const field of arrayfields) {
        form[field].value = '';
    }
}

/* Init */
(() => {
    loadData();
    if (habbits.length !== 0) {
        rerender(habbits[0].id);
    } else {
        rerender();
    }
    
    // rerender(habbits[0].id);
})();