import React from "react";

import "components/DayListItem.scss";
import classnames from "classnames";

export default function DayListItem(props) {
  let dayClass = classnames("day-list__item", { "day-list__item--selected": props.selected }, { "day-list__item--full": props.spots === 0 });

  // console.log(dayClass);

  const formatSpots = () => {

    if (props.spots === 0) {
      return 'no spots';
    }

    if (props.spots > 1) {
      return props.spots + ' spots';
    }

    if (props.spots === 1) {
      return props.spots + ' spot';
    }

  }


  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()} remaining</h3>
    </li>
  );
}