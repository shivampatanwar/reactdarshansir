import React, { useState } from 'react'
import '../task.css'
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Fbc = () => {

    const [light, setLight] = useState('light');
    const [dark, setDark] = useState('dark');

    let lightTheme = () => {
        document.getElementById('light').style.backgroundColor = 'white'

        document.getElementById('light').style.color = 'black'

        document.getElementById('icon2').style.color = 'black'
        document.getElementById('right').style.color = 'black'
        document.getElementById('icon2').style.backgroundColor = 'white'
        document.getElementById('right').style.backgroundColor = 'white'
        document.getElementById('dark').style.backgroundColor = 'white'

        // document.getElementById('dark').style.opacity = '0.2'
        // document.getElementById('light').style.opacity = '1'
    }

    let darkTheme = () => {
        document.getElementById('dark').style.backgroundColor = 'black'

        document.getElementById('icon2').style.color = 'white'
        document.getElementById('right').style.color = 'white'
        document.getElementById('icon2').style.backgroundColor = 'black'
        document.getElementById('right').style.backgroundColor = 'black'

        // document.getElementById('light').style.opacity = '0.2'
        // document.getElementById('dark').style.opacity = '1'
    }


    return (
        <div >
            <div id='outerdiv'>
                <div id="light" onClick={lightTheme}>
                    <FiSun className='icon' id='icon1' />
                    <FaArrowLeft id='left' />
                </div>
                <div id="dark" onClick={darkTheme}>
                    <FaArrowRight id='right' />
                    <FiMoon className='icon' id='icon2' />
                </div>
            </div>
        </div>
    )

}
export default Fbc
