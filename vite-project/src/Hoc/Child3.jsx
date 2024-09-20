import React from 'react'
import Parent from './Parent'

const Child3 = (props) => {
  return (
    <div>
       <h1>{props.data.mobile}</h1>
    </div>
  )
}

export default Parent(Child3)
