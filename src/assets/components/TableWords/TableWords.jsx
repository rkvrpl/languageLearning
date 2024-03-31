import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'

const TableWords = (props) =>{
const { english, transcription, russian, tags } = props

	return(
    <TableBody>
      <TableCell>{english}</TableCell>
      <TableCell>{transcription}</TableCell>
      <TableCell>{russian}</TableCell>
      <TableCell>{tags}</TableCell>
    </TableBody>
	)
}
export default TableWords


