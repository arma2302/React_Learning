import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./Routes/HomePage";
import ErrorPage from "./Routes/ErrorPage";
import LoginPage from "./Routes/LoginPage";
import { hasToken } from "./services";
import Products, { productLoader } from "./Components/Products";
import Product, { singelProductLoader } from "./Components/Product";
import Cart, { cartLoader } from "./Components/Cart";

const isAuthenticated = () => {
  return hasToken();
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated() ? (
        <HomePage />
      ) : (
        <Navigate to="/login" replace />
      ),
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

    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
