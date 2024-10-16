import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo")) || [],
  currentIndex: null,
};

export const todoReducer = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        complete: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const singleTodo = state.todos.find((item) => item.id === id);
      singleTodo.text = text;
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
  },
});

export default todoReducer.reducer;
export const { addTodo, deleteTodo, updateTodo } = todoReducer.actions;
