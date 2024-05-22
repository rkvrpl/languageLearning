import '../../../style/variables.css'
import styles from './TableHeader.module.css'
import AddWord from '../../AddWords/AddWords'



const TableHeader = (props) =>{

	return(
		<div className={styles.page}> 
		<AddWord />
		<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.header}>Английский</th>
						<th className={styles.header}>Транскрипция</th>
						<th className={styles.header}>Перевод</th>
						<th className={styles.header}>Тэг</th>
						<th className={styles.header}>Изменить / Удалить</th>
					</tr>
				</thead>
				{props.childComponent}
		</table>
		</div>

	)
}
export default TableHeader

// onSubmitInWordlist={handleAddWord} 