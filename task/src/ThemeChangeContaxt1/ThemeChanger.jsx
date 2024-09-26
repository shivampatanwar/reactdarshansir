import React from "react";

export let ContextAPI = React.createContext();


const ThemeChanger = ({ children }) => {

  let [theme, setTheme] = React.useState(true);



  let themes = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    theme,
  };
  return (
    <ContextAPI.Provider value={themes}>
      <button id="button" onClick={() => setTheme(!theme)}>{theme ? "Dark" : "Light"}</button>
      {children}
    </ContextAPI.Provider>
  )
};

export default ThemeChanger;
