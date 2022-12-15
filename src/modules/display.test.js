import { addNewList } from './display.js';

jest.mock('./variables.js');
describe('Testing remove and add functions', () => {
  test('when you addNewList() adds a new task', () => {
    addNewList();
    addNewList();
    addNewList();
    addNewList();
    const taskArr = JSON.parse(localStorage.getItem('taskArr'));
    expect(taskArr.length).toBe(4);
  });
});
