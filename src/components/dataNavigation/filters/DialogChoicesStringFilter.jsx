import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
//import { isPipelinePrimaryTopicReference } from "@babel/types";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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
  Props to pass:
  choices
  choicesDisplayedNames
  filterName
  filterTitle
  icon
  filterType in {"and", "or"}
  filterAttribute
  filterAttributePath "Info.Region" to access elem.Info.Region
  addFilter
  humanReadableDescription



  OLD addUniFilter
  OLD addCourseFilter
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
  localState = {viewFocus: allFilters.viewFocus};
  let key = ownProps.filterName;
  
  if(allFilters.viewFocus === 'uni') {
    filter = allFilters.universities[key];
    filterValue = state.filterValues.universities[key];
  } else {
    filter = allFilters.courses[key];
    filterValue = state.filterValues.courses[key];
  }

  if(filter)
    localState[key] = filter;

  if(filterValue)
    localState[key + "_value"] = filterValue;

  return localState;
};

const mapDispatchToProps = dispatch => {
  return({
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
    }
  })
};

class DialogChoicesStringFilter extends Component {
  constructor(props) {
    super(props);

    this.choices = this.props.choices;

    let s = { 
      open: false,
      buttonStyle: 'secondary'
    };

    this.choices.forEach(choice => {
      s[choice] = false;
      
    });

    this.state = s;

    if (this.props.choicesDisplayedNames) {
      this.choicesDisplayedNames = this.props.choicesDisplayedNames;
    } else {
      this.choicesDisplayedNames = this.choices;
    }

    this.setFilter = this.setFilter.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.applyFilter = this.applyFilter.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.selectNone = this.selectNone.bind(this);

    this.filterAttributePath = "e." + this.props.filterAttributePath;

    this.filterName = this.props.filterName;
    this.filterValueName = this.filterName + '_value';
    this.filterTitle = this.props.filterTitle;
    this.filterType = this.props.filterType;
    this.filterAttribute = this.props.filterAttribute;

    this.icon = this.props.icon;
    this.humanReadableDescription = this.props.humanReadableDescription;
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    if(this.props[this.filterValueName])
      this.copyFilterValuesIntoState(this.props[this.filterValueName]);
    else
      this.setDefaultFilterValues();

    this.setState({ open: false });
  };

  checkFilterStatus = () => {
    let key = this.props.filterName;
    if(this.props[key])
      this.enableButton();
    else
      this.disableButton();
  };

  checkFilterValue = () => {
    let key = this.filterValueName;
    if (this.props[key])
      this.copyFilterValuesIntoState(this.props[key])
    else 
      this.setDefaultFilterValues();
  };

  setDefaultFilterValues = () => {
    this.choices.forEach(choice => {
      this.setState({ [choice]: false });
    });
  };

  copyFilterValuesIntoState = (propsValues) => {
    this.choices.forEach(choice => {
      this.setState({ [choice]: propsValues[choice] });
    });
  };

  getStateFilterValues = () => {
    let result = {};

    this.choices.forEach(choice => {
      result[choice] = this.state[choice];
    })

    return result;
  };

  disableButton = () => {
    this.setState({buttonStyle: 'secondary'});
  };

  enableButton = () => {
    this.setState({buttonStyle: 'primary'});
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
    if(this.props[this.filterName] !== prevProps[this.filterName])
      this.checkFilterStatus();
    if(this.props[this.filterValueName] !== prevProps[this.filterValueName])
      this.checkFilterValue();
  }

  setFilter(f) {
    this.addFilter(this.filterName, f);
  }

  // Filters @elem considering each @clause elem set to true as an OR string-clause
  // on the attribute @attr of @elem
  // At least one @clause set to true has to be contained into @elem[@attr],
  // otherwise false is returned
  // If @clause has no elems true is returned
  filterElemOrClause(elem, clause, attr) {
    // If @clause has no elements set to true we assume filter still not set
    // hence we still allow all elements.
    if (
      Object.keys(clause).length === 0 ||
      !Object.keys(clause).reduce((res, key) => {
        if (res === true) {
          return true;
        }
        if (clause[key] === true) {
          return true;
        }
        return false;
      }, false)
    ) {
      return true;
    }

    // Return True if at least one clause is satisfied
    return Object.keys(clause).reduce((res, key) => {
      if (res === true) return true;

      if (clause[key] === true && elem[attr].indexOf(key) >= 0) {
        return true;
      }
      return false;
    }, false);
  }

  // Filters @elem considering each @clause elem set to true as an AND string-clause
  // on the attribute @attr of @elem
  // All the @clause-s set to true has to be  contained into@elem[attr]
  filterElemAndClause(elem, clause, attr) {
    console.log("filter and", elem, clause, attr);

    if (
      Object.keys(clause).reduce((res, key) => {
        // If some clause has already failed return failure.
        if (res === false) {
          return false;
        }
        // If clause[key] is enabled and it isn't contained into the elem[attr] we
        // then return failure.
        if (clause[key] === true && elem[attr].indexOf(key) < 0) {
          return false;
        }
        // Clause succeeded, return success.
        return true;
      }, true)
    ) {
      //accepted
      return true;
    }
    //refused
    return false;
  }

  // Called onClick of @elem, first toggles the this.state of @elem and updates
  // the filters
  itemClick(event) {
    var state = { ...this.state };
    // Switch state for the target of event
    //state[event.target.innerText] = !this.state[event.target.innerText];

    var keyToUse =
      event.target.getAttribute("entrykey") ||
      event.target.parentElement.getAttribute("entrykey");

    state[keyToUse] = !this.state[keyToUse];

    this.setState(state);
  }

  handleCheckboxChange(event) {
    var state = { ...this.state };
    // Switch state for the target of event
    var e = event.target.getAttribute("parentitem");
    state[e] = !state[e];

    this.setState(state);
  }

  selectAll() {
    var state = { ...this.state };
    Object.keys(state).forEach(key => {
      if (key !== "open" && key !== "buttonStyle") state[key] = true;
    });

    this.setState(state);
    //this.setUniStringFilter(e => true);
  }

  selectNone() {
    var state = { ...this.state };
    Object.keys(state).forEach(key => {
      if (key !== "open" && key !== "buttonStyle") state[key] = false;
    });

    this.setState(state);
    //this.setUniStringFilter(e => true);
  }

  applyFilter() {
    // filters all uni elements @e by "name" attribute with state as a clause
    var filterAttributePath = this.filterAttributePath;
    //TODO Change eval functions to something that does not generate warnings
    this.setFilter(e =>
      this.filterType === "and"
        ? this.filterElemAndClause(
            eval(filterAttributePath),
            //e.Info,
            this.state,
            this.filterAttribute
          )
        : this.filterElemOrClause(
            eval(filterAttributePath),
            //e.Info,
            this.state,
            this.filterAttribute
          )
    );
  }

  render() {
    return (
      <div className="FilteringSlider">
        <IconButton
          variant="outlined"
          color={this.state.buttonStyle}
          onClick={this.handleClickOpen}
        >
          {this.icon}
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
            {this.filterTitle}
          </DialogTitle>
          <DialogContent dividers>
            <p>{this.humanReadableDescription}</p>
            <List component="nav">
              {this.choices.map((r, index) => {
                return (
                  <ListItem
                    button
                    onClick={this.itemClick}
                    key={r}
                    entrykey={r}
                  >
                    <ListItemText
                      primary={this.choicesDisplayedNames[index]}
                      entrykey={r}
                    />
                    <ListItemSecondaryAction>
                      <Checkbox
                        color="primary"
                        edge="end"
                        //onClick={this.itemClick}
                        onClick={this.handleCheckboxChange}
                        checked={this.state[r]}
                        inputProps={{ parentitem: r }}
                        key={r}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.selectAll} color="primary">
              Tutto
            </Button>
            <Button onClick={this.selectNone} color="primary">
              Nessuno
            </Button>
          </DialogActions>
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
                  this.applyFilter();
                  this.addFilterValue(this.filterName, this.getStateFilterValues());
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
)(DialogChoicesStringFilter);
