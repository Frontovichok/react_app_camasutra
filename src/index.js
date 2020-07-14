import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/redux-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

setInterval(() => {
	store.dispatch({ type: 'FAKE-COUNT' })
	console.log('setInterval')
}, 1000)

console.log('index')
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
