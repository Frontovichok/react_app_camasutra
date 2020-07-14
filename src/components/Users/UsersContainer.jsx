import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {
	setCurrentPage,
	requestGetUsers,
	followToUser,
	unfollowFromUser,
} from '../../redux/reducers/users-reducer'
import Preloader from '../Common/Preloaders/Preloader2/Preloader2'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'
import {
	getUsers,
	getUsersOnPage,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress,
	getUsersSuperSelector,
} from '../../redux/reducers/users-selectors'

class UsersContainer extends React.Component {
	componentDidMount() {
		let currentPage
		let params = new URLSearchParams(this.props.location.search)
		if (params.has('page')) {
			this.props.setCurrentPage(params.get('page'))
			currentPage = params.get('page')
		} else {
			currentPage = this.props.currentPage
		}
		this.props.requestGetUsers(currentPage, this.props.usersOnPage)
	}

	changeCurrentPage = (e) => {
		let pageNumber = e.target.textContent
		this.props.requestGetUsers(pageNumber, this.props.usersOnPage)
	}

	render() {
		console.log('render')
		let pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.usersOnPage
		)
		let pages = []
		for (let i = 0; i < pagesCount; i++) {
			pages.push(i + 1)
		}
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					changeCurrentPage={this.changeCurrentPage}
					pages={pages}
					totalUsersCount={this.props.totalUsersCount}
					usersOnPage={this.props.usersOnPage}
					currentPage={this.props.currentPage}
					users={this.props.users}
					followingInProgress={this.props.followingInProgress}
					followToUser={this.props.followToUser}
					unfollowFromUser={this.props.unfollowFromUser}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps')
	return {
		users: getUsersSuperSelector(state),
		usersOnPage: getUsersOnPage(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}
let dispatchers = {
	setCurrentPage,
	requestGetUsers,
	followToUser,
	unfollowFromUser,
}
export default compose(
	connect(mapStateToProps, { ...dispatchers }),
	withRouter
	// withAuthRedirect
)(UsersContainer)
