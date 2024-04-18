import Header from './assets/components/Header/Header'
import CardOfWord from './assets/components/Card/CardOfWord'
import Table from './assets/components/Table/Table/Table'
import Footer from './assets/components/Footer/Footer'
import words from './assets/data/data.json'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <div className='content'>
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/game" element={<CardOfWord words = {words}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
