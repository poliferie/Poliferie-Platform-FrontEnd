import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { isPipelinePrimaryTopicReference } from "@babel/types";
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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

/*
  Props to pass:
  choices
  filterName
  filterTitle
  icon
  filterType in {"and", "or"}
  filterAttribute
  filterAttributePath "Info.Region" to access elem.Info.Region
  addFilter



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

class DialogChoicesStringFilter extends Component {
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  constructor(props) {
    super(props);

    //this.choices = ["uni", "sap", "torv", "roma3"];
    this.choices = this.props.choices;

    var s = { open: false };
    this.choices.forEach(choice => {
      s[choice] = false;
    });
    this.state = s;

    //this.setUniStringFilter = this.setUniStringFilter.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.applyFilter = this.applyFilter.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.selectNone = this.selectNone.bind(this);
    this.removeFilter = this.removeFilter.bind(this);

    this.filterAttributePath = "e." + this.props.filterAttributePath;
    console.log(
      this.props.filterName +
        " FilterAttributePath: " +
        this.filterAttributePath
    );

    console.log("DialogChoicesStringFilter");
    console.log(this.props);

    //this.filteringFunction = this.props.filteringFunction.bind(this);
  }

  setFilter(f) {
    this.props.addFilter(this.filterName, f);
  }

  /*
  setUniStringFilter(f) {
    this.props.addUniFilter(this.filterName, f);
  }
  setCourseStringFilter(f) {
    this.props.addCourseFilter(this.filterName, f);
  }
  */

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
      console.log("accepted");
      return true;
    }
    console.log("refused");
    return false;
  }

  // Called onClick of @elem, first toggles the this.state of @elem and updates
  // the filters
  itemClick(event) {
    var state = { ...this.state };
    // Switch state for the target of event
    state[event.target.innerText] = !this.state[event.target.innerText];

    this.setState(state, () => console.log(this.state));
  }

  handleCheckboxChange(event) {
    var state = { ...this.state };
    // Switch state for the target of event
    var e = event.target.getAttribute("parentitem");
    state[e] = !state[e];

    this.setState(state, () => console.log(this.state));
  }

  selectAll() {
    var state = { ...this.state };
    Object.keys(state).forEach(key => {
      if (key !== "open") state[key] = true;
    });

    this.setState(state);
    //this.setUniStringFilter(e => true);
  }

  selectNone() {
    var state = { ...this.state };
    Object.keys(state).forEach(key => {
      if (key !== "open") state[key] = false;
    });

    this.setState(state);
    //this.setUniStringFilter(e => true);
  }

  /*
  removeFilter() {
    this.setUniStringFilter(e => true);
  }*/

  removeFilter() {
    this.setFilter(e => true);
  }

  /*
  applyFilter() {
    // filters all uni elements @e by "name" attribute with state as a clause
    this.setUniStringFilter(e =>
      this.props.filterType === "and"
        ? this.filterElemAndClause(
            e.Info,
            this.state,
            this.props.filterAttribute
          )
        : this.filterElemOrClause(
            e.Info,
            this.state,
            this.props.filterAttribute
          )
    );
  }
  */

  applyFilter() {
    // filters all uni elements @e by "name" attribute with state as a clause
    var filterAttributePath = this.filterAttributePath;
    //console.log(eval(inputElement));
    this.setFilter(e =>
      this.props.filterType === "and"
        ? this.filterElemAndClause(
            eval(filterAttributePath),
            //e.Info,
            this.state,
            this.props.filterAttribute
          )
        : this.filterElemOrClause(
            eval(filterAttributePath),
            //e.Info,
            this.state,
            this.props.filterAttribute
          )
    );
  }

  render() {
    return (
      <div className="FilteringSlider">
        <IconButton
          variant="outlined"
          color="secondary"
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
            <List component="nav">
              {this.choices.map(r => {
                return (
                  <ListItem button onClick={this.itemClick} key={r}>
                    <ListItemText primary={r} />
                    <ListItemSecondaryAction>
                      <Checkbox
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
            <Button onClick={this.removeFilter} color="primary">
              Rimuovi
            </Button>
            <Button onClick={this.applyFilter} color="primary">
              Applica
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogChoicesStringFilter;
