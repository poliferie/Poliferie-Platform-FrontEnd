import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import PplIcon from "@material-ui/icons/SupervisorAccount";

const Icon = () => {
  return <PplIcon color="#ea4242" />;
};

class DialogMinStudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinStudentFilter">
        <DialogFilteringSlider
          filterName="min_nstud"
          filterTitle="Numero minimo di studenti"
          min="100"
          max="100000"
          startVal="70"
          icon={Icon()}
          filteringFunction={function(u) {
            var objVal = parseFloat(u.Info.Iscritti) || 0;
            return objVal >= parseInt(this.state.val);
          }}
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
          humanReadableDescription="Ti piacerebbe studiare in una facoltà con pochi o molti studenti? "
        />
      </div>
    );
  }
}

export default DialogMinStudentFilter;
