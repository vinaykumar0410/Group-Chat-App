import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { store } from "../App";
const NavBar = () => {
  const [token, setToken] = useContext(store);
  return (
    <>
      {!token && (
        <nav class="navbar navbar-expand-sm p-3 bg-primary text-center">
          <div class="container-fluid">
            <ul class="navbar-nav m-auto">
              <NavLink
                className="nav-item text-light"
                style={{ textDecoration: "none",letterSpacing:'2px',fontSize:'24px',fontFamily:'sans-serif' }}
                to="/register"
              >
                REGISTER
              </NavLink>
              <NavLink
                className="nav-item mx-5 text-light"
                style={{ textDecoration: "none",letterSpacing:'2px',fontSize:'24px',fontFamily:'sans-serif' }}
                to="/login"
              >
                LOGIN
              </NavLink>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
