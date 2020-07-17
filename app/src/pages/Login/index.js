// Import React:
import React, { Component } from "react";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

      setTimeout(this.props._setAuthenticated, 1000);
    } catch(e) {
      this.setState({
        errorMessage: e.message
      });
    }
  }

  render() {

    const button = <button onClick={this._onLogin} type="submit" className=" btn btn-block btn-outline-light">Sign in</button>;
    const spinner = <div className="spinner-border text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>;
    return (
      <div className="row">
        <div className="container-fluid">
          <form autoComplete="off" action="" method="POST" name="login">
            <div className="form-group">
              <label className="pl-2 pt-4" htmlFor="username">Username</label>
              <input spellCheck="false" onChange={this._handleChange} value={this.state.username} type="text" name="username" className="form-control" id="username" placeholder="Username"></input>
              <label className="pl-2 pt-4" htmlFor="password">Password</label>
              <input spellCheck="false" onChange={this._handleChange} value={this.state.password} type="password" name="password" className="form-control" id="password" placeholder="Password"></input>
              <div className="col-md-12 text-center pt-5 mt-5 pb-3">
                { this.state.loading ? spinner : button }
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}