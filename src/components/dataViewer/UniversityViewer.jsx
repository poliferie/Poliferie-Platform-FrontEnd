import React, { Component } from "react";

class UniversityViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // Shorthand for uni id
    this.id = this.props.match.params.id;
    // but I've figured out a way to directly pass elem to be shown
    // that will be enough for all our use-cases.
    this.elem = this.props.location.state;
  }
  render() {
    return (
      <div>
        <div>{this.id}</div>
        <div>{JSON.stringify(this.elem)}</div>
      </div>
    );
  }
}

export default UniversityViewer;
