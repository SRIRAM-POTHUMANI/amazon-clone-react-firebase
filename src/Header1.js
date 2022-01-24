<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/">
      <img
        className="header_logo navbar-brand"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="logo"
      />
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex header_search">
        <input
          class="form-control me-2 header_searchinput"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success header_searchicon" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>;





import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
        />
      </Link>
      {/* search */}
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionline1">Returns Guest</span>
            <span className="header_optionline2">& orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionline1">Your</span>
          <span className="header_optionline2">Prime</span>
        </div>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionline1">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionline2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasket />
            <span className="header_optionline2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
