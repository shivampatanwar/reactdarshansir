// import React from 'react';
// import Fcc from './CBC/Cbc'
// import { Rafce1 } from './FBC/Rafce'
// import { Rafce2 } from './FBC/Rafce'
// import Header from './Nav/Header'


// CBC and FBC 
// function App() {
//   return (
//     <>
//       <h1>App.Jsx</h1>
//       <Fcc/>
//       <Rafce1/>
//       <Rafce2/>
//     </>
//   )
// }


// Header styles
// function App() {

//   return (

//     <>
//       <Header />
//     </>
//   )
// }

// export default App




// CBC Props Style
// import Cbcprops from './Props/Cbcprops'

// class App extends React.Component{
//     constructor() {
//         super();

//         // Primitive data types
//         this.name='Shivam';
//         this.salary=5000;

//         // Not Possible
//         this.employee=true;
//         this.age=undefined;
//         this.data = null;
//         this.mobile=9685430664n;


//         // Non primitive data types
//         this.arr=['Vikash', '9000']

//         this.obj={
//             name:'Manoj',
//             salary:4000,
//             mobile:8954785698
//         }

//     }
//     render(){
//         return (
//             <>  
//                 <Cbcprops name={this.name} salary={this.salary} employee={this.employee} age={this.age} data={this.data}  mobile={this.mobile}  arr={this.arr}  obj={this.obj   }/>
//             </> 
//         )
//     }
// }




// import Fbcprops from './Props/Fbcprops'

// const App = () => {

//     //   Primitive data types
//     let name = 'Shivam';
//     let salary = 5000;

//     // Not Possible
//     let employee = true;
//     let age = undefined;
//     let data = null;
//     let mobile = 9685430664n;


//     // Non primitive data types
//     let arr = ['Vikash', '9000']

//     let obj = {
//         name: 'Manoj',
//         salary: 4000,
//         mobile: 8954785698
//     }

//     function func(){
//         console.log('Hello Function')
//     }

//     return (
//         <div>
//             <Fbcprops name={name} salary={salary} employee={employee} age={age} data={data}  mobile={mobile}  arr={arr}  obj={obj}  func={func}/>
//         </div>
//     )
// }



// import Nav from './NavBar/Nav';


// const App = () => {
//   return (
//     <div>
//       <Nav bgcolor="red" color="black"/>
//       <Nav bgcolor="green" color="white"/>
//       <Nav bgcolor="blue" color="white"/>
//       <Nav bgcolor="teal" color="red"/>
//     </div>
//   )
// }


// import React, { Component } from 'react'
// import State from './States/State';
// import './States/State.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <State/>
//       </div>
//     )
//   }
// }


// import State from './States/State';
// import './States/State.css';
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <State/>
//     </div>
//   )
// }


// import React from 'react'
// import Toastify from './Toastify/Toastify';

// const App = () => {
//   return (
//     <div>
//       <Toastify/>
//     </div>
//   )
// }




// import React from 'react'
// import FormPrompt from './Task/FormPrompt';

// const App = () => {
//   return (
//     <div>
//       <FormPrompt/>
//     </div>
//   )
// }



import React from 'react'
import Child1 from './Hoc/Child1';
import Child2 from './Hoc/Child2';
import Child3 from './Hoc/Child3';
import Child4 from './Hoc/Child4';

// Higher Order Components (HOC)

const App = () => {
  return (
    <div>
      <Child1/>
      <Child2/>
      <Child3/>
      <Child4/>
    </div>
  )
}

export default App;


