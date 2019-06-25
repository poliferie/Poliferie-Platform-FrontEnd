import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
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
