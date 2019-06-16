import React from "react";

class ChooseNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ChooseNavigator">
        <button
          onClick={() => {
            this.props.history.push("/nav/uni");
          }}
        >
          Navigate Universities
        </button>
        <button
          onClick={() => {
            this.props.history.push("/nav/courses");
          }}
        >
          Navigate Courses
        </button>
      </div>
    );
  }
}

export default ChooseNavigator;
