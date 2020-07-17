// Import React:
import React from "react";

export default function Announcement(props) {
  return (
    <div className="panel">
      <div className="panel panel-default" id={`heading-${props.announcement.id}`}>
        <div className="mb-0">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#announcements">
              { props.announcement.title }
            </a>
          </h4>
        </div>
      </div>
      <div aria-labelledby={`heading-${props.announcement.id}`} data-parent="#announcements" id={`announcement-${props.announcement.id}`} className="panel-collapse collapse">
        <div class="panel-body">
          { props.announcement.body }
        </div>
      </div>
    </div>
  );
}