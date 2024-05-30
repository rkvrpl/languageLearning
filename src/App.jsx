import Header from './assets/components/Header/Header'
import CardParent from './assets/components/Card/CardParent/CardParent'
import Table from './assets/components/Table/Table/Table'
import Footer from './assets/components/Footer/Footer'
import ErrorPage from './assets/components/ErrorPage/ErrorPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import WordContext from './assets/Context/WordContext'
import './App.css'

function App() {

  const [words, setWords] = useState([])

  const fetchWords = async () => {
    const response = await fetch(`/api/words`)
    const data = await response.json()
    setWords(data)
  }

  const addWord = async (newWord) => {
    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    })
    const data = await response.json()
    setWords((words) => [...words, data])
  };

  const updateWord = async (updatedWord) => {
    const response = await fetch(`/api/words/${updatedWord.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    })
    const data = await response.json()
    setWords(words.map((word) => (word.id === updatedWord.id ? data : word))) 
  }

  const deleteWord = async (id) => {
    await fetch(`/api/words/${id}/delete`, {
      method: "POST",
    })
    setWords(words.filter((word) => word.id !== id))
  }

  return (
    <WordContext.Provider
      value={{
        words,
        fetchWords,
        addWord,
        updateWord,
        deleteWord,
      }}>
    <Router>
      <div className='content'>
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/game" element={<CardParent words={words}/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </WordContext.Provider>
  )
}

export default App
