import styles from './CardOfWord.module.css'
import { useState } from 'react'

const CardOfWord = (props) => {
	const { english, transcription, russian } = props

	const [show , setShow] = useState(true)

	const handelShowState = () =>{
		setShow(!show)
	}

	return(
		<section className={styles.border}>
			<h2 className={styles.word}>{english}</h2>
			<p className={styles.transcription}>{transcription}</p>
			<span onClick={handelShowState}>{show ? <button className={styles.button}>Проверить</button>: <p className={styles.wordRu}>{russian}</p>}</span>
		</section>
	)
}
export default CardOfWord