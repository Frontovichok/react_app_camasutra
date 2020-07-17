import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import appReducer from './reducers/app-reducer'
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware))
)

window.store = store
export default store
