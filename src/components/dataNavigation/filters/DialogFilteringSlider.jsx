import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import {
  addCourseFilter,
  addUniFilter,
  removeCourseFilter,
  removeUniFilter,
  addCourseFilterValue,
  addUniFilterValue,
  removeCourseFilterValue,
  removeUniFilterValue
} from "../../../actions";

/*
parameters:
  filterName
  filterTitle
  min
  max
  startVal
  icon
  filteringFunction
  addFilter
  humanReadableDescription
*/

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const mapStateToProps = (state, ownProps) => {
  let filter, localState = {};
  //Will hold the current filter's value (if set) from the state
  let filterValue;
  let allFilters = { ...state.visibilityFilter };
  localState = { viewFocus: allFilters.viewFocus };
  let key = ownProps.filterName;

  if (allFilters.viewFocus === 'uni') {
    filter = allFilters.universities[key];
    filterValue = state.filterValues.universities[key];
  } else {
    filter = allFilters.courses[key];
    filterValue = state.filterValues.courses[key];
  }

  if (filter)
    localState[key] = filter;

  if (filterValue)
    localState[key + "_value"] = filterValue;

  return localState;
};

const mapDispatchToProps = dispatch => {
  return ({
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
    addCourseFilterValue: (name, value) => {
      dispatch(addCourseFilterValue(name, value));
    },
    addUniFilterValue: (name, value) => {
      dispatch(addUniFilterValue(name, value));
    },
    removeCourseFilterValue: (name) => {
      dispatch(removeCourseFilterValue(name));
    },
    removeUniFilterValue: (name) => {
      dispatch(removeUniFilterValue(name));
    },
  })
};

class DialogFilteringSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: 'secondary',
      open: false,
      val:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2,

      numberVal:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2,
    };

    this.filterName = this.props.filterName;
    this.filterValueName = this.filterName + '_value';
    this.filteringFunction = this.props.filteringFunction;

    this.handleChange = this.handleChange.bind(this);
    this.checkFilterStatus = this.checkFilterStatus.bind(this);
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      val: this.props[this.filterValueName] || this.props.startVal,
      numberVal: this.props[this.filterValueName] || this.props.startVal
    });
  };

  checkFilterStatus = () => {
    let key = this.props.filterName;
    if (this.props[key])
      this.enableButton();
    else
      this.disableButton();
  };

  checkFilterValue = () => {
    let key = this.filterValueName;
    if (this.props[key])
      this.setState({
        val: this.props[key],
        numberVal: this.props[key]
      });
    else 
      this.setState({
        val: this.props.startVal,
        numberVal: this.props.startVal
      });
  };

  disableButton = () => {
    this.setState({ buttonStyle: 'secondary' });
  };

  enableButton = () => {
    this.setState({ buttonStyle: 'primary' });
  };

  componentDidMount() {
    this.checkFilterStatus();
    this.checkFilterValue();
    if (this.props.viewFocus === 'uni') {
      this.addFilter = this.props.addUniFilter;
      this.removeFilter = this.props.removeUniFilter;
      this.addFilterValue = this.props.addUniFilterValue;
      this.removeFilterValue = this.props.removeUniFilterValue;
    } else {
      this.addFilter = this.props.addCourseFilter;
      this.removeFilter = this.props.removeCourseFilter;
      this.addFilterValue = this.props.addCourseFilterValue;
      this.removeFilterValue = this.props.removeCourseFilterValue;
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props[this.filterName] !== prevProps[this.filterName])
      this.checkFilterStatus();
    if (this.props[this.filterValueName] !== prevProps[this.filterValueName])
      this.checkFilterValue();
  }

  handleChange(e) {
    if (!e.target.validity.valid) {
      // Update value for number input, but do not use it to filter. Needed to avoid dumb behaviour
      if (e.target.type === "number")
        this.setState({ ...this.state, numberVal: e.target.value });
      return;
    }

    this.setState({ val: e.target.value, numberVal: e.target.value });
  }

  render() {
    return (
      <div className="FilteringSlider">
        <IconButton
          variant="outlined"
          color={this.state.buttonStyle}
          onClick={this.handleClickOpen}
        >
          {this.props.icon}
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle
            id={this.filterName + "-dialog-title"}
            onClose={this.handleClose}
          >
            {this.props.filterTitle}
          </DialogTitle>
          <DialogContent dividers>
            <p>{this.props.humanReadableDescription}</p>
            <p>
              {"Valore: "}
              <input
                type="number"
                id={this.props.filterName + "NumberInput"}
                min={this.props.min}
                max={this.props.max}
                value={this.state.numberVal}
                onInput={this.handleChange}
              />
            </p>
            <p>
              <input
                type="range"
                name={this.props.filterName + "Slider"}
                id={this.props.filterName + "Slider"}
                min={this.props.min}
                max={this.props.max}
                value={this.state.val}
                onChange={this.handleChange}
                style={{ width: "100%" }}
              />
            </p>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.removeFilter(this.filterName);
                this.removeFilterValue(this.filterName);
                this.disableButton();
                this.handleClose();
              }}
              color="primary">
              Rimuovi
            </Button>
            <Button
              onClick={() => {
                this.addFilter(this.filterName, this.filteringFunction.bind(this));
                this.addFilterValue(this.filterName, this.state.val);
                this.enableButton();
                this.handleClose();
              }}
              color="primary">
              Applica
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogFilteringSlider);
