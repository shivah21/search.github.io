import React, { Component } from "react";
import Header from "./header";
import Login from "./login";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/profile");
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
                {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}