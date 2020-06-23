import React from 'react'
import styles from './Profile.module.css'

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} dispatch={props.dispatch} />
		</div>
	)
}
export default Profile
