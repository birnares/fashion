import React from "react";
import logo from "./../../images/icons/logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__row}>
          <div className={classes.header__logo}>
            <img src={logo} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className={classes.header__nav}>
            <ul>
              <li>
                <a href="#!">CATALOGUE</a>
              </li>
              <li>
                <a href="#!">FASHION</a>
              </li>
              <li>
                <a href="#!">FAVOURITE</a>
              </li>
              <li>
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a href="#!" className={classes.header__nav_btn}>
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
