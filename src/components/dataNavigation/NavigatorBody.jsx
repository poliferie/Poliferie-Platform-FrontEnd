import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavigatorBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // You can find here filtered universities
    var filteredUni = this.props.filteredUni;
    // You can find here filtered courses
    var filteredCourses = this.props.filteredCourses;

    return (
      <div className="navigator-body">
        <div className="filtered-uni">
          <h2>UNIVERSITIES</h2>
          {Object.keys(filteredUni).map(id => (
            <Link
              key={id}
              to={{ pathname: "university/" + id, state: filteredUni[id] }}
            >
              {JSON.stringify(filteredUni[id])}
            </Link>
          ))}
        </div>
        <div className="filtered-courses">
          <h2>COURSES</h2>
          {Object.keys(filteredCourses).map(id => (
            <Link
              key={id}
              to={{ pathname: "course/" + id, state: filteredCourses[id] }}
            >
              {JSON.stringify(filteredCourses[id])}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default NavigatorBody;
