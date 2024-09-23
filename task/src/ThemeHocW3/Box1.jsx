import React, { useContext } from 'react'
import Parent1 from './Parent1'

const Box1 = (props) => {

  // const{ value }= useContext()


  return (
    <div id='div1'  style={{backgroundColor:props.data.bg, color: props.data.color}}>
      <h1>Div1</h1>
      <p>Color : {props.data.color}</p>
      <p>BG : {props.data.bg}</p>
    </div>
  )
}

export default Parent1(Box1)
