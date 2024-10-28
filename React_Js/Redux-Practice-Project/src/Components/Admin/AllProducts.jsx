import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/productSlice";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";

export default function AllProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const handleEdit = (id) => {
    navigate(`/admin/dashboard/editProduct/${id}`);
  };
  const dataSource = products;

  return (
    <div>
      <h1 className="text-2xl p-3 font-bold">All products</h1>
      <Table dataSource={dataSource} rowKey={(record) => record.id} bordered>
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column
          className="min-w-72"
          title="Description"
          dataIndex="description"
          key="description"
          render={(_, record) => (
            <em className="p-0 text-blue-600">{record.description}</em>
          )}
        />
        <Column
          title="price"
          className="min-w-3"
          dataIndex="price"
          key="price"
          sorter={(a, b) => a.price - b.price}
        />

        <Column
          title="Category"
          dataIndex="category"
          key="category"
          render={(_, record) => (
            <Button className="bg-gradient-to-r p-2 min-w-full text-black bg-red-200 font-bold">
              {record.category}
            </Button>
          )}
          filters={[
            {
              text: "Furniture",
              value: "furniture",
            },
            {
              text: "Beauty",
              value: "beauty",
            },
            {
              text: "Fragrance",
              value: "fragrances",
            },
            {
              text: "Grocery",
              value: "groceries",
            },
          ]}
          onFilter={(value, record) => record.category.includes(value)}
        />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button
                onClick={() => handleEdit(record.id)}
                className="border-blue-500"
              >
                Edit
              </Button>
              <Button
                className="border-red-500"
                onClick={() => dispatch(deleteProduct(record.id))}
              >
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
