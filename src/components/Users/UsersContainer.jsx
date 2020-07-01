import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
import {
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
} from '../../redux/reducers/users-reducer'
import Preloader from '../Common/Preloaders/Preloader2/Preloader2'

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.getUsers()
	}

	getUsers = (currentPage = this.props.currentPage) => {
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPage}`
			)
			.then((response) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	changeCurrentPage = (e) => {
		this.props.setCurrentPage(e.target.textContent)
		this.getUsers(e.target.textContent)
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
					getUsers={this.getUsers}
					pages={pages}
					totalUsersCount={this.props.totalUsersCount}
					usersOnPage={this.props.usersOnPage}
					currentPage={this.props.currentPage}
					users={this.props.users}
					toggleFollow={this.props.toggleFollow}
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
	}
}
let dispatchers = {
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
}
export default connect(mapStateToProps, { ...dispatchers })(UsersAPIComponent)
