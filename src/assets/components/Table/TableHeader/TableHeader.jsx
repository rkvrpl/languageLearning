import '../../../style/variables.css'
import styles from './TableHeader.module.css'
import AddWord from '../../AddWords/AddWords'
import wordsStore from '../../../stores/WordsStores'
import { observer } from 'mobx-react'
import { useEffect } from 'react'


const TableHeader = observer((props) =>{
	const { fetchWords, addWord } = wordsStore

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
})
export default TableHeader
