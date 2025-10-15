import { useState } from 'react'

import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'

function Consumer() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1>Hyyy</h1>
            <h1>{theme}</h1>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
        </>
    )
}

export default Consumer
