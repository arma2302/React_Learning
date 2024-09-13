let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employee/1", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      console.log("Response:", data);
    } else {
      console.error("Error fetching data:", xhr.statusText);
    }
  }
};
xhr.send();
