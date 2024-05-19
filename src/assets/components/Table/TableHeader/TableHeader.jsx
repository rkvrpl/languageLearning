import '../../../style/variables.css'
import styles from './TableHeader.module.css'
import WordContext from '../../../Context/WordContext'
import { useContext, useEffect } from 'react'
import AddWord from '../AddWords/AddWords'


const TableHeader = (props) =>{
	const { addWord, fetchWords } =
    useContext(WordContext)

	useEffect(() => {
		fetchWords()
	}, [])

	const handleAddWord = (newWord) => {
		addWord(newWord)
	}

	return(
		<div className={styles.page}> 
		<AddWord onSubmitInWordlist={handleAddWord} />
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