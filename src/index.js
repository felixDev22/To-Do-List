import './style.css';

const listItems = document.querySelector('.task-list');
const addTask = document.querySelector('#new-task');
const addBtn = document.getElementById('plus');

let taskArr = [];

const addNewList = () => {
  const task = {};
  task.index = taskArr.length + 1;
  task.description = addTask.value;
  task.completed = false;
  taskArr.push(task);
};

// Save To Local Directory

const pushToLocal = () => {
  localStorage.setItem('taskArr', JSON.stringify(taskArr));
};

// To render the task list

const generateList = () => {
  listItems.innerHTML = '';
  taskArr.forEach((task) => {
    listItems.innerHTML += `
        <li class="task" >
          <div class='item' >
          <input type="Checkbox" id='1' data-id="${task.index}" />
          <p>"${task.description}"</p>
          </div>
          <div id="edit" class="hide">
         <i class="fa-solid fa-ellipsis-vertical" data-id="${task.index}"></i>
          </div>
          <i class="fa-regular fa-trash-can" class="remove" data-id="${task.id}"></i>
        </li>`;
    addTask.value = '';
  });
};

// Delete Button to remove task

const removeTask = document.querySelectorAll('.remove');

removeTask.forEach((button) => {
  button.addEventListener('click', () => {
    const dataSet = parseInt(button.dataset.id, 10);
    const buttonId = taskArr.findIndex((object) => object.id === dataSet);

    const deleted = (index) => {
      taskArr.splice(index, 1);
      generateList();
      localStorage.setItem('taskArr', JSON.stringify(taskArr));
    };
    deleted(buttonId);
  });
});

const showList = () => {
  if (localStorage.getItem('taskArr')) {
    taskArr = JSON.parse(localStorage.getItem('taskArr'));
  }
  generateList();
};

// on Load

window.addEventListener('load', () => {
  showList();
});

// Add Button to add new task

addBtn.addEventListener('click', () => {
  addNewList();
  generateList();
  pushToLocal();
});
