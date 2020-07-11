import Messages from './Messages.jsx'
import { sendMessageActionCreator } from '../../redux/reducers/messages-reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../HOC/withAuthRedirect.js'
import { compose } from 'redux'

function mapStateToProps(state) {
	return { messagesPage: state.messagesPage }
}
function mapDispatchToPtops(dispatch) {
	return {
		sendMessage: (chatId, newMessageBody) => {
			dispatch(sendMessageActionCreator(chatId, newMessageBody))
		},
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToPtops),
	// withAuthRedirect,
	withRouter
)(Messages)
