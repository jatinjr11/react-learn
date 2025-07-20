import React from 'react'

function FuncPureComp(props) {
    console.log("Rendred: ", props.count);

    return (
        // <div> Hello, {props.name} </div>
        <div> Hello, {props.count} </div>
    )
}

export default React.memo(FuncPureComp) // memo is used to prevent re-rendering of component when props are not changed.