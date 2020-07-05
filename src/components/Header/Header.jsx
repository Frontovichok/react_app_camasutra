import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header(props) {
	return (
		<header className={styles.header}>
			<img
				alt='logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png'
			/>
			<div className={styles.loginContainer}>
				{props.isAuth === true ? (
					<NavLink to={`/profile/${props.authData.userId}`}>
						{props.authData.login}
					</NavLink>
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</header>
	)
}
export default Header
