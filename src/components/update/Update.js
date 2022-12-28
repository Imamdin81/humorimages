import react from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    // console.log(result);
    setName(result.name);
    setPrice(result.price);
    setcompany(result.company);
    setcategory(result.category);
  };

  const newData = async () => {
    console.log(name, price);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, company, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/productlist");
  };
  const updateOpration = () => () => {
    console.log(name, price, category, company);
    // let result = await fetch(`http://localhost:5000/product/${params.id}`, {
    //   method: "put",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // result = await result.json();
    // console.log(result);
    // console.log(Params);
  };

  return (
    <div className="addproduct">
      <h2>Update Product</h2>
      <div className="input-faild-main">
        <input
          className="input-faild"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          className="input-faild"
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <input
          className="input-faild"
          type="text"
          placeholder="enter category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        ></input>

        <input
          className="input-faild"
          type="text"
          placeholder="enter company"
          value={company}
          onChange={(e) => setcompany(e.target.value)}
        ></input>

        <button className="addprodut-btn" onClick={newData}>
          update Product
        </button>
      </div>
    </div>
  );
};
export default UpdateProduct;
