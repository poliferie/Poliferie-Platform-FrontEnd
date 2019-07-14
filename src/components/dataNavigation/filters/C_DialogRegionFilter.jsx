import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import LocationIcon from "@material-ui/icons/LocationOn";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <LocationIcon color="primary" />;
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

    console.log("C_DialogRegionFilter");
    console.log(this.props);
  }

  render() {
    return (
      <div className="DialogRegionFilter">
        <DialogChoicesStringFilter
          filterName="c_region"
          filterTitle="Regioni"
          choices={Regions}
          icon={Icon()}
          filterType="or"
          filterAttribute="Regione"
          filterAttributePath="Info"
          addFilter={this.props.addFilter}
          humanReadableDescription="Questa è una descrizione di esempio"
        />
      </div>
    );
  }
}

export default DialogRegionFilter;
