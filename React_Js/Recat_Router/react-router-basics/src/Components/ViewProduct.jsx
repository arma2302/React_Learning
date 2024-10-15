import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../CustomeHook/UseFetch";
const url = "https://fakestoreapi.com/products";

export default function ViewProduct() {
  const { id } = useParams();
  const { products, error, loading } = useFetch(`${url}/${id}`);
  const data = [products];

  return (
    <div>
      <section>
        {error && <p>{error}</p>}
        {loading && <p>Loading......</p>}
        {products &&
          data.map((e, i) => {
            return (
              <div key={i}>
                <h2>{e.title}</h2>
                <div>
                  <span>{e.category}</span>
                </div>
                <p>{e.price}$</p>
              </div>
            );
          })}
      </section>
    </div>
  );
}
