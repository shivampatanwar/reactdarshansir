import React from 'react'

const MyContext = React.createContext(); 

const Parent1 = (Wrap) => {

    let fun = function(){



        const [bg, setBg] = React.useState('#515653')
        const [color, setColor] = React.useState('white')

        let handleChangeTheme1=() => { 

            let button = document.getElementById("button1");


            button.innerHTML = button.innerHTML === 'Light ☀'? 'Dark ☽' : 'Light ☀';

            bg==='white' ? setBg('#515653') : setBg('white');
            color==='#515653'? setColor('white') : setColor('#515653');
            
            document.getElementById('output').innerHTML = `Color: ${color=='#515653'?'black':color}, BackgroundColor: ${bg==='#515653'?'black':bg}`;
            
        }

        return <Wrap func1={handleChangeTheme1} data={{bg: bg, color:color}} />
    };

  return fun
}

export default Parent1;
