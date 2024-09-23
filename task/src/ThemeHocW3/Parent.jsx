import React from 'react'

const Parent = (Wrap) => {

    let fun = function(){
 
        
        let handleChangeTheme=() => { 

            let div1 =document.getElementById("div1");
            let div2 =document.getElementById("div2");
            let button = document.getElementById("button");

            button.innerHTML = button.innerHTML === 'Light ☀'? 'Dark ☽' : 'Light ☀';

            // for div1
            button.innerHTML === 'Light ☀'? div1.style.backgroundColor="#515653" : div1.style.backgroundColor="white";
            button.innerHTML === 'Light ☀'? div1.style.color="white" : div1.style.color="#515653";
            
            // for div2
            button.innerHTML === 'Light ☀'? div2.style.backgroundColor="#515653" : div2.style.backgroundColor="white";
            button.innerHTML === 'Light ☀'? div2.style.color="white" : div2.style.color="#515653";
            
        }

        return <Wrap func={handleChangeTheme} />
    };

  return fun
}

export default Parent;
