let toggle = false;
const url = "https://reqres.in/api/users?page=1";
let dataArray = [];

let email = document.getElementById("email");
let nameInput = document.getElementById("name");
let currentEditId = null; // Store the ID of the user currently being edited

function closeModal() {
  toggle = false;
  document.querySelector(".modal").classList.remove("modal-open");
}

function addData() {
  toggle = !toggle;
  if (toggle) {
    document.querySelector(".modal").classList.add("modal-open");
  } else {
    closeModal();
  }
}

const createData = async () => {
  if (!email.value || !nameInput.value) {
    alert("Please fill in all fields");
    return;
  }

  let jsonData = {
    email: email.value,
    first_name: nameInput.value,
    last_name: "",
  };

  try {
    let response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    const result = await response.json();
    dataArray.push(result);
    showData(dataArray);
    closeModal(); // Close the modal after saving
  } catch (error) {
    alert("Error fetching the data");
  }
};

const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    dataArray = json.data;
    showData(dataArray);
  } catch (error) {
    console.log(error.message);
  }
};
getData();

const showData = (dataArray) => {
  let row = document.querySelector(".row");
  row.innerHTML = "";
  dataArray.forEach((user) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card">
            <div class="header">
              <div>
                <a class="title" href="#">User Details from API</a>
                <p class="name">${user.first_name} ${user.last_name}</p>
              </div>
              <span class="image"><img src=${user.avatar} alt="${user.first_name} ${user.last_name}"></span>
            </div>
            <p class="description">Hello There!</p>
            <dl class="post-info">
              <div class="cr">
                <dt class="dt">Email</dt>
                <dd class="dd">${user.email}</dd>
              </div>
              <div class="cr">
                <button onclick="editData(${user.id})">Edit</button>
                <button onclick="deleteData(${user.id})">Delete</button>
              </div>
            </dl>
          </div>`;

    row.appendChild(card);
  });
};

const updateData = async () => {
  if (!email.value || !nameInput.value || !currentEditId) {
    alert("Please fill in all fields and select a user to edit");
    return;
  }

  let jsonData = {
    email: email.value,
    first_name: nameInput.value,
    last_name: "",
  };

  try {
    let response = await fetch(`https://reqres.in/api/users/${currentEditId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    const result = await response.json();
    const index = dataArray.findIndex((user) => user.id === currentEditId);
    dataArray[index] = result;
    showData(dataArray);
    closeModal(); // Close the modal after updating
    currentEditId = null; // Clear the edit ID
  } catch (error) {
    alert("Error updating the data");
  }
};

const editData = async (userid) => {
  try {
    let response = await fetch(`https://reqres.in/api/users/${userid}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const user = await response.json();
    currentEditId = userid; // Set the current edit ID
    email.value = user.email;
    nameInput.value = user.first_name;
    addData(); // Show the modal for editing
  } catch (error) {
    console.error(error.message);
  }
};

const deleteData = async (userid) => {
  try {
    let response = await fetch(`https://reqres.in/api/users/${userid}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    dataArray = dataArray.filter((user) => user.id !== userid);
    showData(dataArray);
  } catch (error) {
    console.error("Error deleting the data");
  }
};
