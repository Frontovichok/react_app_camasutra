import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
	headers: {
		'API-KEY': '60825fb6-5434-42e8-8303-e52d102b3191',
	},
})

export const usersAPI = {
	getUsers(currentPage, usersOnPage) {
		return instance
			.get(`/users?page=${currentPage}&count=${usersOnPage}`)
			.then((response) => response.data)
	},
}