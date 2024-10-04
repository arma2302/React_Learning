import React, { useState } from "react";

export default function UseStateExample1() {
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({ ...data, [name]: value }));
    console.log(formData);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
