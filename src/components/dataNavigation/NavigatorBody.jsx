import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavigatorBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // You can find here filtered universities
    this.filteredUni = this.props.filteredUni;
    // You can find here filtered courses
    this.filteredCourses = this.props.filteredCourses;
  }
  render() {
    return (
      <div>
        {/** an example of generating Links with our objects */}
        {Object.keys(this.filteredUni).map(id => (
          <Link
            key={id}
            to={{ pathname: "/university/" + id, state: this.filteredUni[id] }}
          >
            <div key={id}>{this.filteredUni[id].name}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default NavigatorBody;
