import React from "react";

class ChooseNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="ChooseNavigator">
        <button
          onClick={() => {
            this.props.history.push("/universities");
          }}
        >
          Navigate Universities
        </button>
        <button
          onClick={() => {
            this.props.history.push("/courses");
          }}
        >
          Navigate Courses
        </button>
      </div>
    );
  }
}

export default ChooseNavigator;
