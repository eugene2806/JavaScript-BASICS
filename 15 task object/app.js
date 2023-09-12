'use strict';

const toDoList = {
    tasks:[
    { title: 'Помыть посуду',
      priority: 1,
      id: 1 },
    ],
    lastId: 1,
   
    addTask(task) {
        task = {...task, id: this.lastId+1};
        this.tasks.push(task);
        this.lastId = this.lastId + 1;
        
    },
    removeTask(id) {
        const removeTaskIndex = this.tasks.findIndex(task => task.id === id);
         if (removeTaskIndex !== -1) {
             this.tasks.splice(removeTaskIndex, 1);
         } else {
             console.log(`Задача с ID ${id} не найдена`);
         };
         
    },
    updateTask(updatedTask) {
        const findTaskID = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (findTaskID !== -1) {
            this.tasks[findTaskID] = {...this.tasks[findTaskID], ...updatedTask};
        } else {
            console.log(`Задача с ID ${updatedTask.id} не найдена`);
        };
    },
    sordByPriority(parameter = 'asc') {
        switch(parameter) {
            case 'asc': 
                this.tasks.sort((a, b) => a.priority - b.priority);
                break;
            case 'desc':
                this.tasks.sort((a, b) => b.priority - a.priority);
                break;
                default: console.log(`Параметр сортировки => ${parameter} задан не верно!`);
        };
    }
};


toDoList.addTask({
    title: 'Купить продукты',
    priority: 3,
    
});
toDoList.addTask({
    title: 'Прочитать книгу',
    priority: 5,
    
});
toDoList.addTask({
    title: 'Пропылесосить',
    priority: 4,
    
});

toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Добавление задач');

toDoList.removeTask(1);
toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Удаление задачи 1');

toDoList.updateTask({title: 'Составить план на день', priority: 3, id: 3});
toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Обновление задачи 3');

toDoList.sordByPriority();
toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Сортировка задач');
toDoList.addTask({
    title: 'Купить продукты',
    priority: 2,
   
});

toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('добавление задачи');

toDoList.addTask({
    title: 'Помыть машину',
    priority: 5,
    
});

toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Добавление задачи');


toDoList.removeTask(3);

toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Удаление задачи 3');

toDoList.addTask({
    title: 'Купить тетрадь',
    priority: 7,
    
});

toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('Добавление задачи');