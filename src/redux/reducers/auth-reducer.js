import { authAPI } from '../../api/api'

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
	return (dispatch) => {
		authAPI.authMe().then((authData) => {
			if (authData.resultCode === 0) {
				let { id, email, login } = authData.data
				dispatch(setAuthUserData(id, email, login, true))
			}
		})
	}
}
export function login(email, password, rememberMe) {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe).then((response) => {
			if (response.resultCode === 0) {
				dispatch(getAuthUserData())
			}
		})
	}
}

export function logout() {
	return (dispatch) => {
		authAPI.logout().then((response) => {
			if (response.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}
		})
	}
}

export default authReducer
