import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/Chat.jsx";
import Pomodoro from "./pages/Pomodoro.tsx";
import Information from "./pages/Information.tsx";
import Add from "./pages/Add.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/pomodoro",
    element: <Pomodoro />,
  },
  {
    path: "/information",
    element: <Information />,
  },
  {
    path: "/information/add",
    element: <Add />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
