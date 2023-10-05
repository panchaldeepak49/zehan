import { useState } from 'react'
import Path from './routes/Path'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Router>
    <Path />
    </Router>
    </>
  )
}

export default App
