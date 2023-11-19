let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task}
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();

  if (newTask !== '') {
    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
  }
}

function editTask(index) {
  const updatedTask = prompt('Edit task:', tasks[index]);
  
  if (updatedTask !== null) {
    tasks[index] = updatedTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');

  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Initial rendering
renderTasks();
