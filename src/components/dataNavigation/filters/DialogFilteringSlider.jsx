import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

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

class DialogFilteringSlider extends Component {
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  /*FIXME At each Uni/Course view toggle the view reloads and the active filters are lost.
  A solution might be to read the redux store to check if the filter is undefined*/
  disableButton = () => {
    this.setState({buttonStyle: 'secondary'});
  };

  enableButton = () => {
    this.setState({buttonStyle: 'primary'});
  };

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
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2
    };

    this.filterName = this.props.filterName;
    this.filteringFunction = this.props.filteringFunction;
    this.addFilter = this.props.addFilter;
    this.removeFilter = this.props.removeFilter;

    this.handleChange = this.handleChange.bind(this);
  }

  /*setFilter(lambda) {
    this.props.addFilter(this.filterName, lambda);
  }*/

  handleChange(e) {
    console.log(this.props.filterName + " changed val: " + e.target.value);

    if (!e.target.validity.valid) {
      console.log("Not a valid value. Nothing to update");
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
                console.log(this.props.filterName + " removed");
                //this.setFilter(e => true);
                this.removeFilter(this.filterName);
                this.disableButton();
                this.handleClose();
              }}
              color="primary">
              Rimuovi
            </Button>
            <Button
              onClick={() => {
                //this.setFilter(this.props.filteringFunction.bind(this));
                this.addFilter(this.filterName, this.filteringFunction.bind(this));
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

export default DialogFilteringSlider;
