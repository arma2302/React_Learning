let dataArray = [];

async function getData() {
  const url = "https://reqres.in/api/users?page=1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json.data);

    dataArray = json.data;

    showData();
  } catch (error) {
    console.log(error.message);
  }
}

function showData() {
  let row = document.querySelector(".row");
  dataArray.forEach((user) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card">
            <div class="header">
              <div>
                <a class="title" href="#">User Details from API</a>
                <p class="name">${user.first_name} ${user.last_name}</p>
              </div>
              <span class="image"><img src=${user.avatar} ></span>
            </div>
            <p class="description">Hello There!</p>
            <dl class="post-info">
              <div class="cr">
                <dt class="dt">Email</dt>
                <dd class="dd">${user.email}</dd>
              </div>
              <div class="cr">
                <dt class="dt">Phone no</dt>
                <dd class="dd">N/A</dd>
              </div>
            </dl>
          </div>`;

    row.appendChild(card);
  });
}

getData();
