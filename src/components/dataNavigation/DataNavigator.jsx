import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCourse,
  addUniversity,
  toggleViewFocus
} from "../../actions";

import NavigatorBody from "./NavigatorBody";
import NavigatorHeader from "./NavigatorHeader";

function filter(obj, predicate) {
  var result = {},
    key;

  for (key in obj) {
    if (obj.hasOwnProperty(key) && typeof(predicate) === 'function' && predicate(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}

/** REDUX STATE-TO-PROPS DEFINITION */
const mapStateToProps = state => {
  //The two variables contain all the uni/courses
  var filteredUni = { ...state.universities };
  var filteredCourses = { ...state.courses };

  //Filter universities
  for (var uniFilter in state.visibilityFilter.universities) {
    filteredUni = filter(
      filteredUni,
      state.visibilityFilter.universities[uniFilter]
    );
  }

  //Filter courses
  for (var courseFilter in state.visibilityFilter.courses) {
    filteredCourses = filter(
      filteredCourses,
      state.visibilityFilter.courses[courseFilter]
    );
  }

  //TODO Create a single object containing all the filters from visibility/stringFilters, to avoid iterating twice
  //Filter universities by stringFilters
  for (var uniStringFilter in state.stringFilters.universities) {
    filteredUni = filter(
      filteredUni,
      state.stringFilters.universities[uniStringFilter].filter
    );
  }

  //Filter courses by stringFilters
  for (var courseStringFilter in state.stringFilters.courses) {
    filteredCourses = filter(
      filteredCourses,
      state.stringFilters.courses[courseStringFilter].filter
    );
  }

  /* var HOWMANY = 250,
    c = 1,
    _filteredCourses = {};
  for (var key in filteredCourses) {
    if (c > HOWMANY) break;
    c += 1;
    _filteredCourses[key] = filteredCourses[key];
  }
  */


  var ret = {
    rdxState: state,
    filteredUni: filteredUni,
    filteredCourses: filteredCourses
  };
  return ret;
};

/** REDUX DISPATCH-TO-PROPS DEFINITION */
const mapDispatchToProps = dispatch => {
  return ({
    dispatch: dispatch,
    addCourse: elem => {
      dispatch(addCourse(elem));
    },
    addUniversity: elem => {
      dispatch(addUniversity(elem));
    },
    toggleViewFocus: elem => {
      dispatch(toggleViewFocus(elem));
    }
  });
};

/** COMPONENT DEFINITION */
class DataNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="DataNavigator" >
        <NavigatorHeader
          setViewFocus={this.props.toggleViewFocus}
          viewFocus={this.props.rdxState.visibilityFilter.viewFocus}
        />
        <NavigatorBody
          viewFocus={this.props.rdxState.visibilityFilter.viewFocus}
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
