import React from 'react'
import './App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import NavBar from './components/NavBar/NavBar'
import ProfileContainer from './components/Profile/ProfileContainer'
import { Route, BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	console.log('app')
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderComponent />
				<NavBar />
				<div className='app-wrapper-content'>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route
						path='/messages/:chatId?'
						render={() => <MessagesContainer />}
					/>
					<Route path='/users' render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
