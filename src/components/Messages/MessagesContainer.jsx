import Messages from './Messages.jsx'
import {
	updateNewMessageBodyActionCreator,
	sendMessageActionCreator,
} from '../../redux/reducers/messages-reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
	return { messagesPage: state.messagesPage }
}
function mapDispatchToPtops(dispatch) {
	return {
		sendMessage: (chatId) => {
			dispatch(sendMessageActionCreator(chatId))
		},
		changeMessageBody: (body) => {
			dispatch(updateNewMessageBodyActionCreator(body))
		},
	}
}

let withUrlDataContainerComponent = withRouter(Messages)

const MessagesContainer = connect(
	mapStateToProps,
	mapDispatchToPtops
)(withUrlDataContainerComponent)

export default MessagesContainer
