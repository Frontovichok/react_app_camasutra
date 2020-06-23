import React from 'react'
import styles from './Header.module.css'

function Header() {
	return (
		<header className={styles.header}>
			<img
				alt='logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png'
			/>
		</header>
	)
}
export default Header
