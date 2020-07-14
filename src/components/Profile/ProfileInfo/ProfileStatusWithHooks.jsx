import React, { useState, useEffect } from 'react'
import styles from './ProfileStatus.module.css'

function ProfileStatusWithHooks(props) {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		if (props.status !== status) {
			props.updateStatus(status)
		}
	}
	const keyPress = (e) => {
		if (e.keyCode === 13) {
			deactivateEditMode()
		}
	}

	return (
		<div>
			{!editMode ? (
				<div className={styles.status_span_wrapper}>
					<span className={styles.status_span} onClick={activateEditMode}>
						{props.status || '-status-'}
					</span>
				</div>
			) : (
				<div>
					<input
						autoFocus={true}
						onBlur={deactivateEditMode}
						onChange={(e) => setStatus(e.target.value)}
						onKeyDown={keyPress}
						value={status}
					/>
				</div>
			)}
		</div>
	)
}

export default ProfileStatusWithHooks
