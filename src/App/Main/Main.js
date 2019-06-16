import React from "react";
import DataNavigator from "./DataNavigator/DataNavigator";
import UserRegistration from "./UserRegistration/UserRegistration";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isRegistered: false };

    this.registrationCompleted = this.registrationCompleted.bind(this);
  }

  registrationCompleted() {
    this.setState({ isRegistered: true });
  }

  render() {
    return (
      <div className="Main w-100 h-100">
        {this.state.isRegistered ? (
          <DataNavigator />
        ) : (
          <UserRegistration
            registrationCompleted={this.registrationCompleted}
          />
        )}
      </div>
    );
  }
}

export default Main;
