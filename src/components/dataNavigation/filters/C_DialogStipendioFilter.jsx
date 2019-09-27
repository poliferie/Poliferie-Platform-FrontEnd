import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import EuroIcon from "@material-ui/icons/EuroSymbol";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <EuroIcon />;
};

class DialogStipendioFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="StipendioFilter">
        <DialogFilteringSlider
          filterName="min_salary"
          filterTitle="Stipendio netto minimo"
          min="0"
          max="3000"
          startVal="1000"
          icon={Icon()}
          filteringFunction={function(u) {
            var objVal = parseFloat(u.Opportunita.lavoroRetribuzione) || 0;
            return objVal >= parseFloat(this.state.val);
          }}
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
          humanReadableDescription="Quanto ti piacerebbe guadagnare? Questo valore ti permette de decidere una cifra minima dello stipendio mensile netto che potresti dopo aver concluso uno specifico corso di laurea "
        />
      </div>
    );
  }
}

export default DialogStipendioFilter;
