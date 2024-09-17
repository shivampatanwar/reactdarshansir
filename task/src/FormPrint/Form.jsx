import React, { useRef, useState } from 'react'
import './Form.css'

const Form = () => {


    let name = useRef()
    let email = useRef()
    let mobile = useRef()
    let city = useRef()
    let container = useRef()

    // let [data, setData] = useState({});

    let submit=()=>{
        container.current.innerHTML+="<h2> Name : " + name.current.value + "</h2>"
        container.current.innerHTML+="<h4> Email : " + email.current.value  + "</h4>"
        container.current.innerHTML+="<h4> Mobile : " +  mobile.current.value  + "</h4>"
        container.current.innerHTML+="<h4> City : " + city.current.value  + "</h4>"
        // setData({
        //     name: name.current.value,
        //     email: email.current.value,
        //     mobile: mobile.current.value,
        //     city: city.current.value,
        // });
    }


  return (
    <div>
      <div>
        <label htmlFor="name">Name : </label>
        <input ref={name} type="text" id='name' /> <br /><br />
        <label htmlFor="email">Email : </label>
        <input ref={email} type="email" id='email' />  <br /><br />
        <label htmlFor="mobile">Mobile : </label>
        <input ref={mobile} type="tel" id='mobile' />  <br /><br />
        <label htmlFor="city">City : </label>
        <input ref={city} type="text" id='city' />  <br /><br />
        <button onClick={submit}>Submit</button>
      </div>

      <div id='container'  ref={container}>
        
      </div>
    </div>
  )
}

export default Form
