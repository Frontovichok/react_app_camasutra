import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import {
	required,
	maxLengthCreator,
} from '../../../utils/validators/validators'
import { Textarea } from '../../Common/FormsControls/FormsControls'

const maxLength = maxLengthCreator(15)

function MyPosts(props) {
	let submit = (values) => {
		props.addPost(values.newPostBody)
	}

	let reversedPosts = [...props.posts].reverse()

	return (
		<div className={styles.postsBlock}>
			<h3>my posts</h3>
			<AddPostFormRedux onSubmit={submit} />
			<div className={styles.posts}>
				{reversedPosts.map((post) => (
					<Post key={post.id} message={post.message} imageUrl={post.imageUrl} />
				))}
			</div>
		</div>
	)
}

function AddPostForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				name='newPostBody'
				component={Textarea}
				validate={[required, maxLength]}
			/>
			<button>add post</button>
		</form>
	)
}

const AddPostFormRedux = reduxForm({ form: 'addPost' })(AddPostForm)

export default MyPosts
