// import { useState } from 'react'
// import Fbc from './Fbc/Fbc'
// import Toggle from './Fbc/Toggle'
// import Form from './FormPrint/Form'

// function App() {

//   return (
//     <div>
//       {/* <Fbc/>
//       <br />
//       <br />
//       <Toggle/> */}
//       <Form/>

//     </div>
//   )
// }




// import React from "react";
// import Parent from "./ThemeHocW3/Parent";

// import Div1 from "./ThemeHocW3/Div1";
// import Div2 from "./ThemeHocW3/Div2";
// import Button from "./ThemeHocW3/Button";

// import Button1 from "./ThemeHocW3/Button1";
// import Box1 from "./ThemeHocW3/Box1";
// import Box2 from "./ThemeHocW3/Box2";


// const App = () => {
//   return (
//     <div id="out">
//       <div id="outer">
//         <Button />
//         <div id="inner">
//           <Div1 />
//           <Div2 />
//         </div>
//       </div>

//       <div id="outer2">
//         <Button1 />
//         <div id="output"></div>
//         <div id="inner1">
//           <Box1 />
//           <Box2 />
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react'
import ThemeChanger from './ThemeChangeContaxt1/ThemeChanger'
import Container1 from './ThemeChangeContaxt1/Container1'
import Container2 from './ThemeChangeContaxt1/Container2'
import Container3 from './ThemeChangeContaxt1/Container3'
import Container4 from './ThemeChangeContaxt1/Container4'


const App = () => {
  return (
    <div id='parent'>
      <ThemeChanger >
        <Container1/>
        <Container2/>
        <Container3/>
        <Container4/>
      </ThemeChanger>
    </div>
  )
}

export default App

