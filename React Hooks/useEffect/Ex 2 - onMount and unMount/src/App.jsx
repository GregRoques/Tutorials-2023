import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
}

const handleResize = () => {
  setWindowWidth(window.innerWidth);
};

useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  }; // cleans up, or in this case, removes event listener, once app unMounts
  // cleanup always runs before "side effect" on re-render; only cleanup runs on unMount
}, []); // sets event listener onMount;

return <div>{windowWidth}</div>;

export default App;
