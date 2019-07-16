import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItemLink from "./ListItemLink";

//ICONS
import ParentUniIcon from "@material-ui/icons/AccountBalance";

const useStyles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

class CourseListViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var filteredCourses = this.props.filteredCourses;

    return (
      <div className="filtered-courses">
        <h2 className="h2_titolo">Corsi</h2>
        <List>
          {Object.keys(filteredCourses).map(id => (
            <ListItemLink
              key={id}
              //icon="CourseIcon"
              icon={
                <div style={{ textAlign: "center", width: "4.5em" }}>
                  <ParentUniIcon />

                  <div>{"Univ. erogante"}</div>
                </div>
              }
              to={{ pathname: "course/" + id }}
              primary={JSON.stringify(filteredCourses[id].Info.NomeEsteso)}
              /*secondary={
                "Students: " + JSON.stringify(filteredCourses[id].Info.students)
              }*/
              secondary={"Students: Undefined"}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default CourseListViewer;
