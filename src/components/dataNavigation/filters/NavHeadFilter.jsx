import React, { Component } from "react";

/*
  Props to pass:
    isUniFocus
    addUniFilter
    addCourseFilter
*/

class StringLookupFilter extends Component {
  constructor(props) {
    super(props);

    this.state = { phrase: "" };

    this.addUniFilter = this.props.addUniFilter;
    this.addCourseFilter = this.props.addCourseFilter;
    this.id = "search";
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.applySearch = this.applySearch.bind(this);
  }

  handleKeyPress(e) {
    if (e.key !== "Enter") return;

    if (e.target && e.target.id === this.id) {
      this.setState({ phrase: e.target.value }, () =>
        this.applySearch(this.props.isUniFocus)
      );
    }
  }

  applySearch(isUniFocus) {
    console.log("Making new filter. Phrase: " + this.state.phrase);

    this.addUniFilter("navhead_string", elem => {
      if (!isUniFocus || this.state.phrase.length <= 0) return true;
      return elem.Info.NomeEsteso.toLowerCase().includes(
        this.state.phrase.toLowerCase()
      );
    });

    this.addCourseFilter("navhead_string", elem => {
      if (isUniFocus || this.state.phrase.length <= 0) return true;
      return elem.Info.NomeEsteso.toLowerCase().includes(
        this.state.phrase.toLowerCase()
      );
    });
  }

  render() {
    return (
      <input
        type="text"
        name="search"
        id={this.id}
        style={{
          width: "96%",
          height: "20px",
          margin: "5px 0px 10px 0px",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "15px"
        }}
        placeholder={
          this.props.isUniFocus
            ? "Cerca università per nome o descrizione"
            : "Cerca corsi per nome o descrizione o professioni"
        }
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default StringLookupFilter;
