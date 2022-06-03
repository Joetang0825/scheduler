import { useState } from "react";

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

    // console.log(`history: ${history}`);
    // console.log(`mode: ${mode}`);

  }

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



// import { useState } from "react";

// export default function useVisualMode(initial) {
//   const [mode, setMode] = useState(initial);
//   const [history, setHistory] = useState([initial]);

//   const transition = function (newMode, replace = false) {
//     if (replace) {
//       history.pop();
//       setHistory(history);
//       setHistory([...history, newMode]);
//       setMode(newMode);
//     }
//     else {
//       setHistory([...history, newMode]);
//       setMode(newMode);
//     }
//   }

//   const back = function () {
//     if (history.length > 1) {
//       history.pop()
//       setHistory(history);
//       setMode(history[history.length - 1]);
//     }
//   }

//   return { mode, transition, back };

// }