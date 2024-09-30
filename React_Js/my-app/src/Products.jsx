import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );

    let data = await response.json();
    console.log(data);
    setProducts(data);
  };
  return (
    <h1>Hello</h1>
    // <div className="columns-3 gap-8">
    //   {products.map((e, i) => {
    //     return (
    //       <div>
    //         <img className="w-full aspect-video" alt="" src={e.url} />
    //         <h1>Data Description</h1>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
