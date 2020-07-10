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
			return { ...state, ...action.authData, isAuth: true }
		default:
			return state
	}
}

export function setAuthUserData({ id: userId, email, login }) {
	return { type: SET_AUTH_USER_DATA, authData: { userId, email, login } }
}

export function authMe() {
	return (dispatch) => {
		authAPI.authMe().then((authData) => {
			if (authData.resultCode === 0) {
				dispatch(setAuthUserData({ ...authData.data }))
			}
		})
	}
}

export default authReducer
