import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import SmileyIcon from "@material-ui/icons/SentimentSatisfiedAlt";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <SmileyIcon color="primary" />;
};

class DialogBorseStudioFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="BorseStudioFilter">
        <DialogFilteringSlider
          filterName="perc_borsestudio"
          filterTitle="Borse di studio"
          min="0"
          max="100"
          startVal="80"
          icon={Icon()}
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            var objVal = parseFloat(u.Opportunita.borseDistudio) || 0;

            return objVal >= parseFloat(this.state.val);
          }}
          addFilter={this.props.addFilter}
          humanReadableDescription="Questa è una descrizione di esempio"
        />
      </div>
    );
  }
}

export default DialogBorseStudioFilter;
