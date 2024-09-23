import React from 'react'
import Parent1 from './Parent1'


const Button1 = (props) => {
  return (
    <div>
        <button  id='button1'  onClick={props.func1}>Dark &#9789;</button>
    </div>
  )
}

export default Parent1(Button1)
