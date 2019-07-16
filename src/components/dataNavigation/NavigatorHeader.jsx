import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
//import MaxStudentFilter from "./filters/non-dialog/MaxStudentFilter";

import U_DialogMinStudentFilter from "./filters/U_DialogMinStudentFilter";
import U_DialogRegionFilter from "./filters/U_DialogRegionFilter";
import U_DialogAccessoFilter from "./filters/U_DialogAccessoFilter";
//import U_DialogBorseStudioFilter from "./filters/U_DialogBorseStudioFilter";

import DialogSoddisfazioneFilter from "./filters/DialogSoddisfazioneFilter";

import C_DialogRegionFilter from "./filters/C_DialogRegionFilter";
import C_DialogAreeDisciplinariFilter from "./filters/C_DialogAreeDisciplinariFilter";
import C_DialogOccupazioneFilter from "./filters/C_DialogOccupazioneFilter";
import C_DialogStipendioFilter from "./filters/C_DialogStipendioFilter";
import C_DialogInternazionalizzazioneFilter from "./filters/C_DialogInternazionalizzazioneFilter";
import C_DialogLinguaFilter from "./filters/C_DialogLinguaFilter";

import NavHeadFilter from "./filters/NavHeadFilter";

//import { wrap } from "module";

class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addCourseFilter = this.props.addCourseFilter;
    this.addUniFilter = this.props.addUniFilter;
    this.setViewFocus = this.props.setViewFocus;
    this.renderFilters = this.renderFilters.bind(this);
    //this.applySearch = this.applySearch;
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
            maxWidth: "100%",
            marginTop: "10px"
          }}
        >
          <DialogSoddisfazioneFilter addFilter={this.addUniFilter} />
          <U_DialogRegionFilter addFilter={this.addUniFilter} />
          <U_DialogAccessoFilter addFilter={this.addUniFilter} />
          <U_DialogMinStudentFilter addFilter={this.addUniFilter} />
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
            maxWidth: "100%",
            marginTop: "10px"
          }}
        >
          <DialogSoddisfazioneFilter addFilter={this.addCourseFilter} />
          {
            //WARNING Courses don't have a campo regione yet
          }
          <C_DialogRegionFilter addFilter={this.addCourseFilter} />
          <C_DialogAreeDisciplinariFilter addFilter={this.addCourseFilter} />
          <C_DialogLinguaFilter addFilter={this.addCourseFilter} />
          <C_DialogOccupazioneFilter addFilter={this.addCourseFilter} />
          {
            //WARNING Courses don't have a campo stipendio yet
          }
          <C_DialogStipendioFilter addFilter={this.addCourseFilter} />
          <C_DialogInternazionalizzazioneFilter
            addFilter={this.addCourseFilter}
          />
        </div>
      );
    }
  }

  render() {
    var isUniFocus = this.props.viewFocus === "uni" ? true : false;
    return (
      <div className="NavigatorHeader">
        <NavHeadFilter
          addCourseFilter={this.addCourseFilter}
          addUniFilter={this.addUniFilter}
          isUniFocus={isUniFocus}
        />

        <br />

        <ButtonGroup fullWidth aria-label="Full width outlined button group">
          <Button
            disabled={isUniFocus}
            onClick={() => this.setViewFocus("uni")}
          >
            Università
          </Button>
          <Button
            disabled={!isUniFocus}
            onClick={() => this.setViewFocus("crs")}
          >
            Corsi
          </Button>
        </ButtonGroup>

        {this.renderFilters(isUniFocus)}
      </div>
    );
  }
}

export default NavigatorHeader;
