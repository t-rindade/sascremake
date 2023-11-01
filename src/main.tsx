import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="home"
          element={
            <div className="gambi">
              <Menu />
              <Home />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
