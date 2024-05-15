import TableCell from '@mui/material/TableCell'
import style from './Form.module.css'
import '../../../style/variables.css'
import { useState } from 'react'

const Form = (props) => {
const { english, transcription, russian, tags, id } = props


const [input, setInput] = useState('')
const [wasInputTouch, setWasInputTouch] = useState(false)

const inputChangeHandler = (event) => {
    setInput(event.target.value)
}
const isEnteredInputValid = input.trim() !== ''
const isInputInvalid = !isEnteredInputValid && wasInputTouch

const inputLostFocusHandler = () => {
    setWasInputTouch(true)
}
let isFormValid = false

if (isEnteredInputValid) {
	isFormValid = true
}
const inputClass = isInputInvalid
    ? style.input + ' ' + style.invalid
    : style.input

const formSubmitHandler = (event) => {
	event.preventDefault()
	setWasInputTouch(true)
	console.log('input')
	if (!isEnteredInputValid) {
		console.log('error')
		return false;
	}
	setInput('')
	setWasInputTouch(false)
}

	return(
	<>
		<TableCell>
			<input className={inputClass} 
			type="text" 
			name={english} 
			id={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler}
			value={input} />
		</TableCell>
		<TableCell>
			<input className={inputClass} 
			type="text" 
			name={transcription} 
			id={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler}
			value={input} />
		</TableCell>
		<TableCell>
			<input className={inputClass} 
			type="text" 
			name={russian} 
			id={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler}
			value={input} />
		</TableCell>
		<TableCell>
			<input className={inputClass} 
			type="text" 
			name={tags} 
			id={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler}
			value={input} />
		</TableCell>
	</> 
	)
}
export default Form


