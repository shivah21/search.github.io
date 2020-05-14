import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Header from "./header";
import Profile from './profile';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLogoutClick() {
    console.log('logout');
    this.props.handleLogout();
}
  render() {
    return (
      <div>
        <Header
          loggedInStatus={this.props.loggedInStatus}
          handleLogoutClick={this.handleLogoutClick} />
        <h1>Welcome {this.props.loggedInStatus.user}!</h1>
        <Profile />
        {!this.props.loggedInStatus.loggedInStatus ? <Redirect to="/" /> : null}
      </div>
    )
  };
};
