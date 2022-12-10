import './style.css';

import { listItems, addTask, addBtn } from './modules/variables.js';
import {
  addNewList,
  generateList,
  pushToLocal,
  showList,
  removeList,
  checkCompleted,
} from './modules/display.js';

import boxChecked from './modules/completed.js';

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

// delete Button to remove task

listItems.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode;
  if (!parentElement.classList.contains('item')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'delete') {
    removeList(eachListId);
  }
});

// Highlight Completed task

listItems.addEventListener('change', (e) => {
  const { target } = e;
  const parentElement = target.parentNode;
  if (!parentElement.classList.contains('item')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'checkbox') {
    checkCompleted(eachListId, target);
    boxChecked(target);
  }
});
