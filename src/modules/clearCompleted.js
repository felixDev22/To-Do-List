// eslint-disable-next-line object-curly-newline
import { addNewList, generateList, pushToLocal, taskArr } from './display.js';

const clearCompleted = () => {
  taskArr = taskArr.filter((obj) => obj.completed !== true);
  addNewList();
  generateList();
  pushToLocal();
  pushToLocal();
};

export default { clearCompleted };
