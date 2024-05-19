import { createContext } from 'react'

const WordContext = createContext({
  words: [],
  fetchWords: () => {},
  addWord: () => {},
  updateWord: () => {},
  deleteWord: () => {},
})

export default WordContext