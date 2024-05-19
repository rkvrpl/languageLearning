import Form from '../Form/Form'
import style from './TableWords.module.css'
import '../../../style/variables.css'
import { useState, useContext, useEffect } from 'react'
import WordContext from '../../../Context/WordContext'

const TableWords = (props) =>{
const { english, transcription, russian, tags, id } = props

const [change, setChange] = useState(false)

const handelChangeState = () => setChange(!change)

const { fetchWords, updateWord, deleteWord } =
    useContext(WordContext)

  useEffect(() => {
    fetchWords()
  }, [])

  const handleUpdateWord = (updatedWord) => {
    console.log(updatedWord)
    updateWord(updatedWord)
  }

  const handleDeleteWord = (id) => {
    deleteWord(id)
  }

	return(
    <>
    <tbody>
      <tr>{change? 
        <Form id={id}
        handelChangeState={handelChangeState}
        handleUpdateWord={handleUpdateWord} />
        :<>
        <td className={style.header}>{english}</td>
        <td className={style.header}>{transcription}</td>
        <td className={style.header}>{russian}</td>
        <td className={style.header}>{tags?tags:'без тэга'}</td>
        <td> 
          <button onClick={handelChangeState} className={style.pencil}></button>	
          <button onClick={handleDeleteWord} className={style.trash}></button>
        </td>
        </>}
      </tr>
    </tbody>
    </>
	)
}
export default TableWords


