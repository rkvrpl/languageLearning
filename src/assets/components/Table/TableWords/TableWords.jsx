import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import style from './TableWords.module.css'
import '../../../style/variables.css'

const TableWords = (props) =>{
const { english, transcription, russian, tags } = props

	return(
    <>
    <TableBody className={style.header}>
      <TableCell>{english}</TableCell>
      <TableCell>{transcription}</TableCell>
      <TableCell>{russian}</TableCell>
      <TableCell>{tags}</TableCell>
      <TableCell align='right'>
      <button className={style.pencil}></button>	
      <button className={style.trash}></button>	
      </TableCell>
    </TableBody>
    </>
	)
}
export default TableWords


