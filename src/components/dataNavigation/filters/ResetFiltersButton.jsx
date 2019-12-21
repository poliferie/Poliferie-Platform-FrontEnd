import React, { Component } from "react";
import { connect } from "react-redux";

import {
  emptyCourseFilters, 
  emptyUniFilters,
  emptyCourseStringFilters,
  emptyUniStringFilters,
  emptyCourseFilterValues,
  emptyUniFilterValues
} from "../../../actions";

import IconButton from "@material-ui/core/IconButton";
import HighlightOff from "@material-ui/icons/HighlightOff";

const mapStateToProps = state => {
  let filters = { ...state.visibilityFilter};
  let viewFocus = filters.viewFocus;
  return {viewFocus};
}

const mapDispatchToProps = dispatch => {
  return ({
    emptyCourseFilters: () => {
      dispatch(emptyCourseFilters());
    },
    emptyUniFilters: () => {
      dispatch(emptyUniFilters());
    },
    emptyCourseStringFilters: () => {
      dispatch(emptyCourseStringFilters());
    },
    emptyUniStringFilters: () => {
      dispatch(emptyUniStringFilters());
    },
    emptyCourseFilterValues: () => {
      dispatch(emptyCourseFilterValues());
    },
    emptyUniFilterValues: () => {
      dispatch(emptyUniFilterValues());
    }
  });
};

class ResetFiltersButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if(this.props.viewFocus === 'uni') {
      this.emptyFilters = this.props.emptyUniFilters;
      this.emptyFilterValues = this.props.emptyUniFilterValues;
      this.emptyStringFilters = this.props.emptyUniStringFilters;
    } else {
      this.emptyFilters = this.props.emptyCourseFilters;
      this.emptyFilterValues = this.props.emptyCourseFilterValues;
      this.emptyStringFilters = this.props.emptyCourseStringFilters;
    }
  }

  render() {
    return (
      <IconButton
        color="primary"
        onClick = {() => {
          this.emptyFilters();
          this.emptyFilterValues();
          //this.emptyStringFilters();
        }}
      >
        <HighlightOff />
      </IconButton>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetFiltersButton);
