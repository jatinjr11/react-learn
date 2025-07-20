import { NavLink } from "react-router-dom";

function About() {
    return (
        <>
            <h2>About Page</h2>
            <NavLink to={'./'} style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} >
                Dasboard
            </NavLink>
        </>
    )
}

export default About;