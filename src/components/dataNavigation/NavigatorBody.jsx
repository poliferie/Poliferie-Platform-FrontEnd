import React, { Component } from "react";
import UniListViewer from "../dataViewer/UniListViewer";
import CourseListViewer from "../dataViewer/CourseListViewer";

class NavigatorBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navigator-body" style={{paddingBottom:"50px"}}>
        {this.props.viewFocus === "uni" ? (
          <UniListViewer filteredUni={this.props.filteredUni} />
        ) : (
          <CourseListViewer filteredCourses={this.props.filteredCourses} a={0} b={50} />
        )}
      </div>
    );
  }
}
export default NavigatorBody;
