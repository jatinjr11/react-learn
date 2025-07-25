import React, { useEffect } from 'react'

const Counter = ({ data, count }) => {

    const handleCounter = () => {
        console.log("handleCounter Clicked")
    }

    const handleData = () => {
        console.log("handleData Clicked");
    }

    useEffect(() => {
        handleCounter();
    }, []);

    useEffect(() => {
        handleData();
    }, [count]);

    return (
        <>
            <div>Counter value {count} </div>
            <div>Data value {data}</div>


        </>
    )
}

export default Counter