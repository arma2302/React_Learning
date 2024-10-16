import { Provider } from "react-redux";
import "./App.css";
import DisplayProducts from "./Components/DisplayProducts";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <DisplayProducts />
      </Provider>
    </>
  );
}

export default App;
