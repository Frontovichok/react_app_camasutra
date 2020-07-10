import MyPosts from './MyPosts'
import { addPost } from '../../../redux/reducers/profile-reducer'
import { connect } from 'react-redux'
import * as axios from 'axios'

function getImageUrl() {
	return axios
		.get('https://source.unsplash.com/collection/190727/200x120', {
			responseType: 'json',
		})
		.then((response) => {
			return response.request.responseURL
		})
}

function mapStateToProps(state) {
	return { posts: state.profilePage.posts }
}
function mapDispatchToPtops(dispatch) {
	return {
		addPost: (text) => {
			getImageUrl().then((imageUrl) => {
				dispatch(addPost(text, imageUrl))
			})
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToPtops)(MyPosts)

export default MyPostsContainer
