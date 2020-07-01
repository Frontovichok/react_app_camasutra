import React from 'react'
import styles from './Preloader2.module.css'

function Preloader() {
	return (
		<div className={styles.loadingio_spinner_wedges}>
			<div className={styles.preloader2}>
				<div>
					<div>
						<div></div>
					</div>
					<div>
						<div></div>
					</div>
					<div>
						<div></div>
					</div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Preloader
