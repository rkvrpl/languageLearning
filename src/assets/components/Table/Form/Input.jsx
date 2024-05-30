import style from './Input.module.css'


const Input = (props)=>{
	const { id, name, inputClass, type, onChange, onBlur, value, isInvalid } = props
	const errorMessage = 'Заполните верно поле, пожалуйста'

	return(
		<td className={style.container}>
			<input
			className={inputClass}
			type={type}
			name={name}
			id={id}
			form={id}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			/>
			{isInvalid && <p className={style.error}>{errorMessage}</p>}
		</td>
	)
}
export default Input