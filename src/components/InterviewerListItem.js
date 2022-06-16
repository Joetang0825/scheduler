import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

// Show picture of each interviewer and display if the interviewer is selected
export default function InterviewerListItem(props) {
  let interviewerClass = classNames("interviewers__item", { "interviewers__item--selected": props.selected })

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