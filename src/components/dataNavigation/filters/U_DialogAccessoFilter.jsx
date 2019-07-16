import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import LockIcon from "@material-ui/icons/Lock";

const Icon = () => {
  return <LockIcon color="primary" />;
};

const choicesCode = ["L", "S"];
const choicesHuman = ["Privata", "Statale"];

class U_DialogAccessoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log("DialogRegionFilter");
    console.log(this.props);
  }

  render() {
    return (
      <div className="TipoAccessoFilter">
        <DialogChoicesStringFilter
          filterName="uniType"
          filterTitle="Tipologia ateneo"
          choices={choicesCode}
          choicesDisplayedNames={choicesHuman}
          icon={Icon()}
          filterType="or"
          filterAttribute="Statale"
          filterAttributePath="Info"
          addFilter={this.props.addFilter}
          humanReadableDescription="Questa filtro ti permette di scegliere tra università pubbliche o libere. Le università statali sono generalmente più economiche ed offrono la possibilità di studiare a tutti. Le università private invece hanno generalmente un maggior costo e offrono corsi di studi generalmente più specializzati."
        />
      </div>
    );
  }
}

export default U_DialogAccessoFilter;
