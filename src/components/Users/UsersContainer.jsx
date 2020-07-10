import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {
	setCurrentPage,
	getUsers,
	followToUser,
	unfollowFromUser,
} from '../../redux/reducers/users-reducer'
import Preloader from '../Common/Preloaders/Preloader2/Preloader2'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		let currentPage
		let params = new URLSearchParams(this.props.location.search)
		if (params.has('page')) {
			this.props.setCurrentPage(params.get('page'))
			currentPage = params.get('page')
		} else {
			currentPage = this.props.currentPage
		}
		this.props.getUsers(currentPage, this.props.usersOnPage)
	}

	changeCurrentPage = (e) => {
		let pageNumber = e.target.textContent
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.usersOnPage)
	}

	render() {
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
	return {
		users: state.usersPage.users,
		usersOnPage: state.usersPage.usersOnPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}
let dispatchers = {
	setCurrentPage,
	getUsers,
	followToUser,
	unfollowFromUser,
}
export default compose(
	connect(mapStateToProps, { ...dispatchers }),
	withRouter
	// withAuthRedirect
)(UsersAPIComponent)
