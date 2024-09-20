import React from 'react'
import Parent from './Parent'

const Box1 = (props) => {


  return (
    <div id='div1'  style={{backgroundColor:props.data.bg, color: props.data.color}}>
      <h1>Div1</h1>
      <p>Color : {props.data.color}</p>
      <p>BG : {props.data.bg}</p>
    </div>
  )
}

export default Parent(Box1)
