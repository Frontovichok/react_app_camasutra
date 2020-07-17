import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

function NavBar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<Icon name='user outline' />
				<NavLink to='/profile' activeClassName={styles.active}>
					Профиль
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon className='discussions outline' />
				<NavLink to='/messages' activeClassName={styles.active}>
					Сообщения
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon className='users' />
				<NavLink exact to='/users' activeClassName={styles.active}>
					Пользователи
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon name='newspaper outline' />
				<NavLink to='/news' activeClassName={styles.active}>
					Новости
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon name='music' />
				<NavLink to='/music' activeClassName={styles.active}>
					Музыка
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon name='cogs' />
				<NavLink to='/settings' activeClassName={styles.active}>
					Настройки
				</NavLink>
			</div>
		</nav>
	)
}
export default NavBar
