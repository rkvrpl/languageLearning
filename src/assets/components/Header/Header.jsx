import style from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = () =>{
	return(
		<header className={style.header}>
			<nav className={style.navigation}>
				<Link to='/' className={style.nav}>Главная</Link>
				<Link to='/game' className={style.nav}>Игра</Link>
			</nav>
		</header>
	)
}
export default Header