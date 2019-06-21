import React, { Component } from "react";
class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.props.addUniFilter("maxstud", e => {
              return e.students < 160;
            })
          }
        />
        navigation header
      </div>
    );
  }
}

export default NavigatorHeader;
