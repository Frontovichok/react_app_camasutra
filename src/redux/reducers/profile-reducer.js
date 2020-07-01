const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
	posts: [
		{
			id: 1,
			message: 'GTR 1',
			imageUrl:
				'https://i.gaw.to/content/photos/34/21/342132_2018_Nissan_GT-R.jpg',
		},
		{
			id: 2,
			message: 'GTR 2',
			imageUrl:
				'https://im.kommersant.ru/Issues.photo/AUTO_News/2019/04/18/KMO_152985_04194_1_t218_181856.jpg',
		},
		{
			id: 3,
			message: 'GTR 3',
			imageUrl:
				'https://i.pinimg.com/736x/84/e0/18/84e01848b7be9785176197c4ceb5227a.jpg',
		},
		{
			id: 4,
			message: 'GTR 4',
			imageUrl:
				'https://im.kommersant.ru/Issues.photo/AUTO_News/2019/04/18/KMO_152985_04194_1_t218_181856.jpg',
		},
	],
	profile: {},
}

function profileReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				message: action.data.message,
				imageUrl: action.data.imageUrl,
			}
			return { ...state, posts: [...state.posts, newPost] }

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		default:
			return state
	}
}

export const addPost = (message, imageUrl) => {
	return {
		type: ADD_POST,
		data: { message: message, imageUrl: imageUrl },
	}
}
export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile: profile,
	}
}

export default profileReducer
