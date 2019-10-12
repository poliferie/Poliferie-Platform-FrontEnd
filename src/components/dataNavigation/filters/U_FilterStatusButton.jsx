import React, { Component } from "react";
import { connect } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import FilterList from "@material-ui/icons/FilterList";

const mapStateToProps = state => {
  let universities = { ...state.visibilityFilter.universities };
  let viewFocus = state.visibilityFilter.viewFocus;

  return {
    uniFilters: universities,
    viewFocus: viewFocus
  };
}

class U_FilterStatusButton extends Component {
  constructor(props) {
    super(props);
    this.state = { filterStatus: 'secondary' };

    this.handleClick = this.handleClick.bind(this);
  }

  //FIXME Hiding/showing causes both uni/crs view to hide BOTH the containing div(s)
  handleClick() {
    //let divElement = document.getElementById(this.props.divId);
    let divElement = document.getElementById('uniIcons');

    if (divElement.style.display !== 'none')
      divElement.style.display = 'none';
    else
      divElement.style.display = 'flex';
  };

  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.uniFilters).length !== Object.keys(prevProps.uniFilters).length)
      this.checkFilters();
  };

  componentDidMount() {
    this.checkFilters();
  };

  checkFilters() {
    let filterStatus = 'secondary';

    if (Object.entries(this.props.uniFilters).length > 0)
      filterStatus = 'primary';
    else
      filterStatus = 'secondary';

    this.setState({ filterStatus: filterStatus });
  };

  render() {
    return (
      <IconButton
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
)(U_FilterStatusButton);
