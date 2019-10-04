import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import TIcon from "@material-ui/icons/Translate";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <TIcon />;
};

const choicesCode = ["I", "E", "P"];
const choicesHuman = ["Italiano", "Inglese", "Più lingue"];

class C_DialogLinguaFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="LinguaFilter">
        <DialogChoicesStringFilter
          filterName="course_language"
          filterTitle="Lingua di erogazione"
          choices={choicesCode}
          choicesDisplayedNames={choicesHuman}
          icon={Icon()}
          filterType="or"
          filterAttribute="Lingua"
          filterAttributePath="Info"
          humanReadableDescription="In quale lingua vorresti che il corso di studi fosse erogato?"
        />
      </div>
    );
  }
}

export default C_DialogLinguaFilter;
