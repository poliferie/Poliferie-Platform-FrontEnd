import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCourse,
  addUniversity,
  addCourseFilter,
  addUniFilter,
  removeCourseFilter,
  removeUniFilter,
  toggleViewFocus,
  emptyUniFilters,
  emptyCourseFilters
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

  var HOWMANY = 150,
    c = 1,
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
const mapDispatchToProps = dispatch => {
  return ({
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
    },
    removeCourseFilter: (name) => {
      dispatch(removeCourseFilter(name));
    },
    removeUniFilter: (name) => {
      dispatch(removeUniFilter(name));
    },
    toggleViewFocus: elem => {
      dispatch(toggleViewFocus(elem));
    },
    //Testing
    emptyUniFilters: () => {
      dispatch(emptyUniFilters());
    },
    emptyCourseFilters: () => {
      dispatch(emptyCourseFilters());
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
      <div className="DataNavigator">
        <NavigatorHeader
          setViewFocus={this.props.toggleViewFocus}
          viewFocus={this.props.rdxState.visibilityFilter.viewFocus}
          /*TODO pass dispatch functions to nested components in a better way (React context/connect())
            using mapStateToProps and mapDispatchToProps in DialogChoices/FilteringSlider to dispatch*/
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
          removeCourseFilter={this.props.removeCourseFilter}
          removeUniFilter={this.props.removeUniFilter}
          //FIXME Only for testing
          emptyUniFilters={this.props.emptyUniFilters}
          emptyCourseFilters={this.props.emptyCourseFilters}
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
