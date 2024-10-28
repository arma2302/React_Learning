import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/productSlice";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";

export default function AllUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.auth);

  const dataSource = users;

  return (
    <div>
      <h1 className="text-2xl p-3 font-bold">All products</h1>
      <Table dataSource={dataSource} rowKey={(record) => record.id} bordered>
        <Column title="Username" dataIndex="username" key="username" />

        <Column title="Name" dataIndex="name" key="name" />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button className="border-red-500">Delete</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
