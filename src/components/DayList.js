import React from "react";

import "components/DayListItem.js";
import DayListItem from "components/DayListItem";

// Display list of days for the week
export default function DayList(props) {
  return (
    <ul>
      {props.days.map((day) => (
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.value}
          setDay={props.onChange}
        />
      ))}
    </ul>
  );
}


