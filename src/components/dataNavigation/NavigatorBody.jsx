import React, { Component } from "react";
import { Link } from "react-router-dom";
import UniListViewer from "../dataViewer/UniListViewer";
import CourseListViewer from "../dataViewer/CourseListViewer";

class NavigatorBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navigator-body">
        {this.props.viewFocus === "uni" ? (
          <UniListViewer filteredUni={this.props.filteredUni} />
        ) : (
          <CourseListViewer filteredCourses={this.props.filteredCourses} />
        )}
      </div>
    );
  }
}
export default NavigatorBody;
