import React from "react";
import "./CardList.css";
import Config from "../../../../../Config/Config";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  render() {
    return (
      <div
        className="card pf-card mb-2"
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.setState({ isClicked: !this.state.isClicked });
              }
        }
        style={{
          backgroundColor: this.state.isClicked ? "lightgreen" : "white"
        }}
      >
        <div className="row container">
          <div className="col-4" align="center">
            <i className={this.props.faClassName + " fa-2x"} />
          </div>
          <div className="col-8" style={{ textAlign: "center" }}>
            <div className=" w-100 h-100" style={{ display: "table" }}>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <div>{this.props.cardText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [
        <Card faClassName="fas fa-calculator" cardText="Mathematic" />,
        <Card faClassName="fab fa-fort-awesome" cardText="Story" />,
        <Card faClassName="fas fa-gavel" cardText="Law" />,
        <Card faClassName="fas fa-atom" cardText="Physics" />,
        <Card faClassName="fas fa-book" cardText="Phylosophy" />,
        <Card faClassName="fas fa-globe-americas" cardText="Lingue" />,
        <Card faClassName="fas fa-question" cardText="I don't know" />,
        <Card
          faClassName="fas fa-arrow-right"
          cardText="Next"
          onClick={this.props.nextStep}
        />
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="row p-2">
          <div className="col lft-col">
            {this.state.cardList
              .filter((item, i) => {
                return i % 2 === 0;
              })
              .map(item => {
                return item;
              })}
          </div>
          <div className="col rgt-col">
            <div style={{ height: "20px" }} />
            {this.state.cardList
              .filter((item, i) => {
                return i % 2 === 1;
              })
              .map(item => {
                return item;
              })}
          </div>
        </div>
        <div style={{ height: Config.HEADER_HEIGHT }} />
      </div>
    );
  }
}

export default CardList;
