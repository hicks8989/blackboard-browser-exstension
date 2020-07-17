// Import React:
import React, { Component } from "react";

// Import Components:
import Courses from "../Courses";

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Courses />
      </div>
    );
  }
}