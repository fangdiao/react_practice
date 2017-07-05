import React from "react";

export default class LoginCheck extends React.Component {

  constructor(props) {
    super();
    this.state = {isOn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.setState({isOn: false});
  }

  handleLoginClick() {
    this.setState({isOn: true});
  }

  render() {
    const isOn = this.state.isOn;
    let button = null;
    if (isOn) {
      return <button onClick={this.handleLogoutClick}>Logout</button>;
    } else {
      return <button onClick={this.handleLoginClick}>Login</button>
    }
  }
}
