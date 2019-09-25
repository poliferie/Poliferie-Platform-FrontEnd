import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import FlightIcon from "@material-ui/icons/Flight";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <FlightIcon color="#ea4242" />;
};

class DialogInternazionalizzazioneFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="InternazionalizzazioneFilter">
        <DialogFilteringSlider
          filterName="min_internationalization"
          filterTitle="Periodo di studio all'estero"
          min="0"
          max="100"
          startVal="50"
          icon={Icon()}
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            var objVal =
              parseFloat(u.Internazionalita.periodiStudioEstero) || 0;
            return objVal >= parseFloat(this.state.val);
          }}
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
          humanReadableDescription="Questa valore indica, su una scala da 1 a 100, quanto il corso permette di avere possibilità di studio all'estero"
        />
      </div>
    );
  }
}

export default DialogInternazionalizzazioneFilter;
