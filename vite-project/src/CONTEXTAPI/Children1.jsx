import React, { useContext } from 'react'
import  {ContextAPI} from './MyContext'

const Children1 = () => {

    let {name, email} = useContext(ContextAPI);

  return (
    <div>
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
    </div>
  )
}

export default Children1
