import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import LockIcon from "@material-ui/icons/Lock";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
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
          //addCourseFilter={this.props.addCourseFilter}
          //addUniFilter={this.props.addUniFilter}
        />
      </div>
    );
  }
}

export default U_DialogAccessoFilter;
