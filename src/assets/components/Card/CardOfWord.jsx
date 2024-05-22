import styles from './CardOfWord.module.css'
import { useState, useEffect } from 'react'
import wordsStore from '../../stores/WordsStores'
import { observer } from 'mobx-react'

const CardOfWord = observer((props) => {
	const { handleSetValue } = props

	const [show, setShow] = useState(true)
	const [next, setNext] = useState(0)
	

	const { words } = wordsStore

	console.log(words)

	useEffect(() => {
		setShow(true)
	},[next])

	const handleShowState = () =>{
			setShow(!show)
	}
	const handleNextState = () =>{
		if(next < words.length - 1){
			setNext(next+ 1)
		}else {
		setNext(0)
		}
	}
	const handleBackState = () =>{
		if(next > 0){
			setNext(next -1)
		} else {
			setNext(words.length - 1)
		}
	}
	
	return(
		<section className={styles.block}>
			<button className={styles.arrow} onClick={handleBackState}>&lang;</button>
			<section className={styles.border}>
				<h2 className={styles.word}>{words[next].english}</h2>
				<p className={styles.transcription}>{words[next].transcription}</p>
				<span onClick={handleShowState}>
				{show ? 
				<button className={styles.button} onClick={handleSetValue}>Проверить</button>:
				<p className={styles.wordRu}>{words[next].russian}</p>}
				</span>
			</section>
			<button className={styles.arrow} onClick={handleNextState}> &rang;</button>
		</section>
	)
})
export default CardOfWord
