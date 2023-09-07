'use strict';

const toDoList = {
    tasks:[
    { title: 'Помыть посуду',
      id: 1,
      priority: 1 }
    ],
    findIndexTask(id) {
        return this.tasks.findIndex(task => task.id === id);
    },
    addTask(title, id, priority) {
        const findTaskID = this.findIndexTask(id);
        if (findTaskID === -1) {
            this.tasks.push({ title, id, priority });
        } else {
            console.log(`Задача с ID ${id} уже создана`);
        };
    },
    removeTask(id) {
        const removeTaskIndex = this.findIndexTask(id);
         if (removeTaskIndex !== -1) {
             this.tasks.splice(removeTaskIndex, 1);
         } else {
             console.log(`Задача с ID ${id} не найдена`);
         };
         
    },
    updateNameOrPriorityForID(title, id, priority) {
        const findTaskID = this.findIndexTask(id);
        if (findTaskID !== -1) {
            this.tasks[findTaskID].title = title;
            this.tasks[findTaskID].priority = priority;
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

toDoList.addTask('Пропылесосить', 2, 2);
toDoList.addTask('Прочитать книгу', 3, 5);
toDoList.addTask('Купить продукты', 4, 3);
toDoList.tasks.forEach(task => {
    console.log(task)
});
console.log('');

toDoList.removeTask(2);
toDoList.tasks.forEach(task => {
    console.log(task)
});
console.log('');

toDoList.updateNameOrPriorityForID('Составить план на день', 4, 2);
toDoList.tasks.forEach(task => {
    console.log(task)
});
console.log('');

toDoList.sordByPriority();
toDoList.tasks.forEach(task => {
    console.log(task)
});

