import React from 'react'
import Parent from './Parent'


const Button1 = (props) => {
  return (
    <div>
        <button  id='button1'  onClick={props.func1}>Dark</button>
    </div>
  )
}

export default Parent(Button1)
