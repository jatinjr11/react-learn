import React, { useState } from 'react'

const ButtonTwo = () => {
    const [num, setNum] = useState(10);

    const btnClicked = () => {
        // setNum(num + 1);
        // setNum(num + 1);
        // setNum(num + 1);
        setNum(prev => prev + 1)
        setNum(prev => prev + 1)
        setNum(prev => prev + 1)
    }
    return (
        <>
            <h1>{num}</h1>
            <button onClick={btnClicked}>Click</button>
        </>
    )
}

export default ButtonTwo