
// import style from './TableWords.module.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

// function createData(english, transcription,russian, tags) {
//   return { english, transcription,russian, tags }
// }

const TableWords = (props) =>{

  const { english, transcription,russian, tags } = props

  // const rows = [
  //   createData(english, transcription, russian, tags),
  // ]
	return(
    <TableContainer component={Paper}>
      <Table>
      {/* <TableHead>
          <TableRow>
            <TableCell>Английский</TableCell>
            <TableCell>Транскрипция</TableCell>
            <TableCell>Перевод</TableCell>
            <TableCell>Тэг</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
              <TableCell>{english}</TableCell>
              <TableCell>{transcription}</TableCell>
              <TableCell>{russian}</TableCell>
              <TableCell>{tags}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
	)
}
export default TableWords


