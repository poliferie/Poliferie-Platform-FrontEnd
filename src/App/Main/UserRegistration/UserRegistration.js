import React from "react";
import SubjectChoiceStep from "./Steps/SubjectChoiceStep";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
    this.states = [
      <SubjectChoiceStep />,
      <p>Second step</p>,
      <p>Third step</p>
    ];

    this.onCompletedRegistration = this.props.registrationCompleted;

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    if (this.state.step + 1 < this.states.length)
      this.setState({ step: this.state.step + 1 });
    else this.onCompletedRegistration();
  }

  render() {
    return (
      <div className="UserRegistration w-100 h-100">
        {this.states[this.state.step]}
        {/*<button onClick={this.nextStep}>next</button> */}
      </div>
    );
  }
}

export default UserRegistration;
