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

const generateList = () => {
  listItems.innerHTML = '';
  taskArr.forEach((task) => {
    const toDo = `<li class="task" >
          <div class='item' >
          <input type="Checkbox" id="1" />
          <p>${task.description[i]}</p>
          </div>
          <div class='trash' ${task.index[i]}>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </li>`;
    listItems.innerHTML += toDo;
    addTask.value = '';
  });
};
const showList = () => {
  if (localStorage.getItem('taskArr')) {
    taskArr = JSON.parse(localStorage.getItem('taskArr'));
  }
  generateList();
};
