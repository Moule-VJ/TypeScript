const taskForm = document.querySelector<HTMLFormElement>("form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

interface Task {
  description: string;
  isCompleted: boolean;
}

const tasks: Task[] = [];

const createTask = (e: SubmitEvent) => {
  e.preventDefault();
  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(task);
    //   Render the task
    renderTask(task);
    //   Update the Local Storage
    upgradeStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task ");
};

taskForm?.addEventListener("submit", createTask);

const addTask = (task: Task) => {
  tasks.push(task);
};

const renderTask = (task: Task): void => {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  taskListElement?.appendChild(taskElement);
};
const upgradeStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
