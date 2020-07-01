import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.getUsers()
	}
	getUsers = () => {
		let userId = this.props.match.params.userId
			? this.props.match.params.userId
			: 2
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then((response) => {
				// this.props.toggleIsFetching(false)
				// this.props.setUsers(response.data.items)
				// this.props.setTotalUsersCount(response.data.totalCount)
				this.props.setUserProfile(response.data)
			})
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
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
	WithUrlDataContainerComponent
)
