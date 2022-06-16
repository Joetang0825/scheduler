import React from "react";
import "components/Appointment/styles.scss";

// Show the time slots for the selected day
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}