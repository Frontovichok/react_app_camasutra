import React from 'react'
import styles from './ChatWith.module.css'
import { NavLink } from 'react-router-dom'

function Chat(props) {
	const path = '/messages/' + props.id
	return (
		<div className={styles.chat}>
			<img alt='img' src={props.avatarUrl} />
			<NavLink to={path} className={styles.chat}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default Chat
