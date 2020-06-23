import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
})

let store = createStore(reducers)

window.store = store
export default store
