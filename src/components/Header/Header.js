// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const userEmail = useSelector((state) => state.auth.email);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Jawad store
        </Link>

        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {isAdmin && (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                )}
                <li>
                  <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="cart-count">{cartItemCount}</span>
                  </Link>
                </li>
                <li className="profile-name">
                  {userEmail}
                  <button className="sign-out-button" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
