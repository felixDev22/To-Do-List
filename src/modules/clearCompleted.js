// eslint-disable-next-line object-curly-newline
import { taskArr, pushToLocal } from './display.js';

const removeAllCompleted = () => {
  const newTaskArr = taskArr.filter((taskArr) => taskArr.completed === false);
  for (let i = 0; i < newTaskArr.length; i += 1) {
    newTaskArr[i].index = i + 1;
  }
  taskArr.splice(0, taskArr.length, ...newTaskArr);
  pushToLocal();
};

export default removeAllCompleted;
