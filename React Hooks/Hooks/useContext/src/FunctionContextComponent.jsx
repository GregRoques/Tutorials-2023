import React, { useContext } from "react";
import { useTheme, userThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme(ThemeContext); // super simple... no need for "Consumer" nesting
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={themeStyles}>Function Theme</div>;
}

// used with original Context (commented out in App)
/*
import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext); // super simple... no need for "Consumer" nesting
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={themeStyles}>Function Theme</div>;
}
*/
