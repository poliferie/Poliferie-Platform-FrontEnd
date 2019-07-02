import React, { Component } from "react";
import FilteringSlider from "./FilteringSlider";

class MinStudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinStudentFilter" style={{ border: "4px solid red" }}>
        <h3>MinStudentFilter</h3>
        <FilteringSlider
          filterName="min_nstud"
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

export default MinStudentFilter;
