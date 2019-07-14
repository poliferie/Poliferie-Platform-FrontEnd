import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import EuroIcon from "@material-ui/icons/EuroSymbol";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <EuroIcon color="primary" />;
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
          max="100"
          startVal="80"
          icon={Icon()}
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            //console.log("u.Opportunita.lavoroRetribuzione:" + u.Opportunita.lavoroRetribuzione);
            return (
              parseFloat(u.Opportunita.lavoroRetribuzione) >=
              parseFloat(this.state.val)
            );
          }}
          addFilter={this.props.addFilter}
        />
      </div>
    );
  }
}

export default DialogStipendioFilter;
