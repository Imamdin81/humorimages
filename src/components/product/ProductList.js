import react from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.log("products", products);
  const oprationBtn = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
    // console.log(id);
    // console.log("I am A delete btn");
  };
  const seachHolder = async (event) => {
    // console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      const result = await fetch(`http://localhost:5000/serach/${key}`);
      const resultNew = await result.json();
      if (resultNew) {
        console.log(resultNew);
        setProducts(resultNew);
      }
    } else {
      getProducts();
    }
  };
  return (
    <div className="product-list">
      <h2>Welcom to Product List Page</h2>
      <input
        type="text"
        placeholder="search any product"
        onChange={seachHolder}
      ></input>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Opration</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={() => oprationBtn(item._id)}>Delete</button>
              <Link to={"/update/" + item._id}>update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h2>No Result Found</h2>
      )}
    </div>
  );
};
export default ProductList;
