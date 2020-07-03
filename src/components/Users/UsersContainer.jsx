import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress,
} from '../../redux/reducers/users-reducer'
import Preloader from '../Common/Preloaders/Preloader2/Preloader2'
import { usersAPI } from '../../api/api.js'

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersAPI
			.getUsers(this.props.currentPage, this.props.usersOnPage)
			.then((users) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(users.items)
				this.props.setTotalUsersCount(users.totalCount)
			})
	}

	changeCurrentPage = (e) => {
		this.props.setCurrentPage(e.target.textContent)
		this.props.toggleIsFetching(true)
		usersAPI
			.getUsers(e.target.textContent, this.props.usersOnPage)
			.then((users) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(users.items)
				this.props.setTotalUsersCount(users.totalCount)
			})
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
					toggleFollow={this.props.toggleFollow}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
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
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress,
}
export default connect(mapStateToProps, { ...dispatchers })(UsersAPIComponent)
