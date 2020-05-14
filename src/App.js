import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
// import Header from './components/header';
// import Login from './components/login';
// import Profile from './components/profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: false,
      user: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.setState({
      loggedInStatus: false,
      user: null
    });
  }

  handleLogin(user) {
    this.setState({
      loggedInStatus: true,
      user: user.name
    });
  }
  scope = null;
  componentWillMount(){
    this.scope = window.location.pathname;
  }
  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state}
                />
              )}
            />
            <Route
              exact
              path={"/profile"}
              render={props => (
                <Dashboard
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state}
                />
              )}
            />
          </Switch>
        </BrowserRouter>

        
        {/* <Route exact path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        {!this.state.authenticated || this.scope == '/login' ? 
          (<Redirect to='/login' />) : (<Redirect to='/profile' />)} */}
      </div>
    );
  }
}

export default App;
