import style from './Form.module.css'
import '../../../style/variables.css'
import { useState } from 'react'

const Form = (props) => {
const { id, handelChangeState, handleUpdateWord } = props

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

const errorMessage = 'Заполните верно поле, пожалуйста'

const formSubmitHandler = (event) => {
	event.preventDefault()
	setWasInputTouch(true)
	console.log(input)
	if (!isEnteredInputValid) {
		console.log('error')
		return false;
	}
	setInput('')
	setWasInputTouch(false)
}

	return(
	<>
		<td>
			<form id={id} onSubmit={formSubmitHandler}>
			<input className={inputClass} 
			type="text" 
			name='english'
			id={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler} />
			{isInputInvalid?
			<p className={style.error}>{errorMessage}</p>:
			<span></span>}
			</form>
		</td>
		<td>
			<input className={inputClass} 
			type="text" 
			name='transcription' 
			id={id}
			form={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler} />
			{isInputInvalid?
			<p className={style.error}>{errorMessage}</p>:
			<span></span>}
		</td>
		<td>
			<input className={inputClass} 
			type="text" 
			name='russian'
			id={id}
			form={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler} />
			{isInputInvalid?
			<p className={style.error}>{errorMessage}</p>:
			<span></span>}
		</td>
		<td>
			<span></span>
		</td>
		<td align='right'>
			<button className={style.save} disabled={isInputInvalid} onClick={() => handleUpdateWord(input)}>Сохранить</button>
			<button className={style.save} onClick={handelChangeState}>Отмена</button>
	    </td>
	</> 
	)
}
export default Form

// исправить форму у каждого слова свой айди чтоб изменить


