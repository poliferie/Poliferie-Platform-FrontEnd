import React, { Component } from "react";

class StringFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.regions = ["uni", "sap"];

    this.setUniStringFilter = this.setUniStringFilter.bind(this);
    this.itemClick = this.itemClick.bind(this);
  }

  setUniStringFilter(f) {
    this.props.addUniFilter("strings", f);
  }
  setCourseStringFilter(f) {
    this.props.addCourseFilter("strings", f);
  }

  // Filters @elem considering each @clause elem set to true as an OR string-clause
  // on the attribute @attr of @elem
  // At least one @clause set to true has to be contained into @elem[@attr],
  // otherwise false is returned
  // If @clause has no elems true is returned
  filterElemOr(elem, clause, attr) {
    console.log("filter or", elem, clause, attr);

    // If @clause has no elements set to true we assume filter still not set
    // hence we still allow all elements.
    if (
      Object.keys(clause).length === 0 ||
      !Object.keys(clause).reduce((res, key) => {
        console.log("1st key reduce", res, key);
        if (res === true) {
          console.log("res already true");
          return true;
        }
        if (clause[key] === true) {
          console.log("clause", key, "is true");
          return true;
        }
        console.log("res not true, key not true, return false");
        return false;
      }, false)
    ) {
      console.log("clause has no elements");
      return true;
    }

    return Object.keys(clause).reduce((res, key) => {
      console.log("filtering elem", elem, res, key);
      if (res === true) return true;
      if (clause[key] === true && elem[attr].indexOf(key) >= 0) {
        console.log("elem", elem, "has been accepted");

        return true;
      }
      console.log("elem", elem, "not accepted");
      return false;
    }, false);
  }

  // Filters @elem considering each @clause elem set to true as an AND string-clause
  // on the attribute @attr of @elem
  // All the @clause-s set to true has to be  contained into@elem[attr]
  filterElemAnd(elem, clause, attr) {
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
  itemClick(elem) {
    var state = { ...this.state };
    state[elem.target.innerText] = this.state[elem.target.innerText]
      ? false
      : true;

    // filters all uni elements @e by "name" attribute with state as a clause
    this.setUniStringFilter(e => this.filterElemAnd(e, state, "name"));

    this.setState(state);
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="StringFilter" style={{ border: "4px solid green" }}>
        <p>String Filter</p>
        <ul>
          {this.regions.map(r => {
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
      </div>
    );
  }
}

export default StringFilter;
