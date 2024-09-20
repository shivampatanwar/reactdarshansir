import React from 'react'
import Parent from './Parent'

const Child1 = (props) => {
  return (
    <div>
        <h1>{props.data.name}</h1>
    </div>
  )
}

export default Parent(Child1)

