import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

export default function Router() {
  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/about",
  //       element: <About />,
  //     },
  //     {
  //       path: "/contact",
  //       element: <ContactUs />,
  //     },
  //   ]);
  return (
    // <RouterProvider router={router}></RouterProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
