// eslint-disable-next-line object-curly-newline
import { taskArr } from './display.js';

const removeAllCompleted = () => {
  const newTasks = taskArr.filter((taskArr) => !taskArr.completed);
  for (let i = 0; i < newTasks.length; i += 1) {
    newTasks[i].index = i + 1;
  }
  taskArr.length = 0;
  newTasks.forEach((newTask) => taskArr.push(newTask));
};

export default removeAllCompleted;
