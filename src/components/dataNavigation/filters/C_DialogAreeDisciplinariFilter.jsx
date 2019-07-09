import React, { Component } from "react";
import DialogChoicesStringFilter from "./DialogChoicesStringFilter";
import BookIcon from "@material-ui/icons/ImportContacts";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <BookIcon color="primary" />;
};

const Areas = [
  "Area1",
  "Area2",
  "Area3",
  "Area4",
  "Area5",
  "Area6",
  "Area7",
  "Area8",
  "Area9",
  "Area10",
  "Area11",
  "Area12",
  "Area13",
  "Area14",
  "Area15"
];

class DialogAreeDisciplinariFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="AreeDisciplinariFilter">
        <DialogChoicesStringFilter
          filterName="studyFields"
          filterTitle="Aree disciplinari"
          choices={Areas}
          icon={Icon()}
          filterType="or"
          filterAttribute="AreaUniversitalyNome"
          filterAttributePath="Info"
          addFilter={this.props.addFilter}
          //addCourseFilter={this.props.addCourseFilter}
          //addUniFilter={this.props.addUniFilter}
        />
      </div>
    );
  }
}

export default DialogAreeDisciplinariFilter;
