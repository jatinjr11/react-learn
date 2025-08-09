import React from 'react'

const Counter = React.memo(({count}) => {
    console.log("Rendered Counter");
    return <h1>{count}</h1>
})

export default Counter