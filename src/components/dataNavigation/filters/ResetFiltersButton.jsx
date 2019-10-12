import React, { Component } from "react";
import { connect } from "react-redux";

import {
  emptyCourseFilters, 
  emptyUniFilters,
  emptyCourseStringFilters,
  emptyUniStringFilters
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
      this.emptyStringFilters = this.props.emptyUniStringFilters;
    } else {
      this.emptyStringFilters = this.props.emptyCourseStringFilters;
      this.emptyFilters = this.props.emptyCourseFilters;
    }
  }

  render() {
    return (
      <IconButton
        color="primary"
        onClick = {() => {
          this.emptyFilters();
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
