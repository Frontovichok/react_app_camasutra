import React from 'react'
import styles from './User.module.css'
import { NavLink } from 'react-router-dom'

function User(props) {
	let userData = props.userData
	return (
		<div className={styles.user}>
			<div className={styles.avatar_and_follow}>
				<NavLink
					to={`/profile/${props.userData.id}`}
					className={styles.image_link}
				>
					<img
						alt='avatar'
						src={
							userData.photos.large
								? userData.photos.large
								: 'https://avatarfiles.alphacoders.com/191/thumb-191938.jpg'
						}
					/>
				</NavLink>
				<button
					disabled={
						props.followingInProgress.includes(userData.id) ? true : false
					}
					onClick={() => {
						if (userData.followed) {
							props.unfollowFromUser(userData.id)
						} else {
							props.followToUser(userData.id)
						}
					}}
					className={userData.followed ? styles.followed : ''}
				>
					{userData.followed ? 'отписаться' : 'подписаться'}
				</button>
			</div>

			<span>{userData.fullName ? userData.fullName : userData.name}</span>
			<span>{userData.location ? userData.location.city : 'Moscow-'}</span>
			<span>{userData.location ? userData.country : 'Russia-'}</span>
			<span>{userData.status}</span>
		</div>
	)
}

export default User
