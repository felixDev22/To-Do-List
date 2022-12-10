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
  taskArr.forEach((task) => {
    listItems.innerHTML += `
        <li class="task" >
          <div class='item' >
          <input type="Checkbox" id='1' data-id="${task.index}" />
          <p>"${task.description}"</p>
          </div>
          <div id="edit" class="hide">
         <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
         
          <i data-action="delete" class="fa-regular fa-trash-can" id="removeBtn"></i>
         
        </li>`;
    addTask.value = '';
  });
};

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

addTask.addEventListener('keypress', (e) => {
  const { target } = e;
  if (target.value === '') return;
  if (e.key === 'Enter') {
    addNewList();
  }
});

// Add Button to add new task

addBtn.addEventListener('click', () => {
  addNewList();
  generateList();
  pushToLocal();
});

// Delete Button to remove task

const removeList = (index) => {
  taskArr.splice(index, 1);
  addNewList();
  generateList();
  pushToLocal();
};

listItems.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode;
  if (!parentElement.classList.contains('task')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'delete') {
    removeList(eachListId);
  }
});
