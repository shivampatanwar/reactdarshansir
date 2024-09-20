import React from 'react'
import Parent from './Parent'

const Child4 = (props) => {
  return (
    <div>
       <h1>{props.data.age}</h1>
    </div>
  )
}

export default Parent(Child4)
