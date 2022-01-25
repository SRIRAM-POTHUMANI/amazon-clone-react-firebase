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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-between">
      <div class="container-fluid p-0 m-0">
        <Link to="/">
          <img
            className="header_logo navbar-brand"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="logo"
          />
        </Link>
        <Link to="/checkout">
          <div className="header_optionbasket ms-2 justify-content-end">
            <ShoppingBasket />
            <span className="header_optionline2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        <div
          class="navbar-toggler justify-content-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outlineWidth: "none" }}
        >
          <span class="navbar-toggler-icon"></span>
        </div>
        <div
          class="collapse navbar-collapse p-3 justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="drophome">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
              <li class="nav-item">
                <Link to={!user && "/login"}>
                  <div
                    className="header_option nav-link"
                    onClick={handleAuthenticaton}
                  >
                    <span className="header_optionline1">
                      Hello {!user ? "Guest" : user.email}
                    </span>
                    <span className="header_optionline2">
                      {user ? "Sign Out" : "Sign In"}
                    </span>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/orders">
                  <div className="header_option nav-link">
                    <span className="header_optionline1">Returns Guest</span>
                    <span className="header_optionline2">& orders</span>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <div className="header_option nav-link">
                  <span className="header_optionline1">Have</span>
                  <span className="header_optionline2">Prime</span>
                </div>
              </li>
            </ul>
          </div>

          {/* <form class="d-flex header_search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success  header_searchicon"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
