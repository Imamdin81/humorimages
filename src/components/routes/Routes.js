import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import PrivateComponet from "../../components/privateComponent/PrivateComponent";


const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateComponet />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
export default Router;
