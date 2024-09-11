import React from 'react'

const State1 = (props) => {

    if (props.count >= 1 && props.count <= 5) {
        document.getElementById('div').style.backgroundColor = 'red';
    }

    if (props.count > 5) {
        document.getElementById('div').style.backgroundColor = 'yellow';
    }


    return (
        <div>
            <div className='div' id='div'>
                <h1>{props.count}</h1>
            </div>
            <button onClick={props.handleCountDecrease}>Decrement</button>
            <button onClick={props.handleCountIncrease}>Increment</button>
        </div>
    )
}

export default State1;
