// Import React:
import React, { Component } from "react";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      school: "",
      username: "",
      password: "",
      errorMessage: ""
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

    } catch(e) {
      this.setState({
        errorMessage: e.message
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <form action="" method="POST" name="login">
            <div className="form-group">
            <label className="pl-1" htmlFor="school">School</label>
              <input onChange={this._handleChange} value={this.state.school} type="text" name="school" className="form-control" id="school" placeholder="Type your school's name"></input>
              <label className="pl-1 pt-3" htmlFor="username">Username</label>
              <input onChange={this._handleChange} value={this.state.username} type="text" name="username" className="form-control" id="username" placeholder="Username"></input>
              <label className="pl-1 pt-3" htmlFor="password">Password</label>
              <input onChange={this._handleChange} value={this.state.password} type="password" name="password" className="form-control" id="password" placeholder="Password"></input>
              <div className="col-md-12 text-center pt-5 pb-3">
              <button onClick={this._onLogin} type="submit" class=" btn btn-block btn-outline-light">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}