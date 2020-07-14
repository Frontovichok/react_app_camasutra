import React from 'react'
import './App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import NavBar from './components/NavBar/NavBar'
import ProfileContainer from './components/Profile/ProfileContainer'
import { Route, withRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/reducers/app-reducer'
import { compose } from 'redux'
import Preloader from './components/Common/Preloaders/Preloader2/Preloader2'

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderComponent />
				<NavBar />
				<div className='app-wrapper-content'>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route
						path='/messages/:chatId?'
						render={() => <MessagesContainer />}
					/>
					<Route path='/users:page?' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <Login />} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { initialized: state.app.initialized }
}

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)
