import Header from './assets/components/Header/Header'
import CardOfWord from './assets/components/Card/CardOfWord'
import Table from './assets/components/Table/Table/Table'
import Footer from './assets/components/Footer/Footer'
import words from './assets/data/data.json'
import ErrorPage from './assets/components/ErrorPage/ErrorPage'
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
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
