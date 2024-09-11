import React from 'react'
import Logo from '../NavBar/Logo'
import Navigation from '../NavBar/Navigation';
import '../NavBar/Nav.css'

const Nav = (props) => {
  return (
    <header id='appdiv' style={{backgroundColor: props.bgcolor, color: props.color}}>
        <Logo/>
        <Navigation/>
    </header>
  )
}

export default Nav
