import React from 'react'
import User from './User/User'
import styles from './Users.module.css'
import Pagination from '../Common/Pagination/Pagination'
import Preloader from '../Common/Preloaders/Preloader2/Preloader2'

function Users(props) {
	return (
		<div>
			<Pagination
				pageCount={props.pages.length}
				currentPage={+props.currentPage}
				changeCurrentPage={props.changeCurrentPage}
			/>
			{/* <div
				className={styles.pagesContainer}
				onClick={(e) => props.changeCurrentPage(+e.target.textContent)}
			>
				{props.pages.map((pageNumb) => (
					<NavLink
						to={`?page=${pageNumb}`}
						key={pageNumb}
						className={styles.page}
						activeClassName={styles.selectedPage}
						isActive={() => (props.currentPage === pageNumb ? true : false)}
					>
						{pageNumb}
					</NavLink>
				))}
			</div> */}
			{props.isFetching ? (
				<Preloader />
			) : (
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
			)}
			<Pagination
				pageCount={props.pages.length}
				currentPage={+props.currentPage}
				changeCurrentPage={props.changeCurrentPage}
			/>
		</div>
	)
}
export default Users
