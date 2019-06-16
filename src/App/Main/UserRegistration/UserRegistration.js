import React from "react";
import SubjectChoiceStep from "./Steps/SubjectChoiceStep";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };

    this.onCompletedRegistration = this.props.registrationCompleted;
    this.nextStep = this.nextStep.bind(this);

    this.states = [
      <SubjectChoiceStep nextStep={this.nextStep} />,
      <p>Second step</p>,
      <p>Third step</p>
    ];
  }

  nextStep() {
    if (!window.confirm("Are you sure this preferences are correctly set?"))
      return;
    if (this.state.step + 1 < this.states.length)
      this.setState({ step: this.state.step + 1 });
    else this.onCompletedRegistration();
  }

  render() {
    return (
      <div className="UserRegistration w-100 h-100">
        {this.states[this.state.step]}
      </div>
    );
  }
}

export default UserRegistration;
