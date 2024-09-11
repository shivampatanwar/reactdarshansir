import React, { Component } from 'react'

class Cbcprops extends Component {
    
  render(props) {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.salary}</h1>
        <h1>{this.props.employee}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.data}</h1>
        <h1>{this.props.mobile}</h1>


        <h1 style={{marginTop: 50}}>Js Array</h1>
        {this.props.arr.map((v, i)=>{
               return <h1 key={v}>{v}</h1>
        })}


        <h1 style={{marginTop: 50}}>Js Object</h1>
        <h1>Name : {this.props.obj.name}</h1>
        <h1>Salary : {this.props.obj.salary}</h1>
        <h1>Mobile : {this.props.obj.mobile}</h1>
        
      </div>
    )   
  }
}

export default Cbcprops;
