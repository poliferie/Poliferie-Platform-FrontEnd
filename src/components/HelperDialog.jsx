import React, { Component } from "react";
//import Button from "@material-ui/core/Button";
//import { isPipelinePrimaryTopicReference } from "@babel/types";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
//import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";


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

/*const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);*/

class HelperDialog extends Component {
  handleClickOpen = (e) => {
    e.stopPropagation();
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClickOpen=this.handleClickOpen;
  }


  render() {
    return (
      <div className="HelperDialog" >
        
        {/*<IconButton
          variant="outlined"
          color="secondary"
          onClick={this. }
          style={{float:"right", zIndex:"99"}}
        >
          <HelpOutlineIcon    ></HelpOutlineIcon>
        </IconButton>*/}

        <IconButton
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen }
            style={{float:"right", zIndex:"99"}}
          >
           <HelpOutlineIcon iconstyle={{width:"2em", height:"2em"}}/>
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
              <p>Help</p>
          </DialogTitle>
          <DialogContent dividers>
            <div>
                <p>Questo è la pagina di help dell'applicazione Poliferie.</p>
                <p>Utilizza il cerca in alto e premi invio per cercare tutti i corsi o le università che contengono la parola cercata</p>
                <p>Selezionando Università o Corsi sceglierai quali contenuti analizzare, se università o corsi.</p>
                <p>Le icone sotto alla selezione università/corso permettono di impostare dei filtri. Clicca su ogni icona per avere una descrizione del campo che verrà filtrato. Cliccando Applica o Rimuovi scegli l'azione relativa al filtro</p>
                <p>Cerca nella lista di elementi l'università od il corso che ti interessa. Cliccandoci potrai visualizzare ulteriori informazioni</p>                
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default HelperDialog;
