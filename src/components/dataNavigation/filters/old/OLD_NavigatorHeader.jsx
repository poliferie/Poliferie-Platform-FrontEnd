import React, { Component } from "react";
import MaxStudentFilter from "./filters/non-dialog/MaxStudentFilter";
import DialogMinStudentFilter from "./filters/DialogMinStudentFilter";
import DialogRegionFilter from "./filters/DialogRegionFilter";
import DialogSoddisfazioneFilter from "./filters/DialogSoddisfazioneFilter";
import DialogAreeDisciplinariFilter from "./filters/DialogAreeDisciplinariFilter";
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

  renderFilters() {
    var isUniFocus = this.props.viewFocus === "uni";
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
          <DialogMinStudentFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogSoddisfazioneFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogAreeDisciplinariFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogRegionFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
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
          <DialogMinStudentFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogSoddisfazioneFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogAreeDisciplinariFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogRegionFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
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
          <DialogMinStudentFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogSoddisfazioneFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogAreeDisciplinariFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
          <DialogRegionFilter
            addCourseFilter={this.addCourseFilter}
            addUniFilter={this.addUniFilter}
          />
        </div>
      </div>
    );
  }
}

export default NavigatorHeader;
