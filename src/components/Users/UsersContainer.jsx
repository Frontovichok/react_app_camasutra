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
		setUsers: () => dispatch(setUsersActionCreator()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
