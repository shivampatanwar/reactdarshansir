import React, { Component } from 'react'
import './Nav.css';
import Logo from './Logo';
import Nav from './Nav';

// class Header extends Component {
//   render() {
//     return (
//       <div id='header'>
//         <Logo/>
//         <Nav/>
//       </div>
//     )
//   }
// }


const Header = () => {
    return (
        <div id='header'>
            <Logo />
            <Nav />
        </div>
    )
}

export default Header;
