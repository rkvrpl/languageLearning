import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
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
    <TableBody>{change? 
      <Form english={english} 
			transcription={transcription} 
			russian={russian} 
			tags={tags} 
			id ={id}/>
      :<>
      <TableCell className={style.header}>{english}</TableCell>
      <TableCell className={style.header}>{transcription}</TableCell>
      <TableCell className={style.header}>{russian}</TableCell>
      <TableCell className={style.header}>{tags}</TableCell>
      </> 
      }
      <TableCell align='right'> 
      {change && 
      <>
      <button className={style.save}>Сохранить</button>
      <button className={style.save} onClick={handelChangeState}>Отмена</button>
      </>}
      <button onClick={handelChangeState} className={style.pencil}></button>	
      <button className={style.trash}></button>	
      </TableCell>
    </TableBody>
    </>
	)
}
export default TableWords


