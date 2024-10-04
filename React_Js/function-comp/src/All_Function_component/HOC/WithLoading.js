import React, { useEffect, useState } from "react";

const UpdatedComp = (BaseComponent, id) => {
  function NewComponent(props) {
    const [newdata, setData] = useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          setData([...newdata, data]);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, []);
    return <BaseComponent data={newdata} />;
  }
  return NewComponent;
};
export default UpdatedComp;
