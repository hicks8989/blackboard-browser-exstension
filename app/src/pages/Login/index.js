// Import React:
import React, { Component } from "react";

// Components:
import Home from "../Home";

// Import Router:
import {
  goTo
} from "react-chrome-extension-router";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      school: "",
      username: "",
      password: "",
      errorMessage: "",
      loading: false
    }

    this._handleChange = this._handleChange.bind(this);
    this._onLogin = this._onLogin.bind(this);
  }

  _handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  _onLogin = async (event) => {
    event.preventDefault();
    try {
      this.setState({
        loading: true
      });

      setTimeout(this.props._setAuthenticated, 3000);
    } catch(e) {
      this.setState({
        errorMessage: e.message
      });
    }
  }

  render() {

    const button = <button onClick={this._onLogin} type="submit" class=" btn btn-block btn-outline-light">Sign in</button>;
    const spinner = <div class="spinner-border text-light" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>;
    return (
      <div className="row">
        <div className="container">
          <form action="" method="POST" name="login">
            <div className="form-group">
            <label className="pl-2" htmlFor="school">School</label>
              <input onChange={this._handleChange} value={this.state.school} type="text" name="school" className="form-control" id="school" placeholder="Type your school's name"></input>
              <label className="pl-2 pt-4" htmlFor="username">Username</label>
              <input onChange={this._handleChange} value={this.state.username} type="text" name="username" className="form-control" id="username" placeholder="Username"></input>
              <label className="pl-2 pt-4" htmlFor="password">Password</label>
              <input onChange={this._handleChange} value={this.state.password} type="password" name="password" className="form-control" id="password" placeholder="Password"></input>
              <div className="col-md-12 text-center pt-5 pb-4">
                { this.state.loading ? spinner : button }
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}