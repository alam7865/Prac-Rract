import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
const HeaderCom = () => (
  <div className="header">
    <div className="logo">
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
        alt="Resturent"
      ></img>
    </div>

    <div className="nav_item">
      <ul>
        {/* <a href="/">
          <li>Home</li>
        </a>

        <a href="/">
          <li>About us</li>
        </a>

        <a href="/">
          <li>Contact Us</li>
        </a>

        <a href="/">
          <li>Address</li>
        </a> */}
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </div>
  </div>
);

export default HeaderCom;
