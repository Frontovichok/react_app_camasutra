import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { authMe } from '../../redux/reducers/auth-reducer'

class HeaderComponent extends React.Component {
	componentDidMount() {
		this.props.authMe()
	}
	render() {
		return <Header isAuth={this.props.isAuth} authData={this.props.authData} />
	}
}

function mapStateToProps(state) {
	return { isAuth: state.auth.isAuth, authData: state.auth }
}
let dispatchers = {
	authMe,
}
export default connect(mapStateToProps, { ...dispatchers })(HeaderComponent)
