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
					Profile
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon className='discussions outline' />
				<NavLink to='/messages' activeClassName={styles.active}>
					Messages
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon className='users' />
				<NavLink exact to='/users' activeClassName={styles.active}>
					Users
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon name='newspaper outline' />
				<NavLink to='/news' activeClassName={styles.active}>
					News
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon name='music' />
				<NavLink to='/music' activeClassName={styles.active}>
					Music
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon name='cogs' />
				<NavLink to='/settings' activeClassName={styles.active}>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}
export default NavBar
