import React, { Component } from "react";

const STYLE_NAV_ELEM = {
  boxSizing: "border-box",
  float: "left",
  width: "33.33%",
  padding: "5px 0px 5px 0px"
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "34px",
          left: 0,
          margin: 0,
          padding: 0,
          backgroundColor: "#ea4242",
          marginBottom: "5px"
        }}
      >
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <div style={{ verticalAlign: "middle", display: "flex" }}>
            <div style={{ ...STYLE_NAV_ELEM, color: "white", fontSize: "20px" }} className={"monserrat"}>
              Poliferie.io
            </div>
            <div style={{ ...STYLE_NAV_ELEM }}>
            </div>
            <div style={{ ...STYLE_NAV_ELEM, textAlign: "end", color: "white" }} >
              <img src={"img/KW-Poliferie-2.png"} style={{ width: "20px" }} alt={"Logo Poliferie"}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
