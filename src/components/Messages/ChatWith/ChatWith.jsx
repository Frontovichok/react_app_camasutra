import React from 'react'
import styles from './ChatWith.module.css'
import { NavLink } from 'react-router-dom'

function ChatWith(props) {
	const path = '/messages/' + props.id
	return (
		<div className={styles.chat}>
			<img alt='img' src={props.avatarUrl} />
			<NavLink
				to={path}
				className={styles.chat}
				activeClassName={styles.active}
			>
				{props.name}
			</NavLink>
		</div>
	)
}

export default ChatWith
