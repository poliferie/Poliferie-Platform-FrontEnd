import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Config from "../../Config/Config";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar fixed-bottom container ">
        <div className="row w-100">
          {/*RECENT */}
          <div className="col" align="center">
            <NavLink
              to={Config.RECENT_PATH}
              style={{ backgroundColor: "white" }}
              activeStyle={{ backgroundColor: "orange" }}
            >
              <div className="w-100" style={{ backgroundColor: "inherit" }}>
                <i className="fas fa-heart" />
              </div>
            </NavLink>
          </div>

          {/*SEARCH */}
          <div className="col" align="center">
            <NavLink
              to={Config.NAVIGATOR_PATH}
              style={{ backgroundColor: "white" }}
              activeStyle={{ backgroundColor: "orange" }}
            >
              <div className="w-100" style={{ backgroundColor: "inherit" }}>
                <i className="fas fa-search" />
              </div>
            </NavLink>
          </div>

          {/*PROFILE */}
          <div className="col" align="center">
            <NavLink
              to={Config.PROFILE_PATH}
              style={{ backgroundColor: "white" }}
              activeStyle={{ backgroundColor: "orange" }}
            >
              <div className="w-100" style={{ backgroundColor: "inherit" }}>
                <i className="fas fa-user" />
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
