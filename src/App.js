import React from "react";
import "./styles.css";

import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./utils/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
