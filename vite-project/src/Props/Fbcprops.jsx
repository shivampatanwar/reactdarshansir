import React from 'react'

const Fbcprops = (props) => {
  console.log(props);
  console.log(props.name);
  console.log(props.salary);
  console.log(props.employee);
  console.log(props.age);
  console.log(props.data);
  console.log(props.mobile);
  console.log(props.func);

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.salary}</h1>
      <h1>{props.employee? 'true' : 'false'}</h1>
      <h1>{props.age?'true' : 'false'}</h1>
      <h1>{props.data?'true' : 'false'}</h1>
      <h1>{props.mobile}</h1> 



      <h1 style={{ marginTop: 50 }}>Js Array</h1>
      {props.arr.map((v, i) => {
        return <h1 key={v}>{v}</h1>
      })}


      <h1 style={{ marginTop: 50 }}>Js Object</h1>
      <h1>Name : {props.obj.name}</h1>
      <h1>Salary : {props.obj.salary}</h1>
      <h1>Mobile : {props.obj.mobile}</h1>


    </div>
  )
}

export default Fbcprops
