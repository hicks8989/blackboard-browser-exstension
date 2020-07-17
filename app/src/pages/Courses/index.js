// Import React:
import React, { Component } from "react";

// Import Announcement:
import Course from "./Course";

export default class Courses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          name: "BBB-101-Intro to Blackboard",
          id: "09999.9999",
          instructor: "John Doe"
        },
        {
          name: "BBB-201-Blackboard API Integration",
          id: "12233.2122",
          instructor: "John Doe"
        }
      ],
      course: null
    }

    this._setClass = this._setClass.bind(this);
  }

  _setClass = (course) => {
    return () => {
      this.setState({
        course
      });
    }
  }

  render() {
    const CourseList = this.state.courses.map( (course, index) => {
      return <Course _setClass={this._setClass(course.id)} course={course} key={index} />
    });
    return (
      <div className="row">
        <div className="container">
          <p className="">Courses:</p>
          <div id="courses">
            { CourseList }
          </div>
        </div>
      </div>
    );
  }
}