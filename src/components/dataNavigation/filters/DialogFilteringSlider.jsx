import React, { Component } from "react";
//import { thisExpression } from "@babel/types";
//import { EPERM } from "constants";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
//import Divider from "@material-ui/core/Divider";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

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

/* This has the close button in the upper right corner
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
*/

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
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

class DialogFilteringSlider extends Component {
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
    this.state = {
      open: false,
      val:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2,

      numberVal:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2
    };

    this.filterName = this.props.filterName;
    this.handleChange = this.handleChange.bind(this);
    //this.filteringFunction = this.props.filteringFunction.bind(this);

    //console.dir(this);
  }

  setUniStudentFilter(lambda) {
    this.props.addUniFilter(this.filterName, lambda);
  }
  setCourseStudentFilter(lambda) {
    this.props.addCourseFilter(this.filterName, lambda);
  }

  handleChange(e) {
    console.log(this.props.filterName + " changed val: " + e.target.value);

    if (!e.target.validity.valid) {
      console.log("Not a valid value. Nothing to update");
      // Update value for number input, but do not use it to filter. Needed to avoid dumb behaviour
      if (e.target.type === "number")
        this.setState({ ...this.state, numberVal: e.target.value });
      return;
    }

    this.setState({ val: e.target.value, numberVal: e.target.value }, () => {
      console.log("In the callback:");
      //console.dir(this.state);
      //this.setUniStudentFilter(this.props.filteringFunction.bind(this));
    });

    //console.log("NOT callback:");
    //console.dir(this.state);
  }

  render() {
    return (
      <div className="FilteringSlider">
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          {this.props.filterTitle}
        </Button>
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
            <p>
              {"Value: "}
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
                console.log(this.props.filterName + " removed");
                this.setUniStudentFilter(e => true);
              }}
              color="primary"
            >
              Rimuovi
            </Button>
            <Button
              onClick={() => {
                console.log(this.props.filterName + " applied");
                this.setUniStudentFilter(
                  this.props.filteringFunction.bind(this)
                );
              }}
              color="primary"
            >
              Applica
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogFilteringSlider;
