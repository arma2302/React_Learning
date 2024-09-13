// axios.js

const axios = require("axios");
// Function to create data
const createData = async () => {
  const data = { title: "new", body: "React Training arma " };
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log("Created data:", response.data);
  } catch (error) {
    console.error("Error creating data:", error.message);
  }
};
createData();

// Function to delete data
const deleteData = async () => {
  const postId = 1; // Example post ID to delete
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log("Deleted data:", response.data);
  } catch (error) {
    console.error("Error deleting data:", error.message);
  }
};
deleteData();
// Function to update data
const updateData = async () => {
  const postId = 1; // Example post ID to update
  const updatedData = { title: "updated", body: "Updated content" };
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updatedData
    );
    console.log("Updated data:", response.data);
  } catch (error) {
    console.error("Error updating data:", error.message);
  }
};
updateData();
