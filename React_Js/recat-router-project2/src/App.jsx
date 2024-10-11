import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Routes/HomePage";
import ErrorPage from "./Routes/ErrorPage";
import LoginPage from "./Routes/LoginPage";
import { hasToken } from "./Auth";
import Products, { productLoader } from "./Components/Products";
import Product, { singelProductLoader } from "./Components/Product";
import Cart, { cartLoader } from "./Components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: hasToken() ? <HomePage /> : <LoginPage />, // Call the hasToken function
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Products />,
          loader: productLoader,
        },
        {
          path: "/product/:prodId",
          element: <Product />,
          loader: singelProductLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: cartLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
