'use strict';
const newTask = {
    tasks:[{
        name:'test',
        description:'Описание',
        order: 0,
        id: 1
    },
  ],
    lastId: 1,
};

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            priority: 1,
            id: 1
        },
    ],
    lastId: 1,

    addTask(task) {
        task = { ...task, id: this.lastId + 1 };
        this.tasks.push(task);
        this.lastId = this.lastId + 1;
        console.log(`Задача ${task.name} была добавлена`);
    },
    removeTask(id) {
        const removeTaskIndex = this.tasks.findIndex(task => task.id === id);
        if (removeTaskIndex !== -1) {
            console.log(`Задача ${this.tasks[removeTaskIndex].name} с ID ${id} была удалена`);
            this.tasks.splice(removeTaskIndex, 1);
            
        } else {
            console.log(`Задача с ID ${id} не найдена`);
        };

    },
    updateTask(updatedTask) {
        const findTaskID = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (findTaskID !== -1) {
            this.tasks[findTaskID] = { ...this.tasks[findTaskID], ...updatedTask };
        } else {
            console.log(`Задача с ID ${updatedTask.id} не найдена`);
        };
    },
    sordByPriority(parameter = 'asc') {
        switch (parameter) {
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

const addTask = toDoList.addTask;
const removeTask = toDoList.removeTask.bind(newTask);
const updatedTask = toDoList.updateTask.bind(newTask);
addTask.call(newTask, {
    name: 'test2',
    description: 'Описание2',
    order: 3
});

addTask.call(newTask, {
    name: 'test3',
    description: 'Описание5',
    order: 4
})

newTask.tasks.forEach(task => {
    console.log(task);
});

removeTask(2);
newTask.tasks.forEach(task => {
    console.log(task);
});
updatedTask({name: 'Задача', id: 3});
newTask.tasks.forEach(task => {
    console.log(task);
});