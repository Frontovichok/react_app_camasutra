import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/reducers/auth-reducer'

class HeaderComponent extends React.Component {
	getUsers = () => {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then((response) => {
				if (response.data.resultCode === 0) {
					this.props.setAuthUserData({ ...response.data.data })
				}
			})
	}
	componentDidMount() {
		this.getUsers()
	}
	render() {
		return <Header isAuth={this.props.isAuth} authData={this.props.authData} />
	}
}

function mapStateToProps(state) {
	return { isAuth: state.auth.isAuth, authData: state.auth }
}
let dispatchers = {
	setAuthUserData,
}
export default connect(mapStateToProps, { ...dispatchers })(HeaderComponent)
