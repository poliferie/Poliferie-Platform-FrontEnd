import React, { Component } from "react";

class StudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  setUniStudentFilter(f) {
    this.props.addUniFilter("nstudent", f);
  }
  setCourseStudentFilter(f) {
    this.props.addCourseFilter("nstudent", f);
  }

  handleChange(e) {
    console.log("changed val");
    this.setState({ val: e.target.value });
    this.setUniStudentFilter(u => {
      return u.students > this.state.val;
    });
  }

  render() {
    console.log("rendered");
    return (
      <div className="StudentFilter" style={{ border: "4px solid red" }}>
        <p>Student Filter value {this.state.val}</p>
        <input
          type="range"
          name="nstud"
          id="nstud"
          min="70"
          max="200"
          value={this.state.val}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={() => this.setUniStudentFilter(e => true)}>
          Remove
        </button>
      </div>
    );
  }
}

export default StudentFilter;
