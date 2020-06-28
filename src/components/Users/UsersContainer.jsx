import { connect } from 'react-redux'
import {
	toggleFollowActionCreator,
	setUsersActionCreator,
} from '../../redux/reducers/users-reducer'
import Users from './Users'

function mapStateToProps(state) {
	return { users: state.usersPage.users }
}
function mapDispatchToProps(dispatch) {
	return {
		toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
		setUsers: (users) => dispatch(setUsersActionCreator(users)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
