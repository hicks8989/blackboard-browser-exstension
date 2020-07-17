// Import React:
import React, { Component } from "react";

// Import Announcement:
import Announcement from "./Announcement";

export default class Announcements extends Component {

  constructor(props) {
    super(props);

    this.state = {
      announcements: [
        {
          title: "Hello World",
          body: "This should drop down on the click of a button!!",
          id: 1
        }
      ]
    }
  }

  render() {
    const AnnouncementList = this.state.announcements.map( (announcement, index) => {
      return <Announcement announcement={announcement} key={index} />
    });
    return (
      <div className="row">
        <div className="container">
          <p className="">Announcements:</p>
          <div id="announcements">
            { AnnouncementList }
          </div>
        </div>
      </div>
    );
  }
}