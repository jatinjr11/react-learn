import './App.css'
import Consumer from './Consumer'
import ThemeProvider from './context/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <Consumer />
    </ThemeProvider>
  )
}

export default App
