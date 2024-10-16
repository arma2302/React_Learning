import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { store } from "./app/store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
