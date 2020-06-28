import React from 'react'
import styles from './User.module.css'

function User(props) {
	console.log(props)
	let userData = props.userData
	return (
		<div className={styles.user}>
			<div className={styles.avatar_and_follow}>
				<img alt='avatar' src={userData.imageUrl} />
				<button onClick={() => props.toggleFollow(userData.id)}>
					{userData.followed === true ? 'отписаться' : 'подписаться'}
				</button>
			</div>

			<span>{userData.fullName}</span>
			<span>{userData.location.city}</span>
			<span>{userData.location.country}</span>
			<span>{userData.status}</span>
		</div>
	)
}

export default User
