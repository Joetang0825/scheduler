import React from "react";

import "components/DayListItem.scss";
import classnames from "classnames";

export default function DayListItem(props) {
  let dayClass = classnames("day-list__item", { "day-list__item--selected": props.selected }, { "day-list__item--full": props.spots === 0 });


  const formatSpots = (numSpots) => {

    if (numSpots === 0) {
      return 'no spots';
    }

    if (numSpots > 1) {
      return numSpots + ' spots';
    }

    if (numSpots === 1) {
      return numSpots + ' spot';
    }

  }


  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)} remaining</h3>
    </li>
  );
}