import React from 'react'
import styles from './User.module.css'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

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
						console.log(props.followingInProgress.includes(userData.id))
						props.toggleFollowingProgress(true, userData.id)
						console.log(window.store.getState().usersPage)
						if (userData.followed) {
							axios
								.delete(
									`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`,
									{
										withCredentials: true,
										headers: {
											'API-KEY': '60825fb6-5434-42e8-8303-e52d102b3191',
										},
									}
								)
								.then((response) => {
									if (response.data.resultCode === 0) {
										props.toggleFollow(userData.id)
									}
									props.toggleFollowingProgress(false, userData.id)
								})
						} else {
							axios
								.post(
									`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`,
									{},
									{
										withCredentials: true,
										headers: {
											'API-KEY': '60825fb6-5434-42e8-8303-e52d102b3191',
										},
									}
								)
								.then((response) => {
									if (response.data.resultCode === 0) {
										props.toggleFollow(userData.id)
									}
									props.toggleFollowingProgress(false, userData.id)
								})
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

{
	/* <button
	onClick={() => props.toggleFollow(userData.id)}
	className={userData.followed ? styles.followed : ''}
>
	{userData.followed ? 'отписаться' : 'подписаться'}
</button> */
}
