import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '60825fb6-5434-42e8-8303-e52d102b3191',
	},
})

export const usersAPI = {
	getUsers(currentPage, usersOnPage) {
		return instance
			.get(`users?page=${currentPage}&count=${usersOnPage}`)
			.then((response) => response.data)
	},
	followToUser(userId) {
		return instance.post(`follow/${userId}`).then((response) => response.data)
	},
	unfollowFromUser(userId) {
		return instance.delete(`follow/${userId}`).then((response) => response.data)
	},
}
export const profileAPI = {
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data)
	},
	getStatus(userId) {
		return instance.get('profile/status/' + userId)
	},
	updateStatus(status) {
		return instance.put('profile/status', { status: status })
	},
}
export const authAPI = {
	authMe() {
		return instance.get('auth/me').then((response) => response.data)
	},
}
