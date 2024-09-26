import React from "react";
import ThemeChanger, { ContextAPI } from "./ThemeChanger";

const Container4 = () => {
  let { light, dark, theme } = React.useContext(ContextAPI);
  let div4 = React.createRef();


  React.useEffect(() => {
    // console.log(theme)
    theme
      ? (div4.current.style.backgroundColor = light.backgroundColor)
      : (div4.current.style.backgroundColor = dark.backgroundColor);
    theme
      ? (div4.current.style.color = light.color)
      : (div4.current.style.color = dark.color);
  }, [theme]);

  return (
    <div>
      <div id="div4" ref={div4}>
        <h1>Container4</h1>
      </div>
    </div>
  );
};

export default Container4;
