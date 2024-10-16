import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";

export default function AddTodo({ editTodo }) {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);

  const handleAddtodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: editTodo.id, text: input }));
    setInput("");
    editTodo = null;
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    }
  }, [editTodo]);

  return (
    <form
      onSubmit={editTodo != null ? handleUpdate : handleAddtodo}
      className="w-1/2 bg-violet-200 p-6 mx-auto flex flex-col gap-4 items-center justify-center mt-4"
    >
      <input
        type="text "
        value={input}
        onChange={(e) => setInput(e?.target?.value)}
        placeholder="add new todo"
        className="focus:outline-violet-400 rounded p-4  w-4/5"
      />
      <button
        type="submit"
        className="bg-violet-500 w-1/3 p-2 shadow-slate-950 rounded-xl hover:{bg-slate-50,text-2xl} transition-all ease-linear"
      >
        {editTodo != null ? "Update" : "Add"}
      </button>
    </form>
  );
}
