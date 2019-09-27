import React, { Component } from "react";
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

const STYLE_RED = {
    borderRadius:"30px",
    backgroundColor:"#EA4242",
    color:"white",
    alignContent:"left",
    paddingLeft: "15px !important",
    border:"0px"

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

class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addCourseFilter = this.props.addCourseFilter;
    this.addUniFilter = this.props.addUniFilter;
    this.removeCourseFilter = this.props.removeCourseFilter;
    this.removeUniFilter = this.props.removeUniFilter;
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
            maxWidth: "100%",
            marginTop: "0px"
          }}
        >
          <U_DialogSoddisfazioneFilter addFilter={this.addUniFilter} removeFilter={this.removeUniFilter} /> 
          <U_DialogRegionFilter addFilter={this.addUniFilter} removeFilter={this.removeUniFilter} />
          <U_DialogAccessoFilter addFilter={this.addUniFilter} removeFilter={this.removeUniFilter} />
          <U_DialogMinStudentFilter addFilter={this.addUniFilter} removeFilter={this.removeUniFilter} />
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
          <C_DialogSoddisfazioneFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter} />
          <C_DialogRegionFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter}/>
          <C_DialogAreeDisciplinariFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter}/>
          <C_DialogLinguaFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter}/>
          <C_DialogOccupazioneFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter}/>
          <C_DialogStipendioFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter}/>
          <C_DialogInternazionalizzazioneFilter addFilter={this.addCourseFilter} removeFilter={this.removeCourseFilter} />
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

  /*applySearch(e, isUniFocus) {
    if (e.key !== "Enter") return;

    if (isUniFocus) {
      this.addUniFilter("navhead_string", elem => {
        if (((e.target || {}).value || {}).length <= 0) return true;
        //return elem.Info.NomeEsteso.indexOf((e.target || {}).value) > 0;
        return elem.Info.NomeEsteso.includes((e.target || {}).value);
      });
    } else {
      this.addCourseFilter("navhead_string", elem => {
        if (((e.target || {}).value || {}).length <= 0) return true;
        //return elem.Info.NomeEsteso.indexOf((e.target || {}).value) > 0;
        return elem.Info.NomeEsteso.includes((e.target || {}).value);
      });
    }
  }*/

  render() {
    var isUniFocus = this.props.viewFocus === "uni" ? true : false;
    return (
      <div className="NavigatorHeader">
          <ButtonGroup fullWidth aria-label="Full width outlined button group" style={{marginTop:"10px"}}>
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
                  <span style={isUniFocus ? {paddingLeft:"10px"}:{}}>Corsi</span>
              </Button>
          </ButtonGroup>
          <StringLookupFilter
              addCourseFilter={this.addCourseFilter}
              addUniFilter={this.addUniFilter}
              isUniFocus={isUniFocus}
          />

        {this.renderFilters(isUniFocus)}
      </div>
    );
  }
}

export default NavigatorHeader;
