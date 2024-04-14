import styles from './CardOfWord.module.css'
import { useState } from 'react'

const CardOfWord = (props) => {
	const { words } = props
	
	const [show , setShow] = useState(true)
	const [next , setNext] = useState(0)

	const handelShowState = () =>{
		setShow(!show)
	}
	const handelNextState = () =>{
		// next<=words.length? 
		// setNext(next + 1):
		// setNext(next = 0)
		if(next <= words.length){
			setNext(next + 1)
			console.log(next)
			console.log(words.length)
		}
	}
	const handelBackState = () =>{

		setNext(next -1)
	}

	return(
		<div className={styles.block}>
		<button className={styles.arrow} onClick={handelBackState}>&lang;</button>
		<section className={styles.border}>
			<h2 className={styles.word}>{words[next].english}</h2>
			<p className={styles.transcription}>{words[next].transcription}</p>
			<span onClick={handelShowState}>{show ? <button className={styles.button}>Проверить</button>: <p className={styles.wordRu}>{words[next].russian}</p>}</span>
		</section>
		<button className={styles.arrow} onClick={handelNextState}> &rang;</button>
		</div>
	)
}
export default CardOfWord