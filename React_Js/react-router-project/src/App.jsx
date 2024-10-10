import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { rootAction, loader as rootLoader } from "./routes/Root";
import "./App.css";
import ErrorPage from "./ErrorPage";
import Contact, { contactAction, contactLoader } from "./routes/Contact";
import Edit, { editAction } from "./routes/Edit";
import { deleteAction } from "./routes/Delete";
import Index from "./routes/Index";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Index />,
            },
            {
              path: "contacts/:contactId",
              element: <Contact />,
              loader: contactLoader,
              action: contactAction,
            },
            {
              path: "contacts/:contactId/edit",
              element: <Edit />,
              loader: contactLoader,
              action: editAction,
            },
            {
              path: "contacts/:contactId/destroy",
              action: deleteAction,
              errorElement: <div>Oops! There was an error.</div>,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
