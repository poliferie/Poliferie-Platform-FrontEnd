import React, { Component } from "react";

class StudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  setUniStudentFilter(lambda) {
    this.props.addUniFilter("nstudent", lambda);
  }
  setCourseStudentFilter(lambda) {
    this.props.addCourseFilter("nstudent", lambda);
  }

  handleChange(e) {
    console.log("changed val");
    this.setState({ val: e.target.value });
    this.setUniStudentFilter(u => {
      return u.Info.Iscritti > this.state.val;
    });
  }

  render() {
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
