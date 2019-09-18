import React, { Component } from "react";
import ListItemLink from "./ListItemLink";
import List from "@material-ui/core/List";

//ICONS
import LocationIcon from "@material-ui/icons/LocationOn";
import PplIcon from "@material-ui/icons/SupervisorAccount";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockCloseIcon from "@material-ui/icons/Lock";

class UniListViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  lockIcon(id) {
    if (this.props.filteredUni[id].Info.Statale === "L") {
      return (
        <div>
          <LockCloseIcon style={{ marginBottom: "-0.25em" }} />
          {"Privata"}
        </div>
      );
    } else {
      return (
        <div>
          <LockOpenIcon style={{ marginBottom: "-0.25em" }} />
          {"Pubblica"}
        </div>
      );
    }
  }

  render() {
    var filteredUni = this.props.filteredUni;
    return (
      <div className="filtered-uni">
        <h2 className="h2_titolo">Università : {Object.keys(filteredUni).length}</h2>
        <List>
          {Object.keys(filteredUni).map(id => (
            <ListItemLink
              key={id}
              icon={
                <div style={{ textAlign: "center", width: "4.5em" }}>
                  <LocationIcon />

                  <div>{filteredUni[id].Info.Regione}</div>
                </div>
              }
              to={{ pathname: "university/" + id }}
              //primary={JSON.stringify(filteredUni[id].Info.NomeEsteso)}
              primary={filteredUni[id].Info.NomeEsteso}
              secondary={
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    maxWidth: "100%"
                  }}
                >
                  <div style={{ width: "6em" }}>
                    <PplIcon style={{ marginBottom: "-0.25em" }} />
                    {JSON.parse(filteredUni[id].Info.Iscritti)
                      ? filteredUni[id].Info.Iscritti
                      : "--"}
                  </div>
                  {this.lockIcon(id)}
                </div>
              }
            />
          ))}
        </List>
      </div>
    );
  }
}

export default UniListViewer;
