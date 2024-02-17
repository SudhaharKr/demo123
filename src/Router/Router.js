import React from "react";
import { Routes, Route } from "react-router-dom";
import Demo from "../Demo/Demo";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={Demo} path="/" />
      </Routes>
    </div>
  );
};

export default Router;
