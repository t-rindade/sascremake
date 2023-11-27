import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Equipamento from "./pages/Equipamento";

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

        <Route
          path="dashboard"
          element={
            <div className="gambi">
              <Menu />
              <Dashboard />
            </div>
          }
        />

        <Route
          path="cadastro"
          element={
            <div className="gambi">
              <Menu />
              <Cadastro />
            </div>
          }
        />

        <Route
          path="equipamento"
          element={
            <div className="gambi">
              <Menu />
              <Equipamento />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
