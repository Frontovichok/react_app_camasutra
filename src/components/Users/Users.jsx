import React from 'react'
import User from './User/User'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom'

function Users(props) {
	return (
		<div>
			<div
				className={styles.pagesContainer}
				onClick={(e) => props.changeCurrentPage(e)}
			>
				{props.pages.map((pageNumb) => (
					<NavLink
						to={`?page=${pageNumb}`}
						key={pageNumb}
						className={styles.page}
						activeClassName={styles.selectedPage}
						isActive={() => (+props.currentPage === +pageNumb ? true : false)}
					>
						{pageNumb}
					</NavLink>
				))}
			</div>
			<div>
				{props.users.map((user) => (
					<User
						key={user.id}
						userData={user}
						followingInProgress={props.followingInProgress}
						followToUser={props.followToUser}
						unfollowFromUser={props.unfollowFromUser}
					/>
				))}
			</div>
		</div>
	)
}
export default Users
