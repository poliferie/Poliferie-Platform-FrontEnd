import React, { Component } from "react";
import FilteringSlider from "./FilteringSlider";

// FILTRO ESEMPIO. SI PUO' CANCELLARE
class MinMaleStudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinMaleStudentFilter" style={{ border: "4px solid red" }}>
        <h3>MinMaleStudentFilter</h3>
        <FilteringSlider
          filterName="min_malestud"
          min="70"
          max="200"
          startVal="70"
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            return u.Info.IscrittiMaschi >= this.state.val;
          }}
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
        />
      </div>
    );
  }
}

export default MinMaleStudentFilter;
