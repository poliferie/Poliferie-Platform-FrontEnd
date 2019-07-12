import React, { Component } from "react";
import MaxStudentFilter from "./filters/non-dialog/MaxStudentFilter";
import DialogMinStudentFilter from "./filters/U_DialogMinStudentFilter";
import UniDialogRegionFilter from "./filters/U_DialogRegionFilter";
import CourseDialogRegionFilter from "./filters/C_DialogRegionFilter";
//import CourseDialogRegionFilter from "./filters/C_DialogRegionFilter";
import DialogSoddisfazioneFilter from "./filters/DialogSoddisfazioneFilter";
import DialogAreeDisciplinariFilter from "./filters/C_DialogAreeDisciplinariFilter";
import U_DialogAccessoFilter from "./filters/U_DialogAccessoFilter";
import { wrap } from "module";

class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addCourseFilter = this.props.addCourseFilter;
    this.addUniFilter = this.props.addUniFilter;
    this.setViewFocus = this.props.setViewFocus;
    this.renderFilters = this.renderFilters.bind(this);
  }

  renderFilters(isUniFocus) {
    //var isUniFocus = this.props.viewFocus === "uni";
    if (isUniFocus) {
      return (
        <div
          className="filterList"
          // NEEDED to make the filter icons stand side-by-side, and automatically goes to new line
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            maxWidth: "100%"
          }}
        >
          <DialogMinStudentFilter addFilter={this.addUniFilter} />
          <DialogSoddisfazioneFilter addFilter={this.addUniFilter} />
          <UniDialogRegionFilter addFilter={this.addUniFilter} />
          <U_DialogAccessoFilter addFilter={this.addUniFilter} />
        </div>
      );
    } else {
      return (
        <div
          className="filterList"
          // NEEDED to make the filter icons stand side-by-side, and automatically goes to new line
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            maxWidth: "100%"
          }}
        >
          <DialogSoddisfazioneFilter addFilter={this.addCourseFilter} />
          <DialogAreeDisciplinariFilter addFilter={this.addCourseFilter} />
          <CourseDialogRegionFilter addFilter={this.addCourseFilter} />
          {
            //Courses don't have student number
            //<DialogMinStudentFilter addFilter={this.addCourseFilter} />
            //Courses don't have a region yet
            //<CourseDialogRegionFilter addFilter={this.addCourseFilter} />
          }
        </div>
      );
    }
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

        {this.renderFilters(isUniFocus)}
      </div>
    );
  }
}

export default NavigatorHeader;
