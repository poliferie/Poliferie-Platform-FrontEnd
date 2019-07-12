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
    filteredUni = filter(
      filteredUni,
      state.visibilityFilter.universities[filterName]
    );
  }

  //Filter courses
  for (var filterName1 in state.visibilityFilter.courses) {
    filteredCourses = filter(
      filteredCourses,
      state.visibilityFilter.courses[filterName1]
    );
  }

  var HOWMANY = 50,
    c = 0,
    _filteredCourses = {};
  for (var key in filteredCourses) {
    if (c > HOWMANY) break;
    c += 1;
    _filteredCourses[key] = filteredCourses[key];
  }

  var ret = {
    rdxState: state,
    filteredUni: filteredUni,
    filteredCourses: _filteredCourses
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
    this.state = { viewFocus: "uni" };

    this.setViewFocus = this.setViewFocus.bind(this);
  }

  setViewFocus(f) {
    this.setState({ ...this.state, viewFocus: f });
  }

  render() {
    return (
      <div className="DataNavigator">
        <NavigatorHeader
          setViewFocus={this.setViewFocus}
          viewFocus={this.state.viewFocus}
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
        />
        <NavigatorBody
          viewFocus={this.state.viewFocus}
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
