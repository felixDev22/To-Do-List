import './style.css';

const listItems = document.querySelector('.task-list');
const addTask = document.querySelector('#new-task');
const addBtn = document.getElementById('plus');
const deleteTask = document.querySelector('.trash');

let taskArr = [];

const addNewList = () => {
  const task = {};
  task.index = taskArr.length + 1;
  task.description = addTask.value;
  task.completed = false;
  taskArr.push(task);
};
const pushToLocal = () => {
  localStorage.setItem('taskArr', JSON.stringify(taskArr));
};
