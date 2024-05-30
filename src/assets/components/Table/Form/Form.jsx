import style from './Form.module.css'
import '../../../style/variables.css'
import { useState, useEffect } from 'react'
import Input from './Input'

const Form = (props) => {
	const { id, handelChangeState, handleUpdateWord, currentValues } = props

	const fields = ['english', 'transcription', 'russian', 'tags']

	const [inputValues, setInputValues] = useState({id,...currentValues})
	const [errors, setErrors] = useState({})
	
	const handleInputChange = (field, value) => {
	setInputValues(prev => ({ ...prev, [field]: value }))
	setErrors(prev => ({ ...prev, [field]: value.trim() === '' }))
	};
	
	useEffect(() => {
		console.log(inputValues)
	}, [inputValues])
	
	const validateInputs = () => {
		const newErrors = {}
		fields.forEach(field => {
			if (inputValues[field].trim() === '') {
			newErrors[field] = true
			}
		})
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}
	
	const onSave = () => {
		if (validateInputs()) {
		handleUpdateWord(inputValues)
		}
	}

	return(
	<>
		{fields.map(field => (
		<Input
		id={id}
		name={field}
		type='text'
		value={inputValues[field]}
		onChange={(e) => handleInputChange(field, e.target.value)}
		isInvalid={errors[field]}
		/>
		))}
		<td align='right'>
			<button className={style.save} onClick={onSave}>Сохранить</button>
			<button className={style.save} onClick={handelChangeState}>Отмена</button>
	    </td> 
	</> 
	)
}
export default Form
