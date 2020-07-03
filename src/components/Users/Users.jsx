import React from 'react'
import User from './User/User'
import styles from './Users.module.css'

function Users(props) {
	return (
		<div>
			<div
				className={styles.pagesContainer}
				onClick={(e) => props.changeCurrentPage(e)}
			>
				{props.pages.map((pageNumb) => (
					<button
						key={pageNumb}
						className={
							props.currentPage === pageNumb
								? `${styles.selectedPage} ${styles.page}`
								: styles.page
						}
					>
						{pageNumb}
					</button>
				))}
			</div>
			<div>
				{props.users.map((user) => (
					<User
						key={user.id}
						toggleFollow={props.toggleFollow}
						userData={user}
						followingInProgress={props.followingInProgress}
						toggleFollowingProgress={props.toggleFollowingProgress}
					/>
				))}
			</div>
		</div>
	)
}
export default Users
