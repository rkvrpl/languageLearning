


const Input = (props)=>{
	const { id, name, inputClass, inputChangeHandler, inputLostFocusHandler, isInputInvalid, errorMessage, styleError } = props

	return(
		<>
		<input className={inputClass} 
			type="text" 
			name={name}
			id={id}
			form={id}
			onChange={inputChangeHandler}
			onBlur={inputLostFocusHandler} />
			{isInputInvalid?
			<p className={styleError}>{errorMessage}</p>:
			<span></span>}
		</>
	)

}

export default Input