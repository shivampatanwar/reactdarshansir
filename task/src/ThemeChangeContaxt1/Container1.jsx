import React from "react";
import ThemeChanger, { ContextAPI } from "./ThemeChanger";

const Container1 = () => {

  let { light, dark , theme} = React.useContext(ContextAPI);


  let div1 = React.createRef();


   React.useEffect(() => {
    // console.log(theme)
    theme
      ? (div1.current.style.backgroundColor = light.backgroundColor)
      : (div1.current.style.backgroundColor = dark.backgroundColor);
    theme
      ? (div1.current.style.color = light.color)
      : (div1.current.style.color = dark.color);
  }, [theme]);

  return (
    <div>
      <div id="div1" ref={div1}>
        <h1>Container1</h1>
      </div>
    </div>
  );
};

export default Container1;
