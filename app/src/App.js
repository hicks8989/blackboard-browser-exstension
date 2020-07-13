// Import React:
import React, { Component } from 'react';

// Import Pages:
import Login from './pages/Login';

// Main app class:
class App extends Component {
  render() {
    return (
      <div className="bg-dark text-white">
        <div className="container-fluid">
          <div className="row pt-3 pb-3">
            <div className="col-md-12 text-center">
              <h1 className="text-sm-center">Blackboard</h1>
            </div>
          </div>
          <Login></Login>
        </div>
      </div>
    );
  }
}

export default App;