import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import { Route, BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<NavBar />
				<div className='app-wrapper-content'>
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/messages' render={() => <MessagesContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
