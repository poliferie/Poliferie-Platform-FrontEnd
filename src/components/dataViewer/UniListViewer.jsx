import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        {Object.keys(filteredUni).map(id => (
          <Link
            key={id}
            to={{ pathname: "university/" + id, state: filteredUni[id] }}
          >
            {JSON.stringify(filteredUni[id])}
          </Link>
        ))}
      </div>
    );
  }
}

export default UniListViewer;
