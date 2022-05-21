import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  let itemClass = classNames("interviewers__item", { "interviewers__item--selected": props.selected })


  //let dayClass = classnames("day-list__item", { "day-list__item--selected": props.selected }, { "day-list__item--full": props.spots === 0 });
  // console.log(props.selected);
  // console.log(itemClass);

  return (
    <li onClick={() => props.setInterviewer(props.id)} className={itemClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>)
}