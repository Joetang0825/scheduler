import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment"

describe("Appointment", () => {
  it("render without crashing", () => {
    render(<Appointment />);
  });
});

