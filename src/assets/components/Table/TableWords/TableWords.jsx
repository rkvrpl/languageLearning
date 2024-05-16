import Form from '../Form/Form'
import style from './TableWords.module.css'
import '../../../style/variables.css'
import { useState } from 'react'

const TableWords = (props) =>{
const { english, transcription, russian, tags, id } = props

const [change, setChange] = useState(false)

const handelChangeState = () => setChange(!change)


	return(
    <>
    <tbody>
      <tr>{change? 
        <Form id={id}
        handelChangeState={handelChangeState} />
        :<>
        <td className={style.header}>{english}</td>
        <td className={style.header}>{transcription}</td>
        <td className={style.header}>{russian}</td>
        <td className={style.header}>{tags}</td>
        <td> 
          <button onClick={handelChangeState} className={style.pencil}></button>	
          <button className={style.trash}></button>
        </td>
        </>}
      </tr>
    </tbody>
    </>
	)
}
export default TableWords


