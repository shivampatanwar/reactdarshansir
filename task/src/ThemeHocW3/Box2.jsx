import React from 'react'
import Parent1 from './Parent1'

const Box2 = (props) => {


  return (
    <div id='div2'  style={{backgroundColor:props.data.bg, color: props.data.color}}>
      <h1>Div2</h1>
      <p>Color : {props.data.color}</p>
      <p>BG : {props.data.bg}</p>
    </div>
  )
}

export default Parent1(Box2)
