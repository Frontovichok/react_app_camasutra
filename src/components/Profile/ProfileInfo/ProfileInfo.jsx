import React from 'react'
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {
	return (
		<div className={styles.profileInfo}>
			{/* <div>
				<img
					alt='panorama'
					src='https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
					className={styles.panoramaImage}
				></img>
			</div> */}
			<div className={styles.descriptionBlock}>
				<img
					alt='profile_image'
					src={
						!!props.profile.photos && !!props.profile.photos.large
							? props.profile.photos.large
							: 'https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png'
					}
					className={styles.avatarImage}
				/>
				<div>{props.profile.fullName}</div>
				<div>
					{props.profile.lookingForAJob ? ' looking a job' : ' just study'}
				</div>
			</div>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
		</div>
	)
}
export default ProfileInfo
