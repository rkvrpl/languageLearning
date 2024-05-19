import { useState } from 'react'
import style from './AddWords.module.css'

const AddWord = (props) => {
	const { onSubmitInWordlist } = props

	const [english, setEnglish] = useState('')
	const [transcription, setTranscription] = useState('')
	const [russian, setRussian] = useState('')

	const handleSubmit = (event) => {
	event.preventDefault()
	const newWord = { english, transcription, russian }
	onSubmitInWordlist(newWord)
	setEnglish('')
	setTranscription('')
	setRussian('')
	};

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
			type='text'
			value={english}
			onChange={(event) => setEnglish(event.target.value)}
			placeholder='Слово'
			/>
			<input
			type='text'
			value={transcription}
			onChange={(event) => setTranscription(event.target.value)}
			placeholder='Транскрипция'
			/>
			<input
			type='text'
			value={russian}
			onChange={(event) => setRussian(event.target.value)}
			placeholder='Перевод'
			/>
			<button type='submit'>Добавить</button>
		</form>
	);
};

export default AddWord