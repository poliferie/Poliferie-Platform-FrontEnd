import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import FlightIcon from "@material-ui/icons/Flight";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <FlightIcon color="primary" />;
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
            return (
              parseFloat(u.Internazionalita.periodiStudioEstero) >=
              parseFloat(this.state.val)
            );
          }}
          addFilter={this.props.addFilter}
        />
      </div>
    );
  }
}

export default DialogInternazionalizzazioneFilter;
