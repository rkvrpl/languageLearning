import Form from '../Form/Form'
import style from './TableWords.module.css'
import '../../../style/variables.css'
import { useState, useEffect } from 'react'
import wordsStore from '../../../stores/WordsStores'
import { observer } from 'mobx-react'


const TableWords = observer((props) =>{
const { english, transcription, russian, tags, id } = props

const { fetchWords, updateWord, deleteWord } = wordsStore

const [change, setChange] = useState(false)

const handelChangeState = () => setChange(!change)

useEffect(() => {
  fetchWords()
}, [])

const handleUpdateWord = (updatedWord) => {
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
        <td className={style.header}> 
          <button onClick={handelChangeState} className={style.pencil}></button>	
          <button onClick={() => handleDeleteWord(id)} className={style.trash}></button>
        </td>
        </>}
      </tr>
    </tbody>
    </>
	)
})
export default TableWords


