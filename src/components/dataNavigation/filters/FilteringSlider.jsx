import React, { Component } from "react";
import { thisExpression } from "@babel/types";

class FilteringSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2
    };

    this.filterName = this.props.filterName;
    this.handleChange = this.handleChange.bind(this);
    //this.filteringFunction = this.props.filteringFunction.bind(this);

    //console.dir(this);
  }

  setUniStudentFilter(lambda) {
    this.props.addUniFilter(this.filterName, lambda);
  }
  setCourseStudentFilter(lambda) {
    this.props.addCourseFilter(this.filterName, lambda);
  }

  handleChange(e) {
    console.log(this.props.filterName + " changed val: " + e.target.value);
    this.setState({ val: e.target.value }, () => {
      //console.log("In the callback:");
      //console.dir(this.state);
      this.setUniStudentFilter(this.props.filteringFunction.bind(this));
    });

    //console.log("NOT callback:");
    //console.dir(this.state);
  }

  render() {
    return (
      <div className="FilteringSlider">
        <p>Value: {this.state.val}</p>
        <input
          type="range"
          name={this.props.filterName}
          id={this.props.filterName}
          min={this.props.min}
          max={this.props.max}
          value={this.state.val}
          onChange={this.handleChange}
        />
        <br />
        <button
          onClick={() => {
            console.log(this.props.filterName + " removed");
            this.setUniStudentFilter(e => true);
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default FilteringSlider;
