import React from 'react'
import styles from './User.module.css'

function User(props) {
	return <div className={styles.user}>{props.fullName}</div>
}

export default User
