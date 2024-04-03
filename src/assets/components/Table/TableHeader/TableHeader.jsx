import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import '../../../style/variables.css'
import styles from './TableHeader.module.css'


const TableHeader = (props) =>{

	return(
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className={styles.header} sx={{ width: 200 }}>Английский</TableCell>
						<TableCell className={styles.header} sx={{ width: 200 }}>Транскрипция</TableCell>
						<TableCell className={styles.header} sx={{ width: 200 }}>Перевод</TableCell>
						<TableCell className={styles.header} sx={{ width: 200 }}>Тэг</TableCell>
						<TableCell className={styles.header} sx={{ width: 200 }}>Изменить / Удалить</TableCell>
					</TableRow>
				</TableHead>
				{props.childComponent}
			</Table>
		</TableContainer>
	)
}
export default TableHeader