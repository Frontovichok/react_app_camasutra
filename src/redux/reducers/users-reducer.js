const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
	users: [
		{
			id: 1,
			followed: false,
			fullName: 'Machtiev Djamal Labazanovich',
			status: 'very welll',
			location: { city: 'Moscow', country: 'Russia' },
			avatarUrl:
				'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
		},
		{
			id: 2,
			followed: false,
			fullName: 'Magomedov Magomed Ruslanovich',
			status: 'all is good',
			location: { city: 'Makhachkala', country: 'Russia' },
			avatarUrl:
				'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
		},
		{
			id: 3,
			followed: true,
			fullName: 'Dimych Ivan Sergeevich',
			status: 'all is good',
			location: { city: 'Voronej', country: 'Russia' },
			avatarUrl:
				'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
		},
	],
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
