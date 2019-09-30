import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import SmileyIcon from "@material-ui/icons/SentimentSatisfiedAlt";

const Icon = () => {
  return <SmileyIcon />;
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
            var objVal = parseFloat(u.Opportunita.borseDistudio) || 0;

            return objVal >= parseFloat(this.state.val);
          }}
          humanReadableDescription="Questo filtro permette di filtrare le università che erogano più borse di studio rispetto alle altre"
        />
      </div>
    );
  }
}

export default DialogBorseStudioFilter;
