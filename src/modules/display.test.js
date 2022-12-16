import {
  addNewList, removeList, editTask, notCompleted, completed,
} from './display.js';
import removeAllCompleted from './clearCompleted.js';

jest.mock('./variables.js');
describe('Testing remove and add functions', () => {
  // Test for adding
  test('when you addNewList() adds a new task', () => {
    addNewList();
    addNewList();
    addNewList();
    addNewList();
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr.length).toBe(4);
  });

  // Test for deleting
  test('Should delete one task', () => {
    removeList(0);
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr.length).toBe(3);
  });

  // Test for Editing task
  test('test editTask() function', () => {
    editTask(2, 'modified task');
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr[2].description).toBe('modified task');
  });

  // Test for updating completed task
  test('test completed() function', () => {
    completed(1);
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr[1].completed).toBe(true);
  });
  test('test notCompleted() function', () => {
    notCompleted(0);
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr[0].completed).toBe(false);
  });

  // Test for clear all completed function
  test('test removeAllCompleted() function', () => {
    removeAllCompleted();
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr.length).toEqual(2);
  });
});
