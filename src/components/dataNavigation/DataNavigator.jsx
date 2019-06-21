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
  var filteredUni = { ...state.universities };
  var filteredCourses = state.courses;

  //Filter universities
  for (var filterName in state.visibilityFilter.universities) {
    console.log("!!!fname:", state.visibilityFilter.universities[filterName]);
    filteredUni = filter(
      filteredUni,
      state.visibilityFilter.universities[filterName]
    );
    console.log("filtered uni:", filteredUni);
  }
  //Filter courses
  for (var filterName1 in state.visibilityFilter.courses) {
    filteredCourses = filter(
      filteredCourses,
      state.visibilityFilter.courses[filterName1]
    );
  }
  var ret = {
    rdxState: state,
    filteredUni: filteredUni,
    filteredCourses: filteredCourses
  };
  return ret;
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
    console.log("the DataNavigator constructor is being called");
  }
  render() {
    console.log("the DataNavigator render() is being called");

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
