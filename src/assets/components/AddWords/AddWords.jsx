import { useState } from 'react'
import style from './AddWords.module.css'

const AddWord = (props) => {
	// const { onSubmitInWordlist } = props

	const [english, setEnglish] = useState('')
	const [transcription, setTranscription] = useState('')
	const [russian, setRussian] = useState('')

	const handleSubmit = (event) => {
	event.preventDefault()
	const newWord = { english, transcription, russian }
	// onSubmitInWordlist(newWord)
	setEnglish('')
	setTranscription('')
	setRussian('')
	};

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
			className={style.input}
			type='text'
			name='english'
			value={english}
			onChange={(event) => setEnglish(event.target.value)}
			placeholder='Слово'
			/>
			<input
			className={style.input}
			type='text'
			name='transcription'
			value={transcription}
			onChange={(event) => setTranscription(event.target.value)}
			placeholder='Транскрипция'
			/>
			<input
			className={style.input}
			type='text'
			name='russian'
			value={russian}
			onChange={(event) => setRussian(event.target.value)}
			placeholder='Перевод'
			/>
			<button className={style.save} type='submit'>Добавить</button>
		</form>
	);
};

export default AddWord