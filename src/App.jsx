import Header from './assets/components/Header/Header'
import CardOfWord from './assets/components/Card/CardOfWord'
// import Carousel from './assets/components/Card/Carousel/Carousel'
import Table from './assets/components/Table/Table/Table'
import Footer from './assets/components/Footer/Footer'

import './App.css'

function App() {
  return (
      <div className='content'>
        <Header />
        {/* <Carousel /> */}
        <CardOfWord english='apple' transcription='[æpl]'  russian='яблоко'/>
        <Table />
        <Footer />
      </div>
  )
}

export default App
