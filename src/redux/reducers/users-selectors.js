import { createSelector } from 'reselect'

export function getUsers(state) {
	return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsers, (users) =>
	users.filter((user) => true)
)
export function getUsersOnPage(state) {
	return state.usersPage.usersOnPage
}
export function getTotalUsersCount(state) {
	return state.usersPage.totalUsersCount
}
export function getCurrentPage(state) {
	return state.usersPage.currentPage
}
export function getIsFetching(state) {
	return state.usersPage.isFetching
}
export function getFollowingInProgress(state) {
	return state.usersPage.followingInProgress
}
