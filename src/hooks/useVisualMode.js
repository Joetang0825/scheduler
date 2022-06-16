import { useState } from "react";

// Helper function to save a history of previous modes and transition the user to the new mode
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    if (replace) {
      setMode(newMode);
    }
    else {
      setHistory(history => ([...history, newMode]));
      setMode(newMode);
    }

  }

  // Use the history to navigate user back to the previous mode
  const back = function () {

    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory([...newHistory]);
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };

}
