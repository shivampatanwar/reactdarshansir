import React, { Component } from 'react'

// class State extends Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }

//   handleCountIncrease = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }


//   handleCountDecrease = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render() {

// if(this.state.count>=1 && this.state.count<=5){
//     document.getElementById('div').style.backgroundColor = 'red';
// }

// if(this.state.count>5){
//     document.getElementById('div').style.backgroundColor = 'Yellow';
// }

// if(this.state.count<1){
//     document.getElementById('div').style.backgroundColor = 'white';
// }


//     return (
//       <div>
//         <div className='div' id='div'>
//         <h1>{this.state.count}</h1>
//         </div>
//         <button onClick={this.handleCountIncrease}>Increment</button>
//         <button onClick={this.handleCountDecrease}>Decrement</button>
//       </div>
//     )
//   }
// }


import { useState } from 'react'
import State1 from './State1';

const State = () => {

    const [count, setCount] = useState(0);

    let handleCountIncrease = () => {
        setCount(count + 1)
    }


    let handleCountDecrease = () => {
        setCount(count - 1)
    }

   


    return (
        <div>
           <State1 count={count} handleCountIncrease={handleCountIncrease} handleCountDecrease={handleCountDecrease} />
        </div>
    )
}



export default State;
