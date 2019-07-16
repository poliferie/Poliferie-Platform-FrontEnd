import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import EuroIcon from "@material-ui/icons/EuroSymbol";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <EuroIcon color="primary" />;
};

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

    //this.isUniFocus = this.props.isUniFocus;
    this.addUniFilter = this.props.addUniFilter;
    this.addCourseFilter = this.props.addCourseFilter;
    this.id = "search";
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.applySearch = this.applySearch.bind(this);
  }

  handleKeyPress(e) {
    console.log(e);
    if (e.key !== "Enter") return;
    if (e.target) console.log("e.target! e.target = " + e.target);
    console.log(this);
    if (e.target && e.target.id === this.id) {
      this.setState({ phrase: e.target.value }, () =>
        this.applySearch(this.props.isUniFocus)
      );
    }
  }

  applySearch(isUniFocus) {
    console.log("Making new filter. Phrase: " + this.state.phrase);

    /*if (isUniFocus) {
      this.addUniFilter("navhead_string", elem => {
        console.log("Applying Navhead filter");

        if (this.state.phrase.length <= 0) return true;
        return elem.Info.NomeEsteso.includes(this.state.phrase);
      });
    } else {
      this.addCourseFilter("navhead_string", elem => {
        console.log("Applying Navhead filter");

        if (this.state.phrase.length <= 0) return true;
        return elem.Info.NomeEsteso.includes(this.state.phrase);
      });
    }*/

    this.addUniFilter("navhead_string", elem => {
      //console.log("Applying Navhead filter");

      if (!isUniFocus || this.state.phrase.length <= 0) return true;
      return elem.Info.NomeEsteso.toLowerCase().includes(
        this.state.phrase.toLowerCase()
      );
    });

    this.addCourseFilter("navhead_string", elem => {
      //console.log("Applying Navhead filter");

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
