export const EventsProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Welcome ${user}`)
    }

    const HandleHover = () => {
        alert('Mouse hovering')
    }

    return (<>

        <WelcomeUser
            onClick={() => HandleWelcomeUser("sachin")}
            onMouseEnter={HandleHover}
        />

    </>)
}

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log("Hey User, Welcome");
        props.onClick();
    }
    return (<>

        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me </button>
        <button onClick={handleGreeting} >Greeting</button>

    </>)
}