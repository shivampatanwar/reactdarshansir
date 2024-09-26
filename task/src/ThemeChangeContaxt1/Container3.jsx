import React from "react";
import ThemeChanger, { ContextAPI } from "./ThemeChanger";

const Container3 = () => {
  let { light, dark, theme } = React.useContext(ContextAPI);
  let div3 = React.createRef();

  React.useEffect(() => {
    // console.log(theme)
    theme
      ? (div3.current.style.backgroundColor = light.backgroundColor)
      : (div3.current.style.backgroundColor = dark.backgroundColor);
    theme
      ? (div3.current.style.color = light.color)
      : (div3.current.style.color = dark.color);
  }, [theme]);

  return (
    <div>
      <div id="div3" ref={div3}>
        <h1>Container3</h1>
      </div>
    </div>
  );
};

export default Container3;
