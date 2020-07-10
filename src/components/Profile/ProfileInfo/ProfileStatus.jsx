import React from 'react'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
	state = { editMode: false, status: this.props.status }

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.state.status && !this.state.editMode) {
			this.setState({ status: this.props.status })
		}
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deactivateEditMode = () => {
		this.setState({ editMode: false })
		if (this.props.status !== this.state.status) {
			this.props.updateStatus(this.state.status)
		}
	}
	changeStatus = (e) => {
		this.setState({ status: e.target.value })
	}
	render() {
		return (
			<div>
				{this.state.editMode ? (
					<div>
						<input
							autoFocus={true}
							onBlur={this.deactivateEditMode}
							onChange={(e) => this.changeStatus(e)}
							value={this.state.status}
						/>
					</div>
				) : (
					<div className={styles.status_span_wrapper}>
						<span
							className={styles.status_span}
							onClick={this.activateEditMode}
						>
							{this.props.status || '--'}
						</span>
					</div>
				)}
			</div>
		)
	}
}

export default ProfileStatus
