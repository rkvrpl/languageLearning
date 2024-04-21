import style from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () =>{
	return(
		<div className={style.container}>
			<h1 className={style.error}>404</h1>
			<p className={style.text}>Страница, которую вы ищете, не найдена</p>
			<Link to='/' className={style.back}>Вернуться на главную</Link>
		</div>
	)
}
export default ErrorPage