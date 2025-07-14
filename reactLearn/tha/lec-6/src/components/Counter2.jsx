import React, { useEffect } from 'react'
function Counter2({number}) {

    useEffect(()=> {
        console.log("Funcational Component : Mounting");
        
        return () => {
            console.log("Funcational Component : Unmounting === Removed");
        }

    },[number])

    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}
export default Counter2;