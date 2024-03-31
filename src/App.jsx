import Header from './assets/components/Header/Header.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import TableHeader from './assets/components/TableWords/TableHeader/TableHeader.jsx'
import TableWords from './assets/components/TableWords/TableWords.jsx'
import words from './assets/data/data.json'
import './App.css'

function App() {
  return (
      <div className='content'>
        <Header />
        <TableHeader childComponent={
          words.map((item) => {return(<TableWords 
          english={item.english} 
          transcription={item.transcription} 
          russian={item.russian} 
          tags={item.tags} 
          key={item.id}/>
          )})}/>
        <Footer />
      </div>
  )
}

export default App
