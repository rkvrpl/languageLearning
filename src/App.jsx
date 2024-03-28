import Header from './assets/components/Header/Header.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import TableWords from './assets/components/TableWords/TableWords.jsx'

import word from './assets/data/data.json'

import './App.css'

function App() {
//   nst rows = [
//     //   createData(english, transcription, russian, tags),
  return (
      <div className='content'>
        <Header />
        {
        word.map((item) => {return( 
          <TableWords 
          english={item.english} 
          transcription={item.transcription} 
          russian={item.russian} 
          tags={item.tags} 
          key={item.id}/>
          )})
        }
        <Footer />
      </div>
  )
}

export default App
