import React from "react";
import "./CardList.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card pf-card mb-2">
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
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Matematica" />,
        <Card faClassName="fas fa-arrow-right" cardText="Next" />
      ]
    };
  }
  render() {
    return (
      <div className="row p-2">
        <div className="col lft-col">
          {this.state.cardList
            .filter((item, i) => {
              return i % 2 == 0;
            })
            .map(item => {
              return item;
            })}
        </div>
        <div className="col rgt-col">
          <div style={{ height: "20px" }} />
          {this.state.cardList
            .filter((item, i) => {
              return i % 2 == 1;
            })
            .map(item => {
              return item;
            })}
        </div>
      </div>
    );
  }
}

export default CardList;
