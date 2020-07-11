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
			: 9053
		this.props.getUserProfile(userId)
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
function mapDispatchToProps(dispatch) {
	return {
		getUserProfile: (userId) => dispatch(getUserProfile(userId)),
		getStatus: (userId) => dispatch(getStatus(userId)),
		updateStatus: (status) => dispatch(updateStatus(status)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
	// withAuthRedirect
)(ProfileContainer)
