import React from 'react'
import Parent from './Parent'

const Child2 = (props) => {

  return (
    <div>
       <h1>{props.data.email}</h1>
    </div>
  )
}

export default Parent(Child2)
