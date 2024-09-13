const getData = async () => {
  try {
    let response = await fetch(" https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Response Status", response.status);
    }
    let result = await response.json();
    console.log(result);
    dataList = result;

    displayData();
  } catch (error) {
    console.log(error.message);
  }
};
getData();

const createData = async () => {
  let jsonObj = {
    title: "abcd hello",
    body: "new ",
  };
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  });
  let data = await response.json();
  console.log(data);
  dataList.push(data);
  displayData();
};

const deleteData = async () => {
  let userID = document.getElementById("inp");
  let Id = parseInt(userID.value);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${Id}`,
    {
      method: "DELETE",
    }
  );
  dataList = dataList.filter((user) => user.id !== Id);
  displayData();
};

const updateData = async () => {
  let jsonObj = {
    title: "abcd hello",
    body: "new ",
  };
  let userID = document.getElementById("inp");
  let Id = parseInt(userID.value);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${Id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jsonObj),
    }
  );
  let data = await response.json();

  let index = dataList.findIndex((user) => user.id == Id);
  console.log(index);
  dataList[index] = data;
  displayData();
  console.log(data);
};

let dataList = [];
const displayData = () => {
  let row = document.querySelector(".row");
  row.innerHTML = "";

  // for each user display details
  dataList.forEach((user, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div>
    <ul>
    <li>ID:${user.id}</li>
    <li>Title:${user.title}</li>
    <li>Body:${user.body}</li>
    </ul>
    </div>`;
    row.appendChild(div);
  });
};
