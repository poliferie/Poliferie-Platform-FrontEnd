import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import LocationIcon from "@material-ui/icons/LocationOn";

const Icon = () => {
  return <LocationIcon />;
};

const Regions = [
  "Abruzzo",
  "Basilicata",
  "Calabria",
  "Campania",
  "Emilia-Romagna",
  "Friuli-Venezia Giulia",
  "Lazio",
  "Liguria",
  "Lombardia",
  "Marche",
  "Molise",
  "Piemonte",
  "Puglia",
  "Sardegna",
  "Sicilia",
  "Toscana",
  "Trentino-Alto Adige",
  "Umbria",
  "Valle d'Aosta",
  "Veneto"
];

class DialogRegionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinStudentFilter">
        <DialogChoicesStringFilter
          filterName="u_region"
          filterTitle="Regioni"
          choices={Regions}
          icon={Icon()}
          filterType="or"
          filterAttribute="Regione"
          filterAttributePath="Info"
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
          humanReadableDescription="In quale parte dell'Italia ti piacerebbe studiare? Seleziona una o più regioni"
        />
      </div>
    );
  }
}

export default DialogRegionFilter;
