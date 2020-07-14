import { usersAPI } from '../../api/api.js'

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
	users: [],
	usersOnPage: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
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
			return { ...state, users: [...action.users] }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			}
		default:
			return state
	}
}

export const toggleFollowSuccess = (userId) => ({
	type: TOGGLE_FOLLOW,
	userId: userId,
})
export const setUsers = (users) => ({
	type: SET_USERS,
	users: users,
})
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage: currentPage,
})
export const setTotalUsersCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount: totalUsersCount,
})
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching: isFetching,
})
export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_FOLLOWING_PROGRESS,
	isFetching: isFetching,
	userId: userId,
})

export const requestGetUsers = (page, usersOnPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(page))
		usersAPI.getUsers(page, usersOnPage).then((users) => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(users.items))
			dispatch(setTotalUsersCount(users.totalCount))
		})
	}
}
export const followToUser = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.followToUser(userId).then((data) => {
			if (data.resultCode === 0) {
				dispatch(toggleFollowSuccess(userId))
			}
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
}
export const unfollowFromUser = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.unfollowFromUser(userId).then((data) => {
			if (data.resultCode === 0) {
				dispatch(toggleFollowSuccess(userId))
			}
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
}
export default usersReducer
