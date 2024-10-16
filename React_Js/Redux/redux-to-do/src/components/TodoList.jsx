import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo } from "../features/todoSlice";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [editTodo, setEditTodo] = useState(null);
  const data = useSelector((state) => {
    console.log();
    return state.todos;
  });

  const dispatch = useDispatch();

  const handledelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handlEdit = (id) => {
    const todo = data.find((item) => item.id == id);
    setEditTodo(todo);
  };

  return (
    <>
      <AddTodo editTodo={editTodo} />
      <div className="flex flex-col gap-5 items-start justify-start w-1/2 mx-auto my-6 bg-violet-200 p-6">
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className="bg-white flex justify-between items-center p-4 w-full rounded "
            >
              {" "}
              <p>{i + 1}</p>
              <p key={i}>{e.text}</p>
              <button onClick={() => handledelete(e.id)}>Delete</button>
              <button onClick={() => handlEdit(e.id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
