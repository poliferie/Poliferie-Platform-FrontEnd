import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row w-100 " style={{ margin: 0 }}>
        <div className="col-4 p-3" align="center">
          <i className="far fa-grin-alt fa-5x" />
        </div>
        <div className="col-8 p-3">
          <form onSubmit={this.handleSubmit}>
            <p>{this.props.title ? this.props.title : "scegli"}</p>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={"Choose here"}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
