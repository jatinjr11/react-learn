export const ParentComp = () => {
    return (
        <>
            <h1>Hello, i am Component A</h1>
            <ChildComponent data="react js" />
        </>
    )
}

export const ChildComponent = (props) => {
    return (
        <>
            <h1>Hello, I am component B</h1>
            <GrandChildComponent data={props.data} />
        </>
    )
}

export const GrandChildComponent = (props) => {
    return (
        <>
            <h1>Hello, I am component C</h1>
            <GrandGrandChildComponent data={props.data} />
        </>
    )
}

export const GrandGrandChildComponent = (props) => {
    return (
        <>
            <h1>Hello, i love {props.data}</h1>
        </>
    )
}