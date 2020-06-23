import React, { useEffect } from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator } from '../../../redux/reducers/profile-reducer'

function MyPosts(props) {
	let newPostTextareaRef = React.createRef()

	let getImageUrl = async () => {
		try {
			let response = await fetch(
				'https://source.unsplash.com/user/aaronburden/200x120',
				{
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
						'x-rapidapi-key':
							'a300223d4bmsh564329b20d00502p1ecc60jsn1d1c42f3c9a4',
					},
				}
			)
			return response.url
		} catch (err) {
			console.log('Error:' + err)
		}
	}

	let handleClick = () => {
		getImageUrl().then((imageUrl) => {
			props.dispatch(
				addPostActionCreator(newPostTextareaRef.current.value, imageUrl)
			)
		})
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
				{reversedPosts.map((post, i) => (
					<Post key={i} message={post.message} imageUrl={post.imageUrl} />
				))}
			</div>
		</div>
	)
}
export default MyPosts
