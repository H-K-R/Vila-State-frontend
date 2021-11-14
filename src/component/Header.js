import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, signOutUser } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Vila-state{" "}
            {user && <i className="small">--- {user?.displayName}</i>}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/explore"
                  activeClassName="active"
                  exact
                >
                  Vilas
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/dashboard"
                      activeClassName="active"
                      exact
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={signOutUser}
                      className="btn btn-dark border-0"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
