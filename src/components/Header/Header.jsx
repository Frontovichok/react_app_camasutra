import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header(props) {
	return (
		<header className={styles.header}>
			<img
				alt='logo'
				src='https://i.pinimg.com/originals/b1/85/9b/b1859bdac7d42d4a0a5a673bc4265564.png'
			/>
			<div className={styles.loginContainer}>
				{props.isAuth ? (
					<>
						<NavLink
							to={`/profile/${props.authData.userId}`}
							className={styles.userProfileLink}
						>
							{props.authData.login}
						</NavLink>
						<button
							onClick={() => {
								props.logout()
							}}
							className={styles.logoutBtn}
						>
							Выйти
						</button>
					</>
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</header>
	)
}
export default Header
