import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
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
            maxWidth: "100%"
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
            maxWidth: "100%"
          }}
        >
          <DialogSoddisfazioneFilter addFilter={this.addCourseFilter} />
          <C_DialogRegionFilter addFilter={this.addCourseFilter} />
          <C_DialogAreeDisciplinariFilter addFilter={this.addCourseFilter} />
          <C_DialogLinguaFilter addFilter={this.addCourseFilter} />
          <C_DialogOccupazioneFilter addFilter={this.addCourseFilter} />
          <C_DialogStipendioFilter addFilter={this.addCourseFilter} />
          <C_DialogInternazionalizzazioneFilter
            addFilter={this.addCourseFilter}
          />
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

  applySearch(e, isUniFocus) {
    if (e.key !== "Enter") return;

    console.log("NAVHEAD STRIING", e, e.target);

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
  }

  render() {
    var isUniFocus = this.props.viewFocus === "uni" ? true : false;
    return (
      <div className="NavigatorHeader">
        <input
          type="text"
          name="search"
          id="search"
          style={{width:"96%", height:'20px', margin:"5px 0px 10px 0px", border: "1px solid rgba(0, 0, 0, 0.23)", borderRadius:"5px", padding:"10px", fontSize:"15px"}}
          placeholder={ isUniFocus ? "Cerca università per nome o descrizione" : "Cerca corsi per nome o descrizione o professioni"}
          /*onKeyDown={e => {
            if (e.key !== "Enter") return;

            console.log("NAVHEAD STRIIING", e, e.target);

            if (isUniFocus) {
              this.addUniFilter("navhead", elem => {
                if (((e.target || {}).value || {}).length <= 0) return true;
                return elem.Info.NomeEsteso.indexOf((e.target || {}).value) > 0;
              });
            } else {
              this.addCourseFilter("navhead", elem => {
                if (((e.target || {}).value || {}).length <= 0) return true;
                return elem.Info.NomeEsteso.indexOf((e.target || {}).value) > 0;
              });
            }
          }}*/
          //onKeyPress={e => this.applySearch(e, isUniFocus)}
        />

        <br />

          <ButtonGroup fullWidth aria-label="Full width outlined button group">
              <Button disabled={isUniFocus} onClick={() => this.setViewFocus("uni")}>Università</Button>
              <Button disabled={!isUniFocus} onClick={() => this.setViewFocus("crs")} >Corsi</Button>
          </ButtonGroup>



        {this.renderFilters(isUniFocus)}
      </div>
    );
  }
}

export default NavigatorHeader;
