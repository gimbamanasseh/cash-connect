import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
