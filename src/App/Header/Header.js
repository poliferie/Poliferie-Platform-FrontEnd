import React from "react";
import { NavLink } from "react-router-dom";
import Config from "../../Config/Config";

class HeaderCell extends React.Component {
  state = {};
  render() {
    return (
      <div className="col h-100" align="center">
        <NavLink
          to={this.props.to}
          style={{ backgroundColor: "white" }}
          activeStyle={{ backgroundColor: "orange" }}
        >
          <div
            className="w-100 h-100"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "inherit"
            }}
          >
            <div>
              <i className={this.props.faClass} />
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

function Header() {
  return (
    <div className="Header w-100">
      <nav
        className="navbar fixed-bottom bg-white"
        style={{ height: Config.HEADER_HEIGHT, width: "100vw" }}
      >
        <div className="row w-100 h-100">
          {/*RECENT */}
          <HeaderCell to={Config.RECENT_PATH} faClass="fas fa-heart" />

          {/*SEARCH */}
          <HeaderCell to={Config.NAVIGATOR_PATH} faClass="fas fa-search" />

          {/*PROFILE */}
          <HeaderCell to={Config.PROFILE_PATH} faClass={"fas fa-user"} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
