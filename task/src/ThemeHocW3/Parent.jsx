import React from 'react'

const Parent = (Wrap) => {

    let fun = function(){

        
        let handleChangeTheme=() => { 

            let div1 =document.getElementById("div1");
            let div2 =document.getElementById("div2");
            let button = document.getElementById("button");

            button.innerHTML = button.innerHTML === 'Light'? 'Dark' : 'Light';

            // for div1
            button.innerHTML === 'Light'? div1.style.backgroundColor="#515653" : div1.style.backgroundColor="white";
            button.innerHTML === 'Light'? div1.style.color="white" : div1.style.color="#515653";
            
            // for div2
            button.innerHTML === 'Light'? div2.style.backgroundColor="#515653" : div2.style.backgroundColor="white";
            button.innerHTML === 'Light'? div2.style.color="white" : div2.style.color="#515653";
            
        }


        const [bg, setBg] = React.useState('#515653')
        const [color, setColor] = React.useState('white')

        let handleChangeTheme1=() => { 

            let button = document.getElementById("button1");

            button.innerHTML = button.innerHTML === 'Light'? 'Dark' : 'Light';

            bg==='white' ? setBg('#515653') : setBg('white');
            color==='#515653'? setColor('white') : setColor('#515653');

            
            
            document.getElementById('output').innerHTML = `Color: ${color}, Bg: ${bg}`;

            // document.getElementById('outer2').style.backgroundColor = bg;
            // document.getElementById('outer2').style.color = bg;





            
        }

        return <Wrap func={handleChangeTheme}  func1={handleChangeTheme1} data={{bg: bg, color:color}} />
    };

  return fun
}

export default Parent;
