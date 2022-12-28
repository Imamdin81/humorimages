import react from "react";
import { useState } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [erorr, serErorr] = useState(false);
  const ProductData = async () => {
    // console.log(!name);
    if (!name || !price || !category || !company) {
      serErorr(true);
      return false;
    }
    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // const result = JSON.parse(userId);
    // console.log(result);
    // console.log(result._id);
    console.log(userId);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div className="addproduct">
      <h2> welcome to AddProduct page</h2>
      <div className="input-faild-main">
        <input
          className="input-faild"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {erorr && !name && (
          <spam className="spam-class">Enter your valid name</spam>
        )}
        <input
          className="input-faild"
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        {erorr && !price && (
          <spam className="spam-class">Enter your valid name</spam>
        )}
        <input
          className="input-faild"
          type="text"
          placeholder="enter category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        ></input>
        {erorr && !category && (
          <spam className="spam-class">Enter your valid name</spam>
        )}
        <input
          className="input-faild"
          type="text"
          placeholder="enter company"
          value={company}
          onChange={(e) => setcompany(e.target.value)}
        ></input>
        {erorr && !company && (
          <spam className="spam-class">Enter your valid name</spam>
        )}
        <button className="addprodut-btn" onClick={ProductData}>
          Add Product
        </button>
      </div>
    </div>
  );
};
export default AddProduct;
