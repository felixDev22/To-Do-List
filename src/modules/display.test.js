import { addNewList, removeList, editTask } from './display.js';

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
});
