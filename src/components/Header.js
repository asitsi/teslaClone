import React, { useState } from "react";
import logo from "../images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavbarSidebarData } from "./NavbarSidebarData";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="container">
      <Link tp="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="Menu">
        <p>
          <Link tp="/">Model S</Link>
        </p>
        <p>
          <Link tp="/">Model 3</Link>
        </p>
        <p>
          <Link tp="/">Model X</Link>
        </p>
        <p>
          <Link tp="/">Model Y</Link>
        </p>
        <p>
          <Link tp="/">Solar Roof</Link>
        </p>
        <p>
          <Link tp="/">Solar Panels</Link>
        </p>
      </div>
      <div className="Right_Menu">
        <span>Shop</span>
        <span>Tesla Account</span>
        <span>
          <div>
            <MenuIcon className="MenuIcon" onClick={showSidebar} />

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <CloseIcon className="CloseIcon" />
                </li>
                {NavbarSidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
