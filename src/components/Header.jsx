import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          width: "100vw",
          border: "3px solid red",
          position: "fixed",
          bottom: 0
        }}
      >
        Menu
      </div>
    );
  }
}

export default Header;
