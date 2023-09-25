import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Donation from "./Pages/Donation";
// import Statistics from "./Pages/Statistics";
import Card from "./Components/Card/Card";
import PieStatistics from "./Pages/PieStatistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/card/:paramsId",
        element: <Card></Card>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        // element: <Statistics></Statistics>,
        element:<PieStatistics></PieStatistics>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
