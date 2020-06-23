import React from 'react'
import styles from './Post.module.css'

function Post(props) {
	return (
		<div className={styles.item}>
			<div>{props.message}</div>
			<img alt='post-img' src={props.imageUrl} />
		</div>
	)
}
export default Post
