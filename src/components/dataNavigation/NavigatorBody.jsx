import React, { Component } from "react";
class NavigatorBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filteredUni = this.props.filteredUni;
    this.filteredCourses = this.props.filteredCourses;
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.filteredUni).map(id => (
          <div key={id}>{this.props.filteredUni[id].name}</div>
        ))}
      </div>
    );
  }
}

export default NavigatorBody;
