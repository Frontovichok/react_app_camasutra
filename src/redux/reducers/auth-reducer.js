import { authAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
}

function authReducer(state = initialState, action) {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...action.payload }
		default:
			return state
	}
}

export function setAuthUserData(userId, email, login, isAuth) {
	return { type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } }
}

export function getAuthUserData() {
	return async (dispatch) => {
		let response = await authAPI.authMe()
		if (response.resultCode === 0) {
			let { id, email, login } = response.data
			dispatch(setAuthUserData(id, email, login, true))
		}
		return response
	}
}
export function login(email, password, rememberMe) {
	return async (dispatch) => {
		let response = await authAPI.login(email, password, rememberMe)

		if (response.resultCode === 0) {
			dispatch(getAuthUserData())
		} else if (response.resultCode === 1) {
			dispatch(
				stopSubmit('login', {
					_error: 'email or password is not correct',
				})
			)
		}
	}
}

export function logout() {
	return async (dispatch) => {
		let response = await authAPI.logout()
		if (response.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	}
}

export default authReducer
