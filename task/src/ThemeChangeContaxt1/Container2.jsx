import React from "react";
import ThemeChanger, { ContextAPI } from "./ThemeChanger";

const Container2 = () => {
  let { light, dark, theme } = React.useContext(ContextAPI);
  let div2 = React.createRef();

  React.useEffect(() => {
    // console.log(theme)
    theme
      ? (div2.current.style.backgroundColor = light.backgroundColor)
      : (div2.current.style.backgroundColor = dark.backgroundColor);
    theme
      ? (div2.current.style.color = light.color)
      : (div2.current.style.color = dark.color);
  }, [theme]);

  return (
    <div>
      <div id="div2" ref={div2}>
        <h1>Container2</h1>
      </div>
    </div>
  );
};

export default Container2;
