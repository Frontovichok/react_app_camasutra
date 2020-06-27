import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	let newPostTextareaRef = React.createRef()

	let handleClick = () => {
		props.addPost(newPostTextareaRef.current.value)
	}

	let reversedPosts = [...props.posts].reverse()

	return (
		<div className={styles.postsBlock}>
			<h3>my posts</h3>
			<div>
				<textarea ref={newPostTextareaRef} />
				<button onClick={handleClick}>add post</button>
			</div>
			<div className={styles.posts}>
				{reversedPosts.map((post) => (
					<Post key={post.id} message={post.message} imageUrl={post.imageUrl} />
				))}
			</div>
		</div>
	)
}
export default MyPosts
