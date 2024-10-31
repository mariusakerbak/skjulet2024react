import './App.css'
import { Route, Routes } from 'react-router-dom'
import Frontpage from './components/_pages/Frontpage'
import Songbook from './components/_pages/Sangbox'
import SongDetails from './components/_pages/Sang'
import About from './components/_pages/About'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/sangbok" element={<Songbook />} />
      <Route path="/sangbok/:slug" element={<SongDetails />} />
      <Route path="/om-skjulet" element={<About />} />
    </Routes>
  )
}

export default App
