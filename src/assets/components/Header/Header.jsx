import style from './Header.module.css'

const Header = () =>{
	return(
		<header className={style.header}>
			<nav>
				<ul className={style.navigation}>
					<li>Главная</li>
					<li>Все слова</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header