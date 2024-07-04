import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import Home from "./pages/Home";
import CatagoryPage from "./pages/CatagoryPage";
import SearchPage from "./pages/SearchPage";
import FavourateGifPage from "./pages/FavourateGifPage";

import DataProvider from "./context/context";
import SingleGifPage from "./pages/Single-gifpage"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <CatagoryPage />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGifPage/>
      },
      {
        path: "/Favourate",
        element: <FavourateGifPage />,
      },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
