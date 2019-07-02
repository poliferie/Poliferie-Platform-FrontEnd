import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";

class DialogMinStudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinStudentFilter">
        <DialogFilteringSlider
          filterName="min_nstud"
          filterTitle="Numero minimo di iscritti"
          min="70"
          max="200"
          startVal="70"
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            return u.Info.Iscritti >= this.state.val;
          }}
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
        />
      </div>
    );
  }
}

export default DialogMinStudentFilter;
