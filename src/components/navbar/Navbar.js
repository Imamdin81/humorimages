import react from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import "./navbar.css";
import logo from "../images/download.png";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    console.log("apple");
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="mainNavbar">
      <img className="logo-class" src={logo}></img>
      {auth ? (
        <ul className="nav-ui">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/productlist">Product List</Link>
          </li>
          <li>
            <Link to="/update">update</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ui right-nav">
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
