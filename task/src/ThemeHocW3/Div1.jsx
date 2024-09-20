import React from 'react'
import Parent from './Parent'

const Div1 = () => {


  return (
    // <div id='div1'  style={{backgroundColor:props.theme.bg, color: props.theme.color}}>
    <div id='div1'>
      <h1>Div1</h1>
    </div>
  )
}

export default Parent(Div1)
