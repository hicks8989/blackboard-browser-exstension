// Import React:
import React from "react";

export default function Course(props) {
  return (
    <div className="card mb-2">
      <div className="card-body pt-2 pb-1">
        <h6 className="card-title text-dark font-weight-bold"><a onClick={props._setClass} href="#">{`${props.course.name}-${props.course.id}`}</a></h6>
        <h6 className="card-subtitle mb-2 text-muted text-sm-left">{props.course.instructor}</h6>
      </div>
    </div>
  );
}