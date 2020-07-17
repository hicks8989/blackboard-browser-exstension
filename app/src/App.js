// Import React:
import React, { Component } from 'react';

// Import Components:
import Login from "./pages/Login";
import Home from "./pages/Home";

// Main app class:
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    }

    this._setAuthenticated = this._setAuthenticated.bind(this);
  }

  _setAuthenticated = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {
    return (
      <div id="main" className="bg-dark text-white">
        <div className="container-fluid">
          <div className="row pt-3 pb-3">
            <div className="col-md-12 text-center">
              <h1 className="text-sm-center">Blackboard</h1>
            </div>
          </div>
          { this.state.authenticated ? <Home /> : <Login _setAuthenticated={this._setAuthenticated}/> }
        </div>
      </div>
    );
  }
}

export default App;