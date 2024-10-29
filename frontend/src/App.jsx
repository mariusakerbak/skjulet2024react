import './App.css'
import { Route, Routes } from 'react-router-dom'
import Frontpage from './components/_pages/Frontpage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
    </Routes>
  )
}

export default App
