import "./index.css";

const Header = () => (
  <div className="navbar">
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
          <img src="./images/search-icon.png" alt="search" className="search-image" />
        </button>
        <button type="button" className="login-button">
          Log in
        </button>
        <button type="button" className="join-now-button">
          JOIN NOW
        </button>
      </div>
    </div>
  </div>
);

export default Header;
