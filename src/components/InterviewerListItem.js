import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  let interviewerClass = classNames("interviewers__item", { "interviewers__item--selected": props.selected })


  //let dayClass = classnames("day-list__item", { "day-list__item--selected": props.selected }, { "day-list__item--full": props.spots === 0 });
  // console.log(props.selected);
  // console.log(interviewerClass);

  return (
    <li onClick={props.setInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>)
}