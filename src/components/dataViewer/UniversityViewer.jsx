import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import CloseIcon from "@material-ui/icons/CancelOutlined";
import PersonIcon from "@material-ui/icons/People";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockCloseIcon from "@material-ui/icons/Lock";

import uni from "../../UniversitiesDSET"


import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const useStyles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CloseButton = {
  position: "absolute",
  top: 10,
  right: 10
};

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  maxHeight: 200,
  overflowX: "auto"
};

const listItem = {
  minWidth: "80vw"
};


const p_text = {
  fontSize: '20px'
};

function cleanPercentage(str) {
  return  str || "--"
}

function clearText(str) {
  return  str || ""
}

class UniversityViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};


    // shorthand for course id
    this.id = this.props.match.params.id;

    
    console.log(uni);
    this.uni = uni[this.id];

    // Shorthand for uni id
    //this.id = this.props.match.params.id;
    // but I've figured out a way to directly pass elem to be shown
    // that will be enough for all our use-cases.
    this.elem = this.props.location.state;
    {console.log("@@@@@@")}
    console.log(this.elem)

  }

  render() {
    const classes = useStyles();



    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            style={{ paddingRight: "38px" }}
          >

            {this.uni.Info.NomeEsteso}

          </Typography>
          <Typography variant="h6" component="h4">
            { this.uni.Info.Tipologia}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {this.uni.Info.Regione}, {this.uni.Info.NomeOperativo}
          </Typography>
          <Typography variant="body2" component="p">

            <List style={flexContainer}>
              <ListItem >
                <PersonIcon />
                <ListItemText
                    primary={ this.uni.Info.Iscritti}


                />
              </ListItem>
              <ListItem>
                {this.uni.Info.Statale === "L" ? <LockCloseIcon /> :<LockOpenIcon /> }

                <ListItemText
                    primary={  this.uni.Info.Statale === "L" ? "Privata" : "Statale"}

                />
              </ListItem>

            </List>


          </Typography>

        </CardContent>

        <CardActions>

          <Button
            style={CloseButton}
            onClick={() => this.props.history.goBack()}
          >
            <CloseIcon fontSize="large" style={{ color: "#f25e5e" }} />
          </Button>
        </CardActions>

        <ExpansionPanel>
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              style={{width: "100% !important"}}
          >

            <List dense={false} >
              <Typography variant="h6">Soddisfazione </Typography>
              <ListItem style={listItem} >
                <ListItemText  primary="Generale" />
                <p>
                  <Progress type="circle" width={50} percent={cleanPercentage(this.uni.Soddisfazione.Soddisfazione)} min-width={10} />
                </p>
              </ListItem>
              <ListItem>
                <ListItemText  primary="Aule" />
                <p>
                  <Progress type="circle" width={50} percent={cleanPercentage(this.uni.Soddisfazione.Aule)} min-width={10} />
                </p>
              </ListItem>
              <ListItem>
                <ListItemText  primary="Biblioteche" />
                <p>
                  <Progress type="circle" width={50} percent={cleanPercentage(this.uni.Soddisfazione.Biblioteche)} min-width={10} />
                </p>
              </ListItem>





            </List>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List dense={false} >


            <ListItem style={listItem} >
              <ListItemText  primary="Postazioni" />
              <p>
                <Progress type="circle" width={50} percent={cleanPercentage(this.uni.Soddisfazione.Postazioni)} min-width={10} />
              </p>
            </ListItem>
            <ListItem>
              <ListItemText  primary="Spazi comuni di studio" />
              <p>
                <Progress type="circle" width={50} percent={cleanPercentage(this.uni.Soddisfazione.SpaziStudio)} min-width={10} />
              </p>
            </ListItem>
            <ListItem>
              <ListItemText  primary="Altri servizi" />
              <p>
                <Progress type="circle" width={50} percent={cleanPercentage(this.uni.Soddisfazione.SpaziStudio)} min-width={10} />
              </p>
            </ListItem>




          </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{width: "100% !important"}}
        >

          <List dense={false} >
            <Typography variant="h6">Costi </Typography>
            <ListItem style={listItem} >

              <ListItemText
                  primary="Tassa media"
              />
              <p style={p_text}>
                {this.uni.Costi.Tasse}€
              </p>
            </ListItem>
            <ListItem>

              <ListItemText
                  primary="Tassa regionale"
              />
              <p style={p_text}>
                {this.uni.Costi.TassaRegionale}€
              </p>
            </ListItem>

          </List>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ListItem style={listItem} >

              <ListItemText
                  primary="Tariffa pasto in mensa"

              />
              <p style={p_text}>
                {this.uni.Costi.TariffaMensa}€
              </p>
            </ListItem>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{width: "100% !important"}}
          >

            <List dense={false} >
              <Typography variant="h6">Contributi </Typography>
              <ListItem style={listItem} >

                <ListItemText
                    primary="Contributo monetario"
                    secondary="Contributo in denaro annuale	"
                />
                <p style={p_text}> {this.uni.Contributi.ContributoMonetario}€</p>
              </ListItem>
              <ListItem>

                <ListItemText
                    primary="Contributo per alloggio"
                    secondary="Contributo valore equivalente dell'affitto "
                />
                <p style={p_text}> {this.uni.Contributi.ContributoAlloggio}€</p>
              </ListItem>



            </List>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <ListItem style={listItem} >

                <ListItemText
                    primary="Pasti Gratuiti al giorno"

                />
                <p  style={p_text}>
                  {this.uni.Contributi.PastiGratuiti}
                </p>
              </ListItem>
              <ListItem style={listItem} >

                <ListItemText
                    primary="Contributo Extra "

                />
                <p style={p_text}>
                  {this.uni.Contributi.ContributoExtra}€
                </p>
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}
export default UniversityViewer;
