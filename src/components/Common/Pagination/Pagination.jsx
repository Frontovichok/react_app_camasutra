import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.css'
import { withRouter } from 'react-router'

function Pagination(props) {
	console.log(props)
	return (
		<div className={styles.paginationContainer}>
			<ReactPaginate
				previousLabel={'Назад'}
				nextLabel={'Вперед'}
				previousClassName={styles.previousPage}
				nextClassName={styles.nextPage}
				breakClassName={styles.breakPages}
				pageClassName={styles.page}
				pageLinkClassName={styles.pageLink}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				pageCount={props.pageCount}
				forcePage={props.currentPage - 1}
				activeClassName={styles.active}
				hrefBuilder={(page) => {
					return `/users?page=${page}`
				}}
				onPageChange={(page) => {
					props.history.push(`/users?page=${page.selected + 1}`)
					props.changeCurrentPage(page.selected + 1)
				}}
			/>
		</div>
	)
}

export default withRouter(Pagination)
