import { getAuthUserData } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let initialState = {
	initialized: false,
}

function appReducer(state = initialState, action) {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true }
		default:
			return state
	}
}

export function initializedSuccess() {
	return { type: INITIALIZED_SUCCESS }
}

export function initializeApp() {
	return (dispatch) => {
		let promise = dispatch(getAuthUserData())
		promise.then(() => {
			dispatch(initializedSuccess())
		})
	}
}

export default appReducer
