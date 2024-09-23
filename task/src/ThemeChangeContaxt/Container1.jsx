import React from "react";
import ThemeChanger, { ContextAPI } from "./ThemeChanger";

const Container1 = () => {
  let { light, dark } = React.useContext(ContextAPI);

  let [theme, setTheme] = React.useState(false);


  let div1 = React.createRef();


  let handleChange = () => {
    setTheme(!theme);
    theme
      ? (div1.current.style.backgroundColor = light.backgroundColor)
      : (div1.current.style.backgroundColor = dark.backgroundColor);
    theme
      ? (div1.current.style.color = light.backgroundColor)
      : (div1.current.style.color = dark.backgroundColor);
  };

  return (
    <div>
      <div id="div1" ref={div1}></div>

      <button onClick={handleChange}>{theme ? "Light" : "Dark"}</button>
    </div>
  );
};

export default Container1;
