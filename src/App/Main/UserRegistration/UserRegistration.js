import React from "react";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
    this.states = [<p>First step</p>, <p>Second step</p>, <p>Third step</p>];

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
      <div className="UserRegistration">
        <p>current step {this.state.step}</p>
        {this.states[this.state.step]}
        <button onClick={this.nextStep}>next</button>
      </div>
    );
  }
}

export default UserRegistration;
