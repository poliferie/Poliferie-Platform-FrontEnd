/* eslint-disable react/jsx-pascal-case */

import React, { Component } from "react";
import { connect } from "react-redux";
//import { wrap } from "module";

//import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//import TextField from "@material-ui/core/TextField";
//import MaxStudentFilter from "./filters/non-dialog/MaxStudentFilter";

import U_DialogMinStudentFilter from "./filters/U_DialogMinStudentFilter";
import U_DialogRegionFilter from "./filters/U_DialogRegionFilter";
import U_DialogAccessoFilter from "./filters/U_DialogAccessoFilter";
//import U_DialogBorseStudioFilter from "./filters/U_DialogBorseStudioFilter";

import U_DialogSoddisfazioneFilter from "./filters/U_DialogSoddisfazioneFilter";
import C_DialogSoddisfazioneFilter from "./filters/C_DialogSoddisfazioneFilter";

import C_DialogRegionFilter from "./filters/C_DialogRegionFilter";
import C_DialogAreeDisciplinariFilter from "./filters/C_DialogAreeDisciplinariFilter";
import C_DialogOccupazioneFilter from "./filters/C_DialogOccupazioneFilter";
import C_DialogStipendioFilter from "./filters/C_DialogStipendioFilter";
import C_DialogInternazionalizzazioneFilter from "./filters/C_DialogInternazionalizzazioneFilter";
import C_DialogLinguaFilter from "./filters/C_DialogLinguaFilter";

import StringLookupFilter from "./filters/StringLookupFilter";
import U_StringLookupFilter from "./filters/U_StringLookupFilter";
import C_StringLookupFilter from "./filters/C_StringLookupFilter";

import FilterStatusButton from "./filters/FilterStatusButton";
import ResetFiltersButton from "./filters/ResetFiltersButton";

const STYLE_RED = {
  borderRadius: "30px",
  backgroundColor: "#EA4242",
  color: "white",
  alignContent: "left",
  paddingLeft: "15px !important",
  border: "0px"

};

const STYLE_WHITE_LEFT = {
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  paddingLeft: "15px !important",
  color: "#CCCCCC"

}

const STYLE_WHITE_RIGHT = {
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
  paddingLeft: "15px !important",
  color: "#CCCCCC"

}

const mapStateToProps = (state) => {
  let viewFocus = state.visibilityFilter.viewFocus;

  return { viewFocus };
};

class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.setViewFocus = this.props.setViewFocus;
    this.renderFilters = this.renderFilters.bind(this);
  }

  renderFilters(isUniFocus) {
    //var isUniFocus = this.props.viewFocus === "uni";
    if (isUniFocus) {
      return (
        <div>
          <U_StringLookupFilter nameSpace='u_navhead_string' />
          <FilterStatusButton divId='uniIcons' />
          <div
            id="uniIcons"
            className="filterList"
            // NEEDED to make the filter icons stand side-by-side, and automatically goes to new line
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              maxWidth: "100%",
              marginTop: "0px"
            }}
          >
            <U_DialogSoddisfazioneFilter />
            <U_DialogRegionFilter />
            <U_DialogAccessoFilter />
            <U_DialogMinStudentFilter />

            <ResetFiltersButton />

          </div>
        </div>
      );
    } else {
      return (
        <div>
          <C_StringLookupFilter nameSpace='c_navhead_string' />
          <FilterStatusButton divId='courseIcons' />
          <div
            id="courseIcons"
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
            <C_DialogSoddisfazioneFilter />
            <C_DialogRegionFilter />
            <C_DialogAreeDisciplinariFilter />
            <C_DialogLinguaFilter />
            <C_DialogOccupazioneFilter />
            <C_DialogStipendioFilter />
            <C_DialogInternazionalizzazioneFilter />

            <ResetFiltersButton />

            {
              //Courses don't have student number
              //<DialogMinStudentFilter addFilter={this.addCourseFilter} />
              //Courses don't have a region yet
              //<CourseDialogRegionFilter addFilter={this.addCourseFilter} />
            }
          </div>
        </div>
      );
    }
  }

  render() {
    var isUniFocus = this.props.viewFocus === "uni" ? true : false;
    return (
      <div className="NavigatorHeader">
        <ButtonGroup fullWidth aria-label="Full width outlined button group" style={{ marginTop: "10px" }}>
          <Button
            disabled={isUniFocus}
            onClick={() => this.setViewFocus("uni")}
            style={isUniFocus ? { ...STYLE_RED, marginRight: "-15px" } : { ...STYLE_WHITE_LEFT, marginRight: "-15px" }}
          >
            Università
              </Button>
          <Button
            disabled={!isUniFocus}
            onClick={() => this.setViewFocus("crs")}
            style={isUniFocus ? { ...STYLE_WHITE_RIGHT } : { ...STYLE_RED }}
          >
            <span style={isUniFocus ? { paddingLeft: "10px" } : {}}>Corsi</span>
          </Button>
        </ButtonGroup>

        {this.renderFilters(isUniFocus)}

      </div>
    );
  }
}

export default connect(
  mapStateToProps
) (NavigatorHeader);
