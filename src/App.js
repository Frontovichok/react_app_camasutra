import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import { Route, BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

function App(props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<NavBar />
				<div className='app-wrapper-content'>
					<Route
						path='/profile'
						render={() => (
							<Profile
								state={props.state.profilePage}
								dispatch={props.dispatch}
							/>
						)}
					/>
					<Route
						path='/messages'
						render={() => (
							<Messages
								state={props.state.messagesPage}
								dispatch={props.dispatch}
							/>
						)}
					/>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
