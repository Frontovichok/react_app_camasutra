import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
	getUserProfile,
	getStatus,
	updateStatus,
} from '../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
			? this.props.match.params.userId
			: 2
		this.props.getUserProfile(userId)
		console.log(userId)
		this.props.getStatus(userId)
	}
	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
	}
}
const dispatchers = {
	getUserProfile,
	getStatus,
	updateStatus,
}

export default compose(
	connect(mapStateToProps, dispatchers),
	withRouter
	// withAuthRedirect
)(ProfileContainer)
