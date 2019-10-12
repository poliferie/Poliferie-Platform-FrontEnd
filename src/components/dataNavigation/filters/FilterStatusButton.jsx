import React, { Component } from "react";
import { connect } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import FilterList from "@material-ui/icons/FilterList";

const mapStateToProps = state => {
  let filters = { ...state.visibilityFilter };
  let courses = filters.courses;
  let universities = filters.universities
  let viewFocus = filters.viewFocus;

  return {
    courses: courses,
    universities: universities,
    viewFocus: viewFocus
  };
}

class FilterStatusButton extends Component {
  constructor(props) {
    super(props);
    this.state = { filterStatus: 'secondary' };

    this.handleClick = this.handleClick.bind(this);
  }

  //FIXME Hiding/showing causes both uni/crs view to hide BOTH the containing div(s)
  handleClick() {
    let divElement = document.getElementById(this.props.divId);
    if (divElement.style.display !== 'none')
      divElement.style.display = 'none';
    else
      divElement.style.display = 'flex';
  };

  componentDidUpdate(prevProps) {
    if(this.props.viewFocus === 'uni')
      if(this.props.universities !== prevProps.universities)
        this.checkFilters();
      else if(this.props.courses !== prevProps.courses)
        this.checkFilters();
  }

  checkFilters() {
    let filterStatus = 'secondary';
    if (this.props.viewFocus === 'uni')
      if (Object.entries(this.props.universities).length > 0)
        filterStatus = 'primary';
      else
        filterStatus = 'secondary';
    else
      if (Object.entries(this.props.courses).length > 0)
        filterStatus = 'primary';
      else
        filterStatus = 'secondary';
    this.setState({ filterStatus: filterStatus });
  };

  render() {
    return (
      <IconButton
        //TODO Has to check if at least one active filter, hide a div (new component?) with filters (how?)
        color={this.state.filterStatus}
        onClick={this.handleClick}
      >
        <FilterList />
      </IconButton>
    );
  };
}

export default connect(
  mapStateToProps
)(FilterStatusButton);
