import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItemLink from "./ListItemLink";

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
        <h2>COURSES</h2>
        <List>
          {Object.keys(filteredCourses).map(id => (
            <ListItemLink
              key={id}
              icon="CourseIcon"
              to={{ pathname: "course/" + id }}
              primary={JSON.stringify(filteredCourses[id].name)}
              secondary={
                "Students: " + JSON.stringify(filteredCourses[id].students)
              }
            />
          ))}
        </List>
      </div>
    );
  }
}

export default CourseListViewer;
