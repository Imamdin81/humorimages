import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../home/Home";
import Signup from "../signup/Signup";
import PrivateComponet from "../../components/privateComponent/PrivateComponent";
import Login from "../../login/Login";
import AddProduct from "../product/AddProduct";
import ProductList from "../product/ProductList";
import UpdateProduct from "../update/Update";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateComponet />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
export default Router;
