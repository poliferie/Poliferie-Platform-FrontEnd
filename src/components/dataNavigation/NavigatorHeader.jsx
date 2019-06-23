import React, { Component } from "react";
import StudentFilter from "./filters/StudentFilter";
import StringFilter from "./filters/StringFilter";

class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addCourseFilter = this.props.addCourseFilter;
    this.addUniFilter = this.props.addUniFilter;
  }
  render() {
    return (
      <div className="NavigatorHeader">
        <StudentFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
        />
        <StringFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
        />
      </div>
    );
  }
}

export default NavigatorHeader;
