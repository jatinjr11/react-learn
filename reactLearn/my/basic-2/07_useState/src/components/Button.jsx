import React, { useState } from 'react'

const Button = () => {
    /*
    const [num, setNum] = useState({ user: "Sachin", age: 22 });
    
    function btnClicked() {
        const newNum = { ...num }
        newNum.user = "Rahul";
        newNum.age = 24;
        setNum(newNum)
    }
    */

    const [num, setNum] = useState({ user: "Rishi", age: 18 });

    const btnClicked = () => {
        setNum(prev => ({ ...prev, age: 50 }))
    }
    return (
        <>
            <h1>{num.user}, {num.age}</h1>
            <button onClick={btnClicked}>Click</button>
        </>
    )
}

export default Button