import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

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
        {Object.keys(filteredCourses).map(id => (
          <Link
            key={id}
            to={{ pathname: "course/" + id, state: filteredCourses[id] }}
          >
            {JSON.stringify(filteredCourses[id])}
          </Link>
        ))}
      </div>
    );
  }
}

export default CourseListViewer;
