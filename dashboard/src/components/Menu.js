import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  //logout functionality
  const handleLogout = () => {

  axios.post("http://localhost:8080/logout", {}, {
    withCredentials: true
  }).then(() => {

    window.location.href = "http://localhost:3000";

  });

};


  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">

      <img src="/logo.png" style={{ width: "45px" }} alt="logo" />

      <div className="menus">
        <ul>

          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

        <li>
          <p
           style={{ cursor: "pointer" }}
           onClick={handleLogout}>
          Logout
         </p>
      </li>

        </ul>

        <hr />

        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

      </div>

    </div>
  );
};

export default Menu;
