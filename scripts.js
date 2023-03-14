const inputElement0 = document.querySelector(".task-name");
const inputElement2 = document.querySelector(".date");
const addTaskButton = document.querySelector(".task-botton");

const tasksContainer = document.querySelector('.tasks-container')
const validateInput = () => inputElement0.value.trim().length > 0;

const AddTask = () => {
  const inputIsValid = validateInput();

  console.log(inputIsValid);

  if (!inputIsValid) {
    return inputElement0.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement ("p");
  taskContent.innerText = inputElement0.value;

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("fa-solid");
  deleteItem.classList.add("fa-trash-can");

  deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement0.value = "";
};

const handleClick = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }
};


const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove();
    }
  }
};

const InputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement0.classList.remove("error");
  }
};

const validateInput2 = () => inputElement2.value.trim().length > 0;

const AddTask2 = () => {
  const inputIsValid2 = inputElement2.value.trim().length > 0;

  console.log(inputIsValid2);

  if (!inputIsValid2) {
    return inputElement2.classList.add("error");
  }

  const taskItemContainer2 = document.createElement('div');
  taskItemContainer2.classList.add('task-item');

  const taskContent2 = document.createElement ('p');
  taskContent2.innerText = inputElement0.value;

  const deleteItem2 = document.createElement('i');
  deleteItem2.classList.add('far');
  deleteItem2.classList.add('fa-trash-can');

  taskItemContainer2.appendChild(taskContent2);
  taskItemContainer2.appendChild(deleteItem2);

};

const InputChange2 = () => {
  const inputIsValid2 = validateInput2();

  if (inputIsValid2) {
    return inputElement2.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => AddTask());
addTaskButton.addEventListener("click", () => AddTask2());


inputElement0.addEventListener("change", () => InputChange());
inputElement2.addEventListener("change", () =>InputChange2());
