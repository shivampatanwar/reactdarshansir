import React from 'react'
import Parent from './Parent'


const Button = (props) => {
  return (
    <div>
        <button  id='button'  onClick={props.func}>Dark</button>
    </div>
  )
}

export default Parent(Button)
