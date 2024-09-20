import React from 'react'
import Parent from './Parent'

const Div2 = () => {

  return (
    // <div  id='div2' style={{backgroundColor:props.theme.bg, color: props.theme.color}}>
    <div  id='div2'>
      <h1>Div2</h1>
    </div>
  )
}

export default Parent(Div2)
