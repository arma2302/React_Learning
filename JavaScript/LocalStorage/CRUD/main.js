let title = document.getElementById("inputBookTitle");
let author = document.getElementById("inputBookAuthor");
let year = document.getElementById("inputBookYear");
let bookId = document.getElementById("inputBookId");

let currentEditId = null;

const handleSubmit = (e) => {
  e.preventDefault();
  let dataList = JSON.parse(localStorage.getItem("bookData")) || [];
  let id = dataList.length + 1;
  let bookData = {
    title: title.value,
    author: author.value,
    year: year.value,
    id,
  };
  if (currentEditId !== null) {
    const index = dataList.findIndex((item) => item.id === currentEditId);
    if (index !== -1) {
      dataList[index] = bookData;
      localStorage.setItem("bookData", JSON.stringify(dataList));
      currentEditId = null;
    }
  } else {
    dataList.push(bookData);
    localStorage.setItem("bookData", JSON.stringify(dataList));
  }

  handleDisplayData();
};

const handleDelete = (id) => {
  let allBookdata = JSON.parse(localStorage.getItem("bookData")) || [];
  allBookdata = allBookdata.filter((data) => {
    return data.id != id;
  });
  localStorage.setItem(
    "bookData",
    JSON.stringihandleDateValidationfy(allBookdata)
  );
  handleDisplayData();
};

const handleEdit = (currentId) => {
  currentEditId = currentId;
  console.log(currentId);

  let allData = JSON.parse(localStorage.getItem("bookData")) || [];
  console.log(allData);

  let ediData = allData.find((book) => book.id == currentId);
  console.log(ediData);

  title.value = ediData.title;
  author.value = ediData.author;
  year.value = ediData.year;
  bookId.value = ediData.id;
};

const handleDisplayData = () => {
  table.innerHTML = ``;
  let allBookdata = JSON.parse(localStorage.getItem("bookData")) || [];
  console.log(allBookdata);

  allBookdata.forEach((value, i) => {
    var table = document.getElementById("table");
    table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.title}</td>
                <td>${value.author}</td>
                <td>${value.year}</td>
               
                <td>
                    <button class="btn btn-sm btn-primary px-3" onclick="handleEdit(${
                      value.id
                    })">
                      Edit
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="handleDelete(${
                      value.id
                    })">
                      Delete
                    </button>
                </td>
            </tr>`;
  });
};
