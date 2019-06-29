import React, { Component } from "react";
import FilteringSlider from "./FilteringSlider";

class NewStudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setUniStudentFilter(lambda) {
    this.props.addUniFilter("nstudent", lambda);
  }
  setCourseStudentFilter(lambda) {
    this.props.addCourseFilter("nstudent", lambda);
  }

  render() {
    return (
      <div className="MaxStudentFilter" style={{ border: "4px solid red" }}>
        <h3>MaxStudentFilter</h3>
        <FilteringSlider
          filterName="max_nstud"
          min="70"
          max="200"
          startVal="200"
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            return u.Info.Iscritti <= this.state.val;
          }}
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
        />
      </div>
    );
  }
}

export default NewStudentFilter;
