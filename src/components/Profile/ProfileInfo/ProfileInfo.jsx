import React from 'react'
import styles from './ProfileInfo.module.css'

function ProfileInfo() {
	return (
		<div className={styles.profileInfo}>
			<div>
				<img
					alt='panorama'
					src='https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
				></img>
			</div>
			<div className={styles.descriptionBlock}>avia + description</div>
		</div>
	)
}
export default ProfileInfo
