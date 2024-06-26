import styles from './CardParent.module.css'
import { useState } from 'react'
import words from '../../../data/data.json'
import CardOfWord from '../CardOfWord'

const CardParent = (props) => {
	
	const [value, setValue] = useState(0)

	const handleSetValue = () =>{
		setValue(value + 1)
	}
	return(
		<div className={styles.parent}>
			<CardOfWord  words={words} handleSetValue={handleSetValue}/>
			<p className={styles.text}>Слов изучено: {value}</p>
		</div>
	)
}

export default CardParent