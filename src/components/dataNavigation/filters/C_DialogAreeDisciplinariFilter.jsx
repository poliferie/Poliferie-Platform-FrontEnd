import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import BookIcon from "@material-ui/icons/ImportContacts";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <BookIcon />;
};

const Areas = [
  "Scienze Naturali e Applicate",
  "Chimica e Farmacia",
  "Medicina, Sanità, Psicologia",
  "Ingegneria Civile, Ambientale, dei Trasporti",
  "Architettura e Design",
  "Economica, Finanza, Statistica",
  "Politica, Società, Diritto",
  "Lettere, Lingue, Filosofia",
  "Educazione e Sport",
  "Difesa e Sicurezza",
  "Storia e Beni culturali",
  "Discipline artisitche",
  "Ingegneria industriale",
  "Ingegneria dell'informazione",
  "Agraria e Veterinaria"
];

class DialogAreeDisciplinariFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="AreeDisciplinariFilter">
        <DialogChoicesStringFilter
          filterName="studyFields"
          filterTitle="Aree disciplinari"
          choices={Areas}
          icon={Icon()}
          filterType="or"
          filterAttribute="AreaDisciplinareCodice"
          filterAttributePath="Info"
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
        />
      </div>
    );
  }
}

export default DialogAreeDisciplinariFilter;
