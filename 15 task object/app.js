'use strict';

const toDoList = {
    tasks:[
    { title: 'Помыть посуду',
      priority: 1,
      id: 1 },
    ],
   
    addTask(task) {
        this.tasks.push(task);
        // const findTaskID = this.tasks.findIndex(task => task.id === id);
        // if (findTaskID === -1) {
        //     this.tasks.push({ title, id, priority });
        // } else {
        //     console.log(`Задача с ID ${id} уже создана`);
        // };
    },
    removeTask(id) {
        const removeTaskIndex = this.tasks.findIndex(task => task.id === id);
         if (removeTaskIndex !== -1) {
             this.tasks.splice(removeTaskIndex, 1);
         } else {
             console.log(`Задача с ID ${id} не найдена`);
         };
         
    },
    updateTask(id, updatedTask) {
        const findTaskID = this.tasks.findIndex(task => task.id === id);
        if (findTaskID !== -1) {
            this.tasks[findTaskID] = {...updatedTask, id};
        } else {
            console.log(`Задача с ID ${id} не найдена`);
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
    id: toDoList.tasks.length + 1
});
toDoList.addTask({
    title: 'Прочитать книгу',
    priority: 5,
    id: toDoList.tasks.length + 1
});
toDoList.addTask({
    title: 'Пропылесосить',
    priority: 4,
    id: toDoList.tasks.length + 1
});
console.log(toDoList.tasks);
toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('');

toDoList.removeTask(2);
console.log(toDoList.tasks);
toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('');

toDoList.updateTask(3, {title: 'Составить план на день', priority: 8});
console.log(toDoList.tasks);
toDoList.tasks.forEach(task => {
    console.log(task);
});
console.log('');

toDoList.sordByPriority();
console.log(toDoList.tasks);
toDoList.tasks.forEach(task => {
    console.log(task);
});


