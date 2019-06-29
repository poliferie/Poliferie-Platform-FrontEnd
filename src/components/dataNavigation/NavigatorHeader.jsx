import React, { Component } from "react";
import StudentFilter from "./filters/StudentFilter";
import StringFilter from "./filters/StringFilter";
import DialogFilter from "./filters/DialogFilter";
import MinStudentFilter from "./filters/MinStudentFilter";
import MaxStudentFilter from "./filters/MaxStudentFilter";

class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addCourseFilter = this.props.addCourseFilter;
    this.addUniFilter = this.props.addUniFilter;
    this.setViewFocus = this.props.setViewFocus;
  }

  render() {
    var isUniFocus = this.props.viewFocus === "uni" ? true : false;
    return (
      <div className="NavigatorHeader">
        <input type="text" name="search" id="search" />

        <br />

        <button disabled={isUniFocus} onClick={() => this.setViewFocus("uni")}>
          Università
        </button>
        <button disabled={!isUniFocus} onClick={() => this.setViewFocus("crs")}>
          Corsi
        </button>

        <StudentFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
        />
        <MinStudentFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
        />
        <MaxStudentFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
        />
        <StringFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
        />
        <DialogFilter />
      </div>
    );
  }
}

export default NavigatorHeader;
