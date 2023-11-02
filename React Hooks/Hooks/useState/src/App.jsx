import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return 4;
  }); // first part of arr is currState, the other is a function that sets state
  // when we pass value via function, it only passes "4" first time; if we were to write useState(4), 4 would be passed every time count is called.

  const [theme, setTheme] = useState({ color: "red", style: "bold" }); //use state is a different with Objects
  // this is just an example... better to just seperate into two useStates
  const color = theme.color;
  const style = theme.style;

  function decrement() {
    //setCount(count - 1);
    //can also do...
    setCount((prevCount) => prevCount--); // write as function where function takes prev count
    // this is better as prevCount is passed... for the other, count renders when function is called. Always use this function version

    setTheme((prevTheme) => {
      return { ...prevTheme, color: color === "blue" ? "red" : "blue" }; // must pass whole state if not updating both, as useState overwrites all state each time rather than update as it does with Class
    });
  }

  function increment() {
    setCount((prevCount) => prevCount++);
    setTheme((prevTheme) => {
      return { ...prevTheme, style: style === "bold" ? "italic" : "bold" }; // must pass whole state if not updating both, as useState overwrites all state each time rather than update as it does with Class
    });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ color: color, fontStyle: theme }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
