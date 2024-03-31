
// import style from './TableWords.module.css'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'


const TableWords = (props) =>{

	return(
		<TableContainer>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell>Английский</TableCell>
						<TableCell>Транскрипция</TableCell>
						<TableCell>Перевод</TableCell>
						<TableCell>Тэг</TableCell>
					</TableRow>
				</TableHead>
				{props.childComponent}
			</Table>	
		</TableContainer>
	)
}
export default TableWords