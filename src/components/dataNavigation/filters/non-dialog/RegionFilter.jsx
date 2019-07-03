import React, { Component } from "react";
import ChoicesStringFilter from "./ChoicesStringFilter";
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

class RegionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinStudentFilter">
        <ChoicesStringFilter
          filterName="region"
          filterTitle="Regioni"
          choices={Regions}
          icon={Icon()}
          filterType="or"
          filterAttribute="Regione"
          addCourseFilter={this.props.addCourseFilter}
          addUniFilter={this.props.addUniFilter}
        />
      </div>
    );
  }
}

export default RegionFilter;
