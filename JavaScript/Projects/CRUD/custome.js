let title = document.getElementById("title");
let description = document.getElementById("description");
let asignee = document.getElementById("asignee");
let priority = document.getElementById("priority");
let date = document.getElementById("dueDate");
let form = document.querySelector("form");
let taskData = JSON.parse(localStorage.getItem("task")) || [];
const addTask = (e) => {
  e.preventDefault();

  let task = {
    id: taskData.length + 1,
    title: title.value,
    description: description.value,
    dueDate: date.value,
    asignee: asignee.value,
    priority: priority.value,
    status,
  };
  taskData.push(task);
  console.log(taskData);

  localStorage.setItem("task", JSON.stringify(taskData));
  form.reset();

  displayData(taskData);
};

const displayData = (taskData) => {
  let taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = ``;

  //   let retriveData = JSON.parse(localStorage.getItem("task")) || [];

  //   console.log(retriveData);

  taskData.forEach((task, index) => {
    let card = document.createElement("div");
    card.innerHTML += `<div class="card border-0" >
  <div class="card-bodyn">
    <h5 class="card-title">Title:${task.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Priority : ${task.priority}</h6>
    <p class="card-text">Description:${task.description}</p>
    <a href="#" class="btn btn-primary btn-small" onclick="deleteTask(${task.id})">Delete</a>
    <a href="#" class="btn btn-primary btn-small" onclick="editTask(${task.id},${index})">Edit</a>
      <select
            class="form-select mt-4"
            aria-label="Default select example"
            id="status" onchange ="updateStatus(${task.id})"
          >
          <option selected>${task.status}</option>
          <option value="Pending">Pending</option>
          <option value="In-process">In-process</option>
          <option value="Completed">Completed</option>
          </select>
  </div>
</div>`;
    card.className = "task-card";
    taskContainer.appendChild(card);
  });
};

const filterTask = () => {
  let filterdVal = document.getElementById("filter");
  let retriveData = JSON.parse(localStorage.getItem("task")) || [];

  let filetrData = retriveData.filter(
    (task) =>
      task.priority.includes(filterdVal.value) ||
      task.status.includes(filterdVal.value)
  );

  console.log(filetrData);
  displayData(filetrData);
};

const updateStatus = (id) => {
  let status = document.getElementById("status");
  let index = taskData.findIndex((task) => task.id == id);

  // Update the task status in the data array
  taskData[index].status = status.value;

  // store the updated taskData in localStorage
  localStorage.setItem("task", JSON.stringify(taskData));

  // Refresh the display with updated data
  displayData(taskData);
};

const deleteTask = (id) => {
  //filter the array objects
  taskData = taskData.filter((task) => task.id != id);
  //set the filtered array in local storage
  localStorage.setItem("task", JSON.stringify(taskData));
  //updates the html
  displayData(taskData);
};

const editTask = (id) => {
  let index = taskData.findIndex((task) => task.id == id);
  let editData = taskData[index];
  console.log(editData);

  title.value = editData.title;
  description.value = editData.description;
  dueDate.value = editData.dueDate;
  asignee.value = editData.asignee;
  priority.value = editData.priority;
};
displayData(taskData);
