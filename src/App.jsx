import Header from './assets/components/Header/Header'
// import CardOfWord from './assets/components/Card/CardOfWord'
import Table from './assets/components/Table/Table/Table'
import Footer from './assets/components/Footer/Footer'

import './App.css'

function App() {
  return (
      <div className='content'>
        <Header />
        {/* <CardOfWord english='apple' transcription='[æpl]'  russian='яблоко'/> */}
        <Table />
        <Footer />
      </div>
  )
}
// english, transcription, russian
export default App
