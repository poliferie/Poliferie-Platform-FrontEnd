import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { isPipelinePrimaryTopicReference } from "@babel/types";

/*
  Props to pass:
  choices
  filterName
  filterTitle
  icon
  filterType in {"and", "or"}
  filterAttribute
  addUniFilter
  addCourseFilter
*/
class ChoicesStringFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.choices = ["uni", "sap", "torv", "roma3"];
    this.choices = this.props.choices;

    this.setUniStringFilter = this.setUniStringFilter.bind(this);
    this.itemClick = this.itemClick.bind(this);

    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    //this.filteringFunction = this.props.filteringFunction.bind(this);
  }

  setUniStringFilter(f) {
    this.props.addUniFilter(this.filterName, f);
  }
  setCourseStringFilter(f) {
    this.props.addCourseFilter(this.filterName, f);
  }

  // Filters @elem considering each @clause elem set to true as an OR string-clause
  // on the attribute @attr of @elem
  // At least one @clause set to true has to be contained into @elem[@attr],
  // otherwise false is returned
  // If @clause has no elems true is returned
  filterElemOrClause(elem, clause, attr) {
    // If @clause has no elements set to true we assume filter still not set
    // hence we still allow all elements.
    if (
      Object.keys(clause).length === 0 ||
      !Object.keys(clause).reduce((res, key) => {
        if (res === true) {
          return true;
        }
        if (clause[key] === true) {
          return true;
        }
        return false;
      }, false)
    ) {
      return true;
    }

    // Return True if at least one clause is satisfied
    return Object.keys(clause).reduce((res, key) => {
      if (res === true) return true;
      if (clause[key] === true && elem[attr].indexOf(key) >= 0) {
        return true;
      }
      return false;
    }, false);
  }

  // Filters @elem considering each @clause elem set to true as an AND string-clause
  // on the attribute @attr of @elem
  // All the @clause-s set to true has to be  contained into@elem[attr]
  filterElemAndClause(elem, clause, attr) {
    console.log("filter and", elem, clause, attr);

    if (
      Object.keys(clause).reduce((res, key) => {
        // If some clause has already failed return failure.
        if (res === false) {
          return false;
        }
        // If clause[key] is enabled and it isn't contained into the elem[attr] we
        // then return failure.
        if (clause[key] === true && elem[attr].indexOf(key) < 0) {
          return false;
        }
        // Clause succeeded, return success.
        return true;
      }, true)
    ) {
      console.log("accepted");
      return true;
    }
    console.log("refused");
    return false;
  }

  // Called onClick of @elem, first toggles the this.state of @elem and updates
  // the filters
  itemClick(event) {
    var state = { ...this.state };
    // Switch state for the target of event
    state[event.target.innerText] = this.state[event.target.innerText]
      ? false
      : true;

    this.setState(state, () => console.log(this.state));
  }

  resetFilter() {
    var state = { ...this.state };
    Object.keys(state).forEach(key => {
      state[key] = false;
    });

    this.setState(state, () => {
      console.log(this.state);
      console.log(state);
    });
    //this.setUniStringFilter(e => true);
  }

  removeFilter() {
    this.setUniStringFilter(e => true);
  }

  applyFilter() {
    // filters all uni elements @e by "name" attribute with state as a clause
    this.setUniStringFilter(e =>
      this.props.filterType === "and"
        ? this.filterElemAndClause(
            e.Info,
            this.state,
            this.props.filterAttribute
          )
        : this.filterElemOrClause(
            e.Info,
            this.state,
            this.props.filterAttribute
          )
    );
  }

  /*
  render() {
    return (
      <div className="StringFilter" style={{ border: "4px solid green" }}>
        <p>{this.props.filterTitle}</p>
        <ul>
          {this.choices.map(r => {
            return (
              <li
                key={r}
                style={{
                  backgroundColor: this.state[r] ? "lightgreen" : "white"
                }}
                onClick={this.itemClick}
              >
                {r}
              </li>
            );
          })}
        </ul>
        <Button onClick={this.resetFilter} color="primary">
          Reset
        </Button>
        <Button onClick={this.removeFilter} color="primary">
          Rimuovi
        </Button>
        <Button onClick={this.applyFilter} color="primary">
          Applica
        </Button>
      </div>
    );
  }*/

  render() {
    return (
      <div className="StringFilter" style={{ border: "4px solid green" }}>
        <p style={{ margin: "1vw" }}>{this.props.filterTitle}</p>
        <div
          className="filterList"
          // NEEDED to make the filter icons stand side-by-side, and automatically goes to new line
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            maxWidth: "100%"
          }}
        >
          {this.choices.map(r => {
            return (
              <button
                variant="contained"
                key={r}
                style={{
                  backgroundColor: this.state[r] ? "#4CAF50" : "#707070",
                  color: "white",
                  margin: "0.5vw",
                  borderRadius: "0.75vw",
                  border: "none",
                  display: "inline-block",
                  padding: "0.6vw"
                }}
                onClick={this.itemClick}
              >
                {r}
              </button>
            );
          })}
        </div>
        <Button onClick={this.resetFilter} color="primary">
          Reset
        </Button>
        <Button onClick={this.removeFilter} color="primary">
          Rimuovi
        </Button>
        <Button onClick={this.applyFilter} color="primary">
          Applica
        </Button>
      </div>
    );
  }
}

export default ChoicesStringFilter;
