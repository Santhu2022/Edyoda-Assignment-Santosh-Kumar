import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "./index.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="responsive-container">
          <img src="./images/EDYODA.png" alt="logo" className="header-logo" />
          <ul className="nav-items-list">
            <li className="nav-item">
              <p className="nav-item-text">Courses</p>
              <img
                src="./images/down-arrow.png"
                alt="down arrow"
                className="down-arrow"
              />
            </li>
            <li className="nav-item">
              <p className="nav-item-text">Programs</p>
              <img
                src="./images/down-arrow.png"
                alt="down arrow"
                className="down-arrow"
              />
            </li>
          </ul>
          <div className="right-content-navbar">
            <button type="button" className="search-button">
              <img
                src="./images/search-icon.png"
                alt="search"
                className="search-image"
              />
            </button>
            <button type="button" className="login-button">
              Log in
            </button>
            <button type="button" className="join-now-button">
              JOIN NOW
            </button>
            <button
              className="hamburger-button-small"
              onClick={() => setSidebar(true)}
            >
              <RxHamburgerMenu className="hamburger-icon" />
            </button>
          </div>
        </div>
      </nav>
      <nav className={sidebar ? "nav-menu-sm active" : "nav-menu-sm"}>
        <div className="navbar-toggle-item">
          <AiOutlineClose
            className="navbar-cross-icon"
            onClick={() => setSidebar(false)}
          />
        </div>
        <div className="sm-login-btn-contianer">
          <button
            type="button"
            className="login-button-sm"
            onClick={() => setSidebar(false)}
          >
            Log in
          </button>
        </div>
        <ul className="nav-menu-list-sm" onClick={() => setSidebar(false)}>
          <li className="nav-item-sm">
            <p className="nav-item-text">Courses</p>
            <img
              src="./images/down-arrow.png"
              alt="down arrow"
              className="down-arrow"
            />
          </li>
          <li className="nav-item-sm">
            <p className="nav-item-text">Programs</p>
            <img
              src="./images/down-arrow.png"
              alt="down arrow"
              className="down-arrow"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
