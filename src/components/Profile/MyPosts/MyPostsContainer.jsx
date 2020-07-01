import MyPosts from './MyPosts'
import { addPost } from '../../../redux/reducers/profile-reducer'
import { connect } from 'react-redux'

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
