import style from './Header.module.css'

const Header = () =>{
	return(
		<header className={style.header}>
			<nav>
				<ul className={style.navigation}>
					<li className={style.nav}>Главная</li>
					<li className={style.nav}>Все слова</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header