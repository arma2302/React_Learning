let title = document.getElementById("title");
let description = document.getElementById("description");
let asignee = document.getElementById("asignee");
let priority = document.getElementById("priority");
let dueDate = document.getElementById("dueDate");
let form = document.querySelector("form");
let taskData = JSON.parse(localStorage.getItem("task")) || [];
const addTask = (e) => {
  e.preventDefault();
  console.log(dueDate.value);

  let task = {
    id: taskData.length + 1,
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    asignee: asignee.value,
    priority: priority.value,
    status: "Pending",
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
    <a href="#" class="btn btn-primary btn-small">Delete</a>
    <a href="#" class="btn btn-primary btn-small">Edit</a>
      <select
            class="form-select mt-4"
            aria-label="Default select example"
            id="status" onchange ="updateStatus(${task.id})"
          >
          <option value="In-process">In-process</option>
          <option value="Completed">Completed</option>
          <option value="Pending" selected>Pending</option>
          </select>
  </div>
</div>`;
    card.className = "task-card";
    taskContainer.appendChild(card);
  });
};
displayData(taskData);

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

// const updateStatus = (id) => {
//   let status = document.getElementById("status");
//   let index = taskData.findIndex((task) => task.id == id);
//   console.log(index);
//   taskData[index].status = status.value;

//   for (let i = 0; i <= status.options.length; i++) {
//     if (status.options[i].value === taskData[index].status) {
//       status.options[i].selected = true;
//     }
//   }

//   //   localStorage.setItem("task", JSON.stringify(taskData));
//   displayData(taskData);
// };

const updateStatus = (id) => {
  let status = document.getElementById("status");
  let index = taskData.findIndex((task) => task.id == id);

  if (index === -1) {
    console.error("Task not found");
    return;
  }

  // Update the task status in the data array
  taskData[index].status = status.value;

  // Clear previously selected option
  for (let i = 0; i < status.options.length; i++) {
    status.options[i].selected = false;
  }

  // Set the new selected option
  for (let i = 0; i < status.options.length; i++) {
    if (status.options[i].value === taskData[index].status) {
      status.options[i].selected = true;
      break; // Exit the loop once the option is selected
    }
  }

  // Optionally store the updated taskData in localStorage
  localStorage.setItem("task", JSON.stringify(taskData));

  // Refresh the display with updated data
  displayData(taskData);
};
