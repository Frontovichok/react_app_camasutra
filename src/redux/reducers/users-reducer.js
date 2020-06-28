const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
	users: [],
}

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed }
					}
					return user
				}),
			}
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] }
		default:
			return state
	}
}

export const toggleFollowActionCreator = (userId) => {
	return {
		type: TOGGLE_FOLLOW,
		userId: userId,
	}
}
export const setUsersActionCreator = (users) => {
	return {
		type: SET_USERS,
		users: users,
	}
}

export default usersReducer
