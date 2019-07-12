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
import ClockIcon from "@material-ui/icons/AccessTime";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";

import BookIcon from "@material-ui/icons/Book";
import SchoolIcon from "@material-ui/icons/School";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationOffIcon from "@material-ui/icons/LocationOff";

import LanguageIcon from "@material-ui/icons/Language";





import CloseIcon from "@material-ui/icons/CancelOutlined";
import PersonIcon from "@material-ui/icons/People";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockCloseIcon from "@material-ui/icons/Lock";

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import courses from "../../CoursesDSET"


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



class CourseViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // shorthand for course id
    this.id = this.props.match.params.id;


    this.corso = courses[this.id];
  }

  render() {
    const classes = useStyles();
    const { goBack } = this.props.history;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography
                variant="h5"
                component="h2"
                style={{ paddingRight: "38px" }}
            >

              {this.corso.Info.NomeEsteso}

            </Typography>
            <Typography variant="h6" component="h4">
              { this.corso.Info.ateneoNomeEsteso}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {this.corso.Info.ateneoRegione}
            </Typography>

            <Typography variant="body2" component="p">

              <List style={flexContainer}>
                <ListItem  >
                  <LanguageIcon />


                  <ListItemText style={{whiteSpace: "nowrap"}}
                      primary={  this.corso.Info.Lingua == "I" ? "Italiano" : "" + this.corso.Info.Lingua == "E" ? "Inglese" : "" + this.corso.Info.Lingua == "M" ? "Multilingua" : ""}

                  />
                </ListItem>
                <ListItem  >
                  {this.corso.Info.Statale == "L" ? <LockCloseIcon /> :<LockOpenIcon /> }

                  <ListItemText
                      primary={  this.corso.Info.Statale == "L" ? "Libera" : "Statale"}

                  />
                </ListItem>
                <ListItem  >
                  {this.corso.Info.testAccesso == "S" ? <AssignmentLateIcon /> :<AssignmentIndIcon /> }

                  <ListItemText style={{whiteSpace: "nowrap"}}
                      primary={  this.corso.Info.testAccesso == "S" ? "Test" : "No Test"}

                  />
                </ListItem>
                <ListItem  >
                  <ClockIcon />

                  <ListItemText style={{whiteSpace: "nowrap"}}
                      primary={" " + this.corso.Info.DurataNominale + " anni" }

                  />
                </ListItem>

                <ListItem  >

                  {this.corso.Info.requisitoAccesso == "D" ? <BookIcon /> : <SchoolIcon/> }

                  <ListItemText style={{whiteSpace: "nowrap"}}
                      primary={  this.corso.Info.requisitoAccesso == "D" ? "Diploma" : "Richiesta Laurea"}

                  />
                </ListItem>

                <ListItem  >

                  {this.corso.Info.Erogazione == "P" ? <LocationOnIcon /> : <LocationOffIcon/> }

                  <ListItemText style={{whiteSpace: "nowrap"}}
                      primary={  this.corso.Info.Erogazione == "P" ? "In aula" : "Teledidattica"}

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
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.Soddisfazione} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Docenti" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.SoddisfazioneDocenti} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Lavoro" secondary="Da 1 a 10" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.lavoroSoddisfazione>0 ? this.corso.Soddisfazione.lavoroSoddisfazione : "--"} min-width={10} />
                  </p>
                </ListItem>





              </List>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List dense={false} >


                <ListItem style={listItem} >
                  <ListItemText  primary="Scelto nuovamente dagli stessi studenti" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.iscrizioneNuova} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Utilizzo delle competenze acquisite con la laurea in misura elevata" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.lavoroUtilizzoCompetenzeElevato} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Utilizzo delle competenze acquisite con la laurea in misura ridotta" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.lavoroUtilizzoCompetenzeRidotto} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Non Utilizzo delle competenze acquisite con la laurea" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.lavoroUtilizzoCompetenzeNullo} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Prosegue gli studi" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Soddisfazione.preseguireStudi>0 ? this.corso.Soddisfazione.preseguireStudi : "--"} min-width={10} />
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
                <Typography variant="h6">Opportunità </Typography>
                <ListItem style={listItem} >
                  <ListItemText  primary="Tasso di disoccupazione" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.occupazioneTassoDisoccupazione } min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Retribuzione mensile netta media" />
                  <p style={p_text}>
                    {this.corso.Opportunita.lavoroRetribuzione} €
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Tirocini o stage" secondary="Percentuale di studenti che ne ha usufruito durante il corso" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.tirociniStage} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Borse di studio" secondary="Percentuale di studenti che ne ha usufruito durante il corso" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.borseStudio} min-width={10} />
                  </p>
                </ListItem>




              </List>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List dense={false} >


                <ListItem style={listItem} >
                  <ListItemText  primary="Tempo per trovare il primo lavoro: " />
                  <p>
                    {this.corso.Opportunita.lavoroTempoPrimoLavoro} anni
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="I Laureati hanno esperienze di lavoro" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.lavoroTempoPrimoLavoro} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="I Lureati lavorano" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.occupazioneLavoro} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="I Laureati non lavorano ma cercano un impiego" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.occupazioneNoLavoroCerca} min-width={10} />
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="I Laureati non lavorano e non cercano un impiego" />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.occupazioneNoLavoroNoCerca} min-width={10} />
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
                <Typography variant="h6">Mobilita ed Internazionalità </Typography>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Cittadini Stranieri"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Opportunita.cittadiniStranieri} min-width={10} />

                  </p>
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Periodo di studi all'estero"
                      secondary="Percentuale di studenti che lo ha effettuato"
                  />
                  <p>

                    <Progress type="circle" width={50} percent={this.corso.Internazionalita.periodiStudioEstero} min-width={10} />
                  </p>
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Lavora all'estero"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Mobilita.lavoroAreaEstero} min-width={10} />

                  </p>
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Alloggio a meno di un oa di distanza dall'università"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Mobilita.alloggioOraViaggio} min-width={10} />

                  </p>
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Residenza in un'altra regione"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Mobilita.residenzaAltraRegione} min-width={10} />

                  </p>
                </ListItem>

              </List>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>

                <ListItem style={listItem} >

                  <ListItemText
                      primary="Lavoro in area Nord"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Mobilita.lavoroAreaNord} min-width={10} />

                  </p>
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Lavora area centro"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Mobilita.lavoroAreaCentro} min-width={10} />

                  </p>
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Lavora area sud"
                  />
                  <p>
                    <Progress type="circle" width={50} percent={this.corso.Mobilita.lavoroAreaSud} min-width={10} />

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
                <Typography variant="h6">Continuità </Typography>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Viene scelta una magistralemcoerente"

                  />
                  <Progress type="circle" width={50} percent={this.corso.Continuita.magistraleCoerente} min-width={10} />
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Regolarità degli studi"

                  />
                  <Progress type="circle" width={50} percent={this.corso.Continuita.regolaritaStudi} min-width={10} />
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Frequenza corso 75% lezioni"

                  />
                  <Progress type="circle" width={50} percent={this.corso.Continuita.frequentatoRegolarmente} min-width={10} />
                </ListItem>


              </List>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Non viene intrapreso un percorso magistrale"

                  />
                  <Progress type="circle" width={50} percent={this.corso.Continuita.magistraleIscrizioneAltroCorso} min-width={10} />
                </ListItem>
                <ListItem style={listItem} >

                  <ListItemText
                      primary="Viene scelto un percorso magistrale differente da quello triennale"

                  />
                  <Progress type="circle" width={50} percent={this.corso.Continuita.magistraleNoIscrizioneAltroCorso} min-width={10} />
                </ListItem>

              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
    );
  }
}

export default CourseViewer;
