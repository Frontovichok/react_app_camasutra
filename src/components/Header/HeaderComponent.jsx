import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/reducers/auth-reducer'

class HeaderComponent extends React.Component {
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
	logout,
}
export default connect(mapStateToProps, dispatchers)(HeaderComponent)
