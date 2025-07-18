// import './App.css'
// import './components/Netflix'
import EventHandler from './components/EventHandler'
import { EventsProps } from './components/EventsProps'
import './components/Netflix.css'
import NetFlixSeries from './components/NetFlixSeries'

function App() {
  return (
    <section className='container'>
      <h1 className='card-heading'>List of Best Netflix Series</h1>
      {/* <NetFlixSeries /> */}
      {/* <EventHandler/> */}
      <EventsProps/>
    </section>
  )
}

export default App
