import Header from './assets/components/Header/Header'
import CardOfWord from './assets/components/Card/CardOfWord'
import Table from './assets/components/Table/Table/Table'
import Footer from './assets/components/Footer/Footer'
import words from './assets/data/data.json'

import './App.css'

function App() {
  return (
      <div className='content'>
        <Header />
        <CardOfWord words = {words}/>
        <Table />
        <Footer />
      </div>
  )
}

export default App
