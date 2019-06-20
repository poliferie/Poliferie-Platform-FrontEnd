import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCourse,
  addUniversity,
  addCourseFilter,
  addUniFilter
} from "../../actions";

import NavigatorBody from "./NavigatorBody";
import NavigatorHeader from "./NavigatorHeader";

function filter(obj, predicate) {
  var result = {},
    key;

  for (key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}

/** REDUX STATE-TO-PROPS DEFINITION */
const mapStateToProps = state => {
  var filteredUni = state.universities;
  var filteredCourses = state.courses;

  //Filter universities
  for (var filterName in state.visibilityFilter.universities) {
    filteredUni = filter(
      state.universities,
      state.visibilityFilter.universities[filterName]
    );
  }
  //Filter courses
  for (var filterName in state.visibilityFilter.courses) {
    filteredCourses = filter(
      state.courses,
      state.visibilityFilter.courses[filterName]
    );
  }

  return {
    rdxState: state,
    filteredUni: filteredUni,
    filteredCourses: filteredCourses
  };
};

/** REDUX DISPATCH-TO-PROPS DEFINITION */
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  addCourse: elem => {
    dispatch(addCourse(elem));
  },
  addUniversity: elem => {
    dispatch(addUniversity(elem));
  },
  addCourseFilter: (name, elem) => {
    dispatch(addCourseFilter(name, elem));
  },
  addUniFilter: (name, elem) => {
    dispatch(addUniFilter(name, elem));
  }
});

/** COMPONENT DEFINITION */
class DataNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("navigator dispatch", this.props.dispatch);
  }
  render() {
    return (
      <div className="DataNavigator">
        <NavigatorHeader
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
        />
        <NavigatorBody
          filteredUni={this.props.filteredUni}
          filteredCourses={this.props.filteredCourses}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataNavigator);
