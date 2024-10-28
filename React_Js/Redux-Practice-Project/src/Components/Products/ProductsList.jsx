import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PushpinFilled } from "@ant-design/icons";

import ProductItem from "./ProductItem";
import { Input, Select, Spin } from "antd";

export default function ProductsList() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.products;
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <Input prefix={<PushpinFilled />} placeholder="serach Here"></Input>
        </div>
        <div>
          <Select
            defaultValue="jack"
            className="w-72 text-black"
            options={[
              { label: <span>Jack</span>, value: "Jack" },
              {
                label: <span>Jacko</span>,
                value: "jacko",
              },
            ]}
          ></Select>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-5 justify-center items-center px-2 py-4">
        {!products && <Spin />}
        {products.products &&
          products.products.map((e, i) => {
            return (
              <ProductItem
                product={e}
                key={i}
                title={e.title}
                image={
                  e.images
                    ? e.images[0]
                    : `https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png`
                }
                price={e.price}
                category={e.category}
                id={e.id}
              />
            );
          })}
        {products.error && <h1>{products.error}</h1>}
        {products.loading && (
          <div className="flex justify-center items-center w-full h-svh">
            <Spin />
          </div>
        )}
      </div>
    </>
  );
}
