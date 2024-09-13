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
  dataList.push(bookData);
  localStorage.setItem("bookData", JSON.stringify(dataList));

  handleDisplayData();
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
                    <button class="btn btn-sm btn-success" onclick="handleEdit(${
                      value.id
                    })">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="handleDelete(${
                      value.id
                    })">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
  });
};
const handleDelete = (id) => {
  let allBookdata = JSON.parse(localStorage.getItem("bookData")) || [];
  allBookdata = allBookdata.filter((data) => {
    return data.id != id;
  });
  localStorage.setItem("bookData", JSON.stringify(allBookdata));
  handleDisplayData();
};

const handleEdit = (currentId) => {
  let allData = JSON.parse(localStorage.getItem("bookData")) || [];
  let ediData = allData.find((book) => book.id == currentId);
  console.log(ediData);

  //   title.value = ediData.title;
  //   author.value = ediData.author;
  //   year.value = ediData.year;
  //   bookId.value = ediData.id;
};
