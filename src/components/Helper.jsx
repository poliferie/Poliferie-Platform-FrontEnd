import React, { Component } from "react";
import HelperDialog from "./HelperDialog";




class Helper extends Component {
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
        <HelperDialog></HelperDialog>
      </div>
    );
  }
}

export default Helper;
