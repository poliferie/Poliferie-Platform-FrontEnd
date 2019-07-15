import React, { Component } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HeaderDialog from "./HeaderDialog";




class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          width: "90vw",
          
          position: "fixed",
          bottom: 0,
          
        }}
      >
        <HeaderDialog></HeaderDialog>
      </div>
    );
  }
}

export default Header;
