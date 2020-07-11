import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../redux/reducers/auth-reducer'

class HeaderComponent extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData()
	}
	render() {
		return (
			<Header
				isAuth={this.props.isAuth}
				authData={this.props.authData}
				logout={this.props.logout}
			/>
		)
	}
}

function mapStateToProps(state) {
	return { isAuth: state.auth.isAuth, authData: state.auth }
}
let dispatchers = {
	getAuthUserData,
	logout,
}
export default connect(mapStateToProps, dispatchers)(HeaderComponent)
