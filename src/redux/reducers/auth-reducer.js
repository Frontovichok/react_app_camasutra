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
			return { ...state, ...action.authData, isAuth: true }
		default:
			return state
	}
}

export function setAuthUserData({ id: userId, email, login }) {
	return { type: SET_AUTH_USER_DATA, authData: { userId, email, login } }
}

export default authReducer
