import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItemLink from "./ListItemLink";
import List from "@material-ui/core/List";

class UniListViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var filteredUni = this.props.filteredUni;
    return (
      <div className="filtered-uni">
        <h2>UNIVERSITIES</h2>
        <List>
          {Object.keys(filteredUni).map(id => (
            <ListItemLink
              key={id}
              icon="UniIcon"
              to={{ pathname: "university/" + id }}
              primary={JSON.stringify(filteredUni[id].name)}
              secondary={
                "Students: " + JSON.stringify(filteredUni[id].students)
              }
            />
          ))}
        </List>
      </div>
    );
  }
}

export default UniListViewer;
