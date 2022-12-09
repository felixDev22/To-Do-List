import './style.css';

let taskArr = [
  {
    index: 0,
    description: 'Attend to the Dev conference',
    completed: false,
  },
  {
    index: 1,
    description: 'Meet Mum for Lunch',
    completed: false,
  },
  {
    index: 2,
    description: 'Visit wife at the Shop',
    completed: false,
  },
  {
    index: 3,
    description: 'Pick Kids from School',
    completed: false,
  },
  {
    index: 4,
    description: 'Have dinner with wife',
    completed: false,
  },
];

const listItems = document.querySelector('.task-list');
listItems.innerHTML = `<li class="task" >
          <div class='item' >
          <input type="Checkbox" id="1" />
          <p>${taskArr[0].description}</p>
          </div>
          <div class='trash'>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </li><li class="task" >
          <div class='item' >
          <input type="Checkbox" id="1" />
          <p>${taskArr[1].description}</p>
          </div>
          <div class='trash'>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </li>
        <li class="task" >
          <div class='item' >
          <input type="Checkbox" id="1" />
          <p>${taskArr[3].description}</p>
          </div>
          <div class='trash'>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </li>
        <li class="task" >
          <div class='item' >
          <input type="Checkbox" id="1" />
          <p>${taskArr[4].description}</p>
          </div>
          <div class='trash'>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </li>`;
